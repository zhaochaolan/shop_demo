import axios from 'axios'
import router from '@/router'
import { Notify,Dialog} from 'vant';
import Config from '@/settings'
import { getToken } from "./auth";
import { showLoading,hideLoading} from "./loading";

const service = axios.create({
    baseURL:process.env.NODE_ENV === 'production'? Config.baseUrl : Config.baseUrl,
    timeout:Config.timeout
})

//request拦截器
service.interceptors.request.use(
    config => {
        showLoading()
        if(getToken()) {
            config.headers['Authorization'] = getToken()
        }
        config.headers['Content-type'] = 'application/json'
        return config
    },
    error => {
        console.log(error)
        Promise.reject('error')
    }
)

//response 拦截器
service.interceptors.response.use(
    response => {
        const code = response.data.code
        if(code !== 201 || code !== 200) {
            Notify({type:'danger',message:response.data.msg})
            return Promise.reject('error')
        }else {
            return response.data
        }
    },
    error => {
        let code = 0
        try {
            code = error.response.data.status
        }catch (e) {
            if(error.toString().indexOf('Error: timeout') !== -1) {
                Notify({ type: 'danger', message: '网络请求超时',duration:5000 });
                return Promise.reject(error)
            }
        }
        if(code) {
            if(code === 401) {
                Dialog.confirm({
                    title:'登录状态已过期，您可以继续留在该页面，或者重新登录',
                    message:'系统提示',
                    confirmButtonText: '重新登录',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                   router.push({path:'/'})
                })
            }
        }else {
            Notify({ type: 'danger', message: '接口请求失败' });

        }
        hideLoading()
        return Promise.reject(error)
    }
)
export default service