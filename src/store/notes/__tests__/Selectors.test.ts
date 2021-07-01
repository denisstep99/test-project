import {IRootStore} from "../../index";
import {getMaxPosition, getNoteById, getNoteByPosition, getNotesSorted} from "../Selectors";

const emptyStore: IRootStore = {
    notes: {},
}
const initialStore: IRootStore = {
    notes: {
        '1': {
            noteId: '1',
            description: 'description 1',
            position: 9,
            title: 'title 1'
        },
        '2': {
            noteId: '2',
            description: 'description 2',
            position: 8,
            title: 'title 2'
        },
        '3': {
            noteId: '3',
            description: 'description 3',
            position: 7,
            title: 'title 3'
        },
        '4': {
            noteId: '4',
            description: 'description 4',
            position: 6,
            title: 'title 4'
        },
        '5': {
            noteId: '5',
            description: 'description 5',
            position: 5,
            title: 'title 5'
        },
        '6': {
            noteId: '6',
            description: 'description 6',
            position: 4,
            title: 'title 6'
        },
        '7': {
            noteId: '7',
            description: 'description 7',
            position: 3,
            title: 'title 7'
        },
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
    }
}


describe("Store@Notes: selectors", () => {
   it('getNotesSorted selector', () => {
        expect(getNotesSorted(initialStore)).toEqual([
            {
                noteId: '9',
                description: 'description 9',
                position: 1,
                title: 'title 9'
            },{
                noteId: '8',
                description: 'description 8',
                position: 2,
                title: 'title 8'
            },{
                noteId: '7',
                description: 'description 7',
                position: 3,
                title: 'title 7'
            },{
                noteId: '6',
                description: 'description 6',
                position: 4,
                title: 'title 6'
            },{
                noteId: '5',
                description: 'description 5',
                position: 5,
                title: 'title 5'
            },{
                noteId: '4',
                description: 'description 4',
                position: 6,
                title: 'title 4'
            },{
                noteId: '3',
                description: 'description 3',
                position: 7,
                title: 'title 3'
            },{
                noteId: '2',
                description: 'description 2',
                position: 8,
                title: 'title 2'
            },{
                noteId: '1',
                description: 'description 1',
                position: 9,
                title: 'title 1'
            },
        ]);

       expect(getNotesSorted(emptyStore)).toEqual([]);
   });

    it('getNoteByPosition selector', () => {
        expect(getNoteByPosition(3)(initialStore)).toEqual(
            {
                noteId: '7',
                description: 'description 7',
                position: 3,
                title: 'title 7'
            }
        );

        expect(getNoteByPosition(3)(emptyStore)).toBeNull();
    });

    it('getNoteById selector', () => {
        expect(getNoteById('7')(initialStore)).toEqual(
            {
                noteId: '7',
                description: 'description 7',
                position: 3,
                title: 'title 7'
            });

        expect(getNoteById('7')(emptyStore)).toBeNull();
    });

    it('getMaxPosition selector', () => {
        expect(getMaxPosition(initialStore)).toBe(9);
        expect(getMaxPosition(emptyStore)).toBe(0);
    });
});