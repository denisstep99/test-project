import {INote, NOTE_ACTION, NoteActionsTypes} from "./Types";

export function setNotesAction(notes: Array<INote>): NoteActionsTypes {
    return {
        type: NOTE_ACTION.SET_NOTES,
        payload: {
            notes,
        }
    }
}

export function addNoteAction(newNote: INote): NoteActionsTypes {
    return {
        type: NOTE_ACTION.ADD_NOTE,
        payload: {
            ...newNote
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