import axios from 'axios';

const api = axios.create({
    baseURL: "http://127.0.0.1:8083/",
    // withCredentials: false,
    // method: "POST",
    // headers: {
        // "Access-Control-Allow-Origin": "*" ,
        // 'Access-Control-Allow-Credentials':false,
        // "Access-Control-Allow-Headers":"*",
        // 'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        // "Content-Type": "application/json"
    // },
});

api.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

const defineHeaders = (Headers: any) => {
    const edited_response = Headers;
    edited_response["Access-Control-Allow-Origin"] = "*";
    return edited_response;
        
};

api.interceptors.response.use(

    Headers => defineHeaders(Headers) 
    
);

export default api;