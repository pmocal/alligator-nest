import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import VueRouter from 'vue-router'
Vue.use(VueRouter);

import AboutPage from './components/AboutPage.vue'
import TravelPage from './components/TravelPage.vue'
import TravelAmericaPage from './components/TravelAmericaPage.vue'
import TravelChinaPage from './components/TravelChinaPage.vue'

const routes = [
	{
		path: '/travel', component: TravelPage,
		children: [
			{ path: '/travel/america', component: TravelAmericaPage },
			{ path: '/travel/china', component: TravelChinaPage}
		]
	},
	{
		path: '/about', component: AboutPage
	}
]

const router = new VueRouter({
	routes
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
