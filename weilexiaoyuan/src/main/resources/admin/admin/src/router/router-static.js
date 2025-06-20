import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
    // 解决多次点击左侧菜单报错问题
    const VueRouterPush = VueRouter.prototype.push
    VueRouter.prototype.push = function push (to) {
    return VueRouterPush.call(this, to).catch(err => err)
    }
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'
import beifen from '@/views/modules/databaseBackup/beifen'
import huanyuan from '@/views/modules/databaseBackup/huanyuan'

     import users from '@/views/modules/users/list'
    import daipiao from '@/views/modules/daipiao/list'
    import daipiaoCollection from '@/views/modules/daipiaoCollection/list'
    import daipiaoLiuyan from '@/views/modules/daipiaoLiuyan/list'
    import daipiaoOrder from '@/views/modules/daipiaoOrder/list'
    import dictionary from '@/views/modules/dictionary/list'
    import jiaoche from '@/views/modules/jiaoche/list'
    import jiaocheChat from '@/views/modules/jiaocheChat/list'
    import shangpin from '@/views/modules/shangpin/list'
    import shangpinCommentback from '@/views/modules/shangpinCommentback/list'
    import shangpinOrder from '@/views/modules/shangpinOrder/list'
    import shiwuzhaoling from '@/views/modules/shiwuzhaoling/list'
    import siji from '@/views/modules/siji/list'
    import yonghu from '@/views/modules/yonghu/list'
    import yuezhanxiaoyuan from '@/views/modules/yuezhanxiaoyuan/list'
    import yuezhanxiaoyuanLiuyan from '@/views/modules/yuezhanxiaoyuanLiuyan/list'
    import config from '@/views/modules/config/list'
    import dictionaryDaipiao from '@/views/modules/dictionaryDaipiao/list'
    import dictionaryDaipiaoCollection from '@/views/modules/dictionaryDaipiaoCollection/list'
    import dictionaryDaipiaoOrder from '@/views/modules/dictionaryDaipiaoOrder/list'
    import dictionaryDaipiaoOrderPayment from '@/views/modules/dictionaryDaipiaoOrderPayment/list'
    import dictionaryDaipiaoZhuangtai from '@/views/modules/dictionaryDaipiaoZhuangtai/list'
    import dictionaryJiaoche from '@/views/modules/dictionaryJiaoche/list'
    import dictionaryJiaocheChat from '@/views/modules/dictionaryJiaocheChat/list'
    import dictionaryJiaocheZhuangtai from '@/views/modules/dictionaryJiaocheZhuangtai/list'
    import dictionarySex from '@/views/modules/dictionarySex/list'
    import dictionaryShangpin from '@/views/modules/dictionaryShangpin/list'
    import dictionaryShangpinOrder from '@/views/modules/dictionaryShangpinOrder/list'
    import dictionaryShangpinOrderPayment from '@/views/modules/dictionaryShangpinOrderPayment/list'
    import dictionaryShiwuzhaoling from '@/views/modules/dictionaryShiwuzhaoling/list'
    import dictionaryShiwuzhaolingZhuangtai from '@/views/modules/dictionaryShiwuzhaolingZhuangtai/list'
    import dictionaryYuezhanxiaoyuan from '@/views/modules/dictionaryYuezhanxiaoyuan/list'
    import dictionaryZhuangtai from '@/views/modules/dictionaryZhuangtai/list'





