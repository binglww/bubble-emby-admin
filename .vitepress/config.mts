import { defineConfig } from "vitepress"

export default defineConfig({
  base: "/bubble-emby-admin/",
  lang: "zh-CN",
  title: "Bubble Emby Admin",
  description: "Bubble Emby Admin 部署与使用指南",
  cleanUrls: true,
  lastUpdated: true,
  srcExclude: ["superpowers/**"],
  head: [["meta", { name: "theme-color", content: "#e25240" }]],
  themeConfig: {
    logo: {
      text: "Bubble Emby Admin",
    },
    search: {
      provider: "local",
    },
    socialLinks: [
      { icon: "github", link: "https://github.com/binglww/bubble-emby-admin" },
    ],
    nav: [
      { text: "首页", link: "/" },
      { text: "指南", link: "/guide/system-overview" },
    ],
    sidebar: {
      "/guide/": [
        {
          text: "简介",
          items: [{ text: "系统介绍", link: "/guide/system-overview" }],
        },
        {
          text: "快速开始",
          items: [
            { text: "安装", link: "/guide/install" },
            { text: "登录入口", link: "/guide/login-entry" },
          ],
        },
        {
          text: "功能说明",
          items: [
            { text: "用户分组", link: "/guide/membership-groups" },
            { text: "观看保号", link: "/guide/watch-keepalive" },
            { text: "积分与签到", link: "/guide/points" },
            { text: "积分商城", link: "/guide/points-shop" },
            { text: "权限模板与额外媒体库", link: "/guide/emby-policy-templates" },
            { text: "Telegram Mini App", link: "/guide/telegram-mini-app" },
            { text: "Telegram 自定义指令", link: "/guide/telegram-custom-commands" },
          ],
        },
        {
          text: "配置中心",
          items: [
            { text: "基础", link: "/guide/system-settings" },
            { text: "外观与主题", link: "/guide/theme-settings" },
            { text: "首页模板", link: "/guide/homepage-templates" },
            { text: "通知", link: "/guide/admin-notifications" },
            { text: "工单", link: "/guide/support-tickets" },
            { text: "求片", link: "/guide/media-requests" },
            { text: "Emby", link: "/guide/emby-settings" },
            { text: "Telegram", link: "/guide/telegram-basic" },
          ],
        },
        {
          text: "运维与排查",
          items: [
            { text: "系统任务", link: "/guide/system-jobs" },
            { text: "操作日志", link: "/guide/operation-logs" },
            { text: "升级", link: "/guide/upgrade" },
            { text: "FAQ", link: "/guide/faq" },
          ],
        },
        {
          text: "附录",
          items: [
            { text: "界面截图 · 管理员后台", link: "/guide/admin-ui" },
            { text: "界面截图 · 用户入口", link: "/guide/user-ui" },
            { text: "更新记录", link: "/guide/changelog" },
          ],
        },
      ],
    },
    outline: {
      level: [2, 4],
    },
    outlineTitle: "本页内容",
    docFooter: {
      prev: "上一页",
      next: "下一页",
    },
    lastUpdated: {
      text: "最后更新",
      formatOptions: {
        dateStyle: "short",
        timeStyle: "short",
      },
    },
    footer: {
      copyright: "Bubble Emby Admin",
    },
  },
})
