import {NOTE_ACTION, NoteActionsTypes} from "./Types";

export function addNoteAction(position: number, title: string, description: string): NoteActionsTypes {
    return {
        type: NOTE_ACTION.ADD_NOTE,
        payload: {
            position,
            title,
            description,
        }
    }
}

export function removeNoteAction(noteId: string): NoteActionsTypes {
    return {
        type: NOTE_ACTION.REMOVE_NOTE,
        payload: {
            noteId,
        }
    }
}

export function changeNotePosition(noteId: string, isPositionIncrement: boolean): NoteActionsTypes {
    return {
        type: NOTE_ACTION.CHANGE_POSITION,
        payload: {
            noteId,
            isPositionIncrement
        }
    }
}