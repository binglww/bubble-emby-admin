# Telegram Mini App

## 启用条件

`Telegram Mini App` 建立在 Telegram 基础配置之上。

- `开启 Telegram 服务` 必须已启用
- `Bot Token` 必须有效
- `公网地址` 需要可用，便于生成 Mini App 地址

保存配置后，系统会生成 `Mini App 地址`，可用于 Bot 菜单按钮和直接打开用户中心。

## 账号绑定与注册

### 开启 Telegram Mini App

`开启 Telegram Mini App` 是 Mini App 的总开关。关闭后，Telegram 用户中心入口不可用。

### 允许已有账号登录并绑定当前 Telegram

该开关用于允许已有网页账号在 Mini App 中完成登录并绑定当前 Telegram。

### 允许用户自行解绑 Telegram

该开关用于控制用户是否可以在用户中心解除当前绑定。

关闭后：

- 已绑定用户仍可继续通过 Telegram 登录
- 首次绑定仍然可用
- 用户不能在用户中心自行解除绑定

### 允许通过 Mini App 直接注册

该开关用于允许 Telegram 用户直接在 Mini App 中创建账号。

## 文案与入口

### `/start` 文案

`/start 文案` 用于用户私聊发送 `/start` 时展示的欢迎内容，支持换行和 Telegram `MarkdownV2`。

### 菜单按钮

`菜单按钮` 用于在 Telegram 中通过菜单按钮打开用户中心。

- `通过 Telegram 菜单按钮打开用户中心` 控制是否启用菜单按钮
- `菜单按钮文本` 控制按钮显示名称
- 保存配置后，需要执行 `同步菜单按钮` 才会下发到 Telegram

## 群组配置

### 群组配置

`群组配置` 支持填写多个群 ID，每行一个。

- 机器人仅允许停留在这些群里
- 未配置时，机器人被拉入任何群都会自动退群

### 强制普通用户关注配置群

开启后，普通用户必须在任一配置群内满足要求身份，才可使用 Telegram 私聊能力和 Mini App。

- `成员及以上`
- `管理员及以上`
- `仅群主`

机器人需要在这些群内具备管理员权限，才能校验成员状态。

### 提示文案

`未满足群成员要求时返回的提示文案` 会在 Telegram 私聊中按 Telegram `MarkdownV2` 发送，在 Mini App 页面按纯文本显示。
