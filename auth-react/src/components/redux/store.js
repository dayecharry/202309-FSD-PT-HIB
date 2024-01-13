// createStore -->  apodo que le doy a la funcion legacy_createStore.
import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from 'redux';
import authReducer from './reducers/auth.reducer';

import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const reducer = combineReducers({
  auth: authReducer,
  //city: cityReducer ,  ( en caso que necesite otros datos en mi store)
});

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));
export default store;
