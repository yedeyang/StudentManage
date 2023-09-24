import Mock from "mockjs";
import homeApi from './MockData/home'
// 拦截请求
Mock.mock('/home/getData', homeApi.getHomeData)