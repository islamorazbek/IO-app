import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import rootReducers from './root-reducers';
import rootSaga from './root-sagas';

const sagaMiddleware = createSagaMiddleware();

export default createStore(rootReducers, composeWithDevTools(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(rootSaga);