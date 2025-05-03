<script setup lang="ts">
import { ref, reactive, onMounted } from "vue";
import CapsuleChart from "@/components/datav/capsule-chart";
import { ranking } from "@/api";
import { ElMessage } from "element-plus";

const config = ref({
  showValue: true,
  unit: "亿",
});
const data = ref([]);

/**
 * 获取排名数据
 * 从API获取数据并处理，确保显示足够的排名项
 */
const getData = () => {
  ranking()
    .then((res) => {
      console.log("右中--报警排名", res);
      if (res.success) {
        // 确保数据足够显示10个排名
        data.value = res.data;
      } else {
        ElMessage({
          message: res.msg,
          type: "warning",
        });
      }
    })
    .catch((err) => {
      ElMessage.error(err);
    });
};

onMounted(() => {
  getData();
});
</script>

<template>
  <div class="right_bottom">
    <div class="scroll-container">
      <CapsuleChart :config="config" style="width: 100%; margin: 0 auto;" :data="data" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.right_bottom {
  box-sizing: border-box;
  padding: 16px;
  padding-top: 1px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.scroll-container {
  width: 100%;
  height: 300px;
  overflow-y: auto;
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE and Edge */
  
  /* 针对Webkit浏览器（Chrome、Safari等）隐藏滚动条 */
  &::-webkit-scrollbar {
    display: none;
    width: 0;
  }
  
}
</style>
