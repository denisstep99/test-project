import {createStore, combineReducers} from 'redux';
import {INotesState, notesReducer} from "./notes/Reducer";

export interface IRootStore {
    notes: INotesState;
}

export const rootReducer = combineReducers<IRootStore>({notes: notesReducer});

export const rootStore = createStore(rootReducer);