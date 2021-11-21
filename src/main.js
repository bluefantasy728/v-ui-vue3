import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import plugin from './plugins';
import config from './config';
import mitt from 'mitt';

const app = createApp(App);

app.config.globalProperties = {
  ...app.config.globalProperties,
  $config: config,
  $emitter: mitt(),
};

// 自动注册全局组件
const components = import.meta.globEager('./components/**/*.vue');
// console.log(components);
Object.keys(components).forEach(c => {
  const component = components[c]?.default;
  app.component(component.name, component);
});

app.use(router).use(store).use(plugin).mount('#app');
