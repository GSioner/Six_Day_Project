import Layout from '@/layout'
export default [
  {
    path: '/', // 此处不用操作
    name: '', // 此处用于书写路由名称
    component: Layout,
    children: [
      {
        path: '', // 此处书写路由名称同名路径地址
        name: '', // 复制上面的路由名称到此处
        component: () => import('@/views'), // 此处添加你的views文件夹下页面.vue文件地址
        meta: { title: '', icon: '' } // 此处添加左侧菜单栏的标题和图标，标题和路由名称同名，图标请查看阿里矢量图库
      }
    ]
  },
  {
    path: '/',
    name: '',
    component: Layout,
    children: [
      {
        path: '',
        name: '',
        component: () => import('@/views'),
        meta: { title: '', icon: '' }
      }
    ] // 如有更多路由地址请继续按照此模板进行添加
  }
]
