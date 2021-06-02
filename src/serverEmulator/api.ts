import {INote} from "../store/notes/Types";

enum STATUS_CODE {
    GOOD = 200,
    BAD = 500,
}


export interface IResponse<T = any> {
    status: STATUS_CODE;
    payload?: T;
}


function getLocal(prop: string): any {
    const value = window.localStorage.getItem(prop);

    if (value) {
        return JSON.parse(value);
    }
}

function setLocal(prop: string, value: any): void {
    const parsedValue = JSON.stringify(value);

    window.localStorage.setItem(prop, parsedValue);
}

async function wait(timeout = 400) {
    await new Promise(resolve => setTimeout(resolve, timeout));
}

export async function getNotes(): Promise<IResponse<Array<INote> | Error>> {
    let data: Array<INote>;

    try {
        data = getLocal('notes') || [];
    } catch (e) {
        return ({
           status: STATUS_CODE.BAD,
           payload: e,
        });
    }

    await wait(200);

    return ({
        status: STATUS_CODE.GOOD,
        payload: data,
    });
}

export async function updateNotes(noteToUpdate: Array<INote>): Promise<IResponse<Error>> {
    const notesResponse = await getNotes();

    if (!Array.isArray(notesResponse.payload)) {
        return notesResponse as IResponse<Error>;
    }

    const notes = notesResponse.payload;
    const storedNotesIds = new Set(notes.map(note => note.noteId));

    if (!noteToUpdate.every(note => storedNotesIds.has(note.noteId))) {
        return {
            status: STATUS_CODE.BAD,
        }
    }

    noteToUpdate.forEach((currentNote) => {
       const noteIndex = notes.findIndex(note => note.noteId === currentNote.noteId);
       notes[noteIndex] = currentNote;
    });

    setLocal('notes', notes);

    await wait(200);

    return {
        status: STATUS_CODE.GOOD,
    }
}

export async function removeNote(noteId: string): Promise<IResponse> {
    const notesResponse = await getNotes();

    if (!Array.isArray(notesResponse.payload)) {
        return notesResponse;
    }

    const notes = notesResponse.payload;

    const filteredNotes = notes.filter(note => note.noteId !== noteId);

    setLocal('notes', filteredNotes);

    return {status: STATUS_CODE.GOOD}
}

export async function createNote(newNote: INote): Promise<IResponse<INote | Error>> {
    const notesResponse = await getNotes();

    if (!Array.isArray(notesResponse.payload)) {
        return notesResponse as IResponse<Error>;
    }

    const notes = notesResponse.payload;

    if (notes.some(note => note.noteId === newNote.noteId)) {
        return {
            status: STATUS_CODE.BAD,
        }
    }

    notes.push(newNote);

    await wait(200);

    setLocal('notes', notes);

    return {
        status: STATUS_CODE.GOOD,
        payload: newNote
    }
}