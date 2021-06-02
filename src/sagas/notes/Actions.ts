import {AddNoteRequestAction, GetNotesRequestAction, NOTE_SAGA_ACTION} from "./Types";
import {INote} from "../../store/notes/Types";

export function getNotesRequestAction(): GetNotesRequestAction {
    return {
        type: NOTE_SAGA_ACTION.GET_NOTES_REQUEST,
    }
}

export function addNotesRequestAction(newNote: INote): AddNoteRequestAction {
    return {
        type: NOTE_SAGA_ACTION.ADD_NOTE_REQUEST,
        payload: {
            newNote
        }
    }
}