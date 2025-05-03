<template>
  <div class="data-analysis-page">
    <h1 class="title">数据分析</h1>
    <!-- 数据分布可视化 -->
    <div class="chart-container">
      <v-chart class="chart" :option="chartOption" autoresize />
      <div class="unit-label">{{ currentFactorUnit }}</div>
    </div>
    <!-- 影响因素切换 -->
    <div class="factor-switcher">
      <el-button @click="prevFactor" class="nav-button" icon="ArrowLeft">◀</el-button>
      <el-button-group class="factor-buttons">
        <el-button
            v-for="(factor, index) in factors"
            :key="index"
            :class="{ 'active': currentFactor === factor }"
            @click="switchFactor(factor)"
            class="factor-button"
        >
          {{ factor }}
        </el-button>
      </el-button-group>
      <el-button @click="nextFactor" class="nav-button" icon="ArrowRight">▶</el-button>
    </div>
    <!-- 权重分析 -->
    <div class="weight-analysis">
      <h2 class="weight-title">各因素权重分析</h2>
      <v-chart class="weight-chart" :option="weightOption" autoresize />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { use } from 'echarts/core';
import { LineChart, BarChart } from 'echarts/charts';
import { GridComponent, TooltipComponent, TitleComponent, AriaComponent, LegendComponent } from 'echarts/components';
import { CanvasRenderer } from 'echarts/renderers';
import VChart from 'vue-echarts';
import { ElButton, ElButtonGroup } from 'element-plus';

use([CanvasRenderer, LineChart, BarChart, GridComponent, TooltipComponent, TitleComponent, AriaComponent, LegendComponent]);

const factors = ['辐照度', '风速', '风向', '温度', '压强', '湿度'];
const currentFactor = ref(factors[0]);
const currentFactorUnit = computed(() => {
  switch (currentFactor.value) {
    case '温度':
      return '温度/℃';
    case '风速':
      return '风速/m/s';
    case '辐照度':
      return '辐照度/W/m²';
    case '压强':
      return '压强/hPa';
    case '湿度':
      return '湿度/%';
    default:
      return '风向/°';
  }
});

const chartOption = ref({
  backgroundColor: 'transparent',
  tooltip: {
    trigger: 'axis',
    backgroundColor: 'rgba(0,0,0,0.7)',
    borderColor: '#00f0ff',
    borderWidth: 1,
    textStyle: {
      color: '#fff'
    }
  },
  xAxis: {
    type: 'category',
    data: ['1月', '2月', '3月', '4月', '5月', '6月'],
    axisLine: {
      lineStyle: {
        color: '#4a4a4a'
      }
    },
    axisLabel: {
      color: '#a0a0a0'
    }
  },
  yAxis: {
    type: 'value',
    axisLine: {
      lineStyle: {
        color: '#4a4a4a'
      }
    },
    axisLabel: {
      color: '#a0a0a0'
    },
    splitLine: {
      lineStyle: {
        color: 'rgba(74, 74, 74, 0.5)'
      }
    }
  },
  series: [{
    name: currentFactor.value,
    type: 'line',
    smooth: true,
    data: [120, 132, 145, 160, 172, 190],
    lineStyle: {
      width: 3,
      color: '#00f0ff'
    },
    itemStyle: {
      color: '#00f0ff'
    },
    areaStyle: {
      color: {
        type: 'linear',
        x: 0,
        y: 0,
        x2: 0,
        y2: 1,
        colorStops: [{
          offset: 0,
          color: 'rgba(0, 240, 255, 0.3)'
        }, {
          offset: 1,
          color: 'rgba(0, 240, 255, 0.01)'
        }]
      }
    }
  }]
});

