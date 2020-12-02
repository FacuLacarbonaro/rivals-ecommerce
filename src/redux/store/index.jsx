import { applyMiddleware, createStore, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "../reducers";
import rootSaga from "../sagas";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

let mainEnhancers = compose(
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

const store = createStore(persistedReducer, mainEnhancers);


export const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export default store;
