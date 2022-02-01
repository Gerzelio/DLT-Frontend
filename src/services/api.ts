import axios, { AxiosRequestConfig } from 'axios';
import { getAuthorization } from './authorization';

const api = axios.create({
    baseURL: "http://127.0.0.1:8083/",
});

const defineHeaders = (Headers: any) => {
    const edited_response = Headers;
    edited_response["Access-Control-Allow-Origin"] = "*";
    return edited_response;
        
};

const defineAuth = (Config: any) => {
    const token = getAuthorization();
    const edited_config = Config;
    edited_config["Authorization"] = `Bearer ${token}`;
    return edited_config;
}

api.interceptors.response.use(
    Headers => defineHeaders(Headers) 
);

api.interceptors.request.use(
    Headers => defineAuth(Headers),
);

export default api;