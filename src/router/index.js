import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/index'
import Blog from '@/components/blog/index'
import Header from '@/components/header/header'
import CommentPost from '@/components/comment/commentPost'
import CommentList from '@/components/comment/commentList'
import About from '@/components/about'
import iView from 'iview';
import 'iview/dist/styles/iview.css';
// import './commen.less';
Vue.use(Router)
Vue.use(iView);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/blog',
      name: 'Blog',
      component: Blog,
    },
    {
      path: '/Header',
      name: 'Header',
      component: Header,
    },
    {
      path: '/commentList',
      name: 'CommentList',
      component: CommentList,
    }
  ]
})
