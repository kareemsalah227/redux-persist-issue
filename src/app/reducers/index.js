// @flow

import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import _ from 'lodash';
import {
  RECEIVED_AUTH_TOKEN
} from '../actions/index';
import { reducerRegistry } from './reducerRegistry';


type authTokenType = {
  access_token: string,
};

type authTokenActionType = {
  type: string,
  payload: authTokenType,
};

const initToken = {
  access_token: '',
};

export function authTokenReducer(state: authTokenType = initToken, action: authTokenActionType) {
  switch (action.type) {
    case RECEIVED_AUTH_TOKEN:
      return { ...action.payload };
    default:
      return state;
  }
}

reducerRegistry.register('authToken', persistReducer({ key: 'authToken', storage }, authTokenReducer));

export default combineReducers(reducerRegistry.getReducers());
