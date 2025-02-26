import{_ as s,c as n,o as p,ag as e}from"./chunks/framework.ByciF0Oj.js";const h=JSON.parse('{"title":"vLLM 大模型本地推理库","description":"","frontmatter":{},"headers":[],"relativePath":"docs/other/vllm-llm-local-inference-library.md","filePath":"docs/other/vllm-llm-local-inference-library.md","lastUpdated":1740531902000}'),t={name:"docs/other/vllm-llm-local-inference-library.md"};function l(o,a,i,c,r,d){return p(),n("div",null,a[0]||(a[0]=[e(`<h1 id="vllm-大模型本地推理库" tabindex="-1">vLLM 大模型本地推理库 <a class="header-anchor" href="#vllm-大模型本地推理库" aria-label="Permalink to &quot;vLLM 大模型本地推理库&quot;">​</a></h1><p>vLLM 是一个开源项目，允许你进行 LLM 推理和服务。本文介绍如何配置和运行 vLLM 以在生产中提供开源大模型的推理服务。</p><h3 id="关于langchat" tabindex="-1">关于LangChat <a class="header-anchor" href="#关于langchat" aria-label="Permalink to &quot;关于LangChat&quot;">​</a></h3><p><strong>LangChat</strong> 是Java生态下企业级AIGC项目解决方案，集成RBAC和AIGC大模型能力，帮助企业快速定制AI知识库、企业AI机器人。</p><p><strong>支持的AI大模型：</strong> Gitee AI / 阿里通义 / 百度千帆 / DeepSeek / 抖音豆包 / 智谱清言 / 零一万物 / 讯飞星火 / OpenAI / Gemini / Ollama / Azure / Claude 等大模型。</p><ul><li>官网地址：<a href="http://langchat.cn/" target="_blank" rel="noreferrer">http://langchat.cn/</a></li></ul><p><strong>开源地址：</strong></p><ul><li>Gitee：<a href="https://gitee.com/langchat/langchat" target="_blank" rel="noreferrer">https://gitee.com/langchat/langchat</a></li><li>Github：<a href="https://github.com/tycoding/langchat" target="_blank" rel="noreferrer">https://github.com/tycoding/langchat</a></li></ul><p><img src="http://cdn.tycoding.cn/docs/202502151026673.png" alt="iShot_2025-02-12_12.18.53" loading="lazy"></p><p><a href="https://docs.vllm.ai/en/latest/" target="_blank" rel="noreferrer">vLLM </a>是当今最令人兴奋的 LLM 项目之一。每月下载量超过 20 万次，并拥有宽松的 Apache 2.0 许可证，vLLM 正成为一种越来越流行的大规模提供 LLM 的方式。</p><p>在本教程中，我将向你展示如何配置和运行 vLLM 以在生产中提供开源 LLM。</p><h2 id="_1、开始使用-vllm" tabindex="-1">1、开始使用 vLLM <a class="header-anchor" href="#_1、开始使用-vllm" aria-label="Permalink to &quot;1、开始使用 vLLM&quot;">​</a></h2><p>对于 vLLM 新手，我们首先解释一下什么是 vLLM。</p><p>vLLM 是一个开源项目，允许你进行 LLM 推理和服务。推理意味着你可以下载模型权重并将其传递给 vLLM 以通过其 Python API 执行推理；以下是其文档中的一个示例：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>from vllm import LLM, SamplingParams</span></span>
<span class="line"><span></span></span>
<span class="line"><span>prompts = [</span></span>
<span class="line"><span>    &quot;Hello, my name is&quot;,</span></span>
<span class="line"><span>    &quot;The president of the United States is&quot;,</span></span>
<span class="line"><span>    &quot;The capital of France is&quot;,</span></span>
<span class="line"><span>    &quot;The future of AI is&quot;,</span></span>
<span class="line"><span>]</span></span>
<span class="line"><span></span></span>
<span class="line"><span># initialize</span></span>
<span class="line"><span>sampling_params = SamplingParams(temperature=0.8, top_p=0.95)</span></span>
<span class="line"><span>llm = LLM(model=&quot;facebook/opt-125m&quot;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span># perform the inference</span></span>
<span class="line"><span>outputs = llm.generate(prompts, sampling_params)</span></span>
<span class="line"><span></span></span>
<span class="line"><span># print outputs</span></span>
<span class="line"><span>for output in outputs:</span></span>
<span class="line"><span>    prompt = output.prompt</span></span>
<span class="line"><span>    generated_text = output.outputs[0].text</span></span>
<span class="line"><span>    print(f&quot;Prompt: {prompt!r}, Generated text: {generated_text!r}&quot;)</span></span></code></pre></div><p>在这方面，vLLM 与 Hugginface 的 <a href="https://github.com/huggingface/transformers" target="_blank" rel="noreferrer">transformers</a> 库类似，作为比较，以下是使用 transformers 对同一模型进行推理的方法：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>from transformers import pipeline</span></span>
<span class="line"><span></span></span>
<span class="line"><span>generator = pipeline(&#39;text-generation&#39;, model=&quot;facebook/opt-125m&quot;)</span></span>
<span class="line"><span>generator(&quot;Hello, my name is&quot;)</span></span></code></pre></div><p>正如我在前面的例子中所展示的那样，使用 Python API 运行推理对于快速测试来说很好，但在生产环境中，我们希望提供一个简单的界面来与模型交互，以便系统的其他部分可以轻松调用它，一个很好的解决方案是通过 API 公开我们的模型。</p><p>假设你发现了 vLLM，现在你想构建一个 REST API 来为模型提供服务，你可以构建一个像这样的 Flask 应用程序：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>from flask import Flask, request, jsonify</span></span>
<span class="line"><span>from vllm import LLM, SamplingParams</span></span>
<span class="line"><span></span></span>
<span class="line"><span>app = Flask(__name__)</span></span>
<span class="line"><span>sampling_params = SamplingParams(temperature=0.8, top_p=0.95)</span></span>
<span class="line"><span>llm = LLM(model=&quot;facebook/opt-125m&quot;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@app.route(&#39;/generate&#39;, methods=[&#39;POST&#39;])</span></span>
<span class="line"><span>def generate():</span></span>
<span class="line"><span>    data = request.get_json()</span></span>
<span class="line"><span>    prompts = data.get(&#39;prompts&#39;, [])</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    outputs = llm.generate(prompts, sampling_params)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    # Prepare the outputs.</span></span>
<span class="line"><span>    results = []</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    for output in outputs:</span></span>
<span class="line"><span>        prompt = output.prompt</span></span>
<span class="line"><span>        generated_text = output.outputs[0].text</span></span>
<span class="line"><span>        results.append({</span></span>
<span class="line"><span>            &#39;prompt&#39;: prompt,</span></span>
<span class="line"><span>            &#39;generated_text&#39;: generated_text</span></span>
<span class="line"><span>        })</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    return jsonify(results)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>if __name__ == &#39;__main__&#39;:</span></span>
<span class="line"><span>    app.run(host=&#39;0.0.0.0&#39;, port=5000)</span></span></code></pre></div><p>我们的用户现在可以通过访问 <code>/generate</code> 端点来使用我们的模型。但是，这有很多限制：如果许多用户同时点击端点，Flask 将尝试同时运行它们并崩溃。我们还需要实现我们的身份验证机制。最后，互操作性是有限的；用户必须阅读我们模型的 REST API 文档才能与我们的模型交互。</p><p>这就是 vLLM 的服务部分大放异彩的地方，因为它为我们提供了所有这些。如果 vLLM 的 Python API 类似于 transformers 库，那么 vLLM 的服务器类似于 <a href="https://github.com/huggingface/text-generation-inference" target="_blank" rel="noreferrer">TGI</a>。</p><p>现在我们已经解释了 vLLM 的基础知识；让我们安装它吧！</p><h2 id="_2、安装-vllm" tabindex="-1">2、安装 vLLM <a class="header-anchor" href="#_2、安装-vllm" aria-label="Permalink to &quot;2、安装 vLLM&quot;">​</a></h2><p>安装 vLLM 很简单：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>pip install vllm</span></span></code></pre></div><p>请记住，vLLM 需要 Linux 和 Python &gt;=3.8。此外，它还需要计算能力 &gt;=7.0 的 GPU（例如 V100、T4、RTX20xx、A100、L4、H100）。</p><p>最后，vLLM 是使用 CUDA 12.1 编译的，因此你需要确保你的机器正在运行此 CUDA 版本。要检查它，请运行：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>nvcc --version</span></span></code></pre></div><p>如果你没有运行 CUDA 12.1，可以安装使用你正在运行的 CUDA 版本编译的 vLLM 版本（请参阅<a href="https://docs.vllm.ai/en/latest/getting_started/installation.html" target="_blank" rel="noreferrer">安装说明</a>以了解更多信息），或者安装 CUDA 12.1。</p><h2 id="_3、检查你的vllm安装" tabindex="-1">3、检查你的vLLM安装 <a class="header-anchor" href="#_3、检查你的vllm安装" aria-label="Permalink to &quot;3、检查你的vLLM安装&quot;">​</a></h2><p>在继续之前，我建议你通过运行一些健全性检查来检查你的vLLM安装：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># ensure torch is working with CUDA, this should print: True</span></span>
<span class="line"><span>python -c &#39;import torch; print(torch.cuda.is_available())&#39;</span></span></code></pre></div><p>现在，将以下内容存储在 check-vllm.py 文件中：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>from vllm import LLM, SamplingParams</span></span>
<span class="line"><span>prompts = [</span></span>
<span class="line"><span>    &quot;Mexico is famous for &quot;,</span></span>
<span class="line"><span>    &quot;The largest country in the world is &quot;,</span></span>
<span class="line"><span>]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>sampling_params = SamplingParams(temperature=0.8, top_p=0.95)</span></span>
<span class="line"><span>llm = LLM(model=&quot;facebook/opt-125m&quot;)</span></span>
<span class="line"><span>responses = llm.generate(prompts, sampling_params)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>for response in responses:</span></span>
<span class="line"><span>    print(response.outputs[0].text)</span></span></code></pre></div><p>并运行脚本：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>python check-vllm.py</span></span></code></pre></div><p>模型加载后，你将看到一些输出；就我而言，我得到了这个：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>~~national~~ cultural and artistic art. They&#39;ve already worked with him.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>~~the country~~ a capitalist system with the highest GDP per capita in the world</span></span></code></pre></div><h2 id="_4、启动-vllm-服务器" tabindex="-1">4、启动 vLLM 服务器 <a class="header-anchor" href="#_4、启动-vllm-服务器" aria-label="Permalink to &quot;4、启动 vLLM 服务器&quot;">​</a></h2><p>现在我们已经安装了 vLLM，让我们启动服务器。基本命令如下：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>python -m vllm.entrypoints.openai.api_server --model=MODELTORUN</span></span></code></pre></div><p>其中 <code>MODELTORUN</code> 是你想要提供的模型，例如，提供 <code>google/gemma-2b</code>。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>python -m vllm.entrypoints.openai.api_server --model=google/gemma-2b</span></span></code></pre></div><p>请注意，某些模型（例如 <code>google/gemma-2b</code>）需要你接受其许可证，因此你需要创建一个 HuggingFace 帐户，接受该模型的许可证并生成访问令牌。</p><p>例如，在 HugginFace 上打开 <a href="https://huggingface.co/google/gemma-2b" target="_blank" rel="noreferrer">google/gemma-2b</a>（需要登录）时，你会看到以下内容：</p><p><img src="http://www.hubwiz.com/blog/content/images/2024/11/image-784.png" alt="img" loading="lazy"></p><p>接受许可证后，转到令牌部分并获取访问令牌，然后在启动 vLLM 之前按如下方式设置令牌：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>export HF_TOKEN=YOURTOKEN</span></span></code></pre></div><p>一旦设置了令牌，你就可以启动服务器。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>python -m vllm.entrypoints.openai.api_server --model=google/gemma-2b</span></span></code></pre></div><p>请注意，即使下载了权重，也需要令牌。否则，你将收到以下错误：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>  File &quot;/opt/conda/lib/python3.10/site-packages/huggingface_hub/hf_file_system.py&quot;, line 863, in _raise_file_not_found</span></span>
<span class="line"><span>    raise FileNotFoundError(msg) from err</span></span>
<span class="line"><span>FileNotFoundError: google/gemma-2b (repository not found)</span></span></code></pre></div><h2 id="_5、设置-dtype" tabindex="-1">5、设置 dtype <a class="header-anchor" href="#_5、设置-dtype" aria-label="Permalink to &quot;5、设置 dtype&quot;">​</a></h2><p>需要考虑的一个重要设置是 <code>dtype</code>，它控制模型权重的数据类型。你可能需要根据你的 GPU 调整此参数，例如尝试运行 <code>google/gemma-2b</code>：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># --dtype=auto is the default value</span></span>
<span class="line"><span>python -m vllm.entrypoints.openai.api_server --model=google/gemma-2b --dtype=auto</span></span></code></pre></div><p>在 NVIDIA Tesla T4 上出现以下错误：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>ValueError: Bfloat16 is only supported on GPUs with compute capability of at least 8.0.</span></span>
<span class="line"><span>Your Tesla T4 GPU has compute capability 7.5. You can use float16 instead by explicitly</span></span>
<span class="line"><span>setting the\`dtype\` flag in CLI, for example: --dtype=half.</span></span></code></pre></div><p>更改 <code>--dtype</code> 标志允许我们在 T4 上运行模型：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>python -m vllm.entrypoints.openai.api_server --model=google/gemma-2b --dtype=half</span></span></code></pre></div><p>如果这是你第一次使用传递的 <code>--model</code> 启动 vLLM，则需要几分钟时间，因为它必须下载权重。由于权重存储在 <code>~/.cache</code> 目录中，因此进一步的初始化将更快；但是，由于模型必须加载到内存中，因此仍然需要一些时间来加载（取决于模型大小）。</p><p>如果看到这样的消息：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>INFO:     Started server process [428]</span></span>
<span class="line"><span>INFO:     Waiting for application startup.</span></span>
<span class="line"><span>INFO:     Application startup complete.</span></span>
<span class="line"><span>INFO:     Uvicorn running on http://0.0.0.0:80 (Press CTRL+C to quit)</span></span></code></pre></div><p>vLLM 已准备好接受请求！</p><h2 id="_6、发出请求" tabindex="-1">6、发出请求 <a class="header-anchor" href="#_6、发出请求" aria-label="Permalink to &quot;6、发出请求&quot;">​</a></h2><p>服务器运行后，你可以发出请求；以下是使用 <code>google/gemma-2b</code> 和 Python<code>request</code>库的示例：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># remember to run: pip install requests</span></span>
<span class="line"><span>import requests</span></span>
<span class="line"><span>import json</span></span>
<span class="line"><span></span></span>
<span class="line"><span># change for your host</span></span>
<span class="line"><span>VLLM_HOST = &quot;https://autumn-snow-1380.ploomberapp.io&quot;</span></span>
<span class="line"><span>url = f&quot;{VLLM_HOST}/v1/completions&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>headers = {&quot;Content-Type&quot;: &quot;application/json&quot;}</span></span>
<span class="line"><span>data = {</span></span>
<span class="line"><span>    &quot;model&quot;: &quot;google/gemma-2b&quot;,</span></span>
<span class="line"><span>    &quot;prompt&quot;: &quot;JupySQL is&quot;,</span></span>
<span class="line"><span>    &quot;max_tokens&quot;: 100,</span></span>
<span class="line"><span>    &quot;temperature&quot;: 0</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>response = requests.post(url, headers=headers, data=json.dumps(data))</span></span>
<span class="line"><span></span></span>
<span class="line"><span>print(response.json()[&quot;choices&quot;][0][&quot;text&quot;])</span></span></code></pre></div><p>这是我收到的回复：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>JupySQL is a Python library that allows you to create and run SQL queries in Jupyter notebooks. It is a powerful tool for data analysis and visualization, and can be used to explore and manipulate large datasets.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>How does JupySQL work?</span></span>
<span class="line"><span></span></span>
<span class="line"><span>JupySQL works by connecting to a database server and executing SQL queries. It supports a wide range of databases, including MySQL, PostgreSQL, and SQLite.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Once you have connected to a database, you can create and run SQL queries in</span></span></code></pre></div><p>准确！</p><h2 id="_7、使用-openai-客户端" tabindex="-1">7、使用 OpenAI 客户端 <a class="header-anchor" href="#_7、使用-openai-客户端" aria-label="Permalink to &quot;7、使用 OpenAI 客户端&quot;">​</a></h2><p>vLLM 公开了一个模仿 OpenAI 的 API；这意味着你可以使用 OpenAI 的 Python 包直接调用你的 vLLM 服务器。让我们看一个例子：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># NOTE: remember to run: pip install openai</span></span>
<span class="line"><span>from openai import OpenAI</span></span>
<span class="line"><span></span></span>
<span class="line"><span># we haven&#39;t configured authentication, we pass a dummy value</span></span>
<span class="line"><span>openai_api_key = &quot;EMPTY&quot;</span></span>
<span class="line"><span># modify this value to match your host, remember to add /v1 at the end</span></span>
<span class="line"><span>openai_api_base = &quot;https://autumn-snow-1380.ploomberapp.io/v1&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>client = OpenAI(</span></span>
<span class="line"><span>    api_key=openai_api_key,</span></span>
<span class="line"><span>    base_url=openai_api_base,</span></span>
<span class="line"><span>)</span></span>
<span class="line"><span>completion = client.completions.create(model=&quot;google/gemma-2b&quot;,</span></span>
<span class="line"><span>                                      prompt=&quot;JupySQL is&quot;,</span></span>
<span class="line"><span>                                      max_tokens=20)</span></span>
<span class="line"><span>print(completion.choices[0].text)</span></span></code></pre></div><p>我得到了以下输出：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>a powerful SQL editor and IDE. It integrates with Google Jupyter Notebook,</span></span>
<span class="line"><span>which allows users to create and</span></span></code></pre></div><h2 id="_8、使用openai聊天api" tabindex="-1">8、使用OpenAI聊天API <a class="header-anchor" href="#_8、使用openai聊天api" aria-label="Permalink to &quot;8、使用OpenAI聊天API&quot;">​</a></h2><p>上一个示例使用了完成 API；但你可能更熟悉聊天 API。请注意，如果你使用聊天 API，则必须确保使用指令调整模型。 <code>google/gemma-2b</code> 未针对指令进行调整；让我们改用 <code>google/gemma-2b-it</code>，让我们启动 vLLM 服务器以使用此类模型：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>python -m vllm.entrypoints.openai.api_server \\</span></span>
<span class="line"><span>    --host 0.0.0.0 --port 80 \\</span></span>
<span class="line"><span>    --model google/gemma-2b \\</span></span>
<span class="line"><span>    --dtype=half</span></span></code></pre></div><p>现在我们可以使用 <code>client.chat.completions.create</code>函数：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># NOTE: remember to run: pip install openai</span></span>
<span class="line"><span>from openai import OpenAI</span></span>
<span class="line"><span></span></span>
<span class="line"><span>openai_api_key = &quot;EMPTY&quot;</span></span>
<span class="line"><span>openai_api_base = &quot;https://autumn-snow-1380.ploomberapp.io/v1&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>client = OpenAI(</span></span>
<span class="line"><span>    api_key=openai_api_key,</span></span>
<span class="line"><span>    base_url=openai_api_base,</span></span>
<span class="line"><span>)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>chat_response = client.chat.completions.create(</span></span>
<span class="line"><span>    model=&quot;google/gemma-2b-it&quot;,</span></span>
<span class="line"><span>    messages=[</span></span>
<span class="line"><span>        {&quot;role&quot;: &quot;user&quot;, &quot;content&quot;: &quot;Tell me in one sentence what Mexico is famous for&quot;},</span></span>
<span class="line"><span>    ]</span></span>
<span class="line"><span>)</span></span>
<span class="line"><span>print(chat_response.choices[0].message.content)</span></span></code></pre></div><p>输出：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>Mexico is known for its rich culture, vibrant cities, stunning natural beauty,</span></span>
<span class="line"><span>and delicious cuisine.</span></span></code></pre></div><p>看起来很准确！</p><p>如果你以前使用过 OpenAI 的 API，你可能还记得 <code>messages</code> 参数通常包含一些带有 <code>{&quot;role&quot;: &quot;system&quot;, &quot;content&quot;: ...}</code> 的消息：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>chat_response = client.chat.completions.create(</span></span>
<span class="line"><span>    model=&quot;google/gemma-2b-it&quot;,</span></span>
<span class="line"><span>    messages=[</span></span>
<span class="line"><span>        {&quot;role&quot;: &quot;system&quot;, &quot;content&quot;: &quot;You&#39;re a helful assistant.&quot;},</span></span>
<span class="line"><span>        {&quot;role&quot;: &quot;user&quot;, &quot;content&quot;: &quot;Tell me in one sentence what Mexico is famous for&quot;},</span></span>
<span class="line"><span>    ]</span></span></code></pre></div><p>但是有些模型不支持系统角色，例如 <code>google/gemma-2b-it</code> 返回以下内容：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>BadRequestError: Error code: 400 - {&#39;object&#39;: &#39;error&#39;, &#39;message&#39;: &#39;System role not</span></span>
<span class="line"><span>supported&#39;, &#39;type&#39;: &#39;BadRequestError&#39;, &#39;param&#39;: None, &#39;code&#39;: 400}</span></span></code></pre></div><p>查看你的模型的文档以了解如何使用聊天 API。</p><h2 id="_9、安全设置" tabindex="-1">9、安全设置 <a class="header-anchor" href="#_9、安全设置" aria-label="Permalink to &quot;9、安全设置&quot;">​</a></h2><p>默认情况下，你的服务器不会进行任何身份验证。如果你计划将服务器暴露给互联网，请确保设置 API 密钥；你可以按如下方式生成一个：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>export VLLM_API_KEY=$(python -c &#39;import secrets; print(secrets.token_urlsafe())&#39;)</span></span>
<span class="line"><span># print the API key</span></span>
<span class="line"><span>echo $VLLM_API_KEY</span></span></code></pre></div><p>并启动 vLLM：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>python -m vllm.entrypoints.openai.api_server --model google/gemma-2b-it --dtype=half</span></span></code></pre></div><p>现在，我们的服务器将受到保护，所有没有 API 密钥的请求都将被拒绝。请注意，在上一个命令中，我们没有传递 <code>--api-key</code>，因为 vLLM 将自动读取 <code>VLLM_API_KEY</code> 环境变量。</p><p>通过使用任何先前的 Python 代码片段进行调用来测试你的服务器是否具有 API 密钥身份验证，你将看到以下错误：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>No key: \`AuthenticationError: Error code: 401 - {&#39;error&#39;: &#39;Unauthorized&#39;}\`</span></span></code></pre></div><p>要解决此问题，请使用正确的 API 密钥初始化 OpenAI 客户端：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>from openai import OpenAI</span></span>
<span class="line"><span></span></span>
<span class="line"><span>openai_api_key = &quot;THE_ACTUAL_API_KEY&quot;</span></span>
<span class="line"><span>openai_api_base = &quot;https://autumn-snow-1380.ploomberapp.io/v1&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>client = OpenAI(</span></span>
<span class="line"><span>    api_key=openai_api_key,</span></span>
<span class="line"><span>    base_url=openai_api_base,</span></span>
<span class="line"><span>)</span></span></code></pre></div><p>另一个基本安全要求是通过 HTTPS 提供 API；但是，这需要额外的配置，例如获取 TLS 证书。</p><h2 id="_10、生产部署注意事项" tabindex="-1">10、生产部署注意事项 <a class="header-anchor" href="#_10、生产部署注意事项" aria-label="Permalink to &quot;10、生产部署注意事项&quot;">​</a></h2><p>以下是生产部署的一些注意事项：</p><ul><li>部署 vLLM 时，必须确保 API 在崩溃时（或物理服务器重新启动时）重新启动。你可以使用 systemd 等工具执行此操作。</li><li>为了使你的部署更具可移植性，我们建议使用 docker。此外，请确保固定所有 Python 依赖项，以便升级不会破坏你的安装（例如，使用 <code>pip freeze</code>）。</li></ul><h2 id="_11、使用-pytorch-的-docker-镜像" tabindex="-1">11、使用 PyTorch 的 docker 镜像 <a class="header-anchor" href="#_11、使用-pytorch-的-docker-镜像" aria-label="Permalink to &quot;11、使用 PyTorch 的 docker 镜像&quot;">​</a></h2><p>我们建议使用 PyTorch 的官方 Docker 镜像，因为它已经安装了 torch 和 CUDA 驱动程序。</p><p>以下是可以使用的示例 Dockerfile：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>FROM pytorch/pytorch:2.1.2-cuda12.1-cudnn8-devel</span></span>
<span class="line"><span></span></span>
<span class="line"><span>WORKDIR /srv</span></span>
<span class="line"><span>RUN pip install vllm==0.3.3 --no-cache-dir</span></span>
<span class="line"><span></span></span>
<span class="line"><span># if the model you want to serve requires you to accept the license terms,</span></span>
<span class="line"><span># you must pass a HF_TOKEN environment variable, also ensure to pass a VLLM_API_KEY</span></span>
<span class="line"><span># environment variable to authenticate your API</span></span>
<span class="line"><span>ENTRYPOINT [&quot;python&quot;, &quot;-m&quot;, &quot;vllm.entrypoints.openai.api_server&quot;, \\</span></span>
<span class="line"><span>            &quot;--host&quot;, &quot;0.0.0.0&quot;, &quot;--port&quot;, &quot;80&quot;, \\</span></span>
<span class="line"><span>            &quot;--model&quot;, &quot;google/gemma-2b-it&quot;, \\</span></span>
<span class="line"><span>            # depending on your GPU, you might or might not need to pass --dtype</span></span>
<span class="line"><span>            &quot;--dtype=half&quot;]</span></span></code></pre></div><h2 id="_12、关于-transformers-4-39-1的问题" tabindex="-1">12、关于 transformers==4.39.1的问题 <a class="header-anchor" href="#_12、关于-transformers-4-39-1的问题" aria-label="Permalink to &quot;12、关于 transformers==4.39.1的问题&quot;">​</a></h2><p>tl;dr; 在官方 PyTorch docker 镜像中安装 vLLM 时，请确保使用具有正确 PyTorch 版本的镜像。为此，请检查相应的 <code>pyproject.toml</code>文件</p><p>在开发本指南时，我们在 <code>transformers</code> 包中遇到了一个错误。我们编写了一个使用 <code>torch2.2.2</code>（撰写本文时的最新版本）的 Dockerfile，然后安装了 <code>vllm0.3.3</code>：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>FROM pytorch/pytorch:2.2.2-cuda12.1-cudnn8-devel</span></span>
<span class="line"><span>RUN pip install vllm==0.3.3</span></span></code></pre></div><p>但是，在启动 vLLM 服务器时，我们遇到了以下错误：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>File /opt/conda/lib/python3.10/site-packages/transformers/utils/generic.py:478</span></span>
<span class="line"><span>    475     return output_type(**dict(zip(context, values)))</span></span>
<span class="line"><span>    477 if version.parse(get_torch_version()) &gt;= version.parse(&quot;2.2&quot;):</span></span>
<span class="line"><span>--&gt; 478     _torch_pytree.register_pytree_node(</span></span>
<span class="line"><span>    479         ModelOutput,</span></span>
<span class="line"><span>    480         _model_output_flatten,</span></span>
<span class="line"><span>    481         partial(_model_output_unflatten, output_type=ModelOutput),</span></span>
<span class="line"><span>    482         serialized_type_name=f&quot;{ModelOutput.__module__}.{ModelOutput.__name__}&quot;,</span></span>
<span class="line"><span>    483     )</span></span>
<span class="line"><span>    484 else:</span></span>
<span class="line"><span>    485     _torch_pytree._register_pytree_node(</span></span>
<span class="line"><span>    486         ModelOutput,</span></span>
<span class="line"><span>    487         _model_output_flatten,</span></span>
<span class="line"><span>    488         partial(_model_output_unflatten, output_type=ModelOutput),</span></span>
<span class="line"><span>    489     )</span></span>
<span class="line"><span></span></span>
<span class="line"><span>AttributeError: module &#39;torch.utils._pytree&#39; has no attribute &#39;register_pytree_node&#39;</span></span></code></pre></div><p>经过进一步调查，我们意识到问题出在 transformers 包中，具体来说，是在 <a href="https://github.com/huggingface/transformers/blob/a25037beb9f039270b30a94c34ead72ea80ae8a5/src/transformers/utils/import_utils.py#L41" target="_blank" rel="noreferrer">_is_package_available </a>函数中。此函数确定当前的 torch 版本，该版本在代码库的几个部分中使用。尽管 vLLM 不使用 transformers 进行推理，但它似乎使用它来加载模型配置参数。问题在于 transformers 库使用的方法可能会返回错误的版本。</p><p>在我们的例子中，Docker 镜像中有 <code>torch2.2.2</code>，但由于 vllm0.3.3 需要 <code>pyotrch2.1.2</code>，因此运行 <code>pip install vllm0.3.3</code> 会将 PyTorch 降级到版本 2.1.2，然而，transformers 认为它仍然有 <code>torch==2.2.2</code>，导致执行崩溃。</p><p>这发生在 <code>transformers==4.39.1</code> 上，因此它可能会在未来的版本中得到修复。</p><h2 id="联系我" tabindex="-1">联系我 <a class="header-anchor" href="#联系我" aria-label="Permalink to &quot;联系我&quot;">​</a></h2><p>最后，推荐大家关注一下开源项目：LangChat，Java生态下的AIGC大模型产品解决方案。</p><ul><li>LangChat产品官网：<a href="https://langchat.cn/" target="_blank" rel="noreferrer">https://langchat.cn/</a></li><li>Github: <a href="https://github.com/TyCoding/langchat" target="_blank" rel="noreferrer">https://github.com/TyCoding/langchat</a></li><li>Gitee: <a href="https://gitee.com/langchat/langchat" target="_blank" rel="noreferrer">https://gitee.com/langchat/langchat</a></li><li>微信：LangchainChat</li></ul><p><img src="http://cdn.tycoding.cn/docs/202502151026673.png" alt="" loading="lazy"></p>`,119)]))}const g=s(t,[["render",l]]);export{h as __pageData,g as default};
