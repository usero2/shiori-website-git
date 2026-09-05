# 如何在 Shiori 中使用 Google Fonts：字型下载与分语种独立配置全指南

阅读电子书时，字体绝非无足轻重的小事。它不仅直接决定了双眼在产生疲劳感前能坚持阅读多久，在某些特殊文字系统中，更决定了字形与排版是否规范正确——例如泰语声调与上下元音符号，若字体排印欠佳，整段文本就会错位混乱。

Shiori 允许读者自由导入 `.ttf` 或 `.otf` 字体文件，并为 **每一种文字系统/语种独立分配专属字体**。本指南将带你走通导入前的完整流程：从如何在 **Google Fonts** 上精准筛选匹配字族、下载到手机、解压获取可用字库，到最终将它们独立绑定（如泰语一套、拉丁西文一套），亲眼见证同一书页焕然一新的视觉蜕变。

此外，我们还将深度拆解最让读者困惑的翻车陷阱：**明明一切操作按部就班，为什么书页排版看起来却毫无变化？** 

本文所有实操均基于运行 Shiori 2.3.6 的 Android 实体设备完成。Google Fonts 为免费开源平台，文中所选字体均遵循 SIL Open Font License 协议。

## 上手前必须明确的两大常识

1. **字体只包含为其专门绘制的文字系统：** 一款极其优雅的拉丁衬线字体中，极可能完全不含任何泰文字符或汉字。若将其绑定至泰语槽位，系统底层会自动回退至默认字体，导致界面毫无变化，从而被误认为是软件故障。
2. **Google Fonts 提供的是 ZIP 压缩包而非单一字体：** 手机端点击下载后，保存到 Downloads 目录的是一个压缩文件。Shiori 导入器只接受 `.ttf` 或 `.otf` 格式，因此必须先解压才能导入。

## 准备工作

