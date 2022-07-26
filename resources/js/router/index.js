import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'

Vue.use(VueRouter)

/* Guest Component */
const Login = () => import('../components/Login.vue' /* webpackChunkName: "resource/js/components/login" */)
const Register = () => import('../components/Register.vue' /* webpackChunkName: "resource/js/components/register" */)
const Forgetpassword = () => import('../components/Forgetpassword.vue' /* webpackChunkName: "resource/js/components/register" */)
const Resetpassword = () => import('../components/Resetpassword.vue' /* webpackChunkName: "resource/js/components/register" */)
const Home = () => import('../components/Home.vue' /* webpackChunkName: "resource/js/components/Home" */)
/* Guest Component */

/* Authenticated Component */
const Dashboard = () => import('../components/Dashboard.vue' /* webpackChunkName: "resource/js/components/dashboard" */)
const Profile = () => import('../components/Profile.vue' /* webpackChunkName: "resource/js/components/Profile" */)
const Roles = () => import('../components/Roles.vue' /* webpackChunkName: "resource/js/components/Roles" */)
const Permissions = () => import('../components/Permissions.vue' /* webpackChunkName: "resource/js/components/Permissions" */)
const Users = () => import('../components/Users.vue' /* webpackChunkName: "resource/js/components/Users" */)
/* Authenticated Component */


const Routes = [
	{
        name:"home",
        path:"/",
        component:Home,
        meta:{
            middleware:"guest",
            title:'home'
        }
    },
	{
        name:"login",
        path:"/login",
        component:Login,
        meta:{
            middleware:"guest",
            title:'Login'
        }
    },
    {
        name:"register",
        path:"/register",
        component:Register,
        meta:{
            middleware:"guest",
            title:'Register'
        }
    },
	{
        name:"forgetpassword",
        path:"/forgetpassword",
        component:Forgetpassword,
        meta:{
            middleware:"guest",
            title:'Forget Password'
        }
    },
	{
        name:"reset-password",
        path:"/reset-password/:token",
        component:Resetpassword,
        meta:{
            middleware:"guest",
            title:'Reset Password'
        }
    },
    {
		name:"dashboard",
        path:"/dashboard",
        component:Dashboard,
        meta:{
            middleware:"auth",
			title:'Dashboard'
        }
    },
	{
		name:"profile",
        path:"/profile",
        component:Profile,
        meta:{
            middleware:"auth",
			title:'Profile'
        }
    },
	{
		name:"roles",
        path:"/roles",
        component:Roles,
        meta:{
            middleware:"auth",
			title:'Roles'
        }
    },
	{
		name:"permissions",
        path:"/permissions",
        component:Permissions,
        meta:{
            middleware:"auth",
			title:'Permissions'
        }
    },
	{
		name:"users",
        path:"/users",
        component:Users,
        meta:{
            middleware:"auth",
			title:'Users'
        }
    }
]

var router  = new VueRouter({
    mode: 'history',
    routes: Routes
})

router.beforeEach((to, from, next) => {
    document.title = `${to.meta.title} - ${process.env.MIX_APP_NAME}`
    if(to.meta.middleware=="guest"){
        if(store.state.auth.authenticated){
            next({name:"dashboard"})
        }
        next()
    }else{
        if(store.state.auth.authenticated){
            next()
        }else{
            next({name:"home"})
			 next()
        }
    }
})

export default router