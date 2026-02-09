<script setup lang="ts">
import DocsHeader from '@/components/zcomp/DocsHeader.vue'
import DocsSection from '@/components/zcomp/DocsSection.vue'
import ApiReference from '@/components/zcomp/ApiReference.vue'
import DocsContainer from '@/components/zcomp/DocsContainer.vue'

const apiClasses = [
  {
    category: '基础',
    className: 'mockup-code',
    description: '代码框展示',
    isCategoryStart: true,
  },
  {
    category: '基础',
    className: 'mockup-window',
    description: '窗口展示',
    isCategoryStart: false,
  },
  {
    category: '基础',
    className: 'mockup-browser',
    description: '浏览器展示',
    isCategoryStart: false,
  },
  {
    category: '基础',
    className: 'mockup-browser-toolbar',
    description: '浏览器工具栏',
    isCategoryStart: false,
  },
  {
    category: '基础',
    className: 'mockup-phone',
    description: '手机展示',
    isCategoryStart: false,
  },
  {
    category: '基础',
    className: 'mockup-phone-camera',
    description: '手机摄像头',
    isCategoryStart: false,
  },
  {
    category: '基础',
    className: 'mockup-phone-display',
    description: '手机屏幕',
    isCategoryStart: false,
  },
]
</script>

<template>
  <DocsContainer>
    <DocsHeader title="Mockup" description="原型展示组件，用于展示代码、窗口、浏览器和手机界面。" />

    <ApiReference :data="apiClasses"></ApiReference>

    <DocsSection title="代码框">
      <div class="mockup-code">
        <pre data-prefix="$"><code>npm install @tailwindcss/typography</code></pre>
      </div>
    </DocsSection>

    <DocsSection title="代码框多行">
      <div class="mockup-code">
        <pre data-prefix="1"><code>function hello() {</code></pre>
        <pre data-prefix="2"><code>  console.log('Hello World');</code></pre>
        <pre data-prefix="3"><code>}</code></pre>
        <pre data-prefix="4"><code></code></pre>
        <pre data-prefix="5"><code>hello();</code></pre>
      </div>
    </DocsSection>

    <DocsSection title="窗口展示">
      <div class="mockup-window border border-base-300">
        <div class="flex justify-center border-b border-base-300 bg-base-100 px-4 py-8">
          <div class="w-full max-w-md">
            <h2 class="text-xl font-bold mb-4">窗口内容</h2>
            <p class="text-base-content/70 mb-4">这是一个窗口展示框。您可以在其中显示任何内容。</p>
            <button class="btn btn-primary btn-sm">继续</button>
          </div>
        </div>
      </div>
    </DocsSection>

    <DocsSection title="浏览器展示">
      <div class="mockup-browser border border-base-300 bg-base-200">
        <div class="mockup-browser-toolbar">
          <div class="input">https://example.com</div>
        </div>
        <div class="flex justify-center border-t border-base-300 bg-base-100 px-4 py-8">
          <div class="text-center">
            <h1 class="text-3xl font-bold mb-4">欢迎访问</h1>
            <p class="text-base-content/70">这是浏览器窗口展示</p>
          </div>
        </div>
      </div>
    </DocsSection>

    <DocsSection title="手机展示">
      <div class="flex justify-center">
        <div class="mockup-phone">
          <div class="mockup-phone-camera"></div>
          <div class="mockup-phone-display">
            <div class="bg-white flex flex-col h-96">
              <div class="bg-primary text-primary-content p-4">
                <h1 class="text-xl font-bold">移动应用</h1>
              </div>
              <div class="flex-1 overflow-y-auto p-4">
                <div class="space-y-4">
                  <div class="card card-bordered">
                    <div class="card-body p-3">
                      <h3 class="card-title text-sm">功能 1</h3>
                      <p class="text-xs">功能描述</p>
                    </div>
                  </div>
                  <div class="card card-bordered">
                    <div class="card-body p-3">
                      <h3 class="card-title text-sm">功能 2</h3>
                      <p class="text-xs">功能描述</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="border-t p-3 flex gap-2">
                <button class="btn btn-primary btn-sm flex-1">确定</button>
                <button class="btn btn-ghost btn-sm flex-1">取消</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DocsSection>

    <DocsSection title="代码对比">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <p class="text-sm text-base-content/60 mb-2">之前</p>
          <div class="mockup-code text-sm">
            <pre data-prefix=">"><code>const x = 5;</code></pre>
            <pre data-prefix=">"><code>const y = 10;</code></pre>
            <pre data-prefix=">"><code>console.log(x + y);</code></pre>
          </div>
        </div>
        <div>
          <p class="text-sm text-base-content/60 mb-2">之后</p>
          <div class="mockup-code text-sm">
            <pre data-prefix=">"><code>const sum = (a, b) => a + b;</code></pre>
            <pre data-prefix=">"><code>console.log(sum(5, 10));</code></pre>
          </div>
        </div>
      </div>
    </DocsSection>

    <DocsSection title="HTML 代码示例">
      <div class="mockup-code">
        <pre data-prefix="1"><code>&lt;div class="card"&gt;</code></pre>
        <pre data-prefix="2"><code>  &lt;div class="card-body"&gt;</code></pre>
        <pre data-prefix="3"><code>    &lt;h2 class="card-title"&gt;标题&lt;/h2&gt;</code></pre>
        <pre data-prefix="4"><code>    &lt;p&gt;内容&lt;/p&gt;</code></pre>
        <pre data-prefix="5"><code>  &lt;/div&gt;</code></pre>
        <pre data-prefix="6"><code>&lt;/div&gt;</code></pre>
      </div>
    </DocsSection>

    <DocsSection title="CSS 代码示例">
      <div class="mockup-code">
        <pre data-prefix="1"><code>.button {</code></pre>
        <pre data-prefix="2"><code>  background-color: #007bff;</code></pre>
        <pre data-prefix="3"><code>  color: white;</code></pre>
        <pre data-prefix="4"><code>  padding: 0.5rem 1rem;</code></pre>
        <pre data-prefix="5"><code>  border-radius: 4px;</code></pre>
        <pre data-prefix="6"><code>}</code></pre>
      </div>
    </DocsSection>

    <DocsSection title="浏览器展示完整示例">
      <div class="mockup-browser border border-base-300 bg-base-200">
        <div class="mockup-browser-toolbar">
          <div class="input">https://docs.example.com</div>
        </div>
        <div class="flex justify-center border-t border-base-300 bg-base-100">
          <div class="w-full max-w-2xl p-8">
            <h1 class="text-3xl font-bold mb-4">文档</h1>
            <p class="text-base-content/70 mb-6">
              这是一个文档页面的展示。您可以在浏览器框中展示实际的网站内容。
            </p>
            <div class="space-y-4">
              <h2 class="text-xl font-bold">章节 1</h2>
              <p class="text-base-content/70">内容段落...</p>
              <h2 class="text-xl font-bold">章节 2</h2>
              <p class="text-base-content/70">内容段落...</p>
            </div>
          </div>
        </div>
      </div>
    </DocsSection>

    <DocsSection title="多个手机展示">
      <div class="flex justify-around flex-wrap gap-8">
        <div class="mockup-phone border-base-300">
          <div class="mockup-phone-camera"></div>
          <div class="mockup-phone-display">
            <div
              class="bg-linear-to-b from-primary to-primary-dark text-primary-content h-96 flex flex-col items-center justify-center"
            >
              <div class="text-5xl mb-4">📱</div>
              <p class="text-lg">屏幕 1</p>
            </div>
          </div>
        </div>

        <div class="mockup-phone border-base-300">
          <div class="mockup-phone-camera"></div>
          <div class="mockup-phone-display">
            <div
              class="bg-linear-to-b from-secondary to-secondary-dark text-secondary-content h-96 flex flex-col items-center justify-center"
            >
              <div class="text-5xl mb-4">📲</div>
              <p class="text-lg">屏幕 2</p>
            </div>
          </div>
        </div>
      </div>
    </DocsSection>
  </DocsContainer>
</template>
