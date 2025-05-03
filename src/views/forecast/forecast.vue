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
  width: 100%;
  height: 100%;
}

.forecast-box {
  width: 100%;
  display: flex;
  min-height: calc(100% - 64px);
  justify-content: space-between;
}

.content_left,
.content_right {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  width: 540px;
  box-sizing: border-box;
  flex-shrink: 0;
}

.content_center {
  flex: 1;
  margin: 0 54px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  .center-image {
    width: 100%;
    height: auto;
    max-height: 100%;
    object-fit: contain;
  }

  .image-placeholder {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    color: #999;
  }
}

.content_item {
  height: 450px;
  margin: 10px 0;
}

.chart-container {
  width: 100%;
  height: 100%;

  .chart {
    width: 100%;
    height: 100%;
  }
}
</style>