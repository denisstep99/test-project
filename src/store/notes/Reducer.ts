import produce, {Draft} from "immer";
import {INote, NOTE_ACTION, NoteActionsTypes} from "./Types";

export interface INotesState {
  readonly [key: string]: INote;
}

const INITIAL_STATE: INotesState = {};

export const notesReducer = produce((draft: Draft<INotesState>, action: NoteActionsTypes) => {
    switch (action.type) {
        case NOTE_ACTION.SET_NOTES: {
            const {notes} = action.payload;
            notes.forEach(note => draft[note.noteId] = note);
            break;
        }
        case NOTE_ACTION.ADD_NOTE: {
            const {noteId, position} = action.payload;

            Object.values(draft).forEach(note => {
               if (note.position >= position) {
                   draft[note.noteId].position += 1;
               }
            });

            draft[noteId] = {...action.payload};
            break;
        }
        case NOTE_ACTION.REMOVE_NOTE: {
            const {noteId} = action.payload;
            const currentNote = draft[noteId];

            Object.values(draft).forEach(note => {
                if (note.position > currentNote.position) {
                    draft[note.noteId].position -= 1;
                }
            });

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
