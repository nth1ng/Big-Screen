<template>
  <div class="forecast-page">
    <Header title="预测分析" />
    <div class="forecast-box">
      <!-- 左侧区域 -->
      <div class="content_left">
        <ItemWrap class="content_item" title="图片展示区">
          <!-- 左上角内容 -->
        </ItemWrap>
        <ItemWrap class="content_item" title="待定区域">
          <!-- 左下角内容 -->
        </ItemWrap>
      </div>

      <!-- 中间区域 -->
      <div class="content_center">
        <img :src="mapImage" alt="区域地图" class="center-image" v-if="mapImage">
        <div v-else class="image-placeholder">暂无地图数据</div>
      </div>

      <!-- 右侧区域 -->
      <div class="content_right">
        <ItemWrap class="content_item" title="发电量">
          <div class="chart-container">
            <v-chart class="chart" :option="chartOption" autoresize />
          </div>
        </ItemWrap>
        <ItemWrap class="content_item" title="待定区域">
          <!-- 右下角内容 -->
        </ItemWrap>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { useRoute } from "vue-router";
import { use } from 'echarts/core';
import { LineChart } from 'echarts/charts';
import { GridComponent, TooltipComponent } from 'echarts/components';
import { CanvasRenderer } from 'echarts/renderers';
import VChart from 'vue-echarts';

use([CanvasRenderer, LineChart, GridComponent, TooltipComponent]);

const route = useRoute();
const xzqData = ref<string>(route.query.regionCode as string || '');

const mapImage = computed(() => {
  if (!xzqData.value) return null;

  const imagePath = `/src/assets/img/map/${xzqData.value}.png`;
  try {
    const modules = import.meta.glob('/src/assets/img/map/*.png', { eager: true });
    return modules[imagePath]?.default || null;
  } catch {
    return null;
  }
});

// 图表配置
const chartOption = ref({
  tooltip: {
    trigger: 'axis'
  },
  xAxis: {
    type: 'category',
    data: ['1月', '2月', '3月', '4月', '5月', '6月']
  },
  yAxis: {
    type: 'value',
    name: '发电量(kWh)'
  },
  series: [{
    name: '光伏发电',
    type: 'line',
    smooth: true,
    data: [120, 132, 145, 160, 172, 190],
    areaStyle: {}
  }]
});
</script>

<style scoped lang="scss">
.forecast-page {
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  padding-top: 40px;
  background: url("@/assets/img/pageBg.png") no-repeat center/cover;
  overflow: hidden;
}

.forecast-box {
  display: flex;
  flex: 1;
  padding: 20px;
  gap: 20px;

  .content_left, .content_right {
    flex: 0 0 25%;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .content_center {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(255, 255, 255, 0.1);

    .center-image {
      max-width: 100%;
      max-height: 100%;
      object-fit: contain;
    }

    .image-placeholder {
      color: #999;
      font-size: 16px;
    }
  }

  .content_item {
    flex: 1;
    min-height: 0;
  }

  .chart-container {
    width: 100%;
    height: 100%;

    .chart {
      width: 100%;
      height: 100%;
    }
  }
}

/* 响应式适配 */
@media (max-width: 1200px) {
  .forecast-box {
    flex-direction: column;

    .content_left, .content_right {
      flex: 1;
      width: 100%;
    }

    .content_center {
      order: -1;
      min-height: 300px;
    }
  }
}
</style>