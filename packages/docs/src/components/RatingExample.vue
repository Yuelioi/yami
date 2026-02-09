<script setup lang="ts">
import DocsHeader from '@/components/zcomp/DocsHeader.vue'
import DocsSection from '@/components/zcomp/DocsSection.vue'
import ApiReference from '@/components/zcomp/ApiReference.vue'
import DocsContainer from '@/components/zcomp/DocsContainer.vue'

const apiClasses = [
  {
    category: '基础',
    className: 'rating',
    description: '评分容器',
    isCategoryStart: true,
  },
  {
    category: '尺寸',
    className: 'rating-xs',
    description: '超小',
    isCategoryStart: false,
  },
  {
    category: '尺寸',
    className: 'rating-sm',
    description: '小',
    isCategoryStart: false,
  },
  {
    category: '尺寸',
    className: 'rating-md',
    description: '中',
    isCategoryStart: false,
  },
  {
    category: '尺寸',
    className: 'rating-lg',
    description: '大',
    isCategoryStart: false,
  },
  {
    category: '尺寸',
    className: 'rating-xl',
    description: '超大',
    isCategoryStart: false,
  },
  {
    category: '形状',
    className: 'rating-heart',
    description: '心形',
    isCategoryStart: false,
  },
  {
    category: '形状',
    className: 'rating-half',
    description: '半星',
    isCategoryStart: false,
  },
  {
    category: '状态',
    className: 'rating-readonly',
    description: '只读模式',
    isCategoryStart: false,
  },
  {
    category: '状态',
    className: 'rating-hidden',
    description: '隐藏输入框',
    isCategoryStart: false,
  },
]
</script>

