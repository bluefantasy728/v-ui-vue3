<style lang="scss" scoped>
.page {
  // width: 100%;
  // height: 100%;
  // background: #f8f8f8;
  // padding: 20px 20px 30px 20px;
  // box-sizing: border-box;
}
</style>
<template>
  <div class="page">
    <div>
      <v-button>默认按钮</v-button>
      <v-button disabled>默认按钮（禁用）</v-button>
      <v-button type="primary">主要按钮</v-button>
      <v-button disabled type="primary">主要按钮禁用</v-button>
      <v-button type="success">主要按钮</v-button>
      <v-button disabled type="success">主要按钮禁用</v-button>
      <v-button type="warning">主要按钮</v-button>
      <v-button disabled type="warning">主要按钮禁用</v-button>
      <v-button type="danger">主要按钮</v-button>
      <v-button disabled type="danger">主要按钮禁用</v-button>
    </div>
    <v-button icon="settings">按钮</v-button>
    <v-button icon="settings">
      <span>按钮</span>
    </v-button>
    <v-button loading>加载中</v-button>
    <v-button icon="settings">
      i am button
      <v-icon name="settings"></v-icon>
    </v-button>

    <div style="margin-top: 20px">
      <v-button-group>
        <v-button icon="left">上一页</v-button>
        <v-button>刷新</v-button>
        <v-button>
          下一页
          <v-icon class="right-icon" name="left"></v-icon>
        </v-button>
      </v-button-group>
    </div>
    <hr />
    <v-input :value="inputVal"></v-input>
  </div>
</template>

<script setup>
/***** 相关引入和定义 *****/
import { reactive, toRefs, onMounted, computed, getCurrentInstance } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const { proxy } = getCurrentInstance();
// console.log('proxy', proxy);
// console.log(proxy.mixinVar);
proxy.$emitter.on('myEvent', msg => {
  console.log(msg);
});

/***** 响应式数据 *****/
const state = reactive({
  inputVal: '',
});

/***** 方法定义 *****/
async function getData() {}

/***** 声明周期和watch *****/
onMounted(async () => {});

const { inputVal } = toRefs(state);
</script>

<script>
export default {};
</script>
