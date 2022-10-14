const getters = {
  // 此文件可使用快捷导入方式导入常用数据.模板如下
  // user: state => state.自定义vuex文件名.需要调用的属性
  sidebar: state => state.app.sidebar,
  device: state => state.app.device
}
export default getters
