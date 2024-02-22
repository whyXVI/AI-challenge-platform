import { createRouter, createWebHistory } from 'vue-router';
import SuccessPage from '../views/SuccessPage.vue';
import MainPage from '@/views/MainPage.vue';
import LoginPage from '../components/LoginForm.vue'
import RoomPage from '../views/RoomPage1.vue'; // 假设你有这个组件
import CreateRoom from '../components/RoomPage.vue';
const routes = [
  {
    path: '/',
    name: 'LoginPage',
    component: LoginPage
  },
  {
    path: '/success',
    name: 'SuccessPage',
    component: SuccessPage
  },
  {
    path: '/MainPage',
    name: 'MainPage',
    component: MainPage
  },
  {
    // 添加动态路由
    path: '/room/:roomId', // 动态路径参数 `roomId`
    name: 'RoomPage',
    component: RoomPage,
    props: true // 允许组件通过props接收路由参数
  },
  {
    path: '/CreateRoom',
    name: 'CreateRoom',
    component: CreateRoom,
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL), // 使用哈希模式
  routes
});

export default router;
// //先把VueRouter原型对象的push保存一份
// let originPush=VueRouter.prototype.push
// let originReplace=VueRouter.prototype.replace
//  
// //重写push和replace
// //参数：replace:告诉原来的push方法往哪里跳（传递哪些参数） resolve:成功的回调 reject:失败的回调
// VueRouter.prototype.push=function(location,resolve,reject){
//  if(resolve && reject){
//  //call和apply的区别：
//  //相同点：都可以调用函数一次，都可以篡改函数的上下文一次
//  //不同点：call传递参数用逗号隔开，apply方法执行，传递数组
//  originPush.call(this,location,resolve,reject);
//  }else{
//  originPush.call(this,location,()=>{},()=>{})
//  }
// }
// VueRouter.prototype.replace=function(location,resolve,reject){
//  if(resolve && reject){
// //call和apply的区别：
// //相同点：都可以调用函数一次，都可以篡改函数的上下文一次
//  //不同点：call传递参数用逗号隔开，apply方法执行，传递数组
//  originReplace.call(this,location,resolve,reject);
//  }else{
//  originReplace.call(this,location,()=>{},()=>{})
//  }
// }