<template>
  <DocsContainer>
    <DocsHeader title="Rating" description="评分组件，用于展示或收集用户评分。" />

    <ApiReference :data="apiClasses"></ApiReference>

    <DocsSection title="基础评分">
      <div class="rating" name="rating-basic">
        <input type="radio" name="rating-basic" value="1" />
        <input type="radio" name="rating-basic" value="2" />
        <input type="radio" name="rating-basic" value="3" />
        <input type="radio" name="rating-basic" value="4" />
        <input type="radio" name="rating-basic" value="5" />
      </div>
    </DocsSection>

    <DocsSection title="已评分">
      <div class="rating" name="rating-checked">
        <input type="radio" name="rating-checked" value="1" />
        <input type="radio" name="rating-checked" value="2" />
        <input type="radio" name="rating-checked" value="3" checked />
        <input type="radio" name="rating-checked" value="4" />
        <input type="radio" name="rating-checked" value="5" />
      </div>
    </DocsSection>

    <DocsSection title="尺寸变体">
      <div class="space-y-4">
        <div>
          <p class="text-sm text-base-content/60 mb-2">超小 (xs)</p>
          <div class="rating rating-xs" name="rating-xs">
            <input type="radio" name="rating-xs" value="1" />
            <input type="radio" name="rating-xs" value="2" />
            <input type="radio" name="rating-xs" value="3" />
            <input type="radio" name="rating-xs" value="4" />
            <input type="radio" name="rating-xs" value="5" />
          </div>
        </div>

        <div>
          <p class="text-sm text-base-content/60 mb-2">小 (sm)</p>
          <div class="rating rating-sm" name="rating-sm">
            <input type="radio" name="rating-sm" value="1" />
            <input type="radio" name="rating-sm" value="2" />
            <input type="radio" name="rating-sm" value="3" />
            <input type="radio" name="rating-sm" value="4" />
            <input type="radio" name="rating-sm" value="5" />
          </div>
        </div>

        <div>
          <p class="text-sm text-base-content/60 mb-2">中 (md) - 默认</p>
          <div class="rating rating-md" name="rating-md">
            <input type="radio" name="rating-md" value="1" />
            <input type="radio" name="rating-md" value="2" />
            <input type="radio" name="rating-md" value="3" />
            <input type="radio" name="rating-md" value="4" />
            <input type="radio" name="rating-md" value="5" />
          </div>
        </div>

        <div>
          <p class="text-sm text-base-content/60 mb-2">大 (lg)</p>
          <div class="rating rating-lg" name="rating-lg">
            <input type="radio" name="rating-lg" value="1" />
            <input type="radio" name="rating-lg" value="2" />
            <input type="radio" name="rating-lg" value="3" />
            <input type="radio" name="rating-lg" value="4" />
            <input type="radio" name="rating-lg" value="5" />
          </div>
        </div>

        <div>
          <p class="text-sm text-base-content/60 mb-2">超大 (xl)</p>
          <div class="rating rating-xl" name="rating-xl">
            <input type="radio" name="rating-xl" value="1" />
            <input type="radio" name="rating-xl" value="2" />
            <input type="radio" name="rating-xl" value="3" />
            <input type="radio" name="rating-xl" value="4" />
            <input type="radio" name="rating-xl" value="5" />
          </div>
        </div>
      </div>
    </DocsSection>

    <DocsSection title="心形评分">
      <div class="rating rating-heart" name="rating-heart">
        <input type="radio" name="rating-heart" value="1" />
        <input type="radio" name="rating-heart" value="2" />
        <input type="radio" name="rating-heart" value="3" />
        <input type="radio" name="rating-heart" value="4" />
        <input type="radio" name="rating-heart" value="5" />
      </div>
    </DocsSection>

    <DocsSection title="半星评分">
      <div class="rating rating-half" name="rating-half">
        <input type="radio" name="rating-half" value="1" />
        <input type="radio" name="rating-half" value="2" />
        <input type="radio" name="rating-half" value="3" />
        <input type="radio" name="rating-half" value="4" />
        <input type="radio" name="rating-half" value="5" />
        <input type="radio" name="rating-half" value="6" />
        <input type="radio" name="rating-half" value="7" />
        <input type="radio" name="rating-half" value="8" />
        <input type="radio" name="rating-half" value="9" />
        <input type="radio" name="rating-half" value="10" />
      </div>
    </DocsSection>

    <DocsSection title="只读评分">
      <div class="rating rating-readonly rating-lg" name="rating-readonly">
        <input type="radio" name="rating-readonly" value="1" />
        <input type="radio" name="rating-readonly" value="2" />
        <input type="radio" name="rating-readonly" value="3" checked />
        <input type="radio" name="rating-readonly" value="4" />
        <input type="radio" name="rating-readonly" value="5" />
      </div>
    </DocsSection>

    <DocsSection title="产品评价">
      <div class="space-y-4">
        <div class="card bg-base-100">
          <div class="card-body">
            <h3 class="card-title text-lg">产品评价</h3>
            <p class="text-base-content/70">您对这个产品的评价如何？</p>
            <div class="card-actions">
              <div class="rating rating-lg" name="product-rating">
                <input type="radio" name="product-rating" value="1" />
                <input type="radio" name="product-rating" value="2" />
                <input type="radio" name="product-rating" value="3" />
                <input type="radio" name="product-rating" value="4" />
                <input type="radio" name="product-rating" value="5" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </DocsSection>

    <DocsSection title="反馈评分">
      <div class="card bg-base-100">
        <div class="card-body">
          <h3 class="card-title">对本次服务的评价</h3>
          <div class="space-y-3">
            <div>
              <p class="text-sm font-semibold mb-2">整体满意度</p>
              <div class="rating rating-md" name="feedback-overall">
                <input type="radio" name="feedback-overall" value="1" />
                <input type="radio" name="feedback-overall" value="2" />
                <input type="radio" name="feedback-overall" value="3" />
                <input type="radio" name="feedback-overall" value="4" />
                <input type="radio" name="feedback-overall" value="5" />
              </div>
            </div>

            <div>
              <p class="text-sm font-semibold mb-2">服务态度</p>
              <div class="rating rating-md" name="feedback-service">
                <input type="radio" name="feedback-service" value="1" />
                <input type="radio" name="feedback-service" value="2" />
                <input type="radio" name="feedback-service" value="3" />
                <input type="radio" name="feedback-service" value="4" />
                <input type="radio" name="feedback-service" value="5" />
              </div>
            </div>

            <div>
              <p class="text-sm font-semibold mb-2">解决效率</p>
              <div class="rating rating-md" name="feedback-efficiency">
                <input type="radio" name="feedback-efficiency" value="1" />
                <input type="radio" name="feedback-efficiency" value="2" />
                <input type="radio" name="feedback-efficiency" value="3" />
                <input type="radio" name="feedback-efficiency" value="4" />
                <input type="radio" name="feedback-efficiency" value="5" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </DocsSection>

    <DocsSection title="文章评分">
      <div class="space-y-3">
        <div class="flex items-center justify-between p-3 bg-base-100 rounded-lg">
          <div>
            <h4 class="font-semibold">这篇文章有帮助吗？</h4>
            <p class="text-sm text-base-content/70">帮我们改进内容质量</p>
          </div>
          <div class="rating rating-lg" name="article-rating">
            <input type="radio" name="article-rating" value="1" />
            <input type="radio" name="article-rating" value="2" />
            <input type="radio" name="article-rating" value="3" />
            <input type="radio" name="article-rating" value="4" />
            <input type="radio" name="article-rating" value="5" />
          </div>
        </div>
      </div>
    </DocsSection>

    <DocsSection title="评分统计">
      <div class="space-y-3">
        <div class="flex items-center gap-3">
          <span class="text-sm w-12">5 星</span>
          <div class="flex-1 h-2 bg-base-300 rounded-full">
            <div class="h-full bg-warning rounded-full" style="width: 60%"></div>
          </div>
          <span class="text-sm w-12">60%</span>
        </div>
        <div class="flex items-center gap-3">
          <span class="text-sm w-12">4 星</span>
          <div class="flex-1 h-2 bg-base-300 rounded-full">
            <div class="h-full bg-warning rounded-full" style="width: 25%"></div>
          </div>
          <span class="text-sm w-12">25%</span>
        </div>
        <div class="flex items-center gap-3">
          <span class="text-sm w-12">3 星</span>
          <div class="flex-1 h-2 bg-base-300 rounded-full">
            <div class="h-full bg-warning rounded-full" style="width: 10%"></div>
          </div>
          <span class="text-sm w-12">10%</span>
        </div>
        <div class="flex items-center gap-3">
          <span class="text-sm w-12">2 星</span>
          <div class="flex-1 h-2 bg-base-300 rounded-full">
            <div class="h-full bg-warning rounded-full" style="width: 3%"></div>
          </div>
          <span class="text-sm w-12">3%</span>
        </div>
        <div class="flex items-center gap-3">
          <span class="text-sm w-12">1 星</span>
          <div class="flex-1 h-2 bg-base-300 rounded-full">
            <div class="h-full bg-warning rounded-full" style="width: 2%"></div>
          </div>
          <span class="text-sm w-12">2%</span>
        </div>
      </div>
    </DocsSection>

    <DocsSection title="显示评分">
      <div class="space-y-3">
        <div class="flex items-center gap-2">
          <div class="rating rating-sm rating-readonly" name="show-rating-1">
            <input type="radio" name="show-rating-1" value="1" />
            <input type="radio" name="show-rating-1" value="2" />
            <input type="radio" name="show-rating-1" value="3" />
            <input type="radio" name="show-rating-1" value="4" checked />
            <input type="radio" name="show-rating-1" value="5" />
          </div>
          <span class="text-sm">4.0 (125 条评价)</span>
        </div>

        <div class="flex items-center gap-2">
          <div class="rating rating-sm rating-readonly" name="show-rating-2">
            <input type="radio" name="show-rating-2" value="1" />
            <input type="radio" name="show-rating-2" value="2" />
            <input type="radio" name="show-rating-2" value="3" />
            <input type="radio" name="show-rating-2" value="4" />
            <input type="radio" name="show-rating-2" value="5" checked />
          </div>
          <span class="text-sm">5.0 (89 条评价)</span>
        </div>

        <div class="flex items-center gap-2">
          <div class="rating rating-sm rating-readonly" name="show-rating-3">
            <input type="radio" name="show-rating-3" value="1" />
            <input type="radio" name="show-rating-3" value="2" />
            <input type="radio" name="show-rating-3" value="3" checked />
            <input type="radio" name="show-rating-3" value="4" />
            <input type="radio" name="show-rating-3" value="5" />
          </div>
          <span class="text-sm">3.0 (42 条评价)</span>
        </div>
      </div>
    </DocsSection>
  </DocsContainer>
</template>
