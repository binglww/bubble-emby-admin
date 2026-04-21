# Telegram 自定义指令

## 入口位置

自定义指令位于后台 `配置中心` -> `Telegram` -> `自定义指令` 分组。

这一组配置支持单独保存，不会和 `基础配置`、`Mini App 与用户入口` 配置共用一次提交。

## 基础能力

每条自定义指令都支持以下内容：

- 自定义指令名
- 可选的指令描述
- 多选生效范围
- 自定义回复内容
- 启用或停用
- `MarkdownV2` 和换行
- 保存前预览

回复内容使用固定模板变量，当前只开放 Telegram 基础字段，不依赖 Emby 账号信息。

## 生效范围

范围支持多选，一条指令可以同时在多个场景中使用。

### 用户

- 普通用户私聊可用
- 适合 FAQ、帮助说明、常用入口文案

### 管理员

- 已绑定管理员私聊可用
- 已配置群中的管理员也可用
- 适合运维说明、内部快捷回复

### 群聊

- 仅在 `群组配置` 中配置过的群里可用
- 群内任意成员都可触发
- 适合公开问答、群规说明、快捷链接

## 模板变量

当前可用变量包括：

- `telegramUserId`
- `telegramUsername`
- `telegramFirstName`
- `telegramLastName`
- `telegramDisplayName`
- `chatId`
- `chatType`
- `chatTitle`
- `chatUsername`
- `isAdmin`
- `isGroup`
- `command`
- `payload`
- `messageText`
- `time`

变量值会自动按 Telegram `MarkdownV2` 规则转义，管理员手写的模板正文则按原样保留。

## 保存与生效

- 自定义指令保存成功后，会自动同步到 Telegram Bot 命令列表
- 新增、修改、启停和删除后都会立即生效
- 不需要重启服务

## 使用建议

- 指令名尽量简短，建议只使用英文、数字和下划线
- 回复内容正式启用前先用预览检查 `MarkdownV2` 语法
- 群聊范围建议只放公开信息，不要写私密账号数据
- 不要与系统内置指令重名，例如 `/start`、`/myinfo`、`/redeem`、`/help`、`/lf`
