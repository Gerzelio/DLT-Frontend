import { stringify } from 'qs';
import { create, select, update } from './crud';

interface LocalityFilter{
    id: number
}

export async function query(payload?: LocalityFilter){
    let url: string;
    if(payload) {
        url = '/api/localities?'.concat(stringify(payload));
    } else {
        url = '/api/localities';
    }
    const res = await select(url);
    return res;
}