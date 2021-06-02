import {createSelector} from 'reselect';
import {IRootStore} from "../index";
import {INote} from "./Types";

const getNotes = (store: IRootStore) => store.notes;

export const getNotesSorted = createSelector(getNotes, (notes): Array<INote> => {
   return Object
       .values(notes)
       .sort((firstNote, secondNote) => firstNote.position - secondNote.position);
});

export const getMaxPosition = createSelector(getNotes, (notes): number => {
   return Object
       .values(notes)
       .reduce((maxPosition, currentNote) => Math.max(maxPosition, currentNote.position), 0);
});