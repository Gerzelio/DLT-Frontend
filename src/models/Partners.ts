import { Effect } from 'dva';
import { Reducer } from 'redux';
import { query } from '../services/partners';


export interface Partners {
    id?: string,
    district?: any,
    name?: string,
    abbreviation?: string,
    description?: string,
    partnerType?: string,
    logo?: string,
    status?: string,
    createdBy?: string,
    updatedBy?: string
}

export interface PartnersModelState{
    partners: Partners[]
}

export interface PartnersModelType {
    namespace: string;
    state: PartnersModelState;
    effects: {
      fetch: Effect;
    };
    reducers: {
      save: Reducer<PartnersModelState>;
    };
}

const PartnersModel: PartnersModelType = {
    namespace: 'partners',
    state : {
        partners: []
    },

    effects: {
        *fetch({ payload }, { call, put }) {
            const {status, data} = yield call(query, payload);
            
            yield put({
                type: 'save',
                payload: data,
            });
        },
    },
    reducers: {
        save(state, { payload }) {
            return {
              ...state,
              partners: payload
            };
        },
    }
}
export default PartnersModel;


