import {createStore, combineReducers, applyMiddleware} from 'redux';
import {INotesState, notesReducer} from "./notes/Reducer";
import sagas from './../sagas/notes/Saga';
import createSagaMiddleware from 'redux-saga'

export interface IRootStore {
    notes: INotesState;
}

const sagaMiddleware = createSagaMiddleware();

export const rootReducer = combineReducers<IRootStore>({notes: notesReducer});

export const rootStore = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(sagas);