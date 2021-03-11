import React from 'react';
import ReactDOM from 'react-dom';
import App from '/src/components/app/app.jsx';
import {createAPI} from '/src/api/api.js';
import {ActionCreator} from '/src/store/action.js';
import {AuthorizationStatus} from '/src/consts.js';
import {reducer} from './store/reducer';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const api = createAPI(
    () => store.dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH))
);

const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api)),
        // @TODO далее добавлю
        // applyMiddleware(redirect)
    ),
);
// @TODO далее добавлю
// store.dispatch(checkAuth());

ReactDOM.render(
    <Provider store={store}>
      <App/>
    </Provider>,
    document.getElementById(`root`)
);
