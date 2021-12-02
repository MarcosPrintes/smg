import { createStore, Store, applyMiddleware } from "redux";

import createSagaMiddleware from "redux-saga";

import rootReducer from "./ducks/rootReducer";
import rootSaga from "./ducks/rootSaga";

import { UserState } from "./ducks/user/types";

export interface ApplicationState {
  respositories: UserState;
}

const sagaMiddleware = createSagaMiddleware();

//const store:Store<ApplicationState> = createStore(rootReducer, applyMiddleware(sagaMiddleware));
const store: Store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

export type State = ReturnType<typeof rootReducer>;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

sagaMiddleware.run(rootSaga);

export default store;
