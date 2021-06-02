import {call, put, takeLatest, takeEvery, StrictEffect } from 'redux-saga/effects';
import {createNote, getNotes, IResponse, removeNote as apiRemoveNote, STATUS_CODE} from "../../serverEmulator/api";
import {INote} from "../../store/notes/Types";
import {addNoteAction, removeNoteAction, setNotesAction} from "../../store/notes/Actions";
import {AddNoteRequestAction, NOTE_SAGA_ACTION, RemoveNoteRequestAction} from "./Types";

function* requestNotes(): Generator<StrictEffect, void, IResponse<Array<INote>>> {
    const response = yield call(getNotes);
    const notes: Array<INote> = response.payload || [];

    yield put(setNotesAction(notes));
}

function* removeNote(action: RemoveNoteRequestAction): Generator<StrictEffect, void, IResponse> {
    const noteId = action.payload.noteId;

    const response = yield call(apiRemoveNote, noteId);
    if (response.status === STATUS_CODE.GOOD) {
        yield put(removeNoteAction(noteId));
    }
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
    yield takeLatest(NOTE_SAGA_ACTION.REMOVE_NOTE_REQUEST, removeNote);
}