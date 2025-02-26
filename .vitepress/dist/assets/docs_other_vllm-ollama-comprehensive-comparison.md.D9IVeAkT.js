import{_ as n,c as s,o as l,ag as e}from"./chunks/framework.ByciF0Oj.js";const h=JSON.parse('{"title":"vLLM/ollama综合对比","description":"","frontmatter":{},"headers":[],"relativePath":"docs/other/vllm-ollama-comprehensive-comparison.md","filePath":"docs/other/vllm-ollama-comprehensive-comparison.md","lastUpdated":1740531902000}'),p={name:"docs/other/vllm-ollama-comprehensive-comparison.md"};function t(i,a,o,r,c,u){return l(),s("div",null,a[0]||(a[0]=[e(`<h1 id="vllm-ollama综合对比" tabindex="-1">vLLM/ollama综合对比 <a class="header-anchor" href="#vllm-ollama综合对比" aria-label="Permalink to &quot;vLLM/ollama综合对比&quot;">​</a></h1><blockquote><p>本文比较vllm和ollama在不同场景中的表现。我们将重点关注：资源利用率和效率、部署和维护的简易性、具体用例和建议、安全和生产准备、文档。</p></blockquote><p><img src="http://www.hubwiz.com/blog/content/images/size/w2000/2025/02/vllm-ollama-comprehensive-comparison.png" alt="vLLM/ollama综合对比" loading="lazy"></p><h3 id="关于langchat" tabindex="-1">关于LangChat <a class="header-anchor" href="#关于langchat" aria-label="Permalink to &quot;关于LangChat&quot;">​</a></h3><p><strong>LangChat</strong> 是Java生态下企业级AIGC项目解决方案，集成RBAC和AIGC大模型能力，帮助企业快速定制AI知识库、企业AI机器人。</p><p><strong>支持的AI大模型：</strong> Gitee AI / 阿里通义 / 百度千帆 / DeepSeek / 抖音豆包 / 智谱清言 / 零一万物 / 讯飞星火 / OpenAI / Gemini / Ollama / Azure / Claude 等大模型。</p><ul><li>官网地址：<a href="http://langchat.cn/" target="_blank" rel="noreferrer">http://langchat.cn/</a></li></ul><p><strong>开源地址：</strong></p><ul><li>Gitee：<a href="https://gitee.com/langchat/langchat" target="_blank" rel="noreferrer">https://gitee.com/langchat/langchat</a></li><li>Github：<a href="https://github.com/tycoding/langchat" target="_blank" rel="noreferrer">https://github.com/tycoding/langchat</a></li></ul><p><img src="http://cdn.tycoding.cn/docs/202502151026673.png" alt="iShot_2025-02-12_12.18.53" loading="lazy"></p><p>欢迎来到我们深入研究 LLM 推理框架的最后一部分！在第一部分和第二部分中，我们分别探讨了 Ollama 和 vLLM，了解了它们的架构、功能和基本性能特征。现在到了决定性的一轮：面对面的比较，以帮助您根据特定需求选择合适的框架。</p><p>这次比较并不是要宣布绝对的赢家——而是要了解哪种框架在不同场景中表现出色。我们将重点关注：</p><ul><li>资源利用率和效率</li><li>部署和维护的简易性</li><li>具体用例和建议</li><li>安全和生产准备</li><li>文档</li></ul><p>让我们深入研究数据，看看我们的测试揭示了什么！🚀</p><p>只有一个可以成为冠军，或者可能不是？ 🤔</p><h2 id="_1、基准测试设置⚡" tabindex="-1">1、基准测试设置⚡ <a class="header-anchor" href="#_1、基准测试设置⚡" aria-label="Permalink to &quot;1、基准测试设置⚡&quot;">​</a></h2><p>为了确保公平比较，我们将对两个框架使用相同的硬件和模型：</p><p>硬件配置：</p><ul><li>GPU：NVIDIA RTX 4060 16GB Ti</li><li>RAM：64GB RAM</li><li>CPU：AMD Ryzen 7</li><li>存储：NVMe SSD</li></ul><p>型号：</p><ul><li>Qwen2.5–14B-Instruct（4 位量化）</li><li>上下文长度：8192 个标记</li><li>批处理大小：1（单用户场景）</li></ul><h2 id="_2、非常公平的比较📊" tabindex="-1">2、非常公平的比较📊 <a class="header-anchor" href="#_2、非常公平的比较📊" aria-label="Permalink to &quot;2、非常公平的比较📊&quot;">​</a></h2><p>让我们分析一下这两个框架如何以不同的方式管理系统资源，重点关注它们的核心架构方法和实际影响。</p><h3 id="_2-1-ollama" tabindex="-1">2.1 Ollama <a class="header-anchor" href="#_2-1-ollama" aria-label="Permalink to &quot;2.1 Ollama&quot;">​</a></h3><p>我举了一个问题“给我讲一个 1000 字的故事”的例子。我一个请求的 tok/sec 为 25.59。没有并行请求</p><p><img src="http://www.hubwiz.com/blog/content/images/2025/02/image-273.png" alt="img" loading="lazy">问题：“给我讲一个 1000 字的故事”用于 Ollama</p><p>对于并行请求，用户必须修改位于 <code>/etc/systemd/system/ollama.service</code> 中的文件（对于 Ubuntu）并添加一行 <code>Environment=&quot;OLLAMA_NUM_PARALLEL=4&quot;</code>，你将被允许执行最多 4 个并行请求</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>[Unit]</span></span>
<span class="line"><span>Description=Ollama Service</span></span>
<span class="line"><span>After=network-online.target</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[Service]</span></span>
<span class="line"><span>ExecStart=/usr/local/bin/ollama serve</span></span>
<span class="line"><span>User=ollama</span></span>
<span class="line"><span>Group=ollama</span></span>
<span class="line"><span>Restart=always</span></span>
<span class="line"><span>RestartSec=3</span></span>
<span class="line"><span>Environment=&quot;PATH=/home/henry/.local/bin:/usr/local/cuda/bin/:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin&quot;</span></span>
<span class="line"><span>Environment=&quot;OLLAMA_HOST=0.0.0.0:11434&quot;</span></span>
<span class="line"><span>Environment=&quot;OLLAMA_DEBUG=1&quot;</span></span>
<span class="line"><span>Environment=&quot;OLLAMA_NUM_PARALLEL=4&quot;</span></span>
<span class="line"><span>Environment=&quot;OPENAI_BASE_URL=http://0.0.0.0:11434/api&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[Install]</span></span>
<span class="line"><span>WantedBy=multi-user.target</span></span></code></pre></div><p>这里是我完全不喜欢 Ollama 的地方，我认为它不是一个好的生产框架。 Ollama 保留了所需的所有内存，即使其中只有一小部分会被使用。我的意思是，只有 4 个并发请求，就不可能在 GPU 上加载整个模型，并且一些层会加载到 CPU 上，如下图所示或在终端中运行 <code>ollama ps</code> 即可看到</p><p><img src="http://www.hubwiz.com/blog/content/images/2025/02/image-274.png" alt="img" loading="lazy">15% 的神经网络正在 GPU 中加载</p><p>这还不是最糟糕的部分。我看到的是 15% 的神经网络正在 GPU 中加载，但 GPU 中有近 2GB 的 VRAM 可用！但 Ollama 为什么要这样做？</p><p>在我写这些行时，GitHub 上<a href="https://github.com/ollama/ollama/issues/3078" target="_blank" rel="noreferrer">有一个问题仍未解决</a>，但 Ollama 开发人员并未对此予以关注。几个用户都面临着同样的问题，加载整个神经网络似乎非常困难，即使我们谈论的是仅并行 4 个请求。Ollama 没有提供任何文档。</p><p>知道这一点后，Ollama 可以支持的最大上下文量是多少，才能在 GPU 中加载 100% 的模型？我尝试通过设置 PARAMETER num_ctx 24576（稍后你将看到为什么是这个数字）来修改我的模型文件，我注意到出现了同样的问题：尽管 GPU 中有近 2GB 的 VRAM 可用，但 CPU 的使用率为 4%。</p><p><img src="http://www.hubwiz.com/blog/content/images/2025/02/image-275.png" alt="img" loading="lazy">Ollama 在 CPU 中加载了 4% 的模型 😦</p><h3 id="_2-2-vllm" tabindex="-1">2.2 vLLM <a class="header-anchor" href="#_2-2-vllm" aria-label="Permalink to &quot;2.2 vLLM&quot;">​</a></h3><p>vLLM 采用纯 GPU 优化方法，正如我们在本系列的第二部分中看到的，GGUF 量化仍处于实验阶段。我必须进行同类比较，所以我想为我的 GPU 获得最大的上下文长度。经过几次尝试，我的 RTX 4060 Ti 支持 24576 个令牌。所以我运行了这个修改后的 docker（相对于本系列的第二部分）：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># Run the container with GPU support</span></span>
<span class="line"><span>docker run -it \\</span></span>
<span class="line"><span>    --runtime nvidia \\</span></span>
<span class="line"><span>    --gpus all \\</span></span>
<span class="line"><span>    --network=&quot;host&quot; \\</span></span>
<span class="line"><span>    --ipc=host \\</span></span>
<span class="line"><span>    -v ./models:/vllm-workspace/models \\</span></span>
<span class="line"><span>    -v ./config:/vllm-workspace/config \\</span></span>
<span class="line"><span>    vllm/vllm-openai:latest \\</span></span>
<span class="line"><span>    --model models/Qwen2.5-14B-Instruct/Qwen2.5-14B-Instruct-Q4_K_M.gguf \\</span></span>
<span class="line"><span>    --tokenizer Qwen/Qwen2.5-14B-Instruct \\</span></span>
<span class="line"><span>    --host &quot;0.0.0.0&quot; \\</span></span>
<span class="line"><span>    --port 5000 \\</span></span>
<span class="line"><span>    --gpu-memory-utilization 1.0 \\</span></span>
<span class="line"><span>    --served-model-name &quot;VLLMQwen2.5-14B&quot; \\</span></span>
<span class="line"><span>    --max-num-batched-tokens 24576 \\</span></span>
<span class="line"><span>    --max-num-seqs 256 \\</span></span>
<span class="line"><span>    --max-model-len 8192 \\</span></span>
<span class="line"><span>    --generation-config config</span></span></code></pre></div><p>我可以同时运行多达 20 个请求！！太疯狂了！！。为了测试这个框架，我使用了以下代码：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import requests</span></span>
<span class="line"><span>import concurrent.futures</span></span>
<span class="line"><span></span></span>
<span class="line"><span>BASE_URL = &quot;http://&lt;your_vLLM_server_ip&gt;:5000/v1&quot;</span></span>
<span class="line"><span>API_TOKEN = &quot;sk-1234&quot;</span></span>
<span class="line"><span>MODEL = &quot;VLLMQwen2.5-14B&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>def create_request_body():</span></span>
<span class="line"><span>    return {</span></span>
<span class="line"><span>        &quot;model&quot;: MODEL,</span></span>
<span class="line"><span>        &quot;messages&quot;: [</span></span>
<span class="line"><span>            {&quot;role&quot;: &quot;user&quot;, &quot;content&quot;: &quot;Tell me a story of 1000 words.&quot;}</span></span>
<span class="line"><span>        ]</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>def make_request(request_body):</span></span>
<span class="line"><span>    headers = {</span></span>
<span class="line"><span>        &quot;Authorization&quot;: f&quot;Bearer {API_TOKEN}&quot;,</span></span>
<span class="line"><span>        &quot;Content-Type&quot;: &quot;application/json&quot;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    response = requests.post(f&quot;{BASE_URL}/chat/completions&quot;, json=request_body, headers=headers, verify=False)</span></span>
<span class="line"><span>    return response.json()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>def parallel_requests(num_requests):</span></span>
<span class="line"><span>    request_body = create_request_body()</span></span>
<span class="line"><span>    with concurrent.futures.ThreadPoolExecutor(max_workers=num_requests) as executor:</span></span>
<span class="line"><span>        futures = [executor.submit(make_request, request_body) for _ in range(num_requests)]</span></span>
<span class="line"><span>        results = [future.result() for future in concurrent.futures.as_completed(futures)]</span></span>
<span class="line"><span>    return results</span></span>
<span class="line"><span></span></span>
<span class="line"><span>if __name__ == &quot;__main__&quot;:</span></span>
<span class="line"><span>    num_requests = 50  # Example: Set the number of parallel requests</span></span>
<span class="line"><span>    responses = parallel_requests(num_requests)</span></span>
<span class="line"><span>    for i, response in enumerate(responses):</span></span>
<span class="line"><span>        print(f&quot;Response {i+1}: {response}&quot;)</span></span></code></pre></div><p>我获得了超过 100 个令牌/秒！我不敢相信这是使用游戏 GPU 可以实现的。 GPU 利用率达到 100%，这正是我想要的：获得最大数量的 GPU（因为我支付了 100% 的 GPU 🤣）。</p><p><img src="http://www.hubwiz.com/blog/content/images/2025/02/image-276.png" alt="img" loading="lazy">并行 20 个请求进行推理！！！</p><p>这还不是最好的部分，我们设置了 <code>--max-num-seq 256</code>，所以理论上我们可以并行发送 256 个请求！！我不敢相信，也许我以后会尝试这些测试。</p><p>以下是我的最终想法</p><h2 id="_3、最终决定-⚖️" tabindex="-1">3、最终决定……⚖️ <a class="header-anchor" href="#_3、最终决定-⚖️" aria-label="Permalink to &quot;3、最终决定……⚖️&quot;">​</a></h2><ul><li>性能概述：获胜者显然是 vLLM。正如我们在本文第二部分中看到的那样，通过 1 个请求，我获得了 11% 的改进（Ollama 26 tok/秒 vs vLLM 29 tok/秒）。</li><li>资源管理：毫无疑问，vLLM 是这里的王者。当我看到 Ollama 无法并行处理许多请求时，我感到非常失望，由于资源管理效率低下，它甚至无法并行处理 4 个请求。</li><li>易用性和开发性：没有什么比 Ollama 更容易的了。即使你不是专家，也可以使用一行代码轻松与 LLM 聊天。同时，vLLM 需要一些知识，例如 docker 和更多参数。</li><li>生产就绪性：vLLM 就是为此而创建的，甚至许多无服务器端点提供商公司（我有我的来源🤣）都在将此框架用于他们的端点。</li><li>安全性：vLLM 出于安全目的支持令牌授权，而 Ollama 则不支持。因此，如果你没有很好地保护它，任何人都可以访问你的端点。</li><li>文档：这两个框架采用不同的文档方法：Ollama 的文档简单且适合初学者，但缺乏技术深度，尤其是在性能和并行处理方面。他们的 GitHub 讨论经常留下关键问题未得到解答。相比之下，vLLM 提供全面的技术文档，其中包含详细的 API 参考和指南。他们的 GitHub 维护良好，开发人员反应迅速，有助于排除故障和理解，他们甚至为此专门设立了一个网站。</li></ul><p>所以，从我的角度来看，赢家是…… 没有一个！</p><p>在我看来，如果你的目标是在本地环境甚至远程服务器上快速试验大型语言模型，而无需太多设置麻烦，Ollama 无疑是你的首选解决方案。它的简单性和易用性使其非常适合快速原型设计、测试想法，或者适合刚开始使用 LLM 并希望学习曲线平缓的开发人员。</p><p>但是，当我们将重点转移到性能、可扩展性和资源优化至关重要的生产环境时，vLLM 显然大放异彩。它对并行请求的出色处理、高效的 GPU 利用率和强大的文档使其成为严肃、大规模部署的有力竞争者。该框架从可用硬件资源中榨取最大性能的能力尤其令人印象深刻，并且可能会改变那些希望优化其 LLM 基础设施的公司的游戏规则。</p><p>话虽如此，Ollama 和 vLLM 之间的决定不应凭空而来。它必须取决于你的特定用例，并考虑以下因素：</p><ul><li>你的项目规模</li><li>你团队的技术专长</li><li>应用程序的特定性能要求</li><li>你的开发时间表和资源</li><li>定制和微调的需求</li><li>长期维护和支持注意事项</li></ul><p>本质上，虽然 vLLM 可能为生产环境提供更高性能和可扩展性提供支持，Ollama 的简单性对于某些场景来说可能是无价的，尤其是在开发的早期阶段或较小规模的项目。</p><p>最终，最好的选择将是最符合你项目独特需求和约束的选择。值得考虑的是，在某些情况下，你甚至可能受益于同时使用：Ollama 用于快速原型设计和初始开发，而 vLLM 则用于你准备扩展和优化生产。这种混合方法可以为你提供两全其美的效果，让你可以在项目生命周期的不同阶段利用每个框架的优势。</p><h2 id="联系我" tabindex="-1">联系我 <a class="header-anchor" href="#联系我" aria-label="Permalink to &quot;联系我&quot;">​</a></h2><p>最后，推荐大家关注一下开源项目：LangChat，Java生态下的AIGC大模型产品解决方案。</p><ul><li>LangChat产品官网：<a href="https://langchat.cn/" target="_blank" rel="noreferrer">https://langchat.cn/</a></li><li>Github: <a href="https://github.com/TyCoding/langchat" target="_blank" rel="noreferrer">https://github.com/TyCoding/langchat</a></li><li>Gitee: <a href="https://gitee.com/langchat/langchat" target="_blank" rel="noreferrer">https://gitee.com/langchat/langchat</a></li><li>微信：LangchainChat</li></ul><p><img src="http://cdn.tycoding.cn/docs/202502151026673.png" alt="iShot_2025-02-12_12.18.53" loading="lazy"></p>`,56)]))}const g=n(p,[["render",t]]);export{h as __pageData,g as default};
