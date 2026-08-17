<div align="center">
  <img src="https://raw.githubusercontent.com/binglww/bubble-emby-admin/refs/heads/master/public/logo.jpg" alt="Bubble Emby Admin Logo" width="132" />
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

### 用户与会员

- 👥 **用户管理**
  - 同步 Emby 用户，启用 / 禁用 / 删除
  - 批量续费、禁用、重置密码、同步权限
  - 批量范围支持全部用户、筛选条件、用户组、当前勾选
  - 永久用户标记
  - 用户备注、列表排序与显示字段偏好

- 🧩 **用户分组**
  - 手动分组
  - 智能分组，按会员状态、账号标记、绑定情况、时间与播放等条件嵌套组合
  - 分组权益：求片次数、每日签到奖励

- 🙋 **用户中心**
  - 会员状态、到期时间、剩余天数、最近活跃、30 天观看时长
  - 设备与 IP 记录
  - 服务器线路查看，播放器快捷导入
  - 卡密续费、修改密码
  - 恢复秘钥，用于忘记密码自助重置
  - 额外媒体库自助开关
  - 过期或禁用账号仍可进入续费、改密和查看信息

- 🛡️ **保号规则**
  - 观看保号：最近若干天内需有播放行为
  - 积分保号：到期时扣减积分续期
  - 满足条件自动续费，不满足则停止账号使用

- 🎫 **注册与卡密**
  - 公开注册、限时注册、限量注册、邀请码注册
  - 注册赠送时长
  - 邀请码批次绑定权限模板
  - 自定义天数卡密、注册卡密、续费卡密
  - 外部卡密导入与批次管理

### 运营功能

- 🎬 **求片系统**
  - 电影、整剧、单季求片
  - 热门推荐与搜索
  - 求片次数限制，可按用户组配置
  - MoviePilot 推送、自动检测入库、Emby Webhook 闭环

- 🪙 **积分与签到**（默认关闭）
  - 每日签到，奖励区间可配，支持接入验证码
  - 签到日历
  - 积分流水与积分排行
  - 管理员赠送与扣减
  - 积分中心与单用户积分详情

- 🛒 **积分商城**（默认关闭）
  - 商品类型：卡密、直接续费、求片次数
  - 限购规则与单笔购买上限
  - 商品搜索与分类筛选
  - 订单记录与卡密交付

- 🎟️ **工单系统**
  - 用户提交、补充内容、主动关闭
  - 图片附件
  - 工单类型与排序配置
  - 管理员回复与关闭

- 📢 **公告系统**
  - 普通公告、重要公告
  - 按用户组定向展示
  - Telegram 私信广播

### Emby 与线路

- 🎞️ **Emby 管理**
  - Emby 服务与 Webhook 配置
  - 媒体库封面管理与自动更换
  - 权限模板，可指定媒体库范围
  - 额外媒体库标记，交由有效会员自行开关

- 🌐 **线路管理**
  - 多线路配置与前台下发
  - 展示范围支持全部、仅会员有效期内、指定用户组
  - 健康检查，展示正常 / 离线 / 波动

- 📺 **播放统计**
  - 全站与单用户播放统计
  - Emby 实时会话，支持展示规则与筛选
  - 热门内容排行
  - 设备与客户端分布
  - 异常用户识别

### 集成与外观

- 🤖 **Telegram 集成**
  - Mini App 用户入口
  - 账号绑定，续费与求片入口
  - 自定义指令
  - 管理员指令与通知
  - 强制关注群配置、HTTP 代理

- 🎨 **外观与首页**
  - 主题色、浅色与深色背景、背景图、卡片透明度
  - 自定义公开首页模板，ZIP 上传安装（可选）

### 系统管理

- 🧑‍💼 **管理员**
  - 多管理员管理，安装创建的管理员受保护
  - 管理员 Telegram 绑定
  - 登录失败处理与审计

- 🔔 **通知中心**
  - 管理员通知与用户通知分离
  - 管理员个人接收偏好
  - 通知模板与投递统计

- ⚙️ **配置中心**
  - 基础、外观、通知、工单、求片、Emby、Telegram 七个分区
  - 账号策略、客户端黑名单、站点地址、登录提示
  - 版本更新检查

- 📋 **运行维护**
  - 工作台概览
  - 异步任务与系统任务，支持手动触发
  - 运行日志，关键词高亮
  - 操作日志，记录管理员操作

<a id="docs"></a>
## 📚 文档

- [完整文档](https://binglww.github.io/bubble-emby-admin/)
- [安装指南](https://binglww.github.io/bubble-emby-admin/guide/install)
- [登录入口](https://binglww.github.io/bubble-emby-admin/guide/login-entry)
- [系统配置](https://binglww.github.io/bubble-emby-admin/guide/system-settings)
- [观看保号](https://binglww.github.io/bubble-emby-admin/guide/watch-keepalive)
- [积分商城](https://binglww.github.io/bubble-emby-admin/guide/points-shop)
- [工单系统](https://binglww.github.io/bubble-emby-admin/guide/support-tickets)
- [首页模板](https://binglww.github.io/bubble-emby-admin/guide/homepage-templates)
- [Telegram Mini App](https://binglww.github.io/bubble-emby-admin/guide/telegram-mini-app)
- [FAQ](https://binglww.github.io/bubble-emby-admin/guide/faq)
- [更新记录](https://binglww.github.io/bubble-emby-admin/guide/changelog)

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

详细变更记录见：[更新记录](https://binglww.github.io/bubble-emby-admin/guide/changelog)
