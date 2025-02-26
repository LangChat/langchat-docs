# VLLM vs. Ollama

> 大型语言模型 (LLM) 的兴起改变了 AI 驱动的应用程序，开发人员依赖于优化的推理框架，这个领域的两个杰出解决方案是 VLLM 和 Ollama。

![VLLM vs. Ollama](http://www.hubwiz.com/blog/content/images/size/w2000/2025/01/vllm-vs-ollama.png)

### 关于LangChat

**LangChat** 是Java生态下企业级AIGC项目解决方案，集成RBAC和AIGC大模型能力，帮助企业快速定制AI知识库、企业AI机器人。

**支持的AI大模型：** Gitee AI / 阿里通义 / 百度千帆 / DeepSeek / 抖音豆包 / 智谱清言 / 零一万物 / 讯飞星火 / OpenAI / Gemini / Ollama / Azure / Claude 等大模型。

- 官网地址：[http://langchat.cn/](http://langchat.cn/)

**开源地址：**

- Gitee：https://gitee.com/langchat/langchat
- Github：https://github.com/tycoding/langchat

![iShot_2025-02-12_12.18.53](http://cdn.tycoding.cn/docs/202502151026673.png)

大型语言模型 (LLM) 的兴起改变了 AI 驱动的应用程序，实现了从聊天机器人到自动代码生成的一切。然而，高效运行这些模型仍然是一个挑战，因为它们通常需要大量的计算资源。

为了解决这个问题，开发人员依赖于优化的推理框架，旨在最大限度地提高速度、最大限度地减少内存使用量并无缝集成到应用程序中。这个领域的两个杰出解决方案是 VLLM 和 Ollama——每个解决方案都满足不同的需求。

- VLLM 是一个优化的推理引擎，可提供高速令牌生成和高效的内存管理，使其成为大型 AI 应用程序的理想选择。
- Ollama 是一个轻量级且用户友好的框架，可简化在本地机器上运行开源 LLM 的过程。

那么，你应该选择哪一个呢？在这次全面的比较中，我们将分解它们的性能、易用性、用例、替代方案和分步设置，以帮助你做出明智的决定。

![img](http://www.hubwiz.com/blog/content/images/2025/01/image-509.png)

## 1、VLLM 和 Ollama概述

在深入了解细节之前，让我们先了解这两个框架的核心目的。

VLLM（超大型语言模型）是由 SKYPILOT 构建的推理优化框架，旨在提高在 GPU 上运行的 LLM 的效率。它专注于：

- 使用连续批处理快速生成令牌。
- 通过 PagedAttention 实现高效的内存使用，允许处理大型上下文窗口而不会消耗过多的 GPU 内存。
- 无缝集成到 AI 工作流中，兼容 PyTorch 和 TensorFlow 等主要深度学习平台。

VLLM 被需要大规模高性能推理的 AI 研究人员和企业广泛使用。

Ollama 是一个本地 LLM 运行时，可简化部署和使用开源 AI 模型。它提供：

- 预打包模型，例如 LLaMA、Mistral 和 Falcon。
- 优化的 CPU 和 GPU 推理，用于在日常硬件上运行 AI 模型。
- 一个简单的 API 和 CLI，允许开发人员以最少的配置启动 LLM。

对于希望在个人机器上试验 AI 模型的开发人员和 AI 爱好者来说，Ollama 是一个绝佳的选择。

## 2、性能：速度、内存和可扩展性

性能是选择推理框架的关键因素。让我们在速度、内存效率和可扩展性方面比较一下 VLLM 和 Ollama。

关键性能指标：

![img](http://www.hubwiz.com/blog/content/images/2025/01/image-510.png)

VLLM 利用 PagedAttention 来最大化推理速度并有效处理大型上下文窗口。这使得它成为聊天机器人、搜索引擎和 AI 写作助手等高性能 AI 应用程序的首选解决方案。

Ollama 提供了不错的速度，但受到本地硬件的限制。它非常适合在 MacBook、PC 和边缘设备上运行较小的模型，但在处理非常大的模型时会遇到困难。

> 结论：Ollama 更适合初学者，而 VLLM 是需要深度定制的开发人员的选择。

## 3、用例：何时使用 VLLM 而不是 Ollama？

VLLM 的最佳用例

- 企业 AI 应用程序（例如客户服务机器人、AI 驱动的搜索引擎）
- 在高端 GPU（A100、H100、RTX 4090 等）上部署基于云的 LLM
- 微调和运行自定义模型
- 需要大型上下文窗口的应用程序

不适合：个人笔记本电脑、休闲 AI 实验

Ollama 的最佳用例

- 在没有云资源的情况下在 Mac、Windows 或 Linux 上运行 LLM
- 无需复杂设置即可在本地试验模型
- 想要使用简单 API 将 AI 集成到应用程序中的开发人员
- 边缘计算应用程序

不适合：大规模 AI 部署、繁重的 GPU 工作负载

> 结论：VLLM 适用于 AI 工程师，而 Ollama 适用于开发人员和业余爱好者。

## 4、快速上手

VLLM要首先安装依赖项：

```
pip install vllm
```

在 LLaMA 模型上运行推理：

```
from vllm import LLM
llm = LLM(model="meta-llama/Llama-2-7b")
output = llm.generate("What is VLLM?")
```

Ollama要安装 Ollama (Mac/Linux)：

```
brew install ollama
```

然后下载并运行模型：

```
ollama run mistral
```

调用 Ollama 的 API：

```
import requests
response = requests.post("http://localhost:11434/api/generate", json={"model": "mistral", "prompt": "Tell me a joke"})
print(response.json())
```

> 结论：Ollama 更易于安装，而VLLM 提供更多定制。



## 联系我

最后，推荐大家关注一下开源项目：LangChat，Java生态下的AIGC大模型产品解决方案。

- LangChat产品官网：https://langchat.cn/
- Github: https://github.com/TyCoding/langchat
- Gitee: https://gitee.com/langchat/langchat
- 微信：LangchainChat

![iShot_2025-02-12_12.18.53](http://cdn.tycoding.cn/docs/202502151026673.png)
