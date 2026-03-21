import type { Theme } from "vitepress"
import DefaultTheme from "vitepress/theme"
import ImageViewer from "@miletorix/vitepress-image-viewer"
import "@fontsource-variable/inter"
import "@miletorix/vitepress-image-viewer/style.css"
import "./custom.css"

export default {
  extends: DefaultTheme,
  enhanceApp(ctx) {
    ImageViewer(ctx.app, {
      autoShowThumbnails: false,
      transparentBg: false,
    })
  },
} satisfies Theme