const weightOption = ref({
  backgroundColor: 'transparent',
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    },
    backgroundColor: 'rgba(0,0,0,0.7)',
    borderColor: '#00f0ff',
    borderWidth: 1,
    textStyle: {
      color: '#fff'
    }
  },
  xAxis: {
    type: 'value',
    boundaryGap: [0, 0.01],
    axisLine: {
      lineStyle: {
        color: '#4a4a4a'
      }
    },
    axisLabel: {
      color: '#a0a0a0'
    },
    splitLine: {
      lineStyle: {
        color: 'rgba(74, 74, 74, 0.5)'
      }
    }
  },
  yAxis: {
    type: 'category',
    data: factors,
    axisLine: {
      lineStyle: {
        color: '#4a4a4a'
      }
    },
    axisLabel: {
      color: '#a0a0a0'
    }
  },
  series: [{
    name: '权重',
    type: 'bar',
    data: [20, 15, 10, 25, 10, 20],
    label: {
      show: true,
      position: 'right',
      formatter: '{c}%',
      color: '#fff'
    },
    itemStyle: {
      color: function(params) {
        const colorList = ['#00f0ff', '#00ff9d', '#ffeb3b', '#ff5722', '#9c27b0', '#3f51b5'];
        return colorList[params.dataIndex];
      }
    }
  }]
});

const switchFactor = (factor: string) => {
  currentFactor.value = factor;
  chartOption.value.series[0].name = factor;
  // 这里可以添加逻辑更新图表数据
};

const prevFactor = () => {
  const currentIndex = factors.indexOf(currentFactor.value);
  if (currentIndex > 0) {
    currentFactor.value = factors[currentIndex - 1];
    chartOption.value.series[0].name = currentFactor.value;
    // 这里可以添加逻辑更新图表数据
  }
};

const nextFactor = () => {
  const currentIndex = factors.indexOf(currentFactor.value);
  if (currentIndex < factors.length - 1) {
    currentFactor.value = factors[currentIndex + 1];
    chartOption.value.series[0].name = currentFactor.value;
    // 这里可以添加逻辑更新图表数据
  }
};
</script>

<style scoped lang="scss">
.data-analysis-page {
  padding: 30px;
  background-color: rgba(0, 0, 0, 0.7);
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 240, 255, 0.2);
  border: 1px solid rgba(0, 240, 255, 0.1);
}

.title {
  text-align: center;
  margin-bottom: 30px;
  color: #00f0ff;
  font-size: 28px;
  font-weight: 600;
  text-shadow: 0 0 10px rgba(0, 240, 255, 0.5);
  letter-spacing: 1px;
}

.chart-container {
  position: relative;
  width: 100%;
  height: 400px;
  margin-bottom: 30px;
  background-color: rgba(20, 20, 30, 0.5);
  border-radius: 8px;
  padding: 15px;
  box-shadow: 0 0 15px rgba(0, 240, 255, 0.1);
  border: 1px solid rgba(0, 240, 255, 0.05);
}

.unit-label {
  position: absolute;
  bottom: 25px;
  right: 25px;
  color: #00f0ff;
  font-size: 12px;
  background-color: rgba(0, 240, 255, 0.1);
  padding: 3px 8px;
  border-radius: 4px;
}

.factor-switcher {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;

  .nav-button {
    background-color: transparent;
    color: #00f0ff;
    border: 1px solid #00f0ff;
    padding: 10px 15px;
    transition: all 0.3s;
    margin: 0 5px;

    &:hover {
      background-color: rgba(0, 240, 255, 0.2);
      box-shadow: 0 0 10px rgba(0, 240, 255, 0.3);
    }
  }

  .factor-buttons {
    margin: 0 10px;
  }

  .factor-button {
    background-color: rgba(30, 30, 40, 0.8);
    color: #a0a0a0;
    border: 1px solid #4a4a4a;
    padding: 10px 15px;
    transition: all 0.3s;
    margin: 0 3px;

    &:hover {
      color: #00f0ff;
      border-color: #00f0ff;
    }

    &.active {
      background-color: rgba(0, 240, 255, 0.2);
      color: #00f0ff;
      border-color: #00f0ff;
      box-shadow: 0 0 10px rgba(0, 240, 255, 0.3);
    }
  }
}

.weight-analysis {
  background-color: rgba(20, 20, 30, 0.5);
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 0 15px rgba(0, 240, 255, 0.1);
  border: 1px solid rgba(0, 240, 255, 0.05);

  .weight-title {
    text-align: center;
    margin-bottom: 20px;
    color: #00f0ff;
    font-size: 22px;
    font-weight: 600;
    text-shadow: 0 0 8px rgba(0, 240, 255, 0.3);
  }

  .weight-chart {
    width: 100%;
    height: 300px;
  }
}
</style>