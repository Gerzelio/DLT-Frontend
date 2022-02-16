import { Effect } from 'dva';
import { Reducer } from 'redux';
import { query } from '../services/locality';

export interface Loading {
    effects: { [key: string]: boolean | undefined };
    models: {
        global?: boolean;
        menu?: boolean;
        user?: boolean;
        login?: boolean;
    }
}

export interface Locality {
    id?: string,
    district: any,
    name: string,
    description: string,
    status: boolean,
    createdBy: string,
    detaCreated: string,
    updatedBy: string,
    dateUpdated: string
}

export interface LocalityModelState {
    loading?: Loading,
    locality: Locality[]
}

export interface LocalityModelType {
    namespace: string;
    state: LocalityModelState;
    effects: {
        fetch: Effect;
    };
    reducers: {

    }
}

const LocalityModel: LocalityModelType = {
    namespace: 'locality',
    
    state: {
        loading: {
            effects: {

            },
            models:{}
        },
        locality: []
    },

    effects: {
        *fetch({ payload }, { call, put }){
            const {status, data} = yield call(query, payload);
            yield put({
                type: 'save',
                payload: data,
            });
        }
    },

    reducers: {

    }
}

export default LocalityModel;