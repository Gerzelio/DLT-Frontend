import api from './api';

export async function create(params: any, payload: any = {}) {
    return await api.post(params, payload);
}

export async function update(params: any, payload: any = {}) {
    return await api.put(params, payload);
}
  
export async function select(params: any) {
    const res = await api.get(params);
    return res.data;
}