<script setup lang="ts">
import DocsHeader from '@/components/zcomp/DocsHeader.vue'
import DocsSection from '@/components/zcomp/DocsSection.vue'
import ApiReference from '@/components/zcomp/ApiReference.vue'
import DocsContainer from '@/components/zcomp/DocsContainer.vue'

const apiClasses = [
  {
    category: '基础',
    className: 'select',
    description: '下拉选择框',
    isCategoryStart: true,
  },
  {
    category: '尺寸',
    className: 'select-xs',
    description: '超小',
    isCategoryStart: false,
  },
  {
    category: '尺寸',
    className: 'select-sm',
    description: '小',
    isCategoryStart: false,
  },
  {
    category: '尺寸',
    className: 'select-md',
    description: '中',
    isCategoryStart: false,
  },
  {
    category: '尺寸',
    className: 'select-lg',
    description: '大',
    isCategoryStart: false,
  },
  {
    category: '尺寸',
    className: 'select-xl',
    description: '超大',
    isCategoryStart: false,
  },
  {
    category: '标签',
    className: 'select-floating',
    description: '浮动标签',
    isCategoryStart: false,
  },
  {
    category: '标签',
    className: 'select-floating-label',
    description: '浮动标签文本',
    isCategoryStart: false,
  },
]
</script>

