import axios from "axios";
import { Toast  } from "antd-mobile";
import 'antd-mobile/dist/antd-mobile.css';

axios.interceptors.request.use(function(config) {
    Toast.loading('loading...', 0)
    return config;
})

axios.interceptors.response.use(function(config) {
    setTimeout(() => {
        Toast.hide();
    }, 2000);
    return config;
})