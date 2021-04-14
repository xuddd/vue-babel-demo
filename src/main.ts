import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import echarts from "echarts";
import lodash from "lodash";

Vue.config.productionTip = false
Vue.use(ElementUI, { size: "small" });

//const te = lodash.chunk([], 3);

Vue.prototype.$echarts = echarts;
Vue.use(echarts as any);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
