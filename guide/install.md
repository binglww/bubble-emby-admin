# 安装

## Docker 文件

### `docker-compose.yml`

该文件只启动应用容器，适合已经具备 MySQL 服务的环境。

- 对外端口为 `8668`
- 挂载目录为 `./docker-data/configs` 和 `./docker-data/data`
- 应用会从 `/app/configs/config.yaml` 读取配置

GitHub 文件地址：

https://github.com/binglww/bubble-emby-admin/blob/master/docker-compose.yml

<details>
<summary>查看 <code>docker-compose.yml</code> 内容</summary>

```yaml
name: bubble-emby-admin

services:
  app:
    image: bubbleemby/bubble-emby-admin:latest
    container_name: bubble-emby-admin
    restart: unless-stopped
    ports:
      - "8668:8668"
    environment:
      TZ: Asia/Shanghai
      CONFIG: /app/configs/config.yaml
    volumes:
      - ./docker-data/configs:/app/configs
      - ./docker-data/data:/app/data
```

</details>

### `docker-compose.mysql.yml`

该文件同时启动应用容器和 MySQL 8.0，适合首次部署或独立运行。

- 应用端口同样为 `8668`
- MySQL 服务名为 `mysql`
- 默认数据库名称为 `bubble_emby_admin`
- 默认数据库账号为 `root`
- 默认数据库密码为 `change-me`

首次使用前，建议先修改 `MYSQL_ROOT_PASSWORD`，不要直接使用默认密码 `change-me`。

`docker-compose.mysql.yml` 文件可在 GitHub 查看：

https://github.com/binglww/bubble-emby-admin/blob/master/docker-compose.mysql.yml

<details>
<summary>查看 <code>docker-compose.mysql.yml</code> 内容</summary>

```yaml
name: bubble-emby-admin

services:
  app:
    image: bubbleemby/bubble-emby-admin:latest
    container_name: bubble-emby-admin
    restart: unless-stopped
    depends_on:
      mysql:
        condition: service_healthy
    ports:
      - "8668:8668"
    environment:
      TZ: Asia/Shanghai
      CONFIG: /app/configs/config.yaml
    volumes:
      - ./docker-data/configs:/app/configs
      - ./docker-data/data:/app/data

  mysql:
    image: mysql:8.0
    container_name: bubble-emby-admin-mysql
    restart: unless-stopped
    command:
      - --character-set-server=utf8mb4
      - --collation-server=utf8mb4_unicode_ci
    environment:
      TZ: Asia/Shanghai
      MYSQL_ROOT_PASSWORD: change-me
      MYSQL_DATABASE: bubble_emby_admin
    expose:
      - "3306"
    volumes:
      - bubble-emby-admin-mysql-data:/var/lib/mysql
    healthcheck:
      test: ["CMD-SHELL", "mysqladmin ping -h 127.0.0.1 -uroot -p$$MYSQL_ROOT_PASSWORD --silent"]
      interval: 10s
      timeout: 5s
      retries: 20
      start_period: 20s

volumes:
  bubble-emby-admin-mysql-data:
```

</details>

## 启动服务

使用外部 MySQL 时，执行：

```bash
docker compose up -d
```

使用内置 MySQL 时，执行：

```bash
docker compose -f docker-compose.mysql.yml up -d
```

启动完成后，浏览器访问 `http://服务器地址:8668/install`。

后端启动日志中的访问地址固定按本机监听端口输出，例如 `http://127.0.0.1:8668`。如果你从其他设备访问，请把地址换成服务器实际 IP、域名或反向代理地址。

## 一次性安装 Key

首次启动且系统未完成安装时，后端会生成一次性安装 Key，并写入配置目录下的 `.install_token` 文件。安装页中的 `一次性安装 Key` 字段需要填写该值。

常见查看方式：

```bash
docker logs -f bubble-emby-admin
```

或：

```bash
docker compose logs -f app
```

日志示例：

```text
访问地址: http://127.0.0.1:8668
一次性安装 Key: abc123
```

