
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { persistStore } from 'redux-persist';

import rootReducer from './reducers';
import { reducerRegistry } from './reducers/reducerRegistry';


export function configureStore() {
  const createStoreWithMiddleware = composeWithDevTools(applyMiddleware(thunk))(createStore);
  return createStoreWithMiddleware(rootReducer);
}

const store = configureStore();

reducerRegistry.setChangeListener((reducers) => {
  store.replaceReducer(combineReducers(reducers));
});

export const persistor = persistStore(store);
export default store;
