# 11个开发人员必备AI聊天界面

Google 正在变老，开发人员现在正在使用现代 AI 聊天工具来完成所有编程任务。

### 关于LangChat

**LangChat** 是Java生态下企业级AIGC项目解决方案，集成RBAC和AIGC大模型能力，帮助企业快速定制AI知识库、企业AI机器人。

**支持的AI大模型：** Gitee AI / 阿里通义 / 百度千帆 / DeepSeek / 抖音豆包 / 智谱清言 / 零一万物 / 讯飞星火 / OpenAI / Gemini / Ollama / Azure / Claude 等大模型。

- 官网地址：[http://langchat.cn/](http://langchat.cn/)

**开源地址：**

- Gitee：https://gitee.com/langchat/langchat
- Github：https://github.com/tycoding/langchat

![iShot_2025-02-12_12.18.53](http://cdn.tycoding.cn/docs/202502151026673.png)



Google 正在变老，开发人员现在正在使用现代 AI 聊天工具来完成所有编程任务。

这是 11 个具有最佳 AI 聊天界面的开源项目的列表，可帮助你最大限度地提高工作效率。

让我们开始吧。

## 1、LLMChat - 最直观的一体化 AI 聊天界面

![img](http://www.hubwiz.com/blog/content/images/2025/02/image-313.png)

我已经测试了所有工具，我相信[ LLMChat ](https://llmchat.co/chat/)是最好的工具之一。

我特别喜欢这个，因为用户界面看起来很干净。 我甚至不需要教程就可以理解大多数东西。

![img](http://www.hubwiz.com/blog/content/images/2025/02/image-329.png)

让我们看看一些使其功能强大 10 倍的功能。

- 支持各种语言模型，包括 GPT 4o Mini、Ollama、Claude、Groq 和 lm studio（即将推出）。您也可以根据需要使用本地模型。如果您刚刚开始使用，他们会提供自己的免费模型。
- 我最喜欢的功能是他们提供了一个插件系统，包括函数调用功能，这使其更上一层楼。
- 你甚至可以为上下文附加图像。
- 它还会为你提供相关的搜索结果建议。
- 你还可以获得一个提示库，可以在其中找到预定义的提示或创建自己的提示。
- 他们的设置也有很多选项，例如可以导入/导出数据、启用 Whisper 语音转文本等等。
- 你还可以搜索对话，因此这是手动监视。它会更快，特别是如果你为对话创建自己的标题。
- 它使用浏览器内的 IndexedDB 在本地安全地存储数据，以实现更快的访问和隐私。阅读隐私政策。
- 他们计划推出一项名为 Knowledge Spaces 的功能，该功能将成为针对专业主题的自定义知识库。我很想看到它的实际应用！

还需要什么？

它基于我最喜欢的技术堆栈构建，使用了 Next.js、TypeScript、Pglite、LangChain、Zustand、React Query、Supabase、Tailwind CSS、Framer Motion、Shadcn 和 Tiptap。

你可以在[ llmchat.co/chat](https://llmchat.co/chat/) 查看演示并分享你的反馈。

LLMChat 是开源的，在[ GitHub](https://github.com/trendy-design/llmchat) 上有 133 颗星。它处于早期阶段，但它会发展得非常快。

## 2、Open WebUI - 最受欢迎的 AI 界面，离线运行

![img](http://www.hubwiz.com/blog/content/images/2025/02/image-315.png)

[Open WebUI ](https://github.com/open-webui/open-webui/)是一款非常棒的用户友好型自托管聊天用户界面，旨在完全离线运行。

你必须安装它才能正确离线使用它：

![img](http://www.hubwiz.com/blog/content/images/2025/02/image-316.png)

可以使用 pip 快速安装它。查看[完整的安装指南](https://github.com/open-webui/open-webui?tab=readme-ov-file#how-to-install-)。

```
# install Open WebUI

pip install open-webui

# run Open WebUI

open-webui serve
```

让我们看看一些很棒的功能。

- 可以自定义 OpenAI API URL 以链接到 LMStudio、GroqCloud、Mistral、OpenRouter 等。
- 可以使用我们的国际化 (i18n) 支持以你喜欢的语言使用它。
- 有一个免提语音和视频通话功能选项，可以提供更多的灵活性。
- 官方网站上有关于社区的一系列模型、提示、工具和功能的清晰信息。
- 可以将文档直接加载到聊天中，也可以将文件添加到文档库中，并在查询前使用 # 命令访问它们。
- 可以使用 SearXNG、Google PSE、Brave Search、serpstack、serper、Serply、DuckDuckGo、TavilySearch 和 SearchApi 等提供商执行网络搜索，将结果直接注入你的聊天体验中。

你可以在[这里](https://docs.openwebui.com/)阅读文档，其中包括入门指南、常见问题解答（推荐阅读）和教程。

它是使用 Svelte、Python 和 TypeScript 构建的，在[ GitHub ](https://github.com/open-webui/open-webui/)上有 41.6k 颗星，这充分说明了它的受欢迎程度。

## 3、LibreChat - ChatGPT 克隆但好 100 倍

![img](http://www.hubwiz.com/blog/content/images/2025/02/image-317.png)

[LibreChat ](https://github.com/danny-avila/LibreChat/)使用 OpenAI 的 ChatGPT 汇集了助手 AI 的未来。它还可以整合集成并改进原始客户端功能，例如对话和消息搜索、提示模板和插件。

使用 LibreChat，你不再需要选择 ChatGPT Plus，而是可以使用免费或按通话付费的 API。

![img](http://www.hubwiz.com/blog/content/images/2025/02/image-318.png)

你可以在 [librechat-librechat.hf.space ](https://librechat-librechat.hf.space/c/new/)查看演示。

让我们看看一些很棒的功能：

- 可以添加多对话。并使用语音转文本 (STT) 和文本转语音 (TTS)。
- 模型集合非常疯狂，例如 Anthropic (Claude)、AWS Bedrock、OpenAI、Azure OpenAI、BingAI、ChatGPT、Google Vertex AI、插件、助手 API（包括 Azure 助手）。这为你提供了完整的功能和多种选择。
- 可以使用自定义端点、OpenAI、Azure、Anthropic 和 Google 附加文件和聊天。
- 可以使用对话分支编辑、重新提交和继续消息。它提供 20 多种语言版本。
- 可以创建、保存和共享自定义预设。此外，你甚至可以将聊天导出为屏幕截图、Markdown、文本和 JSON。

不可能在这里详细介绍所有扩展和插件，因此请自行探索。你可以在[文档](https://www.librechat.ai/docs/)中详细查看所有这些功能，其中包括用户指南、插件、详细安装指南等。

LibreChat 在社区中非常有名，阅读本文后你就可以理解为什么。他们在[ GitHub ](https://github.com/danny-avila/LibreChat/)上有 18k 颗星，并且使用 TypeScript 构建。

## 4、Chatbot UI - 最受欢迎的聊天机器人模板

![img](http://www.hubwiz.com/blog/content/images/2025/02/image-319.png)

与 Vercel 聊天机器人相比，[Chatbot UI](https://github.com/mckaywrigley/chatbot-ui/)是一个更受欢迎的聊天机器人，并且它具有 Vercel 中引用的语法突出显示功能。

我很久以前就从事过一个项目，据我所知，它在组件中提到过。

它们没有很多花哨的功能，但支持任何人可能需要的大多数东西。

你可以在云中运行自己的 Chatbot UI 实例，甚至可以在本地运行。也可以在 [chatbotui.com](https://www.chatbotui.com/) 查看实时演示。

需要注意的一点是，即使默认情况下，你也必须使用自己的 OpenAI API 密钥。

他们在 [GitHub ](https://github.com/mckaywrigley/chatbot-ui/)上有 28.5k 颗星，并且是使用 TypeScript 构建的。

## 5、Vercel Chatbot - Vercel 的聊天机器人模板

![img](http://www.hubwiz.com/blog/content/images/2025/02/image-320.png)

[Vercel Chatbot](https://github.com/vercel/ai-chatbot/)是由 Vercel 创建的，它使用基于 Nextjs 的 Vercel AI SDK。

这更像是一个聊天机器人模板，而不是使用最新模型的完整界面。

此模板默认附带 OpenAI gpt-3.5-turbo。 但多亏了 Vercel AI SDK，你只需几行代码就可以将 LLM 提供商切换到 Anthropic、Cohere、Hugging Face 或使用 LangChain。

如果你愿意，也可以[在本地安装](https://github.com/vercel/ai-chatbot?tab=readme-ov-file#running-locally)和使用它。

他们在[ GitHub ](https://github.com/vercel/ai-chatbot/)上有 6.3k 颗星，功能方面并不是很好。

## 6、Deep Chat - 可注入你网站的 AI 聊天组件

![img](http://www.hubwiz.com/blog/content/images/2025/02/image-322.png)

[Deep Chat](https://github.com/OvidijusParsiunas/deep-chat/) 是一个完全可定制的 AI 聊天组件，可以毫不费力地用于你的网站。

你可以在[ deepchat.dev/playground ](https://deepchat.dev/playground/)查看现场演示。

它还可用于在组件内创建新文件！单击相机按钮拍摄照片或使用麦克风按钮录制音频。

也可以使用语音转文本。

如果你使用 React，这就是可以开始使用的方法。

```
npm install deep-chat-react

// add this to the markup

<deep-chat></deep-chat>
```

之后，可以根据你的要求简单地连接。

![img](http://www.hubwiz.com/blog/content/images/2025/02/image-323.png)

确切的语法可能因你的框架而异。他们在[示例](https://deepchat.dev/examples/frameworks/)中清楚地记录了它。

你可以阅读[包含安装指南的文档](https://deepchat.dev/docs/introduction/)。

他们在 [GitHub](https://github.com/OvidijusParsiunas/deep-chat/) 上有 1.4k 颗星，并且使用 TypeScript 构建。

## 7、Huggingface Chat - 使用开源模型的聊天应用

![img](http://www.hubwiz.com/blog/content/images/2025/02/image-324.png)

[Huggingface Chat](https://github.com/huggingface/chat-ui/)是使用开源模型（例如 OpenAssistant 或 Llama）的聊天界面。这是一款 SvelteKit 应用，它为 HuggingChat 应用提供支持。

这是最受欢迎的 AI 聊天界面之一，原因显而易见。

让我们看看一些很棒的功能。

- 他们提供了 182 个有用的社区工具，你可以根据趋势和流行程度进行筛选。
- 他们提供了许多助手，你可以根据模型进行选择。建议阅读[官方讨论](https://huggingface.co/spaces/huggingchat/chat-ui/discussions/357/)。
- 你可以选择好的模型并描述系统提示，这是自定义体验的另一种方式。

你可以阅读[文档](https://huggingface.co/docs/chat-ui/index/)，在其中可以找到有关架构和快速入门指南的更多信息。

它们在 [GitHub ](https://github.com/huggingface/chat-ui/)上有 7.3k 颗星，并且基于 TypeScript 构建。

## 8、SpeechGPT - 使用 GPT 聊天，重点是语音

![img](http://www.hubwiz.com/blog/content/images/2025/02/image-325.png)

[SpeechGPT ](https://github.com/hahahumble/speechgpt/)是一个 Web 应用程序，可让你与 ChatGPT 交谈。

可以利用此应用程序来提高你的语言能力，或者只是享受与 ChatGPT 聊天的乐趣。

大多数人会说它有什么独特之处，但实际上它确实很独特。

让我们来介绍一些很棒的功能：

- 所有数据都存储在本地，从而可以增强隐私。
- 根据文档，它支持 100 多种语言，但我只能在现场演示中看到对三种语言的支持。
- 包括内置语音识别和与 Azure 语音服务的集成。
- 包括内置语音合成，以及与 Amazon Polly 和 Azure 语音服务的集成。

按照文档中的[教程](https://github.com/hahahumble/speechgpt?tab=readme-ov-file#-tutorial)了解如何使用它。

你可以在[speechgpt.app](https://speechgpt.app/)上看到现场演示。这是一个完美的例子，说明几个额外的功能如何将你的应用提升到一个新的水平！

SpeechGPT在[GitHub](https://github.com/hahahumble/speechgpt/)上有2.7k颗星，并且是v0.5.1版本。

## 9、NextChat - 跨平台的ChatGPT和Gemini UI

![img](http://www.hubwiz.com/blog/content/images/2025/02/image-326.png)

只需一键即可获得精心设计的跨平台[ChatGPT Web UI](https://github.com/ChatGPTNextWeb/ChatGPT-Next-Web/)，支持GPT3、GPT4和Gemini Pro（Web / PWA / Linux / Win / MacOS）。

一些很棒的功能是：

- 隐私第一，所有数据都本地存储在浏览器中。
- 自动压缩聊天记录以支持长时间对话，同时保存你的令牌。
- Linux / Windows / MacOS上的紧凑型客户端（~5MB）。
- 只需在 1 分钟内单击 Vercel 即可免费部署。
- 与自行部署的 LLM 完全兼容。
- Markdown 支持：LaTex、mermaid、代码高亮等。

你可以查看 NextChat 的现场演示和文档，其中包括所有环境变量（主要是 API 密钥）的列表。

在本地操作并不难，他们还提供了一个 GitHub 操作工作流，每小时都会自动更新。

NextChat 在[ GitHub ](https://github.com/ChatGPTNextWeb/ChatGPT-Next-Web/)上有 75.5k+ 颗星，并且是 v2.2 版本。

## 10、GPT4All - 在任何设备上运行本地 LLM

![img](http://www.hubwiz.com/blog/content/images/2025/02/image-327.png)

[GPT4All](https://github.com/nomic-ai/gpt4all/) 私下运行大型语言模型 (LLM)。你不需要任何 API 调用或 GPU。

只需从官方网站下载应用程序并开始使用。它适用于 Windows、MacOS 和 Ubuntu。

让我们快速浏览一些很棒的统计数据。

- 可以将 GPT4All LLM 与敏感的本地数据一起使用，而无需离开你的设备。
- GPT4All 允许你在 CPU 和 GPU 上运行 LLM。它完全支持 Mac M 系列芯片、AMD 和 NVIDIA GPU。
- 可以使用本地文件聊天。
- 根据官方网站，有超过 1000 种可用的开源语言模型。这是一个疯狂的数字。
- 可以使用自己的系统提示、温度、上下文长度、批处理大小等自定义聊天机器人体验

你可以探索模型，它会显示它是否与你的系统兼容。你可以在那里插入 API 密钥并进行过滤。

你可以阅读[文档](https://docs.gpt4all.io/)，包括快速入门指南和有关所有模型的信息。如果您想将其合并到您的代码库中，他们还提供 Python SDK。

我还建议阅读有关 GPT4All 3.0 桌面应用程序发布的[官方博客](https://www.nomic.ai/blog/posts/one-year-of-gpt4all)。

他们在[ GitHub](https://github.com/nomic-ai/gpt4all/) 上有 69.8k 颗星，并且使用 C++ 构建。

## 11、Jan - ChatGPT 的开源替代品

![img](http://www.hubwiz.com/blog/content/images/2025/02/image-328.png)

[Jan ](https://jan.ai/)是 ChatGPT 的开源替代品，可 100% 离线运行在你的计算机上。多引擎支持 (llama.cpp、TensorRT-LLM)

你必须根据你的操作系统下载它。最好的部分是 Jan 没有付费版本。

[这里](https://github.com/janhq/jan?tab=readme-ov-file#demo)是 Jan 的快速演示。

Jan有很多功能，如个性化 AI 助手和扩展，你可以自己探索。

你可以阅读[文档](https://jan.ai/docs/)，其中包括快速入门指南和所用模型的信息。你可以连接你的文件，但它仍然是一个实验性功能。

你甚至可以将 Jan 与 Continue 代码编辑器集成，这会让事情变得非常有趣。阅读文档中的指南。

Jan的总下载量为 170 万+，因此他们非常可信，因为他们有一个庞大的社区。

Jan 在[ GitHub](https://github.com/janhq/jan/) 上有 22.6k 颗星，是使用 TypeScript 构建的。



## 联系我

最后，推荐大家关注一下开源项目：LangChat，Java生态下的AIGC大模型产品解决方案。

- LangChat产品官网：https://langchat.cn/
- Github: https://github.com/TyCoding/langchat
- Gitee: https://gitee.com/langchat/langchat
- 微信：LangchainChat

![](http://cdn.tycoding.cn/docs/202502151026673.png)

