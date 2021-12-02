import { createStore, Store, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import createSagaMiddleware from "redux-saga";

import rootReducer from "./ducks/rootReducer";
import rootSaga from "./ducks/rootSaga";

import { UserState } from "./ducks/user/types";

export interface ApplicationState {
  respositories: UserState;
}

const persistConfig = {
  key: "root",
  storage,
};

const sagaMiddleware = createSagaMiddleware();

const persistedReducer = persistReducer<RootState>(persistConfig, rootReducer);

//const store:Store<ApplicationState> = createStore(rootReducer, applyMiddleware(sagaMiddleware));
const store: Store = createStore(
  persistedReducer,
  applyMiddleware(sagaMiddleware)
);

const persistor = persistStore(store);

export type State = ReturnType<typeof rootReducer>;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

sagaMiddleware.run(rootSaga);

export { store, persistor };
