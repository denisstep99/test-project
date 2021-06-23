import {ActionCustomType} from "../utils";

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

export type SetNotesPayload = ActionCustomType<NOTE_ACTION.SET_NOTES, Array<INote>>;

export type AddNotePayload = ActionCustomType<NOTE_ACTION.ADD_NOTE, INote>;

export type RemoveNotePayload = ActionCustomType<NOTE_ACTION.REMOVE_NOTE, string>;

export type ChangeNotePositionPayload = ActionCustomType<NOTE_ACTION.CHANGE_POSITION, {
    noteId: string;
    isPositionIncrement: boolean;
}>;