- 已安装 Shiori 2.3.6 的 Android 设备
- 手机移动端浏览器（用于访问 [fonts.google.com](https://fonts.google.com)）
- 支持解压 ZIP 的文件管理器（系统自带文件管理即可）
- 一本包含目标语种文字的电子书，用于直观检验更换效果

## 第一步：按文字系统（Writing system）精准筛选

在手机浏览器中访问 **fonts.google.com**，点击 **Filters**（筛选器）。在 **Language** 区域内有两个下拉框：**Writing system** 与 **Language**。打开 **Writing system**，搜索目标文字系统（如输入 Thai），并勾选。

关闭筛选面板，注意列表顶部的字族总数统计：数量会从 **1,946 个字族骤降至 34 个**。

这个数字就是本步骤的核心意义所在：在这近两千款字体中，仅有 34 款真正具备渲染泰语的能力。先筛选后挑选，能确保眼前的每一个选择都是真实可用的正选。

每门语言均按此操作。若你既读泰语小说又读英语非虚构著作，需要分别挑选两款字体。

![移动端浏览器中打开 Google Fonts 筛选面板，在 Writing system 勾选 Thai](01-google-fonts-filter-writing-system.jpg)
![筛选后目录仅展示 34 款支持泰文的字体字族](02-google-fonts-thai-families-count.jpg)

## 第二步：查验字体样本（Specimen）再做决定

点击心仪的字体进入其样本展示页。本指南选用 Cadson Demak 操刀设计的著名泰文正文字体 **Maitree**。

重点查验两项内容：
- **字体说明与样本文本：** 将预览文本切换至真实语种，观察字形结构、灰度是否均匀舒适。
- **License 许可协议标签：** 个人日常读书可放心随意使用。

对于正文阅读，请务必挑选适合长文本沉浸阅读的 **Regular（常规字重）**。

![Maitree 在 Google Fonts 的样本页面，展示样例文字与 Get font 按钮](03-maitree-specimen-google-fonts.jpg)

## 第三步：下载字体文件包

点击 **Get font**。所选字体会加入选择托盘。

你可以连续挑选多个字族（例如同时选好泰文字体与西文字体），然后点击一次 **Download all**。压缩包将完整保存至手机的 **Downloads** 目录中。

![字体托盘展示已挑选的 3 个字族，并带有 Download all 按钮](04-three-families-selected-download-all.jpg)

## 第四步：解压并查看 ZIP 内部结构

在文件管理器中打开该压缩包。单个字族的压缩包通常呈现如下结构：

| 内容项 | 作用说明 |
| --- | --- |
| `<Family>-VariableFont_*.ttf` | **可变字体（Variable font）**，单一文件包含多重字重 |
| `static/` 文件夹 | 传统静态字重文件（按 Thin、Regular、Bold 单独分列） |
| `OFL.txt` | 开源字体许可协议文本 |
| `README.txt` | 设计师的发布说明与版本信息 |

若一次下载了多个字族，解压后会呈现 **每个字族独立一个文件夹**。将其解压至便于查找的路径（如 Downloads 目录）。

![单个字族 ZIP 解压内容，包含 static 文件夹与可变字体文件](05-inside-the-downloaded-font-zip.jpg)
![多字族打包解压后，每个字族各占一个独立子文件夹](06-multi-family-zip-one-folder-each.jpg)

## 第五步：在文件夹中准确挑出目标文件

这一步直接决定了最终上屏呈现的效果是否合格：

部分字体非常简洁，如 Maitree 仅有 6 个字重文件直接陈列，无 `static/` 子目录；而另一些如 Literata 的 `static/` 目录中还包含各类 **Optical sizes（视觉字号尺寸）**，如 `18pt`、`24pt`、`36pt` 等。

两条黄金取用准则：
1. **始终认准 Regular：** Shiori 采用该文件充当正文骨干，请认准 `Maitree-Regular.ttf` 或 `Literata_18pt-Regular.ttf`（切勿挑选 Bold 或 Italic）。
2. **出现 Optical sizes 时选用小号（如 18pt）：** 小号视觉尺寸专为手机阅读字号优化，大号（如 60pt）则是专为海报设计的。

![Maitree 文件夹列出从 ExtraLight 到 Bold 的各级字重文件](07-maitree-weight-files.jpg)
![Literata 的 static 文件夹，展示 18pt 专用的各级字重文件](08-literata-static-optical-sizes.jpg)

## 第六步：打开 Shiori 分语种字型配置界面

在 Shiori 中依次点击进入 **Settings &rarr; Reading &rarr; Reader font**。弹窗将展示各个文字系统的独立配置槽位：

包含 9 个槽位：**All languages**（全语种通用），以及 **Thai**、**Latin**、**Japanese**、**Chinese**、**Korean**、**Arabic**、**Cyrillic** 与 **Devanagari**。未配置时均显示为 `System fonts`。

多语种混排书籍无需委曲求全共用单一字体。点击你需要配置的槽位——此处点击 **Thai**。

![Shiori 的 Reader font 设置弹窗，罗列各文字槽位](09-shiori-reader-font-script-slots.jpg)
![泰语槽位配置面板，底部配有 Import font 按钮](10-thai-slot-import-font-button.jpg)

## 第七步：导入并应用字型文件

点击 **Import font**。系统文件选择器弹出，浏览至第四步解压的目录。

点击所需的字体文件（如 `Maitree-Regular.ttf`）。Shiori 将自动完成校验、入库并直接选中它，无需二次点击应用。

- **字库全局共享：** 导入一次即可在所有语种槽位中随时调用。
- **垃圾桶图标：** 彻底从应用内部移除该字体。

点击两层弹窗的 **OK** 保存。

![系统文件选择器进入已解压的字型文件夹中](11-file-picker-inside-font-folder.jpg)
![导入成功后，Maitree-Regular.ttf 在泰语槽位中被精准选中](12-thai-slot-maitree-selected.jpg)

## 第八步：检验书页真实蜕变效果

在测试页面中，前一张截图为泰语槽位仍处于系统默认字体（`System fonts`）的状态：

后一张截图为绑定 Maitree 后的全新效果：

局部裁切对比一目了然：系统原生字体字幅偏窄偏硬，而 Maitree 字形开阔饱满，上下音标元音排列舒展优美。同一页中的中文和俄文段落完全未受干扰，各自安好。这就是分语种排版的魅力。

![多语种测试书页，泰语依然显示为系统原生字型](13-thai-before-system-font.jpg)
![更换为 Maitree 后，仅泰语段落优雅焕新，其余语种保持原样](14-thai-after-maitree.jpg)
![泰语表格段落局部对比截图，字幅与版面张力差异显著](15-thai-row-system-vs-maitree.jpg)

## 第九步：为第二门语言绑定专属字型

重复前述步骤为另一门语言设定字体。西文槽位我们选用专为电子阅读打造的衬线体 **Literata**，将 `Literata_18pt-Regular.ttf` 导入 **Latin** 槽位。

此时 Reader font 面板将清晰展现两套完全不同的高品质字库独立各司其职：

![Latin 槽位成功选中 Literata_18pt-Regular 字型](16-latin-slot-literata-selected.jpg)
![Reader font 显示泰语与拉丁西文分别绑定专属字库](17-reader-font-two-scripts-assigned.jpg)

## 页面毫无变化的排查：两大隐蔽陷阱

如果导入后重新开书，文字看起来却一模一样，通常是落入了以下两个陷阱：

### 陷阱 1：字体根本不包含该语种字形
把西文字体导入泰语槽位，由于字库完全没有泰文字符，Android 系统会自动回滚至系统字型，导致看似没有生效。

### 陷阱 2：挑选的新字体与手机系统字体完全同款
对比以下同一段泰文的三种呈现：
1. 手机系统原生字体
2. 从 Google Fonts 导入的 `NotoSerifThai-Regular.ttf`
3. `Maitree-Regular.ttf`

前两者逐像素重合度高达 99.7%，因为多数 Android 设备系统自带的泰文字体原本就是 Noto 系列。换上同款字体自然看不出任何差异。想要显著提升，请挑选风格特征鲜明的正文字体。

![系统字体、Noto Serif Thai 与 Maitree 三种字型的同框对比实测](18-same-paragraph-three-thai-fonts.jpg)

## 常见问题解答（FAQ）

**导入后文字没有改变怎么办？**  
除上述两点外，请检查 **Settings &rarr; Reading** 中的 **Force reader fonts** 是否已开启。若关闭，图书内置的 CSS 字体可能会覆盖全局字型。

**提示无法打开所选文件？**  
导入器只支持 `.ttf` 与 `.otf` 格式，请勿直接选择 `.zip` 压缩包。

## 总结

先按文字系统筛选、预览样张、解压选用 Regular 字重，最后在 Shiori 对应槽位一键绑定。分语种排版让每一本跨语种图书，都能拥有最赏心悦目的阅读版式。
