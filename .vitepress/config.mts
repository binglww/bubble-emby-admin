import { defineConfig } from "vitepress"

export default defineConfig({
  lang: "zh-CN",
  title: "Bubble Emby Admin",
  description: "Bubble Emby Admin 部署与使用指南",
  cleanUrls: true,
  lastUpdated: true,
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
          text: "界面截图",
          items: [
            { text: "管理员后台", link: "/guide/admin-ui" },
            { text: "用户入口", link: "/guide/user-ui" },
          ],
        },
        {
          text: "快速开始",
          items: [
            { text: "安装", link: "/guide/install" },
            { text: "登录入口", link: "/guide/login-entry" },
          ],
        },
        {
          text: "基础配置",
          items: [
            { text: "系统配置", link: "/guide/system-settings" },
            { text: "Emby 设置", link: "/guide/emby-settings" },
            { text: "Telegram 基础配置", link: "/guide/telegram-basic" },
          ],
        },
        {
          text: "进阶配置",
          items: [
            { text: "Telegram Mini App", link: "/guide/telegram-mini-app" },
            { text: "管理员通知", link: "/guide/admin-notifications" },
          ],
        },
        {
          text: "附录",
          items: [
            { text: "系统任务", link: "/guide/system-jobs" },
            { text: "升级", link: "/guide/upgrade" },
            { text: "更新记录", link: "/guide/changelog" },
            { text: "FAQ", link: "/guide/faq" },
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
