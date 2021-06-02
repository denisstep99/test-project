import {INote} from "../../store/notes/Types";

export enum NOTE_SAGA_ACTION {
    ADD_NOTE_REQUEST = "NOTE/ADD_NOTE_REQUEST",
    REMOVE_NOTE_REQUEST = "NOTE/REMOVE_NOTE_REQUEST",
    CHANGE_POSITION_REQUEST = "NOTE/CHANGE_POSITION_REQUEST",
    GET_NOTES_REQUEST = "NOTE/SET_NOTES_REQUEST",
}

export interface GetNotesRequestAction {
    type: typeof NOTE_SAGA_ACTION.GET_NOTES_REQUEST;
}

export interface AddNoteRequestAction {
    type: typeof NOTE_SAGA_ACTION.ADD_NOTE_REQUEST;
    payload: {
        newNote: INote
    }
}