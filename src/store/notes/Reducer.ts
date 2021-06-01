import produce, {Draft} from "immer";
import { v4 as uuid } from 'uuid';
import {INote, NOTE_ACTION, NoteActionsTypes} from "./Types";

export interface INotesState {
  readonly [key: string]: INote;
}

const INITIAL_STATE: INotesState = {};

export const notesReducer = produce((draft: Draft<INotesState>, action: NoteActionsTypes) => {
    switch (action.type) {
        case NOTE_ACTION.ADD_NOTE: {
            const noteId = uuid();

            draft[noteId] = {noteId, ...action.payload};
            break;
        }
        case NOTE_ACTION.REMOVE_NOTE: {
            const {noteId} = action.payload;

            delete draft[noteId];
            break;
        }
        case NOTE_ACTION.CHANGE_POSITION: {
            const {noteId, isPositionIncrement} = action.payload;

            const currentNote = draft[noteId];
            const currentPosition = currentNote.position;

            if (!currentNote) {
                throw new Error('Incorrect noteId');
            }

            if (isPositionIncrement) {
                const nextNote = Object.values(draft).find(note => note.position === currentPosition + 1);
                if (!nextNote) {
                    break;
                }

                draft[nextNote.noteId] = {...nextNote, position: currentPosition};
                draft[currentNote.noteId] = {...currentNote, position: currentPosition + 1};
            } else {
                const previousNote = Object.values(draft).find(note => note.position === currentPosition - 1);
                if (!previousNote) {
                    break;
                }

                draft[previousNote.noteId] = {...previousNote, position: currentPosition};
                draft[currentNote.noteId] = {...currentNote, position: currentPosition - 1};
            }
        }
    }
}, INITIAL_STATE);
