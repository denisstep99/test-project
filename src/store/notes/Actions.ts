import {
    AddNotePayload, ChangeNotePositionPayload,
    NOTE_ACTION, RemoveNotePayload,
    SetNotesPayload
} from "./Types";
import {createTypedAction} from "../utils";

export const setNotesAction = createTypedAction<SetNotesPayload>(NOTE_ACTION.SET_NOTES);
export const addNoteAction = createTypedAction<AddNotePayload>(NOTE_ACTION.ADD_NOTE);
export const removeNoteAction = createTypedAction<RemoveNotePayload>(NOTE_ACTION.REMOVE_NOTE);
export const changeNotePositionAction = createTypedAction<ChangeNotePositionPayload>(NOTE_ACTION.CHANGE_POSITION);