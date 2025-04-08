<script setup lang="ts">
import { ref, reactive } from "vue";
import ItemWrap from "@/components/item-wrap";
import { graphic } from "echarts/core";
import { countUserNum } from "@/api";
import { ElMessage } from "element-plus";
import Header from "@/views/header.vue";

// 饼图数据和配置
let colors = ["#0BFC7F", "#A0A0A0", "#F48C02", "#F4023C", "#8A2BE2"];
const option = ref({});
const state = reactive({
  lockNum: 0,
  offlineNum: 0,
  onlineNum: 0,
  alarmNum: 0,
  totalNum: 0,
  newDataNum: 0,
});

const getData = () => {
  countUserNum().then((res) => {
    if (res.success) {
      state.lockNum = res.data.lockNum;
      state.offlineNum = res.data.offlineNum;
      state.onlineNum = res.data.onlineNum;
      state.totalNum = res.data.totalNum;
      state.alarmNum = res.data.alarmNum;
      state.newDataNum = res.data.newDataNum;
      setOption();
    } else {
      ElMessage.error(res.msg);
    }
  }).catch(err => {
    ElMessage.error(err);
  });
};

const setOption = () => {
  option.value = {
    title: {
      top: "center",
      left: "center",
      text: [`{value|${state.totalNum}}`, "{name|总数}"].join("\n"),
      textStyle: {
        rich: {
          value: {
            color: "#ffffff",
            fontSize: 24,
            fontWeight: "bold",
            lineHeight: 20,
            padding: [4, 0, 4, 0]
          },
          name: {
            color: "#ffffff",
            lineHeight: 20,
          },
        },
      },
    },
    tooltip: {
      trigger: "item",
      backgroundColor: "rgba(0,0,0,.6)",
      borderColor: "rgba(147, 235, 248, .8)",
      textStyle: {
        color: "#FFF",
      },
    },
    series: [
      {
        name: "发电量",
        type: "pie",
        radius: ["40%", "70%"],
        itemStyle: {
          borderRadius: 6,
          borderColor: "rgba(255,255,255,0)",
          borderWidth: 2,
        },
        color: colors,
        label: {
          show: true,
          formatter: "   {b|{b}}   \n   {c|{c}个}   {per|{d}%}  ",
          rich: {
            b: {
              color: "#fff",
              fontSize: 12,
              lineHeight: 26,
            },
            c: {
              color: "#31ABE3",
              fontSize: 14,
            },
            per: {
              color: "#31ABE3",
              fontSize: 14,
            },
          },
        },
        data: [
          { value: state.onlineNum, name: "火力发电" },
          { value: state.offlineNum, name: "水力发电" },
          { value: state.lockNum, name: "风电发电" },
          { value: state.alarmNum, name: "光伏发电" },
          { value: state.newDataNum, name: "核电发电" },
        ],
      },
    ],
  };
};

getData();
</script>

<template>
  <div class="forecast-page">
    <Header title="预测分析" />
    <div class="forecast-box">
        
      <div class="content_left">
        <ItemWrap class="content_item" title="图片展示区">
          <!-- 左上角图片区域 -->
        </ItemWrap>
        <ItemWrap class="content_item" title="待定区域">
          <!-- 左下角待定区域 -->
        </ItemWrap>
      </div>
      <div class="content_right">
        <ItemWrap class="content_item" title="发电量">
          <div class="chart-container" ref="chartRef">
            <v-chart class="chart" :option="option" />
          </div>
        </ItemWrap>
        <ItemWrap class="content_item" title="待定区域">
          <!-- 右下角待定区域 -->
        </ItemWrap>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.forecast-page {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 40px;
  background-image: url("@/assets/img/pageBg.png");
  background-size: 100% 100%;
  background-position: center;
  background-repeat: no-repeat;
}

.forecast-box {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  
  padding: 0 30px;
  
  .content_left,
  .content_right {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    position: relative;
    width: 540px;
    box-sizing: border-box;
    flex-shrink: 0;
    margin: 30px 0;
  }

  .content_item {
    height: 400px;
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
}
</style>