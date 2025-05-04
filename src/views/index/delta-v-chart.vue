<script setup lang="ts">
import { ref, onMounted, reactive } from "vue";
import { graphic } from "echarts/core";


const chartData = reactive({
  years: ['2019', '2020', '2021', '2022', '2023', '2024'],
  
  values: [30.1, 46.8, 54.9, 87.4, 216.3, 277.6]
});

/**
 * 配置发电量折线图选项
 */
const option = ref({
  tooltip: {
    trigger: 'axis',
    formatter: '{b}年<br/>{a}: {c} GW',
    axisPointer: {
      type: 'cross',
      label: {
        backgroundColor: '#6a7985'
      }
    }
  },
  grid: {
    top: '15%',
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: chartData.years,
    axisLine: {
      lineStyle: {
        color: 'rgba(255, 255, 255, 0.5)'
      }
    },
    axisLabel: {
      color: 'rgba(255, 255, 255, 0.7)',
      fontSize: 10
    }
  },
  yAxis: {
    type: 'value',
    name: 'GW',
    min: 0,
    max: 300,
    nameTextStyle: {
      color: 'rgba(255, 255, 255, 0.7)'
    },
    splitLine: {
      lineStyle: {
        color: 'rgba(255, 255, 255, 0.1)'
      }
    },
    axisLine: {
      lineStyle: {
        color: 'rgba(255, 255, 255, 0.5)'
      }
    },
    axisLabel: {
      color: 'rgba(255, 255, 255, 0.7)'
    }
  },
  series: [
    {
      name: '发电量',
      type: 'line',
      smooth: true,
      symbol: 'emptyCircle',
      symbolSize: 6,
      data: chartData.values,
      itemStyle: {
        color: '#8A2BE2'
      },
      lineStyle: {
        width: 3,
        shadowColor: 'rgba(138, 43, 226, 0.5)',
        shadowBlur: 10
      },
      areaStyle: {
        color: new graphic.LinearGradient(0, 0, 0, 1, [
          { offset: 0, color: 'rgba(138, 43, 226, 0.8)' },
          { offset: 0.5, color: 'rgba(138, 43, 226, 0.3)' },
          { offset: 1, color: 'rgba(138, 43, 226, 0.1)' }
        ])
      },
      markLine: {
        silent: true,
        lineStyle: {
          color: '#FF4500'
        },
        data: [
          {
            yAxis: 150,
            label: {
              formatter: '目标线',
              position: 'start'
            }
          }
        ]
      }
    }
  ]
});


onMounted(() => {
  // 在实际应用中，这里可以调用API获取真实的deltaV数据
  console.log("deltaV图表已加载");
});
</script>

<template>
  <div class="delta-v-chart-container">
    <v-chart class="chart" :option="option" autoresize />
  </div>
</template>

<style scoped lang="scss">
.delta-v-chart-container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.chart {
  width: 100%;
  height: 100%;
}
</style>