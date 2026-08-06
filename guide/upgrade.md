# 升级

## 升级前准备

升级前建议先确认以下信息：

- 当前使用的 Compose 文件
- 当前使用的镜像标签
- 当前数据库是否正常可用
- `docker-data/configs` 和 `docker-data/data` 是否已经正常挂载

如果已经安装首页模板，升级前必须把数据库与 `docker-data/data/uploads/homepage` 作为同一组数据进行备份。数据库保存模板清单和启用状态，文件目录保存解压后的 HTML、CSS、JS、图片、字体与视频；只备份其中一项无法完整恢复首页。


如果当前通过 `docker-compose.mysql.yml` 部署，升级命令需要继续使用该文件。使用外部 MySQL 时，升级命令应使用 `docker-compose.yml`。

## 常规升级

常规升级流程如下。

### 拉取新镜像

```bash
docker pull bubbleemby/bubble-emby-admin:latest
```

### 重新创建容器

使用内置 MySQL 时：

```bash
docker compose -f docker-compose.mysql.yml up -d
```

使用外部 MySQL 时：

```bash
docker compose -f docker-compose.yml up -d
```

容器重建完成后，可重新访问后台确认系统是否已正常启动。

## 版本迁移

如果当前版本为 `0.3.1` 或更早版本，升级到 `0.3.2` 后需要执行以下迁移命令：

```bash
docker exec -it bubble-emby-admin /app/bubble-emby-admin migrate v0.3.1-user-auth
```

该命令对应程序内置的 `v0.3.1-user-auth` 迁移入口。

如果当前已经是 `0.3.2` 或更高版本，通常不需要重复执行这条迁移命令。

如果后续版本继续提供单独迁移命令，建议按对应版本的更新记录执行，不要自行猜测迁移参数。

## 升级后检查

升级完成后，建议检查以下项目：

- 后台是否可以正常登录
- `配置中心` 中的 `基础`、`外观`、`通知`、`求片`、`Emby`、`Telegram` 是否仍保留原有内容
- 如果使用首页模板，访问 `/` 是否显示当前模板，模板内的 CSS、JS、图片、字体和视频是否可以加载
- `/login`、`/admin/login` 和用户中心是否仍可正常打开
- 用户中心是否可以正常打开
- Emby 和 Telegram 集成是否仍可正常使用

如果版本包含数据库迁移或用户认证迁移，建议额外检查：

- 管理员登录状态是否正常
- 用户登录和续费是否正常
- `用户管理` 列表是否能正常加载
- `同步用户` 和定时任务是否能正常运行

## 最新版本

详细变更内容见 [更新记录](/guide/changelog)。
