# 如何在 Android 上将 Komga 连接至 Shiori（支持封面与进度同步）

如果你在家运行 **Komga**，你的整个书库就已经托管在自己的服务器上了——但在手机上阅读通常意味着要使用浏览器标签页，或者使用只能显示无封面文件名列表的软件。

Shiori 可以直接连接至 Komga。采用正确的设置方式，你可以获得封面、作者信息、系列结构，并将阅读进度实时同步回服务器。本指南将展示具体的设置步骤，更重要的是——告诉你应该在 Shiori 提供的三种 Komga 选项中选择哪一个。

## Komga、OPDS 还是 Komga API？首先选择正确的选项

添加服务器时，Shiori 会提供几个快捷填充选项，其中有三个涉及 Komga。它们并不相同：

* **Komga** — 通过 **OPDS v1** 连接。仅支持浏览和下载。
* **Komga v2** — 通过 **OPDS v2** 连接。同样仅支持浏览和下载。
* **Komga API** — 通过 Komga 的**原生 REST API** 连接。只有此选项能提供**封面、完整图书详情以及阅读进度同步**。

OPDS 是一种通用的目录标准，因此它几乎兼容所有服务器——Calibre、Calibre-Web、Standard Ebooks、Project Gutenberg 等。但通用性也是它的局限所在：它包含的信息仅够列出和下载文件。

而 Komga 的原生 API 了解系列、元数据和阅读进度，因此 Shiori 可以为你展示一个真正的书库，而不是单纯的文件列表，并能将你的阅读进度反馈给 Komga。

**除非你有特定原因，否则请始终使用 "Komga API"。**

## 准备工作

* Komga 正在运行且可以在你的网络中访问
* 你的 Komga **用户名和密码**（或者你更倾向使用的 API 密钥）
* 服务器的**局域网地址（LAN 地址）**——而不是 `localhost`
* 在 Android 设备上安装好 Shiori

> **为什么不能使用 `localhost`？** `localhost` 代表“本机”。如果在手机上输入它，它指向的是手机本身，而不是你的服务器。你需要的是服务器在局域网中的 IP 地址——例如 `192.168.1.33`。

## 第一步 — 打开 Library Server 列表

在 Shiori 中，轻触底部导航栏的 **Collections**（收藏）。滚动到 **Library Server**（图书服务器）区域，然后轻触其右侧的 **+** 按钮。

![Shiori 中的 Collections 标签页，显示包含添加按钮的 Library Server 区域](01-collections-library-server.jpg)

所有在线书库都位于此处——无论是 OPDS 目录、Kavita、S3 存储桶还是 WebDAV 共享——因此添加 Komga 后，它会与其他来源并列显示。

## 第二步 — 了解 Add Library Server 界面

**Add Library Server**（添加图书服务器）界面包含名称输入框、目录 URL、一行快捷填充标签（quick-fill chips）以及可选的登录信息输入框。

![Add Library Server 界面，显示快捷填充标签和支持的服务器帮助说明](02-add-library-server-form.jpg)

向下滚动，Shiori 在页面内详细说明了每种支持的服务器类型及其所需的具体 URL 格式。这值得阅读一遍——本文也是基于这些信息编写的。

## 第三步 — 输入服务器地址，然后轻触 "Komga API"

这里的操作顺序很重要。标签上方的提示写着 *"type the host, then tap your server"*（先输入主机地址，再点击你的服务器类型）：

1. 仅在 **Catalog URL** 输入框中输入服务器地址——例如 `192.168.1.33`
2. 然后轻触 **Komga API** 快捷标签

Shiori 会自动将你输入的内容补全为 Komga 所需的完整 URL：

```
http://192.168.1.33:25600/api/v1
```

`25600` 是 Komga 的默认端口。如果你修改过端口，请相应更改——下方截图显示的端口是 `25601`，因为本指南所用的服务器使用了非默认端口。

接下来填写 **Sign-in**（登录信息）：你的 Komga 用户名和密码。（或者，保持用户名留空，将 Komga API 密钥粘贴到第二个输入框中——Shiori 两种方式都支持。）

![已填好 Komga API URL 和登录信息的表单](03-komga-api-url-and-signin.jpg)

在顶部为服务器起一个便于识别的名称，如果喜欢还可以选择一个图标。

## 第四步 — 保存前测试连接

轻触 **Test connection**（测试连接）。这一步切勿跳过：它可以在保存设置*之前*告诉你地址、端口和凭据是否全部正确。

