import {INote} from "./Types";
import {createReducer} from "@reduxjs/toolkit";
import * as noteAction from "./Actions";

export interface INotesState {
    readonly [key: string]: INote;
}

const INITIAL_STATE: INotesState = {};

export const notesReducer = createReducer<INotesState>(INITIAL_STATE, builder => {
    builder
        .addCase(noteAction.setNotesAction, (state, action) => {
            const notes = action.payload;
            notes.forEach(note => state[note.noteId] = note);
        })
        .addCase(noteAction.changeNotePositionAction, (state, action) => {
            const {noteId, isPositionIncrement} = action.payload;

            const currentNote = state[noteId];
            const currentPosition = currentNote.position;

            if (!currentNote) {
                throw new Error('Incorrect noteId');
            }

            if (isPositionIncrement) {
                const nextNote = Object.values(state).find(note => note.position === currentPosition + 1);
                if (!nextNote) {
                    return
                }

                state[nextNote.noteId] = {...nextNote, position: currentPosition};
                state[currentNote.noteId] = {...currentNote, position: currentPosition + 1};
            } else {
                const previousNote = Object.values(state).find(note => note.position === currentPosition - 1);
                if (!previousNote) {
                    return;
                }

                state[previousNote.noteId] = {...previousNote, position: currentPosition};
                state[currentNote.noteId] = {...currentNote, position: currentPosition - 1};
            }
        })
        .addCase(noteAction.removeNoteAction, (state, action) => {
            const noteId = action.payload;
            const currentNote = state[noteId];

            Object.values(state).forEach(note => {
                if (note.position > currentNote.position) {
                    state[note.noteId].position -= 1;
                }
            });

            delete state[noteId];
        })
        .addCase(noteAction.addNoteAction, (state, action) => {
            const {noteId, position} = action.payload;

            Object.values(state).forEach(note => {
               if (note.position >= position) {
                   state[note.noteId].position += 1;
               }
            });

            state[noteId] = {...action.payload};
        })
});