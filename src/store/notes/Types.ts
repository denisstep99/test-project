export enum NOTE_ACTION {
    ADD_NOTE = "NOTE/ADD_NOTE",
    REMOVE_NOTE = "NOTE/REMOVE_NOTE",
    CHANGE_POSITION = "NOTE/CHANGE_POSITION",
}

export interface INote {
    position: number;
    noteId: string;
    title: string;
    description: string;
}

interface AddNoteAction {
    type: typeof NOTE_ACTION.ADD_NOTE;
    payload: {
        position: number;
        title: string;
        description: string;
    }
}

interface RemoveNoteAction {
    type: typeof NOTE_ACTION.REMOVE_NOTE;
    payload: {
        noteId: string;
    }
}

interface ChangeNotePosition {
    type: typeof NOTE_ACTION.CHANGE_POSITION;
    payload: {
        noteId: string;
        isPositionIncrement: boolean;
    }
}

export type NoteActionsTypes = AddNoteAction | RemoveNoteAction | ChangeNotePosition;