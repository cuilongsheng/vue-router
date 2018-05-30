import Vue from 'vue'
import Router from 'vue-router'
import hi from '@/components/Hi'
import hi1 from '@/components/hi1'
import hi2 from '@/components/hi2'
import params from '@/components/params'
import paramsReg from '@/components/params-reg'
import redirect from '@/components/redirect'
import indexTop from '@/components/index-top'
import programNav from '@/components/program-nav'
import Error from '@/components/error'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        redirect: '/index-top'
    }, {
        path: '/redirect',
        redirect: '/',
        alias: '/index' //貌似这是个坑,尽量不要给根目录起别名
    }, {
        path: '/Hi',
        name: 'hi',
        components: {
            default: hi,
            left: hi1,
            right: hi2
        },
        children: [{
            path: '/',
            component: hi,
        }, {
            path: 'hi1',
            name: 'hi1',
            component: hi1
        }, {
            path: 'hi2',
            name: 'hi2',
            component: hi2
        }]
    }, {
        path: '/params/:newsId/:newsTitle', //url传递参数
        name: 'params',
        component: params
            // beforeEnter: (to, from, next) => {
            //     console.log('我进入了params模板');
            //     console.log(to);
            //     console.log(from);
            //     next();
            // }
    }, {
        path: '/params-reg/:newsId(\\d+)/:newsTitle',
        component: paramsReg
    }, {
        path: '/program-nav',
        name: 'programNav',
        component: programNav
    }, {
        path: '*',
        component: Error
    }]
})