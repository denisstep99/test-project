import {
    AddNoteRequestAction,
    ChangePositionRequestAction,
    GetNotesRequestAction,
    NOTE_SAGA_ACTION,
    RemoveNoteRequestAction,
    SetNoteRequestAction
} from "./Types";
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
            newNote,
        }
    }
}

export function removeNoteRequestAction(noteId: string): RemoveNoteRequestAction {
    return {
        type: NOTE_SAGA_ACTION.REMOVE_NOTE_REQUEST,
        payload: {
            noteId,
        }
    }
}

export function setNoteRequestAction(updatedNote: INote): SetNoteRequestAction {
    return {
        type: NOTE_SAGA_ACTION.SET_NOTE_REQUEST,
        payload: {
            updatedNote,
        }
    }
}

export function changePositionRequestAction(noteId: string, isIncrement: boolean): ChangePositionRequestAction {
    return {
        type: NOTE_SAGA_ACTION.CHANGE_POSITION_REQUEST,
        payload: {
            noteId,
            isIncrement,
        }
    }
}