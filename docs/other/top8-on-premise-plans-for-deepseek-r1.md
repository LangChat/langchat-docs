# 8个DeepSeek-R1私有化部署方案

> 本文了解如何在本地和没有互联网的情况下运行DeepSeek R1推理模型，或者通过可信赖的托管服务来运行它。

### 关于LangChat

**LangChat** 是Java生态下企业级AIGC项目解决方案，集成RBAC和AIGC大模型能力，帮助企业快速定制AI知识库、企业AI机器人。

**支持的AI大模型：** Gitee AI / 阿里通义 / 百度千帆 / DeepSeek / 抖音豆包 / 智谱清言 / 零一万物 / 讯飞星火 / OpenAI / Gemini / Ollama / Azure / Claude 等大模型。

- 官网地址：[http://langchat.cn/](http://langchat.cn/)

**开源地址：**

- Gitee：https://gitee.com/langchat/langchat
- Github：https://github.com/tycoding/langchat

![iShot_2025-02-12_12.18.53](http://cdn.tycoding.cn/docs/202502151026673.png)

![img](https://miro.medium.com/v2/resize:fit:1400/1*Dm7EMdphvaX7BdXnUpbGCw.png)

运行DeepSeek R1 fffline并托管

许多人（尤其是开发人员）想使用新的[DeepSeek R1](https://api-docs.deepseek.com/news/news250120)思维模型，但担心将其数据发送到[DeepSeek](https://www.deepseek.com/) 。阅读本文，以了解如何在本地和不使用Internet或使用受信任的托管服务的情况下使用和运行DeepSeek R1推理模型。您将模型脱机运行，因此您的私人数据与您一起停留，并且不会将计算机留给任何LLM托管提供商（DeepSeek）。同样，借助值得信赖的托管服务，您的数据将转到第三方托管提供商而不是DeepSeek。

使用LMSTUDIO，OLLAMA和JAN在本地/离线运行DeepSeek R1或通过LLM服务平台，例如Groq，Fireworks AI以及AI共同有助于消除数据共享和隐私问题。

#  什么是DeepSeek R1？

![img](https://miro.medium.com/v2/resize:fit:1400/0*OJvhhzHtsFVTkZCu)

 DeepSeek聊天UI

OpenAI O1和最新模型（例如OpenAI O3和DeepSeek R1）解决了数学，编码，科学和其他领域的复杂问题。这些模型可以考虑从用户查询的输入提示，并在生成最终解决方案之前仔细研究推理步骤或思想链（COT）。在撰写本文时，以上三种语言模型是具有思维能力的模型。 DeepSeek R1模型由基本R1模型和六个蒸馏版组成。蒸馏型从较小的版本到较大的版本，这些版本用Qwen和Llama进行了微调。

# 人们为什么要使用R1但存在隐私问题？

R1模型无疑是世界上最好的推理模型之一。它的功能引起了开发人员社区对[X](https://x.com/MatthewBerman/status/1884044269201330569) ， [Reddit](https://www.reddit.com/r/GetNoted/comments/1ichm8v/openai_employee_gets_noted_regarding_deepseek/) ， [LinkedIn](https://www.linkedin.com/posts/philipp-schmid-a6a2bb196_dont-fall-for-false-deepseek-r1-news-deepseek-activity-7289723903797600256-ox0r?utm_source=share&utm_medium=member_desktop)和其他社交媒体平台的关注和关注。但是，使用DeepSeek提供的语言模型有一些错误的信息和错误的方法。例如，有些人认为DeepSeek是一个附带项目，而不是公司。其他人认为DeepSeek可能会将用户的数据用于其他目的，而不是其隐私政策中所述的内容。像OpenAI一样， [DeepSeek聊天](https://chat.deepseek.com/)的托管版本可能会收集用户的数据，并将其用于培训和改进其模型。话虽如此，这并不意味着您不应该相信使用托管的DeepSeek聊天。它与Chatgpt类似，是使用DeepSeek R1模型测试和生成响应的绝佳工具。有些人和公司不希望DeepSeek由于隐私问题而收集数据。此外，DeepSeek总部位于中国，有几个人担心与中国的一家公司共享其私人信息。

一个人如何在不与DeepSeek共享信息的情况下下载，安装和运行DeepSeek R1的思维模型家族？继续阅读以探索您和您的团队如何在没有互联网的情况下在本地运行DeepSeek R1模型，或者使用欧盟和美国基于美国的托管服务。

#  为什么要DeepSeek R1？

R1模型背后的公司[DeepSeek](https://www.deepseek.com/)最近进入了主流大语言模型（LLM ）提供商，加入[Openai](https://openai.com/) ， [Google](https://ai.google.dev/) ， [Anthropic](https://www.anthropic.com/) ， [Meta AI](https://ai.meta.com/meta-ai/) ， [Groqinc](https://groq.com/) ， [Mistral](https://mistral.ai/)等主要参与者。
DeepSeek R1型号是开源的，成本低于OpenAI O1型号。成为开源为机器学习和开发人员社区提供了长期利益。人们可以为不同用例复制R1模型的版本。尽管成本较低，但它仍与OpenAI O1型号[相当](https://api-docs.deepseek.com/news/news250120)。它令人难以置信的推理功能使其成为OpenAI O1型号的绝佳选择。凭借其有趣的推理能力和低成本，许多人（包括开发人员）想使用它来为其AI应用程序供电，但担心将其数据发送到DeepSeek。的确，将DeepSeek R1模型与[DeepSeek聊天](https://chat.deepseek.com/)这样的平台使用，您的数据将由DeepSeek收集。但是，您可以在计算机上完全离线运行DeepSeek R1模型，也可以使用托管服务来运行该模型来构建您的AI应用程序。

像其他大型语言模型（LLMs ），您可以使用[本地](https://getstream.io/blog/best-local-llm-tools/)运行并测试原始的DeepSeek R1型号和机器上的DeepSeek R1家族[LLM托管工具](https://getstream.io/blog/best-local-llm-tools/)。使用R1型号的一个好处是，它们可以在诸如Groq，foring.ai等托管平台上使用。通过这些平台使用这些模型是通过DeepSeek聊天和API直接使用它们的理想选择。微软最近制作了R1型号，并在其[Azure AI Foundry](https://azure.microsoft.com/en-us/blog/deepseek-r1-is-now-available-on-azure-ai-foundry-and-github/)和Github上提供了蒸馏版。

# 什么是当地的第一LLM工具？

使用时LLMs像[Chatgpt](https://chatgpt.com/)或[Claude](https://claude.ai/)一样，您也使用OpenAI和Anthropic托管的模型，因此这些提供商可能会收集您的提示和数据来培训和增强其模型的功能。如果您担心将数据发送到这些LLM提供者，您可以使用本地优先LLM工具以离线运行您的首选模型。当地第一LLM工具是一种工具，可让您在不使用网络的情况下聊天和测试模型。使用Lmstudio，Ollama和Jan等工具，您可以与您喜欢的任何型号进行聊天，例如DeepSeek R1型号100％离线。了解有关本地第一的更多信息LLM我们最近的[文章](https://getstream.io/blog/best-local-llm-tools/)和[YouTube教程](https://youtu.be/pyFRIlk4se0?si=Y2DjgHLH2YZ4OF1R)之一中的工具。

# 必备当地人LLMDeepSeek R1的工具

![img](https://miro.medium.com/v2/resize:fit:1400/0*wEePc6qX6dPOTSHt)

与Lmstudio，Jan和Ollama在本地运行DeepSeek R1

自从DeepSeek R1模型发布以来，本地数量越来越多LLM下载和使用模型的平台而无需连接到Internet。以下是在撰写本文时可以使用R1脱机的三个最佳应用程序。我们将偶尔更新文章作为本地数量LLM工具支持R1增加。

# LMStudio

![img](https://miro.medium.com/v2/resize:fit:1400/1*IvhmppMlz3f48knAdIqoAg.gif)

使用LMSTUDIO在本地运行DeepSeek R1

LMstudio提供了可以离线运行的DeepSeek R1的蒸馏版。首先，[下载](https://lmstudio.ai/)lmstudio，启动它，然后单击左面板上的**“发现”**选项卡以下载，安装和运行任何蒸馏版R1。在[YouTube](https://youtube.com/shorts/51aYf_39sBU?si=Axkf1r1H_0S0SxFm)上**使用LMSTUDIO在本地观看Run Run Run DeepSeek R1，**以便逐步快速指南。

#  奥拉马

![img](https://miro.medium.com/v2/resize:fit:1400/0*2CoGo0NZVvT7u0kl)

 下载Ollama

使用Ollama，您可以在没有网络的情况下使用单个命令运行DeepSeek R1型号100％。首先，安装[Ollama](https://ollama.com/) ，然后运行以下命令来拉动并运行DeepSeek R1模型：

```
ollama run deepseek-r1
```

您还可以拉动并运行DeepSeek R1型号的以下蒸馏Qwen和Llama版本。

**QWEN蒸馏DeepSeekr1型号**

- **DeepSeek-R1-Distill-Qwen-1.5b** ： `ollama run deepseek-r1:1.5b`
- **DeepSeek-R1-Distill-Qwen-7b** ： `ollama run deepseek-r1:7b`
- **DeepSeek-R1-Distill-Qwen-14b** ： `ollama run deepseek-r1:14b`
- **DeepSeek-R1-Distill-Qwen-32b** ： `ollama run deepseek-r1:32b`

**美洲驼蒸馏DeepSeekr1模型**

- **DeepSeek-R1-Distill-Lalama-8B** ： `ollama run deepseek-r1:8b`
- **DeepSeek-R1-Distill-Lalama-70b** ： `ollama run deepseek-r1:70b`

下面的预览展示了如何与Ollama一起运行**DeepSeek-R1-Distill-Lalama-8b** 。

![img](https://miro.medium.com/v2/resize:fit:1400/1*n6JPQJdCy-bdpgUXUb9Nuw.gif)

 Ollama运行DeepSeek-R1

观看**Run DeepSeek R1 + Ollama本地LLM**在[YouTube](https://youtube.com/shorts/qd4Rm7kyksM?si=sDfvA3L52xpHC8TI)上的**工具**进行快速演练。

# Jan：与DeepSeek R1离线聊天

![img](https://miro.medium.com/v2/resize:fit:1400/0*18XKjTNibGodIawx)

与Jan下载DeepSeek R1

Jan将自己描述为一种开源Chatgpt替代方案。这是当地的第一LLM运行DeepSeek R1型号100％离线的工具。使用JAN运行DeepSeek R1仅需要下图中所示的三个步骤。

![img](https://miro.medium.com/v2/resize:fit:1400/0*IXnHl-tuHbJ1bf44)

与Jan一起运行DeepSeek R1的步骤

下载[Jan](https://jan.ai/) ，然后前往左图上的**Hub**选项卡，以搜索并下载从[拥抱面](https://huggingface.co/)中的任何蒸馏R1 GGUF型号。

**DeepSeek R1 Qwen蒸馏型**

- 1.5b： [https](https://huggingface.co/bartowski/DeepSeek-R1-Distill-Qwen-1.5B-GGUF) ：//huggingface.co/bartowski/deepseek-r1-distill-qwen-1.5b-gguf
- 7b： [https](https://huggingface.co/bartowski/DeepSeek-R1-Distill-Qwen-7B-GGUF) ：//hugingface.co/bartowski/deepseek-r1-distill-qwen-7b-gguf
- 14b： [https](https://huggingface.co/bartowski/DeepSeek-R1-Distill-Qwen-14B-GGUF) ：//huggingface.co/bartowski/deepseek-r1-distill-qwen-14b-gguf
- 32B： [https](https://huggingface.co/bartowski/DeepSeek-R1-Distill-Qwen-32B-GGUF) ：//hugingface.co/bartowski/deepseek-r1-distill-qwen-32b-gguf

**DeepSeek R1美洲驼蒸馏模型**

- 8b： [https](https://huggingface.co/unsloth/DeepSeek-R1-Distill-Llama-8B-GGUF) ：//huggingface.co/unsloth/deepseek-r1-distill-llama-8b-gguf
- 70B： [https](https://huggingface.co/unsloth/DeepSeek-R1-Distill-Llama-70B-GGUF) ：//hugingface.co/unsloth/deepseek-r1-distill-lma-70b-gguf

一旦您下载了带有JAN的任何蒸馏R1型号，就可以按照以下预览进行运行。

![img](https://miro.medium.com/v2/resize:fit:1400/1*qauRmzn7xjPBcH0oejFLAg.gif)

与Jan一起运行DeepSeek R1

# 其他替代方案：使用企业准备就绪LLM托管R1托管

![img](https://miro.medium.com/v2/resize:fit:1400/1*9r4fRCBgN-F2J6MEg4NyLg.png)

DeepSeek R1托管选项

尽管最近发布了DeepSeek R1模型，但有些值得信赖LLM托管平台支持它。如果您不想使用上面概述的离线方法，则可以从以下任何提供商访问模型。可能有几个LLM在此处陈述的托管平台中缺少平台。但是，以下是领先的平台，您可以在其中访问DeepSeek R1型号及其蒸馏器。

#  格罗克

![img](https://miro.medium.com/v2/resize:fit:1400/1*t7_tv6Ey2ElXQeiAt2XS7g.gif)

在Groq上运行DeepSeek R1

GROQ支持`DeepSeek-R1-Distill-Llama-70B`版本。要使用它，请访问https://groq.com/并直接在主页上运行模型。
另外，您可以通过单击主页右上角的**DEV控制台**按钮在Groq上运行R1模型，如下图所示。

![img](https://miro.medium.com/v2/resize:fit:1400/1*z-xnWPHT-dlvQc6B-6JA3Q.gif)

使用Groq Dev Console运行DeepSeek R1

#  Azure AI铸造厂

![img](https://miro.medium.com/v2/resize:fit:1400/1*Q-k_m5wqjLEj3ris38HIgg.gif)

访问Azure AI Foundry的DeepSeek R1

如上图所示，您可以在Microsoft的Aure AI Foundry上访问DeepSeek R1的蒸馏版。访问Azure AI Foundry网站以[开始](https://azure.microsoft.com/en-us/products/ai-foundry)。

其他受欢迎LLM托管平台您可以运行DeepSeek R1的蒸馏型号包括以下链接。

![img](https://miro.medium.com/v2/resize:fit:1400/0*Ah-fLpta18-57s-1)

deepseek r1一起。

- https://fireworks.ai/
- https://www.together.ai/
- https://openrouter.ai/
- https://chatllm.abacus.ai/
- https://chutes.ai/

# DeepSeek R1和开源模型的未来

在本文中，您学会了如何使用[本地优先权](https://getstream.io/blog/best-local-llm-tools/)运行DeepSeek R1模型[LLM](https://getstream.io/blog/best-local-llm-tools/)Lmstudio，Ollama和Jan等[工具](https://getstream.io/blog/best-local-llm-tools/)。您还学会了如何使用可伸缩和企业准备LLM托管平台运行模型。 DeepSeek R1模型是OpenAI O1模型的绝佳替代方法，能够推理完成高度要求和合乎逻辑的任务。

在撰写本文时，可访问DeepSeek R1模型LLM托管平台，例如Azure [AI Foundry](https://azure.microsoft.com/en-us/products/ai-foundry)和[Groq](https://groq.com/) 。这些平台确保其托管语言模型的可靠性和安全性。将来，我们希望看到更多的公司和开源开发人员重现DeepSeek R1模型，并为不同的用例提供。另外，许多本地第一LLM工具和托管服务可以支持DeepSeek R1型号及其蒸馏版。





## 联系我

最后，推荐大家关注一下开源项目：LangChat，Java生态下的AIGC大模型产品解决方案。

- LangChat产品官网：https://langchat.cn/
- Github: https://github.com/TyCoding/langchat
- Gitee: https://gitee.com/langchat/langchat
- 微信：LangchainChat

![iShot_2025-02-12_12.18.53](http://cdn.tycoding.cn/docs/202502151026673.png)

