# 大模型训练/微调硬件指南

在本综合指南中，我们深入研究了训练和微调 LLM 所需的基本硬件设置，从普通的 7B/8B 模型到尖端的 70B 模型，以帮助你实现 AI 抱负。

### 关于LangChat

**LangChat** 是Java生态下企业级AIGC项目解决方案，集成RBAC和AIGC大模型能力，帮助企业快速定制AI知识库、企业AI机器人。

**支持的AI大模型：** Gitee AI / 阿里通义 / 百度千帆 / DeepSeek / 抖音豆包 / 智谱清言 / 零一万物 / 讯飞星火 / OpenAI / Gemini / Ollama / Azure / Claude 等大模型。

- 官网地址：[http://langchat.cn/](http://langchat.cn/)

**开源地址：**

- Gitee：https://gitee.com/langchat/langchat
- Github：https://github.com/tycoding/langchat

![iShot_2025-02-12_12.18.53](http://cdn.tycoding.cn/docs/202502151026673.png)

人工智能的快速发展导致了大型语言模型 (LLM) 的出现，这些模型能够解决复杂的任务并推动整个行业的创新。

然而，训练和微调这些模型需要大量的计算能力。无论你是人工智能爱好者、研究人员还是数据科学家，了解 LLM 的硬件要求对于优化性能和成本效益都至关重要。

在本综合指南中，我们深入研究了训练和微调 LLM 所需的基本硬件设置，从普通的 7B/8B 模型到尖端的 70B 模型，以帮助你实现 AI 抱负。

## 1、7B/8B 模型的训练资源估计

> 模型大小：

参数数量：~70 亿。

内存使用量：

- 全精度 (FP32)：~28GB
- 混合精度 (FP16)：~14GB。

> 硬件要求：

GPU 内存：

- 最低设置：4 个 GPU，每个配备 16GB VRAM（例如 NVIDIA RTX 3090、4090 或 A100 40GB）。
- 理想设置：2–4 个 A100 GPU（每个 40GB），用于更快的训练和更大的批量大小。

计算时间：

- 示例：在 1 万亿个 token 上进行训练：在 8 个 A100 GPU（每个 40GB）上约 1 个月。

存储：

- 数据集：文本数据约 1–5TB。
- 检查点：保存中间状态约 500GB。
- RAM：至少 128GB 用于预处理和训练支持。
- 网络：分布式设置的高速连接（10Gbps 或更高）。

> 成本估算：

云设置：

- 实例：4x A100 GPU。
- 成本：约 5 至 8 美元/小时。
- 总计：约 15,000 至 30,000 美元/1 万亿个 token。

## 2、70B 模型的训练资源估算

> 模型大小：

参数数量：约 700 亿。

内存使用情况：

- 全精度 (FP32)：约 280GB。
- 混合精度 (FP16)：约 140GB。

> 硬件要求：

GPU 内存：

- 最低设置：16 个 GPU，每个 GPU 具有 40GB VRAM（例如，NVIDIA A100 40GB）。
- 理想设置：32 个 A100 GPU（每个 40GB），以实现高效训练。

计算时间：

示例：对 1 万亿个 token 进行训练：

- 在 16 个 A100 GPU（每个 40GB）上进行约 2-3 个月。
- 在 32 个 A100 GPU 上进行约 1 个月。

> 存储：

- 数据集：大型文本数据约 10–20TB。
- 检查点：中间状态约 2TB 或更多。
- RAM：至少 256GB；512GB 是理想的。
- 网络：高速互连，如 NVIDIA NVLink 或 Infiniband。

> 成本估算：

云设置：

- 实例：16x A100 GPU。
- 成本：约 35-50 美元/小时。
- 总计：1 万亿个 token 约 500,000-1,000,000 美元。

## 3、70B 模型的微调硬件设置

模型内存使用情况：

- FP32 精度：280GB。
- FP16 精度：140GB。
- 8 位量化：70GB。

硬件要求：

- GPU：NVIDIA A100（40GB/80GB）、H100 或多个带 NVLink 的 RTX 3090/4090 GPU。至少 8 个带 40GB VRAM 的 GPU 或 4 个带 80GB VRAM 的 GPU。
- CPU：用于数据预处理的高核数 CPU（例如 AMD Threadripper 或 Intel Xeon）。
- RAM：至少 256GB，用于处理大型数据集和模型卸载。
- 存储：至少 8TB NVMe SSD，用于数据集存储和模型检查点。
- 网络：用于多节点设置的高速网络（10Gbps+）。

推荐的云设置：

使用 AWS、Azure 或 Google Cloud 等云提供商访问 A100/H100 GPU。

示例：

- AWS EC2：带有 8x A100 GPU 的 P4d 或 P5 实例。
- Google Cloud：A2 Mega GPU 实例。

## 4、7B/8B 模型的硬件要求

> 内存使用情况：

- 16 位精度 (FP16)：~16GB VRAM。
- 8 位或 4 位量化：~8GB VRAM。

> 硬件要求：

GPU：

- 单 GPU 设置：NVIDIA RTX 3090/4090（24GB VRAM）。或NVIDIA A5000/A6000（24GB–48GB VRAM）。或双 GPU 设置（用于更大的批量或更快的训练）
- 带有 NVLink 或多 GPU 的 NVIDIA RTX 3080 Ti、3090 或 4090。

预算 GPU（带量化或卸载）：

- RTX 3060（12GB VRAM）、RTX 3070 Ti（8GB VRAM）。
- CPU：用于数据预处理和后台任务的多核 CPU。— 推荐：AMD Ryzen 7/9、Intel Core i7/i9。
- RAM：— 最低：32GB（适用于带量化的轻量级工作负载）。— 推荐：64GB 或更多，适用于较大的数据集或 CPU 卸载。
- 存储：— 使用 NVMe SSD 进行快速读写操作。— 至少 1TB 用于数据集、模型检查点和日志。— 对于较大的数据集：2TB 或更多。
- 电源：确保 GPU 有足够的功率：— 单 GPU：750W PSU。— 双 GPU：1000W PSU。
- 网络（如果是分布式的）：对于多节点训练：10Gbps 或更高的以太网连接。

## 5、关键见解和行业实践

- 数据规模：根据 Common Crawl，2023 年 6 月，网络抓取包含约 30 亿个网页和约 400TB 的未压缩数据，突显了高质量 LLM 培训所需的庞大数据集。
- 云与本地：云解决方案提供了灵活性和可扩展性，但对于需要频繁进行 LLM 训练和微调的组织来说，本地设置可能更具成本效益。
- 精度权衡：量化技术（8 位或 4 位）显著降低了内存需求，使较小的设置也可以进行微调。

## 6、结束语

训练和微调 LLM 需要大量的计算资源，但 GPU 技术、云服务和精度方面的进步、视觉优化使这些任务变得更加可行。

无论是从头开始构建模型还是定制预先训练的模型，了解硬件要求对于成功部署都至关重要。平衡成本、效率和可扩展性将确保你的 LLM 工作流程既实用又有效。



## 联系我

最后，推荐大家关注一下开源项目：LangChat，Java生态下的AIGC大模型产品解决方案。

- LangChat产品官网：https://langchat.cn/
- Github: https://github.com/TyCoding/langchat
- Gitee: https://gitee.com/langchat/langchat
- 微信：LangchainChat

![](http://cdn.tycoding.cn/docs/202502151026673.png)

