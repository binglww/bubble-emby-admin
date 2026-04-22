<div align="center">
  <h1>Bubble Emby Admin</h1>
  <p>面向 Emby 管理场景的后台系统</p>
</div>

<p align="center">
  <a href="#intro"><img src="https://img.shields.io/badge/Intro-%E4%BB%8B%E7%BB%8D-2563eb?style=for-the-badge" alt="介绍" /></a>
  <a href="#image"><img src="https://img.shields.io/badge/Image-%E9%95%9C%E5%83%8F%E4%BF%A1%E6%81%AF-7c3aed?style=for-the-badge" alt="镜像" /></a>
  <a href="#docs"><img src="https://img.shields.io/badge/Docs-%E6%96%87%E6%A1%A3-0f766e?style=for-the-badge" alt="文档" /></a>
  <a href="#deploy"><img src="https://img.shields.io/badge/Deploy-%E9%83%A8%E7%BD%B2%E6%96%B9%E5%BC%8F-ea580c?style=for-the-badge" alt="部署方式" /></a>
  <a href="#install"><img src="https://img.shields.io/badge/Install-%E5%AE%89%E8%A3%85-0891b2?style=for-the-badge" alt="安装" /></a>
  <a href="#upgrade"><img src="https://img.shields.io/badge/Upgrade-%E5%8D%87%E7%BA%A7-4f46e5?style=for-the-badge" alt="升级" /></a>
  <a href="#changelog"><img src="https://img.shields.io/badge/Changelog-%E6%9B%B4%E6%96%B0%E6%97%A5%E5%BF%97-475569?style=for-the-badge" alt="更新日志" /></a>
</p>

<a id="intro"></a>
## ✨ 介绍

- 👥 用户管理能力
  - 同步用户
  - 单用户启用 / 禁用
  - 批量续费
  - 批量删除
  - 批量禁用
  - 白名单启用与关闭

- 🙋 用户中心
  - 会员信息
  - 上次活动
  - 最近 30 天观看时长
  - 设备 / IP
  - 服务器线路
  - 本地优先登录，Emby 兜底激活
  - 本地密码与 Emby 密码同步修改
  - 过期 / 禁用账号仍可进入自助入口续费、改密和查看信息
  - 卡密续费

- 🎬 求片系统
  - 电影求片
  - 整剧求片
  - 单季求片
  - 热门推荐与搜索
  - 我的求片
  - 用户求片次数限制
  - MoviePilot 推送
  - 自动检测入库
  - Emby Webhook 实时闭环

- 🎫 卡密系统
  - 支持自定义天数卡密
  - 注册卡密
  - 续费卡密

- 📝 注册能力
  - 公开注册
  - 限时注册
  - 限量注册
  - 邀请码注册
  - 注册赠送时长配置

- 📢 公告系统
  - 普通公告
  - 重要公告

- 🤖 Telegram 集成
  - Telegram Mini App 用户入口
  - Telegram 登录与账号绑定
  - Telegram HTTP 代理
  - 用户续费与求片入口
  - 强制关注群与群组配置

- 🧑‍💼 管理员能力
  - 多管理员增删改查
  - 安装创建的管理员保护
  - 管理员 Telegram 绑定
  - 管理员 Telegram 指令

- 🔔 通知中心
  - 管理员通知与用户通知分离处理
  - 管理员个人通知接收偏好
  - Telegram 管理员通知
  - 用户通知独立投递

- 📋 运行维护
  - 运行日志页面
  - 后台任务与系统任务
  - 更新记录与版本升级

- ⚙️ 系统配置
  - Emby 服务配置
  - Emby Webhook 配置
  - 账号策略
  - 客户端黑名单
  - 站点名称配置
  - 登录提示配置
  - 注册规则配置
  - 兑换规则配置
  - 求片设置
  - 版本更新检查

- 🌐 线路管理
  - 独立线路管理页面
  - 线路显示控制
  - 白名单线路控制
  - 前台线路下发

- 📺 播放统计
  - 用户详情播放统计
  - 全站播放统计
  - Emby 实时会话
  - 热门内容排行
  - 设备分析与客户端分布
  - 基础风控与用户画像

