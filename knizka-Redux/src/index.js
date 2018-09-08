import React from 'react';
import ReactDOM from 'react-dom';
import './css/style.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

import { setForm, setUserData, setRouteData, update, updateInputsForm, updateIsOpen, updateIfSomething, update_last_insert, setLeaveData, setAnnouncementsData, setAnotherBookData, setNumberOf, register} from './reducers';

const logger = createLogger();

const rootReducer = combineReducers({setForm, setUserData, setRouteData, update, updateInputsForm, updateIsOpen, updateIfSomething, update_last_insert, setLeaveData, setAnnouncementsData, setAnotherBookData, setNumberOf, register});

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, logger));

ReactDOM.render(
    <Provider store = {store} >
        <App />
    </Provider>, document.getElementById('root'));
registerServiceWorker();
