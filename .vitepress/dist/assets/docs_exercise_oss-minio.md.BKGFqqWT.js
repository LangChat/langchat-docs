import{_ as a,c as n,o as e,ag as t}from"./chunks/framework.ByciF0Oj.js";const l="/assets/bt-docker-install-1.D5Vu5rr2.png",h="/assets/create-key-1.BaoSfSTt.png",s="/assets/create-key-2.DcHAV-CK.png",p="/assets/create-bucket-1.DG_Wcucd.png",k="/assets/create-bucket-2.xXWB6Yc0.png",F=JSON.parse('{"title":"LangChat如何配置OSS - Minio","description":"","frontmatter":{},"headers":[],"relativePath":"docs/exercise/oss-minio.md","filePath":"docs/exercise/oss-minio.md","lastUpdated":1739414027000}'),o={name:"docs/exercise/oss-minio.md"};function r(d,i,c,g,m,E){return e(),n("div",null,i[0]||(i[0]=[t(`<h1 id="langchat如何配置oss-minio" tabindex="-1">LangChat如何配置OSS - Minio <a class="header-anchor" href="#langchat如何配置oss-minio" aria-label="Permalink to &quot;LangChat如何配置OSS - Minio&quot;">​</a></h1><blockquote><p>langChat支持常见的OOS存储服务，这里介绍如何搭建与配置minio，本文提供四种方式。</p><ol><li>docker安装minio</li><li>docker安装minio（宝塔面板）</li><li>二进制文件安装minio</li><li>二进制文件安装minio（宝塔面板）</li></ol></blockquote><h2 id="安装minio" tabindex="-1">安装minio <a class="header-anchor" href="#安装minio" aria-label="Permalink to &quot;安装minio&quot;">​</a></h2><h3 id="docker安装minio" tabindex="-1">docker安装minio <a class="header-anchor" href="#docker安装minio" aria-label="Permalink to &quot;docker安装minio&quot;">​</a></h3><p>这里假设你已经安装docker，如果没有安装docker，请参考<a href="https://www.docker.com/get-started" target="_blank" rel="noreferrer">docker安装</a></p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -d</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --name</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> minio</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --restart</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> always</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  -p</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 9000:9000</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -p9001:9001</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  -e</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> MINIO_ROOT_USER=admin</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  -e</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> MINIO_ROOT_PASSWORD=admin123</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  -v</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /www/dk_project/dk_app/dk_minio/data:/data</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  bitnami/minio:latest</span></span></code></pre></div><p>上面的命令中，-p 9000:9000 是暴露端口，-p 9001:9001 是管理端口，-e MINIO_ROOT_USER=admin 是设置用户名，-e MINIO_ROOT_PASSWORD=admin123 是设置密码，-v /www/dk_project/dk_app/dk_minio/data:/data 是设置数据存储路径，bitnami/minio:latest 是镜像名称。</p><h3 id="docker安装minio-宝塔面板" tabindex="-1">docker安装minio（宝塔面板） <a class="header-anchor" href="#docker安装minio-宝塔面板" aria-label="Permalink to &quot;docker安装minio（宝塔面板）&quot;">​</a></h3><p>这里假设你已经安装宝塔面板，如果没有安装宝塔面板，请参考<a href="https://www.bt.cn/" target="_blank" rel="noreferrer">宝塔面板</a></p><ol><li>登录宝塔面板</li><li>点击左侧菜单的“软件商店”</li><li>在搜索框中输入“minio”，点击搜索结果中的“minio(Docker应用) 2.0.1”,然后选中弹窗中的安装配置，绑定域名这里根据实际情况填写， 无域名勾选“不使用域名即可”。</li><li>其它参数可以保持默认，点击“安装应用(安装过则是重建应用)”按钮，等待安装完成。 <img src="`+l+`" alt="bt-docker-install-1.png" loading="lazy"></li><li>安装完成后，点击左侧菜单的“应用信息”，就可以看到minio的访问地址和用户名密码，即可进入minio的管理界面。</li></ol><p>** 特别说明：** 宝塔面板的docker应用都是基于docker-compose安装的，所以如果你想手动修改配置文件，可以在宝塔面板中<code>/www/dk_project/dk_app/dk_minio</code>，然后进入<code>docker-compose.yml</code>文件中进行修改。</p><h3 id="二进制文件安装minio-只支持linux" tabindex="-1">二进制文件安装minio(只支持linux) <a class="header-anchor" href="#二进制文件安装minio-只支持linux" aria-label="Permalink to &quot;二进制文件安装minio(只支持linux)&quot;">​</a></h3><p>下载minio二进制文件，下载地址为<code>https://dl.min.io/server/minio/release/</code>。<br> 这里以linux-amd64为例，下载地址为<code>https://dl.min.io/server/minio/release/linux-amd64/minio</code> ，下载完成后，将minio文件移动到<code>/usr/local/bin</code>目录下，然后创建一个目录<code>/data</code>，然后执行<code>minio server /data</code>命令，即可启动minio服务。</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /usr/local/bin/</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">wget</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://dl.min.io/server/minio/release/linux-amd64/minio</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">mkdir</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -p</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /data/minio</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 以下三种选一个就行</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">minio</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> server</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /data/minio</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">nohup</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> minio</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> server</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --console-address</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;:9001&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --address</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;:9000&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -C</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /data/minio</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> &amp;</span></span></code></pre></div><p>安装完成之后，如果刚刚启动时指定了access-key和secret-key，那么在浏览器中访问<code>http://localhost:9001</code>，即可进入minio的登录界面，用户名为admin，密码为admin123。否则也可以使用默认用户名minioadmin和人默认密码minioadmin登录。</p><h3 id="二进制文件安装minio-宝塔面板" tabindex="-1">二进制文件安装minio（宝塔面板） <a class="header-anchor" href="#二进制文件安装minio-宝塔面板" aria-label="Permalink to &quot;二进制文件安装minio（宝塔面板）&quot;">​</a></h3><p>在宝塔面板的软件商店中搜索minio，然后安装即可，不要选择docker版应用，该安装方式本人未实际操作，只提供参考。</p><h2 id="配置minio到langchat" tabindex="-1">配置minio到LangChat <a class="header-anchor" href="#配置minio到langchat" aria-label="Permalink to &quot;配置minio到LangChat&quot;">​</a></h2><h3 id="配置minio" tabindex="-1">配置minio <a class="header-anchor" href="#配置minio" aria-label="Permalink to &quot;配置minio&quot;">​</a></h3><h5 id="配置access-key和secret-key" tabindex="-1">配置access-key和secret-key <a class="header-anchor" href="#配置access-key和secret-key" aria-label="Permalink to &quot;配置access-key和secret-key&quot;">​</a></h5><p>在浏览器中访问<code>http://localhost:9001</code>,输入安装时设置的用户名和密码，进入minio的管理界面。在页面左侧点击“Access Keys”，新增access-key和secret-key。 <img src="`+h+'" alt="create-key-1.png" loading="lazy"><img src="'+s+'" alt="create-key-2.png" loading="lazy"><img src="'+s+'" alt="create-key-2.png" loading="lazy"><strong>记得保存下生成的key，后面会用到</strong>。</p><h5 id="创建桶" tabindex="-1">创建桶 <a class="header-anchor" href="#创建桶" aria-label="Permalink to &quot;创建桶&quot;">​</a></h5><p>在浏览器中访问<code>http://localhost:9001</code>,输入安装时设置的用户名和密码，进入minio的管理界面。在页面左侧点击“Buckets”， 我这里新建一个桶，名称为ycs，然后点击“Create Bucket”，即可创建一个桶。<br> **这里的桶的Access Policy一定要配置为“public” **。 <img src="'+p+'" alt="create-bucket-1.png" loading="lazy"><img src="'+k+`" alt="create-bucket-2.png" loading="lazy"></p><h3 id="langchat配置" tabindex="-1">LangChat配置 <a class="header-anchor" href="#langchat配置" aria-label="Permalink to &quot;LangChat配置&quot;">​</a></h3><h5 id="langchat-common-oss的pom-xml增加对minio的依赖" tabindex="-1">langchat-common-oss的pom.xml增加对minio的依赖 <a class="header-anchor" href="#langchat-common-oss的pom-xml增加对minio的依赖" aria-label="Permalink to &quot;langchat-common-oss的pom.xml增加对minio的依赖&quot;">​</a></h5><div class="language-xml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">xml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">dependency</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">groupId</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;io.minio&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">groupId</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">artifactId</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;minio&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">artifactId</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">version</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;8.5.12&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">version</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">dependency</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><h5 id="修改application-dev-yml文件-增加以下配置" tabindex="-1">修改application-dev.yml文件，增加以下配置 <a class="header-anchor" href="#修改application-dev-yml文件-增加以下配置" aria-label="Permalink to &quot;修改application-dev.yml文件，增加以下配置&quot;">​</a></h5><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">langchat</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  oss</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    default-platform</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">minio</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    minio</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">platform</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">minio</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 存储平台标识，七牛：qiniu、阿里OSS：aliyun-oss、腾讯OSS：tencent-cos</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        enable-storage</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 启用存储</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        access-key</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">w6YFEW7eugorhgrbUqR9</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        secret-key</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">eN3ezX6yXXVKXEizxDynWwVaF1cDiWXMCAaLZOdQ</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        bucket-name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">ycs</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        domain</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">http://47.119.118.6:9000/ycs</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 访问域名，注意“/”结尾，例如：http://abc.hn-bkt.clouddn.com/</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        base-path</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 基础路径</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        end-point</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">http://47.119.118.6:9000/</span></span></code></pre></div><p><strong>注意：</strong> 这里的<code>accessKey</code>和<code>secretKey</code>是你在minio中创建的key，<code>bucketName</code>是你的桶名称，<code>endpoint</code>是minio服务的地址，<code>pathStyleAccessEnabled</code>设置为true。</p><h3 id="测试上传文件" tabindex="-1">测试上传文件 <a class="header-anchor" href="#测试上传文件" aria-label="Permalink to &quot;测试上传文件&quot;">​</a></h3><p>在LangChat项目中，找到知识库管理模块，点击上传文件，上传一个文件，即可测试上传文件功能。如果上传成功，在minio中可以看到上传的文件，并且可以下载；如果解析成功，可以在知识库看到对应文成生成的切片数据。</p>`,31)]))}const C=a(o,[["render",r]]);export{F as __pageData,C as default};
