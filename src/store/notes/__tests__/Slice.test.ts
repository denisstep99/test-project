import reducer, {noteActions} from "../Slice";
import {INotesState} from "../Types";

const {setNotesAction, addNoteAction, removeNoteAction, changeNotePositionAction} = noteActions;
const emptyState: INotesState = {}
const initialState: INotesState = {
    '8': {
        noteId: '8',
        description: 'description 8',
        position: 1,
        title: 'title 8'
    }
}

const anotherInitialState = {
    ...initialState,
    '9': {
        noteId: '9',
        description: 'description 9',
        position: 2,
        title: 'title 9'
    }
};

describe("Store@Notes: Slice", () => {
    it('setNotesAction', () => {
        expect(
            reducer(emptyState, setNotesAction([{
                noteId: '9',
                description: 'description 9',
                position: 1,
                title: 'title 9'
            }, {
                noteId: '8',
                description: 'description 8',
                position: 2,
                title: 'title 8'
            }]))
        ).toEqual({
            '9': {
                noteId: '9',
                description: 'description 9',
                position: 1,
                title: 'title 9'
            },
            '8': {
                noteId: '8',
                description: 'description 8',
                position: 2,
                title: 'title 8'
            }
        });
    });

    it('addNoteAction', () => {
        expect(
            reducer(initialState, addNoteAction({
                noteId: '9',
                description: 'description 9',
                position: 1,
                title: 'title 9'
            }))
        ).toEqual({
            '9': {
                noteId: '9',
                description: 'description 9',
                position: 1,
                title: 'title 9'
            },
            '8': {
                noteId: '8',
                description: 'description 8',
                position: 2,
                title: 'title 8'
            }
        });
    });

    it('removeNoteAction', () => {
        expect(
            reducer(initialState, removeNoteAction('8'))
        ).toEqual({});
    });

    it('changeNotePositionAction', () => {
        expect(
            reducer(initialState, changeNotePositionAction({isPositionIncrement: true, noteId: '8'}))
        ).toEqual({
            '8': {
                noteId: '8',
                description: 'description 8',
                position: 1,
                title: 'title 8'
            }
        });

        expect(
            reducer(anotherInitialState, changeNotePositionAction({isPositionIncrement: true, noteId: '8'}))
        ).toEqual({
            '8': {
                noteId: '8',
                description: 'description 8',
                position: 2,
                title: 'title 8'
            },
            '9': {
                noteId: '9',
                description: 'description 9',
                position: 1,
                title: 'title 9'
            }
        });
    });
});