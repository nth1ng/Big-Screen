<script setup lang="ts">
import { ref, reactive } from "vue";
import CapsuleChart from "@/components/datav/capsule-chart";
import { ranking } from "@/api";
import { ElMessage } from "element-plus";

const config = ref({
  showValue: true,
  unit: "个",
});
const data = ref([]);
const getData = () => {
  ranking()
    .then((res) => {
      console.log("右中--报警排名", res);
      if (res.success) {
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
getData();
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
