import {configureStore} from '@reduxjs/toolkit';
import Rootreducer from '../Reducer/Rootreducer';
import createSagaMiddleware from 'redux-saga';
import SagaData from '../Saga/Saga';
const sagaMiddlerware = createSagaMiddleware();
const store = configureStore({
  reducer: Rootreducer,
  middleware: () => [sagaMiddlerware],
});

sagaMiddlerware.run(SagaData);

export default store;
