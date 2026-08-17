# 系统介绍

Bubble Emby Admin 是一套面向 Emby 管理场景的后台系统，把用户、会员、续费、通知和用户入口集中到同一套管理流程中。

> 系统仍在快速更新迭代中。如遇到 Bug 或使用问题，请及时在 [GitHub](https://github.com/binglww/bubble-emby-admin/issues) 反馈。

## 组成

系统包含两个入口：

- **管理员后台**：用户与会员管理、内容与运营配置、系统维护
- **用户入口**：网页端和 Telegram Mini App，供用户自助续费、查看信息和使用求片、工单、商城等功能

后台侧边栏按 `用户`、`媒体`、`运营`、`运维` 四组划分，配置项统一收在 `配置中心` 的七个分区中。

## 能力概览

| 方向 | 包含内容 | 说明文档 |
| --- | --- | --- |
| 用户与会员 | 用户同步与批量操作、用户分组、保号规则 | [用户分组](/guide/membership-groups)、[观看保号](/guide/watch-keepalive) |
| 会员续期 | 卡密、注册赠送、积分保号、商城直接续费 | [积分商城](/guide/points-shop) |
| 积分体系 | 每日签到、积分流水、积分中心、积分商城 | [积分与签到](/guide/points)、[积分商城](/guide/points-shop) |
| 内容运营 | 求片、公告、工单 | [求片](/guide/media-requests)、[工单](/guide/support-tickets) |
| Emby 集成 | 服务与 Webhook 配置、权限模板、媒体库管理 | [Emby 配置](/guide/emby-settings)、[权限模板与额外媒体库](/guide/emby-policy-templates) |
| 线路与统计 | 多线路下发与健康检查、播放统计、实时会话 | — |
| Telegram | Bot 接入、Mini App、自定义指令、通知 | [Telegram 配置](/guide/telegram-basic)、[Mini App](/guide/telegram-mini-app)、[自定义指令](/guide/telegram-custom-commands) |
| 外观 | 主题配置、自定义公开首页 | [外观与主题](/guide/theme-settings)、[首页模板](/guide/homepage-templates) |
| 系统维护 | 系统任务、运行日志、操作日志、版本升级 | [系统任务](/guide/system-jobs)、[操作日志](/guide/operation-logs)、[升级](/guide/upgrade) |

完整的功能清单见 [GitHub 仓库说明](https://github.com/binglww/bubble-emby-admin#-介绍)。

## 开始使用

1. 按 [安装指南](/guide/install) 部署并完成初始化
2. 在 [配置中心 · 基础](/guide/system-settings) 中配置站点信息、账号策略与注册规则
3. 在 [Emby 配置](/guide/emby-settings) 中接入 Emby 服务与 Webhook
4. 按需开启求片、工单、积分、商城等功能模块
5. 通过 [登录入口](/guide/login-entry) 确认管理员后台与用户入口可正常访问