<template>
  <DocsContainer>
    <DocsHeader title="Select" description="下拉选择框组件，用于选择选项。" />

    <ApiReference :data="apiClasses"></ApiReference>

    <DocsSection title="基础下拉选择框">
      <select class="select w-full max-w-xs">
        <option disabled selected>选择一个选项</option>
        <option>选项 1</option>
        <option>选项 2</option>
        <option>选项 3</option>
      </select>
    </DocsSection>

    <DocsSection title="尺寸变体">
      <div class="space-y-4">
        <div>
          <p class="text-sm text-base-content/60 mb-2">超小 (xs)</p>
          <select class="select select-xs w-full max-w-xs">
            <option disabled selected>选择</option>
            <option>选项 1</option>
            <option>选项 2</option>
          </select>
        </div>

        <div>
          <p class="text-sm text-base-content/60 mb-2">小 (sm)</p>
          <select class="select select-sm w-full max-w-xs">
            <option disabled selected>选择</option>
            <option>选项 1</option>
            <option>选项 2</option>
          </select>
        </div>

        <div>
          <p class="text-sm text-base-content/60 mb-2">中 (md)</p>
          <select class="select select-md w-full max-w-xs">
            <option disabled selected>选择</option>
            <option>选项 1</option>
            <option>选项 2</option>
          </select>
        </div>

        <div>
          <p class="text-sm text-base-content/60 mb-2">大 (lg)</p>
          <select class="select select-lg w-full max-w-xs">
            <option disabled selected>选择</option>
            <option>选项 1</option>
            <option>选项 2</option>
          </select>
        </div>

        <div>
          <p class="text-sm text-base-content/60 mb-2">超大 (xl)</p>
          <select class="select select-xl w-full max-w-xs">
            <option disabled selected>选择</option>
            <option>选项 1</option>
            <option>选项 2</option>
          </select>
        </div>
      </div>
    </DocsSection>

    <DocsSection title="带标签">
      <label class="form-control w-full max-w-xs">
        <div class="label">
          <span class="label-text">选择国家</span>
        </div>
        <select class="select w-full max-w-xs">
          <option disabled selected>选择国家</option>
          <option>中国</option>
          <option>日本</option>
          <option>韩国</option>
          <option>美国</option>
        </select>
        <div class="label">
          <span class="helper-text">请选择您所在的国家</span>
        </div>
      </label>
    </DocsSection>

    <DocsSection title="浮动标签">
      <div class="select-floating w-full max-w-xs">
        <select class="select w-full">
          <option disabled selected></option>
          <option>React</option>
          <option>Vue</option>
          <option>Angular</option>
          <option>Svelte</option>
        </select>
        <label class="select-floating-label">选择框架</label>
      </div>
    </DocsSection>

    <DocsSection title="禁用状态">
      <div class="space-y-4 max-w-xs">
        <select class="select w-full">
          <option disabled selected>可用</option>
          <option>选项 1</option>
          <option>选项 2</option>
        </select>
        <select class="select w-full" disabled>
          <option disabled selected>禁用</option>
          <option>选项 1</option>
          <option>选项 2</option>
        </select>
      </div>
    </DocsSection>

    <DocsSection title="多选">
      <select class="select w-full max-w-xs h-auto" multiple>
        <option>HTML</option>
        <option>CSS</option>
        <option>JavaScript</option>
        <option>TypeScript</option>
        <option>React</option>
      </select>
    </DocsSection>

    <DocsSection title="分组选项">
      <select class="select w-full max-w-xs">
        <option disabled selected>选择浏览器</option>
        <optgroup label="Chromium">
          <option>Google Chrome</option>
          <option>Microsoft Edge</option>
          <option>Opera</option>
        </optgroup>
        <optgroup label="Mozilla">
          <option>Firefox</option>
        </optgroup>
        <optgroup label="Apple">
          <option>Safari</option>
        </optgroup>
      </select>
    </DocsSection>

    <DocsSection title="表单集成">
      <form class="space-y-4 max-w-md">
        <label class="form-control w-full">
          <div class="label">
            <span class="label-text">选择产品类别</span>
          </div>
          <select class="select w-full">
            <option disabled selected>选择类别</option>
            <option>电子产品</option>
            <option>图书</option>
            <option>服装</option>
            <option>食品</option>
          </select>
        </label>

        <label class="form-control w-full">
          <div class="label">
            <span class="label-text">选择颜色</span>
          </div>
          <select class="select w-full" multiple>
            <option>红色</option>
            <option>蓝色</option>
            <option>绿色</option>
            <option>黄色</option>
          </select>
        </label>

        <label class="form-control w-full">
          <div class="label">
            <span class="label-text">选择优先级</span>
          </div>
          <select class="select w-full">
            <option disabled selected>选择优先级</option>
            <option value="low">低</option>
            <option value="medium">中</option>
            <option value="high">高</option>
          </select>
        </label>

        <button type="submit" class="btn btn-primary w-full">提交</button>
      </form>
    </DocsSection>

    <DocsSection title="嵌套在输入框中">
      <div class="input input-bordered flex items-center gap-2">
        <select class="select border-0 bg-transparent flex-1">
          <option disabled selected>选择操作</option>
          <option>编辑</option>
          <option>删除</option>
          <option>导出</option>
        </select>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          class="w-5 h-5 stroke-current opacity-50"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          ></path>
        </svg>
      </div>
    </DocsSection>

    <DocsSection title="带图标的选项">
      <select class="select w-full max-w-xs">
        <option disabled selected>选择难度</option>
        <option>⭐ 简单</option>
        <option>⭐⭐ 普通</option>
        <option>⭐⭐⭐ 困难</option>
        <option>⭐⭐⭐⭐ 非常困难</option>
      </select>
    </DocsSection>

    <DocsSection title="城市/地区选择">
      <form class="space-y-4 max-w-md">
        <label class="form-control w-full">
          <div class="label">
            <span class="label-text">选择省份</span>
          </div>
          <select class="select w-full">
            <option disabled selected>选择省份</option>
            <option>北京</option>
            <option>上海</option>
            <option>广东</option>
            <option>浙江</option>
          </select>
        </label>

        <label class="form-control w-full">
          <div class="label">
            <span class="label-text">选择城市</span>
          </div>
          <select class="select w-full">
            <option disabled selected>选择城市</option>
            <option>一级城市</option>
            <option>二级城市</option>
            <option>三级城市</option>
          </select>
        </label>
      </form>
    </DocsSection>

    <DocsSection title="日期/时间选择">
      <form class="space-y-4 max-w-md">
        <label class="form-control w-full">
          <div class="label">
            <span class="label-text">选择年份</span>
          </div>
          <select class="select w-full">
            <option disabled selected>2024</option>
            <option>2024</option>
            <option>2023</option>
            <option>2022</option>
            <option>2021</option>
          </select>
        </label>

        <label class="form-control w-full">
          <div class="label">
            <span class="label-text">选择月份</span>
          </div>
          <select class="select w-full">
            <option disabled selected>选择月份</option>
            <option>January</option>
            <option>February</option>
            <option>March</option>
            <option>April</option>
          </select>
        </label>
      </form>
    </DocsSection>
  </DocsContainer>
</template>
