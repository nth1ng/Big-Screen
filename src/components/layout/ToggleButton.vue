<template>
  <button class="toggle-btn" @click="toggle" :class="{ 'collapsed': collapsed }">
    <slot>
      <i :class="iconClass"></i>
    </slot>
  </button>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  collapsed: {
    type: Boolean,
    default: false
  },
  icons: {
    type: Array,
    default: () => ['bi-list', 'bi-arrow-right']
  }
});

const emit = defineEmits(['toggle']);

const iconClass = computed(() => {
  if (!Array.isArray(props.icons) || props.icons.length < 2) {
    console.error('Icons prop must be an array with at least two items');
    return '';
  }
  return props.collapsed ? props.icons[1] : props.icons[0];
});

function toggle() {
  emit('toggle');
}
</script>

<style scoped>
.toggle-btn {
  position: fixed;
  left: 260px;
  top: 10px;
  z-index: 1100;
  transition: all 0.3s;
  background-color: #58667a;
  color: white;
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.toggle-btn.collapsed {
  left: 10px;
}

.toggle-btn:hover {
  background-color: rgba(24, 160, 229, 0.9);
}
</style>
