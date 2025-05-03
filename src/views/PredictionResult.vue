<template>
  <div class="prediction-result-page">
    <h1 class="title">在线预测</h1>
    <!-- 误差指标 -->
    <div class="error-metrics">
      <div class="metric-card">
        <div class="metric-icon">
          <svg viewBox="0 0 24 24" width="24" height="24">
            <path fill="currentColor" d="M12,2L4,5V11.09C4,16.14 7.41,20.85 12,22C16.59,20.85 20,16.14 20,11.09V5L12,2M12,4.15L18,6.54V11.09C18,15.09 15.45,18.79 12,19.92C8.55,18.79 6,15.1 6,11.09V6.54L12,4.15M13,13H11V7H13V13M13,17H11V15H13V17Z" />
          </svg>
        </div>
        <h3>均方误差（MSE）</h3>
        <p class="metric-value">0.0245</p>
        <div class="metric-trend trend-down">
          <svg viewBox="0 0 24 24" width="16" height="16">
            <path fill="currentColor" d="M19,17H22L18,21L14,17H17V3H19V17M7,3C4.79,3 3,4.79 3,7C3,9.21 4.79,11 7,11C9.21,11 11,9.21 11,7C11,4.79 9.21,3 7,3M7,9C5.9,9 5,8.1 5,7C5,5.9 5.9,5 7,5C8.1,5 9,5.9 9,7C9,8.1 8.1,9 7,9M7,13C4.79,13 3,14.79 3,17C3,19.21 4.79,21 7,21C9.21,21 11,19.21 11,17C11,14.79 9.21,13 7,13Z" />
          </svg>
          <span>2.3%</span>
        </div>
      </div>
      <div class="metric-card">
        <div class="metric-icon">
          <svg viewBox="0 0 24 24" width="24" height="24">
            <path fill="currentColor" d="M12,2L4,5V11.09C4,16.14 7.41,20.85 12,22C16.59,20.85 20,16.14 20,11.09V5L12,2M12,4.15L18,6.54V11.09C18,15.09 15.45,18.79 12,19.92C8.55,18.79 6,15.1 6,11.09V6.54L12,4.15M13,13H11V7H13V13M13,17H11V15H13V17Z" />
          </svg>
        </div>
        <h3>平均绝对误差（MAE）</h3>
        <p class="metric-value">0.0182</p>
        <div class="metric-trend trend-down">
          <svg viewBox="0 0 24 24" width="16" height="16">
            <path fill="currentColor" d="M19,17H22L18,21L14,17H17V3H19V17M7,3C4.79,3 3,4.79 3,7C3,9.21 4.79,11 7,11C9.21,11 11,9.21 11,7C11,4.79 9.21,3 7,3M7,9C5.9,9 5,8.1 5,7C5,5.9 5.9,5 7,5C8.1,5 9,5.9 9,7C9,8.1 8.1,9 7,9M7,13C4.79,13 3,14.79 3,17C3,19.21 4.79,21 7,21C9.21,21 11,19.21 11,17C11,14.79 9.21,13 7,13Z" />
          </svg>
          <span>1.8%</span>
        </div>
      </div>
      <div class="metric-card">
        <div class="metric-icon">
          <svg viewBox="0 0 24 24" width="24" height="24">
            <path fill="currentColor" d="M12,2L4,5V11.09C4,16.14 7.41,20.85 12,22C16.59,20.85 20,16.14 20,11.09V5L12,2M12,4.15L18,6.54V11.09C18,15.09 15.45,18.79 12,19.92C8.55,18.79 6,15.1 6,11.09V6.54L12,4.15M13,13H11V7H13V13M13,17H11V15H13V17Z" />
          </svg>
        </div>
        <h3>均方根误差（RMSE）</h3>
        <p class="metric-value">0.0287</p>
        <div class="metric-trend trend-up">
          <svg viewBox="0 0 24 24" width="16" height="16">
            <path fill="currentColor" d="M19,7H22L18,3L14,7H17V21H19V7M7,3C4.79,3 3,4.79 3,7C3,9.21 4.79,11 7,11C9.21,11 11,9.21 11,7C11,4.79 9.21,3 7,3M7,9C5.9,9 5,8.1 5,7C5,5.9 5.9,5 7,5C8.1,5 9,5.9 9,7C9,8.1 8.1,9 7,9M7,13C4.79,13 3,14.79 3,17C3,19.21 4.79,21 7,21C9.21,21 11,19.21 11,17C11,14.79 9.21,13 7,13Z" />
          </svg>
          <span>0.5%</span>
        </div>
      </div>
    </div>
    <!-- 多模型对比图 -->
    <div class="comparison-chart">
      <v-chart class="chart" :option="comparisonOption" autoresize />
    </div>
    <el-button type="primary" @click="exportResult" class="export-btn">
      <svg viewBox="0 0 24 24" width="18" height="18" class="export-icon">
        <path fill="currentColor" d="M5,20H19V18H5M19,9H15V3H9V9H5L12,16L19,9Z" />
      </svg>
      导出预测结果
    </el-button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { use } from 'echarts/core';
import { LineChart } from 'echarts/charts';
import { GridComponent, TooltipComponent, TitleComponent, AriaComponent, LegendComponent } from 'echarts/components';
import { CanvasRenderer } from 'echarts/renderers';
import VChart from 'vue-echarts';
import { ElButton } from 'element-plus';

