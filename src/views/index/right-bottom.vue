<script setup lang="ts">
import { rightBottom } from "@/api";
import { ref, onMounted } from "vue";
import CapsuleChart from "@/components/datav/capsule-chart";
import { ElMessage } from "element-plus";

const config = ref({
  showValue: true,
  unit: "亿千瓦时",
});

const data = ref([]);

const getData = () => {
  rightBottom({ limitNum: 10 })
    .then((res) => {
      console.log("右下--报警排名", res);
      if (res.success) {
        // 转换数据格式以适配胶囊图表
        // 对数据进行排序并只取前10名
        data.value = res.data.list
          .sort((a: any, b: any) => (b.alertvalue || 0) - (a.alertvalue || 0))
          .slice(0, 10)
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
    <CapsuleChart :config="config" style="width: 100%; height: 260px; margin: 0 auto;" :data="data" />
  </div>
</template>

<style scoped lang="scss">
.right_bottom {
  box-sizing: border-box;
  padding: 16px;
  padding-top: 64px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
