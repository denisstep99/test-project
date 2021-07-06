import {INotesState} from "./notes/Types";
import {noteReducer} from "./notes/Slice";
import sagas from './../sagas/notes/Saga';
import {configureStore, getDefaultMiddleware, combineReducers} from "@reduxjs/toolkit";
import createSagaMiddleware from 'redux-saga'

export interface IRootStore {
    notes: INotesState;
}

export const sagaMiddleware = createSagaMiddleware();

export const rootReducer = combineReducers<IRootStore>({notes: noteReducer});

const middleware = getDefaultMiddleware({
    thunk: false,
}).concat(sagaMiddleware);


export const rootStore = configureStore({
    reducer: rootReducer,
    middleware,
    devTools: process.env.NODE_ENV !== 'production',
});

sagaMiddleware.run(sagas);

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof rootStore.dispatch;