安装页只填写 Key 后面的字符串。例如日志显示 `一次性安装 Key: abc123`，这里只填写 `abc123`，不要填写 `一次性安装 Key:` 前缀。

安装提交时，前端会把该值作为安装令牌发送给后端。安装完成后，后端会删除该 Key；它不用于后续登录，也不是管理员密码。

## 安装页字段

安装页会提交数据库信息、站点地址和首个管理员账号。后端收到后会按顺序执行：

1. 校验一次性安装 Key。
2. 校验数据库地址、端口、账号和数据库名称。
3. 连接 MySQL 服务，并在数据库不存在时创建数据库。
4. 执行数据表迁移。
5. 创建首个管理员账号。
6. 生成 JWT 密钥并保存到 `/app/configs/config.yaml`。
7. 把 `站点地址` 写入系统配置。
8. 尝试在当前进程内启用服务。

如果安装接口返回“安装成功，但自动初始化失败”，说明配置和数据库已经写入，但当前进程未能完成运行时初始化。此时重启后端容器或进程即可让服务按新配置启动。

### 站点地址

`站点地址` 用于生成 Emby Webhook 等外部回调地址。安装页默认使用当前浏览器访问来源，也就是打开安装页时浏览器地址栏中的协议、域名和端口。

如果系统部署在内网，建议填入 Emby、Webhook 或其他设备可访问的内网地址，例如：

```text
http://192.168.1.10:8668
```

后端只接受 `http` 或 `https` 的站点根地址，不能包含路径、账号信息、查询参数或片段。例如：

- 正确：`http://192.168.1.10:8668`
- 正确：`https://emby-admin.example.com`
- 错误：`https://emby-admin.example.com/admin`
- 错误：`https://user:pass@emby-admin.example.com`

保存时会自动去掉末尾的 `/`。如果留空，系统不会写入固定站点地址，后续展示回调地址时会按当前浏览器访问地址回退。

如果后续需要调整，可在后台 `配置中心` -> `基础` 的 `站点地址` 中修改。

### 数据库参数

安装页包含以下数据库字段：

- `数据库地址`
- `数据库端口`
- `数据库账号`
- `数据库密码`
- `数据库名称`

其中 `数据库密码` 可以为空；其他字段不能为空。安装程序会尝试创建数据库并执行迁移，因此数据库账号需要具备连接 MySQL、创建数据库和建表权限。

使用 `docker-compose.mysql.yml` 时，推荐填写：

- `数据库地址`：`mysql`
- `数据库端口`：`3306`
- `数据库账号`：`root`
- `数据库密码`：`change-me`
- `数据库名称`：`bubble_emby_admin`

不同部署方式下，`数据库地址` 建议按下面填写：

- 使用 `docker-compose.mysql.yml` 内置 MySQL：填写 `mysql`，端口填写 `3306`
- 使用外部 MySQL，且数据库就在当前主机：优先填写 `host.docker.internal`
- 数据库部署在独立服务器：填写数据库服务器的 IP 或域名
- 数据库部署在同一个 Docker 网络中的其他容器：填写对应服务名或容器名称

注意：

- Docker 部署时，不建议直接填写 `127.0.0.1`
- 容器内部的 `127.0.0.1` 指向的是应用容器本身，不是宿主机上的数据库服务
- 如果后端不是运行在 Docker 容器内，而是直接在宿主机运行，可以按实际 MySQL 监听地址填写 `127.0.0.1`

### 管理员账号

安装页还需要填写首个管理员账号：

- `管理员账号`
- `管理员密码`
- `确认管理员密码`

管理员密码长度不能少于 6 位。

安装完成后，页面会继续检查服务是否已就绪。服务就绪后，管理员从 `/admin/login` 进入系统。

首次安装页不会配置 Emby 地址和 API Key。进入后台后，请到 `配置中心` -> `Emby` 配置 Emby 服务；如果 Emby 中已经有历史用户，再到 `用户管理` 手动执行一次 `同步用户`。