![测试连接提示：Connected — Komga (REST API)](04-test-connection-connected.jpg)

你需要看到如下提示：

```
Connected — Komga (REST API)
```

该提示确认了两个独立的事实：Shiori 已成功连接到服务器，并且检测到了**原生 REST API**（而不是退回到普通目录）。如果是其他提示，你将无法获取封面和进度同步。

如果测试失败，请依次排查以下问题：

* **Timed out / cannot reach**（超时 / 无法访问）—— IP 地址错误，或者手机与服务器未处于同一网络。请检查两者是否连接到了同一个 Wi-Fi。
* **Unauthorized**（未授权）—— 用户名或密码有误。Komga 的用户名通常是完整的电子邮箱地址。
* **Connected, but not as REST API**（已连接，但非 REST API）—— URL 中缺失 `/api/v1` 部分，或者端口填写有误。

排查完毕后，轻触右上角的 **Save**（保存）。

## 第五步 — 服务器已显示在列表中

现在，Komga 已显示在你的 **Library Server**（图书服务器）列表中，旁边带有挂锁图标，表示已为其存储登录凭据。

![Library Server 列表中已保存的 Komga 服务器，其 URL 已被遮挡](05-komga-in-library-server-list.jpg)

注意，Shiori 在此列表中打码隐藏了服务器地址。这是有意设计的——当你在向他人展示手机或分享截图时，可以保护你的内网网络布局不被泄露。

## 第六步 — 浏览你的书库

轻触该服务器即可将其打开。你将看到 Komga 中的图书库、可以直接查询目录的搜索框以及排序选项。

![浏览 Komga 目录，显示图书库和目录搜索框](06-browse-komga-catalog.jpg)

顶部的面包屑导航会记录你当前所在的位置，因此只需轻触一下即可返回上层几级目录，而无需连续按返回键。

## 第七步 — 封面、作者信息与一键阅读

打开任意图书库，你就能直观地感受到原生 API 带来的好处：

![图书列表显示封面图、书名、作者、格式和文件大小](07-books-with-covers-and-authors.jpg)

每本书都会显示**封面**、**书名**、**作者**、**格式**和**文件大小**——这些都是直接提取自 Komga 的元数据。每行有两个操作按钮：

* **Read**（书籍图标）— 开始阅读
* **Download**（云端图标）— 将副本保存至设备以供离线阅读

由于你是通过 REST API 连接的，你的阅读进度会实时同步回 Komga。在手机上看书看到章节一半时停下，Komga 也会同步记录，因此你在切换到下一个设备时就能直接从正确的位置继续阅读。

## 使用技巧

* **下载的书籍支持完全离线使用。** 在乘飞机或经过信号不佳的通勤路段前，轻触云端图标下载图书，书籍就会保存到你的常规书架中。
* **搜索功能直接检索服务器，而非仅搜索屏幕当前内容。** 搜索框会直接向 Komga 发起查询，当你的书库庞大到需要滑动多屏时，这一功能尤为实用。
* **需要在外阅读？** 本教程的步骤使用的是局域网 IP 地址，这仅在你处于自家网络时有效。要从外部网络访问 Komga，你需要通过 VPN 连接回内网或配置带 HTTPS 的反向代理——正确配置这两者比将 Komga 直接暴露在公网上要安全得多。
* **添加第二个服务器的操作流程相同。** Kavita、Calibre-Web、OPDS 目录、WebDAV 和 S3 均使用此界面，并且 Shiori 会为你自动检测类型。

## 相关阅读

* [如何将 Shiori 与 Kavita 同步（OPDS 与 REST API）](/blog/how-to-setup-kavita-rest-api/) — 适用于 Kavita 服务器的相同设置思路
* [如何将 OPDS 目录连接至 Android 电子阅读器](/blog/connect-opds-catalog-android-ereader/) — 通用目录连接方案
* [阅读你的云端书架：将 S3 存储桶添加为图书服务器](/blog/s3-bucket-library-server-android-epub/) — 使用对象存储而非常规服务器

## 你的服务器，你的书库，你的手机

Komga 让你能够将图书完全掌握在自己的硬件设备上。通过原生 API 将其连接至 Shiori，意味着在移动端你同样无需妥协——既能享受封面、元数据和阅读进度同步，又无需将书库托管至任何人的第三方云服务中。

立即下载 Shiori，将其指向你的 Komga 服务器，无缝接续阅读吧。