<a id="docs"></a>
## 📚 文档

- [完整文档](docs/index.md)
- [安装指南](docs/guide/install.md)
- [登录入口](docs/guide/login-entry.md)
- [系统配置](docs/guide/system-settings.md)
- [FAQ](docs/guide/faq.md)
- [更新记录](docs/guide/changelog.md)

<a id="image"></a>
## 📦 镜像信息

- 镜像地址：[bubbleemby/bubble-emby-admin:latest](https://hub.docker.com/r/bubbleemby/bubble-emby-admin)
- 默认端口：`8668`
- 容器内配置路径：`/app/configs/config.yaml`
- 默认时区：`Asia/Shanghai`

<a id="deploy"></a>
## 🚀 部署方式

项目提供两种 Compose 文件，分别对应不同的数据库使用场景。

### 方式一：使用内置 MySQL

适用于没有现成数据库，希望直接启动完整环境的场景。

使用文件：`docker-compose.mysql.yml`

启动前请先修改 [docker-compose.mysql.yml](docker-compose.mysql.yml) 里的 `MYSQL_ROOT_PASSWORD`，默认值 `change-me` 仅用于演示，不建议直接使用。

```bash
docker compose -f docker-compose.mysql.yml up -d
```

访问地址：

```text
http://服务器IP:8668
```

### 方式二：使用外部 MySQL

适用于已有数据库实例，希望只部署应用容器的场景。

使用文件：`docker-compose.yml`

```bash
docker compose -f docker-compose.yml up -d
```

访问地址：

```text
http://服务器IP:8668
```

首次安装时，请在安装页面填写实际数据库连接信息。

推荐填写方式：

- 使用 `docker-compose.mysql.yml` 内置 MySQL：数据库地址填 `mysql`，端口填 `3306`
- 使用外部 MySQL 且数据库就在宿主机：优先填 `host.docker.internal`
- 数据库部署在独立服务器：填写数据库服务器 IP 或域名
- 数据库部署在同一 Docker 网络中的其他容器：填写对应服务名或容器名

注意：

- Docker 部署时不建议直接填写 `127.0.0.1`，容器内的 `127.0.0.1` 指向的是应用容器自己，不是宿主机数据库
- 安装程序会尝试创建数据库并执行迁移，数据库账号需要具备创建数据库和建表权限

<a id="install"></a>
## 🔧 安装

首次启动后，应用日志会输出访问地址和一次性安装 Key。可通过以下命令查看：

```bash
docker logs -f bubble-emby-admin
```

日志示例：

```text
访问地址: http://127.0.0.1:8668
一次性安装 Key: abc123
```

打开 `http://服务器IP:8668/install` 进入安装页。

安装页中的 `一次性安装 Key` 只填写 Key 后面的字符串。例如日志显示 `一次性安装 Key: abc123`，这里只填写 `abc123`，不要复制 `一次性安装 Key:` 前缀。

安装页还需要填写数据库信息、首个管理员账号和 `站点地址`。`站点地址` 默认取当前浏览器访问来源，用于生成 Emby Webhook 等外部回调地址；内网部署时建议填写 Emby、Webhook 或其他设备可访问的地址，例如 `http://192.168.1.10:8668`。

安装提交后，系统会创建数据库、执行迁移、初始化首个管理员、写入 `/app/configs/config.yaml`，并尝试直接启用服务。如果页面提示服务未就绪，先刷新状态；长时间未就绪时重启后端容器。

安装完成后，后台管理地址为 `http://服务器IP:8668/admin/login`。


<a id="upgrade"></a>
## ⬆️ 升级

拉取新镜像后，重新创建容器即可完成升级：

```bash
docker pull bubbleemby/bubble-emby-admin:latest
docker compose -f docker-compose.mysql.yml up -d
```

如果当前使用的是外部数据库版本，请将命令中的 Compose 文件替换为 `docker-compose.yml`。

<a id="changelog"></a>
## 📝 更新日志

详细变更记录见：[更新记录](docs/guide/changelog.md)
