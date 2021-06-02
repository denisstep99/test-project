import {call, put, takeLatest, takeEvery, StrictEffect } from 'redux-saga/effects';
import {createNote, getNotes, IResponse} from "../../serverEmulator/api";
import {INote} from "../../store/notes/Types";
import {addNoteAction, setNotesAction} from "../../store/notes/Actions";
import {AddNoteRequestAction, NOTE_SAGA_ACTION} from "./Types";

function* requestNotes(): Generator<StrictEffect, void, IResponse<Array<INote>>> {
    const response = yield call(getNotes);
    const notes: Array<INote> = response.payload || [];

    yield put(setNotesAction(notes));
}

function* addNote(action: AddNoteRequestAction): Generator<StrictEffect, void, IResponse<INote>> {
    const newNote: INote = action.payload.newNote;

    const response = yield call(createNote, newNote);
    const note = response.payload;

    if (note) {
        yield put(addNoteAction(note));
    }
}

export default function* (): Generator<StrictEffect, void> {
    yield takeLatest(NOTE_SAGA_ACTION.GET_NOTES_REQUEST, requestNotes);
    yield takeEvery(NOTE_SAGA_ACTION.ADD_NOTE_REQUEST, addNote);
}