import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import app from './modules/app'
import settings from './modules/settings'
// 请将需要使用的vuex模块新建在当前目录的modules文件夹中，并在此文件导入

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    // 导入的vuex文件记得在此注册
    app,
    settings
  },
  getters
})

export default store