//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '首页',
      component: Home,
      meta: {icon:'', title:'center'}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    }, {
        path: '/huanyuan',
        name: '数据还原',
        component: huanyuan
    }, {
        path: '/beifen',
        name: '数据备份',
        component: beifen
    }, {
        path: '/users',
        name: '管理信息',
        component: users
    }
    ,{
        path: '/dictionaryDaipiao',
        name: '代跑类型',
        component: dictionaryDaipiao
    }
    ,{
        path: '/dictionaryDaipiaoCollection',
        name: '收藏表类型',
        component: dictionaryDaipiaoCollection
    }
    ,{
        path: '/dictionaryDaipiaoOrder',
        name: '订单类型',
        component: dictionaryDaipiaoOrder
    }
    ,{
        path: '/dictionaryDaipiaoOrderPayment',
        name: '订单支付类型',
        component: dictionaryDaipiaoOrderPayment
    }
    ,{
        path: '/dictionaryDaipiaoZhuangtai',
        name: '代跑状态',
        component: dictionaryDaipiaoZhuangtai
    }
    ,{
        path: '/dictionaryJiaoche',
        name: '叫车类型',
        component: dictionaryJiaoche
    }
    ,{
        path: '/dictionaryJiaocheChat',
        name: '数据类型',
        component: dictionaryJiaocheChat
    }
    ,{
        path: '/dictionaryJiaocheZhuangtai',
        name: '叫车类型',
        component: dictionaryJiaocheZhuangtai
    }
    ,{
        path: '/dictionarySex',
        name: '性别类型',
        component: dictionarySex
    }
    ,{
        path: '/dictionaryShangpin',
        name: '商品类型',
        component: dictionaryShangpin
    }
    ,{
        path: '/dictionaryShangpinOrder',
        name: '订单类型',
        component: dictionaryShangpinOrder
    }
    ,{
        path: '/dictionaryShangpinOrderPayment',
        name: '订单支付类型',
        component: dictionaryShangpinOrderPayment
    }
    ,{
        path: '/dictionaryShiwuzhaoling',
        name: '物品类型',
        component: dictionaryShiwuzhaoling
    }
    ,{
        path: '/dictionaryShiwuzhaolingZhuangtai',
        name: '状态',
        component: dictionaryShiwuzhaolingZhuangtai
    }
    ,{
        path: '/dictionaryYuezhanxiaoyuan',
        name: '约战校园类型',
        component: dictionaryYuezhanxiaoyuan
    }
    ,{
        path: '/dictionaryZhuangtai',
        name: '状态',
        component: dictionaryZhuangtai
    }
    ,{
        path: '/config',
        name: '轮播图',
        component: config
    }


    ,{
        path: '/daipiao',
        name: '代跑',
        component: daipiao
      }
    ,{
        path: '/daipiaoCollection',
        name: '代跑收藏',
        component: daipiaoCollection
      }
    ,{
        path: '/daipiaoLiuyan',
        name: '代跑留言',
        component: daipiaoLiuyan
      }
    ,{
        path: '/daipiaoOrder',
        name: '代跑订单',
        component: daipiaoOrder
      }
    ,{
        path: '/dictionary',
        name: '字典',
        component: dictionary
      }
    ,{
        path: '/jiaoche',
        name: '叫车',
        component: jiaoche
      }
    ,{
        path: '/jiaocheChat',
        name: '用户咨询',
        component: jiaocheChat
      }
    ,{
        path: '/shangpin',
        name: '二手商品',
        component: shangpin
      }
    ,{
        path: '/shangpinCommentback',
        name: '二手商品评价',
        component: shangpinCommentback
      }
    ,{
        path: '/shangpinOrder',
        name: '二手商品订单',
        component: shangpinOrder
      }
    ,{
        path: '/shiwuzhaoling',
        name: '失物招领',
        component: shiwuzhaoling
      }
    ,{
        path: '/siji',
        name: '司机',
        component: siji
      }
    ,{
        path: '/yonghu',
        name: '用户',
        component: yonghu
      }
    ,{
        path: '/yuezhanxiaoyuan',
        name: '约战校园',
        component: yuezhanxiaoyuan
      }
    ,{
        path: '/yuezhanxiaoyuanLiuyan',
        name: '约战校园留言',
        component: yuezhanxiaoyuanLiuyan
      }


    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '/',
    name: '首页',
    redirect: '/index'
  }, /*默认跳转路由*/
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})

export default router;
