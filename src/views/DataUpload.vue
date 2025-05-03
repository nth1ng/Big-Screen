<template>
  <div class="data-analysis-prediction">
    <!-- 标题 -->
    <h1 class="title">数据分析与预测</h1>
    <div class="subtitle">请选择影响因素并上传数据文件</div>

    <!-- 影响因素选择区域 -->
    <div class="factor-selection">
      <div class="row">
        <el-checkbox-group v-model="selectedFactors">
          <el-checkbox-button v-for="factor in factors" :key="factor" :label="factor">
            {{ factor }}
          </el-checkbox-button>
        </el-checkbox-group>
      </div>
    </div>

    <!-- 文件上传区域 -->
    <div class="file-upload">
      <el-upload
          class="upload-demo"
          ref="uploadRef"
          action="#"
          :on-change="handleFileChange"
          :auto-upload="false"
          drag
          multiple
      >
        <div class="upload-content">
          <el-icon class="el-icon--upload"><upload-filled /></el-icon>
          <div class="upload-text">
            <div class="upload-title">拖拽文件到此处或点击上传</div>
            <div class="upload-hint">支持CSV、Excel等数据格式</div>
          </div>
        </div>
        <template #tip>
          <div class="upload-tip">
            已选择影响因素: {{ selectedFactors.join('、') || '无' }}
          </div>
        </template>
      </el-upload>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { ElUpload, ElIcon } from 'element-plus';
import { UploadFilled } from '@element-plus/icons-vue';

const factors = ['辐照度', '风速', '风向', '温度', '压强', '湿度'];

// 存储选中的影响因素
const selectedFactors = ref<string[]>([]);

// 上传组件引用
const uploadRef = ref<InstanceType<typeof ElUpload>>();

// 处理文件上传变化
const handleFileChange = (uploadFile: UploadFile) => {
  console.log('上传的文件:', uploadFile);
  console.log('选中的影响因素:', selectedFactors.value);
  // 这里可以添加更多逻辑，如文件格式验证、数据处理等
};
</script>

<style scoped lang="scss">
.data-analysis-prediction {
  max-width: 800px;
  margin: 0 auto;
  padding: 30px;
  background: 060711FF;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
}

.title {
  text-align: center;
  margin-bottom: 8px;
  color: #ffffff;
  font-size: 24px;
  font-weight: 600;
}

.subtitle {
  text-align: center;
  margin-bottom: 30px;
  color: #909399;
  font-size: 14px;
}

.factor-selection {
  margin-bottom: 30px;

  .el-checkbox-group {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 12px;
  }

  .el-checkbox-button {
    :deep(.el-checkbox-button__inner) {
      padding: 10px 20px;
      border-radius: 6px !important;
      border: 1px solid #dcdfe6;
      transition: all 0.3s;

      &:hover {
        color: #409eff;
        border-color: #c6e2ff;
        background-color: #ecf5ff;
      }
    }

    &.is-checked {
      :deep(.el-checkbox-button__inner) {
        background-color: #409eff;
        border-color: #409eff;
        color: #fff;
        box-shadow: none;
      }
    }
  }
}

.file-upload {
  .upload-demo {
    width: 100%;

    :deep(.el-upload) {
      width: 100%;
    }

    :deep(.el-upload-dragger) {
      width: 100%;
      padding: 40px;
      border-radius: 8px;
      border: 2px dashed #dcdfe6;
      background-color: #fafafa;
      transition: all 0.3s;

      &:hover {
        border-color: #409eff;
      }
    }
  }

  .upload-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #606266;
  }

  .el-icon--upload {
    font-size: 48px;
    color: #c0c4cc;
    margin-bottom: 16px;
  }

  .upload-title {
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 8px;
  }

  .upload-hint {
    font-size: 12px;
    color: #909399;
  }

  .upload-tip {
    margin-top: 12px;
    text-align: center;
    font-size: 13px;
    color: #606266;
  }
}
</style>