use([CanvasRenderer, LineChart, GridComponent, TooltipComponent, TitleComponent, AriaComponent, LegendComponent]);

const comparisonOption = ref({
  backgroundColor: 'transparent',
  tooltip: {
    trigger: 'axis',
    backgroundColor: 'rgba(0,0,0,0.8)',
    borderColor: '#00f0ff',
    borderWidth: 1,
    textStyle: {
      color: '#fff'
    },
    axisPointer: {
      type: 'cross',
      label: {
        backgroundColor: '#6a7985'
      }
    }
  },
  legend: {
    data: ['线性回归', '随机森林', 'LSTM'],
    textStyle: {
      color: '#a0a0a0'
    },
    right: 10,
    top: 10
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
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
  series: [
    {
      name: '线性回归',
      type: 'line',
      stack: '总量',
      smooth: true,
      lineStyle: {
        width: 3,
        shadowColor: 'rgba(64, 158, 255, 0.5)',
        shadowBlur: 10,
        shadowOffsetY: 8
      },
      showSymbol: false,
      areaStyle: {
        color: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [{
            offset: 0,
            color: 'rgba(64, 158, 255, 0.3)'
          }, {
            offset: 1,
            color: 'rgba(64, 158, 255, 0.01)'
          }]
        }
      },
      emphasis: {
        focus: 'series'
      },
      data: [120, 132, 145, 160, 172, 190],
      color: '#409eff'
    },
    {
      name: '随机森林',
      type: 'line',
      stack: '总量',
      smooth: true,
      lineStyle: {
        width: 3,
        shadowColor: 'rgba(245, 108, 108, 0.5)',
        shadowBlur: 10,
        shadowOffsetY: 8
      },
      showSymbol: false,
      areaStyle: {
        color: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [{
            offset: 0,
            color: 'rgba(245, 108, 108, 0.3)'
          }, {
            offset: 1,
            color: 'rgba(245, 108, 108, 0.01)'
          }]
        }
      },
      emphasis: {
        focus: 'series'
      },
      data: [110, 125, 138, 152, 165, 180],
      color: '#f56c6c'
    },
    {
      name: 'LSTM',
      type: 'line',
      stack: '总量',
      smooth: true,
      lineStyle: {
        width: 3,
        shadowColor: 'rgba(103, 194, 58, 0.5)',
        shadowBlur: 10,
        shadowOffsetY: 8
      },
      showSymbol: false,
      areaStyle: {
        color: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [{
            offset: 0,
            color: 'rgba(103, 194, 58, 0.3)'
          }, {
            offset: 1,
            color: 'rgba(103, 194, 58, 0.01)'
          }]
        }
      },
      emphasis: {
        focus: 'series'
      },
      data: [115, 130, 142, 155, 168, 185],
      color: '#67c23a'
    }
  ]
});

const exportResult = () => {
  // 实现导出预测结果的逻辑
  console.log('导出预测结果');
};
</script>

<style scoped lang="scss">
.prediction-result-page {
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

.error-metrics {
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
  gap: 20px;

  .metric-card {
    flex: 1;
    padding: 25px;
    background-color: rgba(20, 20, 30, 0.5);
    border-radius: 12px;
    box-shadow: 0 0 15px rgba(0, 240, 255, 0.1);
    border: 1px solid rgba(0, 240, 255, 0.05);
    position: relative;
    overflow: hidden;
    transition: all 0.3s ease;

    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 5px 25px rgba(0, 240, 255, 0.2);
    }

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 3px;
      background: linear-gradient(90deg, #00f0ff, #0088ff);
    }

    .metric-icon {
      width: 50px;
      height: 50px;
      margin: 0 auto 15px;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: rgba(0, 240, 255, 0.1);
      border-radius: 50%;
      color: #00f0ff;
    }

    h3 {
      margin-bottom: 15px;
      color: #a0a0a0;
      font-size: 16px;
      font-weight: 500;
      text-align: center;
    }

    .metric-value {
      font-size: 28px;
      font-weight: 600;
      color: #00f0ff;
      text-align: center;
      margin-bottom: 15px;
      text-shadow: 0 0 8px rgba(0, 240, 255, 0.3);
    }

    .metric-trend {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 14px;
      gap: 5px;

      &.trend-up {
        color: #f56c6c;
      }

      &.trend-down {
        color: #67c23a;
      }
    }
  }
}

.comparison-chart {
  width: 100%;
  height: 450px;
  margin-bottom: 30px;
  background-color: rgba(20, 20, 30, 0.5);
  border-radius: 8px;
  padding: 15px;
  box-shadow: 0 0 15px rgba(0, 240, 255, 0.1);
  border: 1px solid rgba(0, 240, 255, 0.05);
}

.export-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  padding: 12px 30px;
  background-color: rgba(0, 240, 255, 0.1);
  border: 1px solid #00f0ff;
  color: #00f0ff;
  font-weight: 500;
  transition: all 0.3s;
  border-radius: 6px;

  &:hover {
    background-color: rgba(0, 240, 255, 0.2);
    box-shadow: 0 0 15px rgba(0, 240, 255, 0.3);
    transform: translateY(-2px);
  }

  .export-icon {
    margin-right: 8px;
  }
}
</style>