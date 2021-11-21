<template>
  <div class="v-input">
    <input class="v-input-inner" type="text" />
    <div v-if="errorMessage" class="error-message"></div>
  </div>
</template>
<script setup>
import { defineProps } from 'vue';
const props = defineProps({
  value: {
    type: String,
    default: '',
  },
  errorMessage: {
    type: String,
    default: '',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
});
</script>
<script>
export default {
  name: 'v-input',
};
</script>

<style scoped lang="scss">
@use 'input.scss';
</style>