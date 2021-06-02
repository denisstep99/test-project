export enum NOTE_ACTION {
    ADD_NOTE = "NOTE/ADD_NOTE",
    REMOVE_NOTE = "NOTE/REMOVE_NOTE",
    CHANGE_POSITION = "NOTE/CHANGE_POSITION",
    SET_NOTES = "NOTE/SET_NOTES",
}

export interface INote {
    position: number;
    noteId: string;
    title: string;
    description: string;
}

interface SetNotesAction {
    type: typeof NOTE_ACTION.SET_NOTES;
    payload: {
        notes: Array<INote>
    }
}

interface AddNoteAction {
    type: typeof NOTE_ACTION.ADD_NOTE;
    payload: INote
}

interface RemoveNoteAction {
    type: typeof NOTE_ACTION.REMOVE_NOTE;
    payload: {
        noteId: string;
    }
}

interface ChangeNotePositionAction {
    type: typeof NOTE_ACTION.CHANGE_POSITION;
    payload: {
        noteId: string;
        isPositionIncrement: boolean;
    }
}

export type NoteActionsTypes = AddNoteAction | RemoveNoteAction | ChangeNotePositionAction | SetNotesAction;