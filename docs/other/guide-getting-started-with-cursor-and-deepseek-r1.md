# Cursor + DeepSeek R1 使用指南

![img](https://miro.medium.com/v2/resize:fit:1400/1*JXnjxfx0wxr5U2VFMeITgQ.png)

### 关于LangChat

**LangChat** 是Java生态下企业级AIGC项目解决方案，集成RBAC和AIGC大模型能力，帮助企业快速定制AI知识库、企业AI机器人。

**支持的AI大模型：** Gitee AI / 阿里通义 / 百度千帆 / DeepSeek / 抖音豆包 / 智谱清言 / 零一万物 / 讯飞星火 / OpenAI / Gemini / Ollama / Azure / Claude 等大模型。

- 官网地址：[http://langchat.cn/](http://langchat.cn/)

**开源地址：**

- Gitee：https://gitee.com/langchat/langchat
- Github：https://github.com/tycoding/langchat

![iShot_2025-02-12_12.18.53](http://cdn.tycoding.cn/docs/202502151026673.png)

# 简介

最近，AI 领域因 DeepSeek 的出现而“重塑”，这是一个开源模型，以其在成本仅为其他成熟模型一小部分的情况下所展现的惊人能力在业界引起了轰动。这一最新进展吸引了开发者和研究者的关注，为 AI 辅助编程提供了一个替代方案。

另一方面，Cursor 是一款功能强大的 AI 代码编辑器，也因其生成、重构和优化代码的能力而备受关注。它在开发者中的日益流行很容易理解。

本文将指导您了解如何将这些强大的工具融入您的开发工作流程。无论您是在设置新的集成开发环境（IDE）还是探索 DeepSeek 人工智能模型（AI models）的潜力，本指南将帮助您迅速开始并更快地编写更好的代码。让我们开始吧！

#  光标设置

##  1.1 安装光标

首先访问 Cursor 的官方网站，cursor.com。

![img](https://miro.medium.com/v2/resize:fit:2000/1*pXyMnuqw7CXS0MO_up4zcg.png)

接下来，下载您操作系统的安装程序。由于我使用的是 Windows 机器，网站自动提供 Windows 版本供下载。Windows 文件大小约为 132MB，因此下载速度快。

一旦下载完成，只需运行安装程序即可。

![img](https://miro.medium.com/v2/resize:fit:752/1*fSO2b4Swi2RyO9RD_E__Ag.png)

安装只需大约一分钟，完成后，光标将自动启动。您将看到光标应用的主屏幕。

![img](https://miro.medium.com/v2/resize:fit:1400/1*BtACFht0Ncl8IDsOISzepQ.png)

##  1.2 光标登录

由于 Cursor 需要后端功能，您需要一个 Cursor 的云账户。我使用了谷歌账户选项，这使得注册过程变得快速简单。

![img](https://miro.medium.com/v2/resize:fit:902/1*1047pNfpFKcb5WQNyoiwXg.png)

登录过程通过浏览器中的网页界面进行。登录后，您将被提示返回 Cursor 应用。

![img](https://miro.medium.com/v2/resize:fit:1400/1*y_tqbU7He5SVQPXcrDlWEA.png)

一旦再次看到主屏幕，恭喜！设置成功。现在我们可以进行 DeepSeek 的光标配置了。

> 注意：如果您是 Cursor 的新用户，您将获得 14 天的免费试用。我们将在下面的后续部分详细讨论这一点。

#  2. 深度搜索设置

DeepSeek 设置更加简单——无需下载。您只需在光标设置中选择几个选项即可。

从主屏幕，点击右上角的齿轮图标以访问光标设置。

> 提示：您还可以使用键盘快捷键：Ctrl + Shift + J。

![img](https://miro.medium.com/v2/resize:fit:2000/1*m8dVsZGo4S-jligDsZyRZw.png)

接下来，转到光标设置 > 模型，并选择 deepseek-r1 和 deepseek-v3。

![img](https://miro.medium.com/v2/resize:fit:1400/1*8sn27MlDJN7hjvOiGazDgw.png)

那就可以了——再次恭喜！DeepSeek 模型现在已完全设置好，准备就绪！

让我们先尝试聊天 UI，然后转到代码 UI。

> **提示：光标应用版本要求**
>
> 如果您是现有 Cursor 用户，请通过前往帮助>关于检查您的版本。

![img](https://miro.medium.com/v2/resize:fit:748/1*CRZWs5_bldPt-O2aqeYnQA.png)

DeepSeek R1 和 V3 在 Cursor 版本 0.44 和 0.45 中受支持。

#  3. 聊天用户界面

最快捷访问聊天用户界面的方法是使用键盘快捷键：Ctrl + L。这将打开聊天窗口。

![img](https://miro.medium.com/v2/resize:fit:1106/1*UTm4uWFM-WkGPLAr2XBV_w.png)

请注意，默认情况下，DeepSeek 模型在 Chat UI 中未设置为默认聊天模型。您需要先将默认模型切换到 DeepSeek。例如，在上面的截图上，将选择 deepseek-r1。这是一个一次性设置。

##  **DeepSeek 已准备就绪**

现在 Chat UI 已准备好用于 DeepSeek。请随意像使用任何其他聊天机器人一样使用它，探索您想了解的任何主题。

 **第一次提示**

对我来说，这是我和新模型第一次聊天时始终使用的默认提示。

![img](https://miro.medium.com/v2/resize:fit:1218/1*hZBYySUzPaAuWW2Rn6zPDg.png)

**聊天 UI 输出 — DeepSeek R1：**

![img](https://miro.medium.com/v2/resize:fit:1400/1*6W5mxO3wXmfCv7Sgjhr5Nw.png)

77 是预期答案。

## 聊天 UI — 编辑模式

默认的聊天 UI 处于所谓的“面板模式”。然而，我更喜欢“编辑模式”，因为它给我全屏体验。您可以通过点击右上角的 3 点图标并选择“以编辑器打开聊天”来切换到这种模式。

![img](https://miro.medium.com/v2/resize:fit:1400/1*5TWskFj3h5yHZ4bX0MDaFQ.png)

> 提示：如果您想切换回默认模式，可以通过点击三点图标并选择“以面板打开”来切换。

#  4. 代码 UI

作为开发者，我们的大部分时间都会花在代码 UI 上。因此，让我们看看 AI 模型如何帮助我们更快、更好地编写代码。我们将使用 Python 代码生成的简单示例来展示这个工作流程。

> 注意：为了简化演示代码的执行，不需要本地 Python 运行时。我们只需将代码复制粘贴到 Google Colab 环境中进行测试。

## 4.1 开始新项目

尽管这只是一个单文件代码示例，但使用“将文件夹作为项目打开”的方法仍然是个好主意。这可以让 Cursor 将其视为项目的一部分，提供更好的上下文感知。为此，首先在您的文件系统中创建一个空文件夹，然后从 Cursor 应用的主屏幕点击“打开项目”。

![img](https://miro.medium.com/v2/resize:fit:1400/1*0Az42ONzYC4DPc9ikk-cdA.png)

在我的情况下，我使用名为“demo”的文件夹，并选择此文件夹：

![img](https://miro.medium.com/v2/resize:fit:1298/1*yOPPKlDFPWdzqNUx0GoIXA.png)

接下来，只需单击“新建文件”图标以创建新文件，并将其命名为：demo.py

![img](https://miro.medium.com/v2/resize:fit:1400/1*pmhmv-IYIWcAQBkwOTXvyg.png)

现在，我们在代码编辑器中有一个名为“demo.py”的空 Python 文件作为当前工作文件。

![img](https://miro.medium.com/v2/resize:fit:1400/1*xvUQnWlQrfFZc8T96b8b-A.png)

## 4.2 与 AI 模型聊天

要访问代码编辑器中的 AI 模型，只需使用键盘快捷键：Ctrl + K。

与 Chat UI 类似，DeepSeek 模型在 Code UI 中不是默认的。您需要在 Code UI 中一次性选择 DeepSeek 模型。

![img](https://miro.medium.com/v2/resize:fit:1400/1*w9tqdUkMR1LEUIJSZmMxMw.png)

最后，DeepSeek 在代码编辑器中准备就绪。让我们尝试我们的第一个提示（或者您可以自由输入您有的任何代码想法）。

##  **提示 1：**

![img](https://miro.medium.com/v2/resize:fit:1400/1*3RDDaXSxlTzi0IirGjh28w.png)

只需按 Enter 键或点击“生成”提交提示。

**代码 UI 输出 — DeepSeek R1**

![img](https://miro.medium.com/v2/resize:fit:2000/1*Od4zU6wsaYAqixQwQxLZGA.png)

DeepSeek 将稍作思考并生成所需的代码。然后您可以点击“接受”将生成的代码添加到当前工作文件中。

**Python 结果 — Google Colab**

![img](https://miro.medium.com/v2/resize:fit:536/1*UGNrr2oMCSxGgCVA70qe6Q.png)

如前所述，进行此测试无需在本地安装 Python。我们只需将代码复制粘贴到 Google Colab 环境中运行即可。查看结果后，这并不是我心中的样子。我可以轻松提交另一个后续提示。

##  提示 2：

再次按下 Ctrl + K 键打开提示编辑器。

![img](https://miro.medium.com/v2/resize:fit:1400/1*-esGIwJsyScwJRwxRJ8sLw.png)

然后，输入提示并提交。

**代码 UI 输出 — DeepSeek R1**

![img](https://miro.medium.com/v2/resize:fit:2000/1*YYoD3CLaO8BScPJQPRchSw.png)

根据我的要求，DeepSeek 将再次处理提示并生成更新后的代码。光标随后将以 Diff View 样式显示代码更改，突出显示原始版本和更新版本之间的差异。

## 4.3 审查更改：差异视图和批准

Diff 视图与 Git 这样的版本控制系统类似工作。这是使用内置 AI 代码编辑器的好处之一——提供更集成的开发流程。

现在，回到我的演示代码，我看不出有任何理由拒绝这些更改，所以我将直接接受它们。

**代码 UI 输出 — DeepSeek R1**

![img](https://miro.medium.com/v2/resize:fit:1400/1*TxIZBxEJpdbEd8qyzNsMAg.png)

**Python 结果 — Google Colab**

![img](https://miro.medium.com/v2/resize:fit:726/1*w63wtkDfdmnxvQJWEuWYmQ.png)

经过两次与 AI 模型的提示，我现在有一个工作的代码基线。我们可以继续这个过程来微调代码。

## 4.4 迭代过程

开发者与 AI 模型之间的交互是迭代的。开发者指导方向，让 AI 做繁重的工作。

##  **提示 3：**

在这种情况下，我只想更改代码的最后部分。因此，我只需突出显示要更改的区域并按 Ctrl + K 打开提示编辑器。

![img](https://miro.medium.com/v2/resize:fit:1400/1*oXumOlBDO8n2nLt0yCBHGg.png)

然后，输入提示并提交。

**代码 UI 输出 — DeepSeek R1**

![img](https://miro.medium.com/v2/resize:fit:1400/1*aibHEj7tmH6pf5lEv_goYg.png)

审查代码后，我没有发现任何问题，所以我只是接受了更改。

**代码 UI 输出 — DeepSeek R1**

![img](https://miro.medium.com/v2/resize:fit:1400/1*90-a_4aawqLG3mFqaymtZw.png)

**Python 结果 — Google Colab**

![img](https://miro.medium.com/v2/resize:fit:730/1*oF4T_bRntcF-lNriQ-WVPw.png)

在三次提示后，代码可以生成给定输入 n 的完整分区列表，这正好是我编写代码的初衷。

##  **提示 4：**

我们现在可以向代码中添加一个新功能，但这次，我们将通过聊天用户界面来完成。

> 提示：您可以使用聊天界面生成代码，然后使用“应用”按钮在代码界面中以“差异视图”风格应用更改。这种方法允许 AI 模型考虑项目的更广泛背景，而不仅仅是当前的工作文件。

当我们在代码编辑器中时，按 Ctrl + L 键打开聊天用户界面。

![img](https://miro.medium.com/v2/resize:fit:1400/1*Dapls8LLDeNh2UNT0JWArw.png)

然后，输入提示并提交。

**聊天 UI 输出 — DeepSeek R1**

由于此提示是通过聊天界面完成的，DeepSeek 将提供一个详细的推理过程并生成更新后的代码。然后，我们可以点击“应用”按钮将更改应用到代码编辑器中。

![img](https://miro.medium.com/v2/resize:fit:1400/1*JYwBKgNAHmuP1aP_-lObtw.png)

**代码 UI 输出 — DeepSeek R1**

![img](https://miro.medium.com/v2/resize:fit:1400/1*Da9rEBSxfTJcZHTZkqG79Q.png)

由于我的提示明确要求“不要更改任何现有功能”，更新的代码只包括添加部分。看起来不错，所以我将接受这些更改。

**Python 结果 — Google Colab**

![img](https://miro.medium.com/v2/resize:fit:796/1*iLzLEAmWbFZVFv-fMrpGeA.png)

基于最终结果，代码运行完美。

#  5. 定价方案

光标为个人开发者提供两种定价方案：

-  专业计划（付费）
-  免费计划

##  专业计划

专业计划每月费用为 20 美元，包括 500 个“快速使用”高级型号信用额度。一旦 500 个信用额度用完，剩余月份将转为无限量“慢速使用”高级型号。在负载高峰期间，慢速使用将排队在快速使用之后。

 **高级模型：**

GPT-4、GPT-4o 和 Claude 3.5 Sonnet。

> 注意：截至本文撰写日期（2025 年 2 月 12 日），Cursor 尚未正式宣布与 DeepSeek 模型集成相关的任何定价或快速使用配额更新。然而，DeepSeek V3 被视为非高端型号，而 DeepSeek R1 则被归类为高端型号。
>
> 值得注意的是，由于 DeepSeek 模型是开源的，Cursor 使用的 DeepSeek 实例托管在美国的服务器上，具体是在 Fireworks.ai 平台（一个 AI 推理平台）上。

##  免费计划

免费计划提供使用 50 积分访问“慢速使用”高级模型的权限。一旦积分用完，直到下一个月度周期，将无法访问高级模型。

##  **14 天试用期**

作为一名新用户，当您注册 Cursor 时，您将获得 14 天的免费试用。

![img](https://miro.medium.com/v2/resize:fit:1400/1*sqIAVQxVs4yzXXs-R5C8pA.png)

在 14 天免费试用期间，您将获得 150 个快速使用高级版模型积分。

![img](https://miro.medium.com/v2/resize:fit:2000/1*cU5ndp2IvHqJw4PrLB3zrA.png)

14 天免费试用让您有机会探索功能，并确定哪个计划最适合您的使用模式和开发目标。

参考：https://medium.com/@davidlfliang/guide-getting-started-with-cursor-and-deepseek-r1-710a75138566

## 联系我

最后，推荐大家关注一下开源项目：LangChat，Java生态下的AIGC大模型产品解决方案。

- LangChat产品官网：https://langchat.cn/
- Github: https://github.com/TyCoding/langchat
- Gitee: https://gitee.com/langchat/langchat
- 微信：LangchainChat

![](http://cdn.tycoding.cn/docs/202502151026673.png)