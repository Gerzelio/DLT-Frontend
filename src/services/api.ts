import axios, { AxiosRequestConfig } from 'axios';
import { getAuthorization } from './authorization';

const api = axios.create({
    baseURL: "http://192.168.43.244:8083/"
});

const defineHeaders = (Headers: any) => {
    const edited_response = Headers;
    edited_response["Access-Control-Allow-Origin"] = "*";
    return edited_response;
        
};

async function defineAuth(req: any) {
    const token = await getAuthorization();

    req.headers = {
        ...req.headers,
        Authorization: `Bearer ${token}`,
        "Access-Control-Allow-Origin": "*"
    }
    
    return req;
}



api.interceptors.response.use(
    Headers => defineHeaders(Headers) 
);

api.interceptors.request.use(
    (req) => defineAuth(req)
);

export default api;