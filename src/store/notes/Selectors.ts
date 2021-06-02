import {createSelector} from 'reselect';
import {IRootStore} from "../index";
import {INote} from "./Types";

const getNotes = (store: IRootStore) => store.notes;

export const getNotesSorted = createSelector(getNotes, (notes): Array<INote> => {
   return Object
       .values(notes)
       .sort((firstNote, secondNote) => firstNote.position - secondNote.position);
});