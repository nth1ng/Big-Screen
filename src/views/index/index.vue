<script setup lang="ts">
import ItemWrap from "@/components/item-wrap";
import LeftCenter from "./left-center.vue";
import LeftBottom from "./left-bottom.vue";
import CenterMap from "./center-map.vue";
import CenterBottom from "./center-bottom.vue";
import RightCenter from "./right-center.vue";
import RightBottom from "./right-bottom.vue";
</script>

<template>
  <div class="index-box">
    <div class="contetn_left">
      <!-- <div class="pagetab">
        <div class="item">实时监测</div>
        <div class="item">统计分析</div>
      </div> -->
      <ItemWrap class="contetn_left-center contetn_lr-item" title="全国光伏发电装机容量">
        <LeftCenter />
      </ItemWrap>
      <ItemWrap
          class="contetn_left-bottom contetn_lr-item"
          title="光伏发电装机情况"
          style="padding: 0 10px 16px 10px"
      >
        <LeftBottom />
      </ItemWrap>
    </div>
    <div class="contetn_center">
      <CenterMap class="contetn_center_top" title="光伏发电数据分布图" />
      <ItemWrap class="contetn_center-bottom" title="光伏发电装机类型统计图">
        <CenterBottom />
      </ItemWrap>
    </div>
    <div class="contetn_right">
      <ItemWrap
          class="contetn_left-bottom contetn_lr-item"
          title="各省、市、区光伏发电量统计"
          style="padding: 0 10px 16px 10px"
      >
        <RightCenter />
      </ItemWrap>
      <ItemWrap class="contetn_left-bottom contetn_lr-item" title="2024年度各地太阳能发电量排名">
        <RightBottom />
      </ItemWrap>
    </div>
  </div>
</template>

<style scoped lang="scss">
.index-box {
  width: 100%;
  display: flex;
  min-height: calc(100% - 64px);
  justify-content: space-between;
}
//左边 右边 结构一样
.contetn_left,
.contetn_right {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  position: relative;
  width: 540px;
  box-sizing: border-box;
  flex-shrink: 0;
}
.contetn_center {
  flex: 1;
  margin: 0 54px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  .contetn_center-bottom {
    height: 315px;
  }
}

.contetn_lr-item {
  height: 450px;
  margin: 10px 0;
}
</style>
