import { createStore,applyMiddleware } from 'redux';
import { reducer } from './reducer';
import ReduxThunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension';

export const store = createStore(reducer, composeWithDevTools(applyMiddleware(ReduxThunk)));