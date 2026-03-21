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

## 安装口令

首次启动后，后端日志会输出一次性安装口令。安装页中的 `一次性安装口令` 字段需要填写该值。

常见查看方式：

```bash
docker logs -f bubble-emby-admin
```

或：

```bash
docker compose logs -f app
```

安装完成后，该口令不再用于后续登录。

## 安装页字段

### 数据库参数

安装页包含以下数据库字段：

- `数据库地址`
- `数据库端口`
- `数据库账号`
- `数据库密码`
- `数据库名称`

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

- 不建议直接填写 `127.0.0.1`
- 容器内部的 `127.0.0.1` 指向的是应用容器本身，不是宿主机上的数据库服务

### 管理员账号

安装页还需要填写首个管理员账号：

- `管理员账号`
- `管理员密码`
- `确认管理员密码`

管理员密码长度不能少于 6 位。

后台服务就绪后，管理员从 `/admin/login` 进入系统。
