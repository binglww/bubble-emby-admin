# Telegram 基础配置

## 基础开关

`Telegram 基础配置` 用于建立 Bot 连接和回调方式。

### 开启 Telegram 服务

`开启 Telegram 服务` 是 Telegram 集成的总开关。关闭后，Telegram 私聊、Mini App 和管理员通知均不会生效。

### Bot Token

`Bot Token` 由 Telegram BotFather 提供。保存时不会回显旧值；如不修改，可保持为空。

### Bot 用户名

`Bot 用户名` 在保存 Token 后自动回填，用于确认当前连接到的机器人账号。

## 网络与更新方式

### Telegram HTTP 代理

`Telegram HTTP 代理` 仅影响服务端访问 Telegram Bot API。

- 支持填写 HTTP 代理地址
- 适用于服务端无法直接访问 Telegram 的环境
- Telegram Webhook 的入站请求不会经过该代理

### 更新模式

系统支持两种更新模式。

- `Webhook`：适合生产环境，需要可被 Telegram 访问的公网地址
- `Long Polling`：适合本地开发或内网环境，不依赖 Telegram 回调

## 公网地址与 Webhook

### 公网地址

`公网地址` 用于生成 Telegram 回调地址和 Mini App 地址。

- `Webhook` 模式下属于必要配置
- `Long Polling` 模式下虽然不强制要求，但仍可用于 Mini App 和后台跳转链接

### Webhook Secret

`Webhook Secret` 仅在 `Webhook` 模式下使用。保存配置后，可通过 `注册 Webhook` 将当前回调地址同步到 Telegram。

## 保存设置

基础配置保存后，建议确认以下状态：

- `Telegram 服务已开启`
- `Token 已配置`
- `Bot 用户名` 已自动回填
- `Webhook` 模式下已完成 `注册 Webhook`

## 相关进阶能力

完成基础配置后，可继续查看以下能力：

- [Telegram Mini App](/guide/telegram-mini-app)
- [Telegram 自定义指令](/guide/telegram-custom-commands)
- [求片功能](/guide/media-requests)
- [管理员通知](/guide/admin-notifications)
