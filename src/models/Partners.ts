import { Effect } from 'dva';
import { Reducer } from 'redux';
import { query } from '../services/partners';


export interface Partners {
    id?: any,
    name?: string,
    abbreviation?: string,
    description?: string,
    partnerType?: string,
    logo?: any,
    status?: any,
    createdBy?: any,
    updatedBy?: any,
    dateCreated: string,
    dateUpdated: any
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
            const response = yield call(query, payload);
            
            yield put({
                type: 'save',
                payload: response,
            });
        },
    },
    reducers: {
        save(state, { payload }) {
            console.log(payload);
            return {
              ...state,
              partners: [{
                  id: 1,
                  name: "CCS",
                  abbreviation: "CCS",
                  description: "CCS",
                  partnerType: "ONG",
                  logo: null,
                  status: 1,
                  createdBy: 1,
                  dateCreated: "2021-01-01T06:10:22.000+00:00",
                  updatedBy: null,
                  dateUpdated: null
              }]
            };
        },
    }
}
export default PartnersModel;


