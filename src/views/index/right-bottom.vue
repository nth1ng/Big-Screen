<script setup lang="ts">
import { rightBottom } from "@/api";
import { ref, onMounted } from "vue";
import CapsuleChart from "@/components/datav/capsule-chart";
import { ElMessage } from "element-plus";

const config = ref({
  showValue: true,
  unit: "亿",
});

const data = ref([]);

const getData = () => {
  rightBottom({ limitNum: 30 })
    .then((res) => {
      console.log("右下--报警排名", res);
      if (res.success) {
        // 转换数据格式以适配胶囊图表
        // 对数据进行排序，获取更多数据以支持滚动查看
        data.value = res.data.list
          .sort((a: any, b: any) => (b.alertvalue || 0) - (a.alertvalue || 0))
          .map((item: any) => ({
            name: item.provinceName,
            value: item.alertvalue || 0
          }));
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
