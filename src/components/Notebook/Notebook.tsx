import './Notebook.scss';
import * as React from "react";
import {Note} from "../Note/Note";
import {useDispatch, useSelector} from "react-redux";
import {getNotesSorted} from "../../store/notes/Selectors";
import {removeNoteRequestAction} from "../../sagas/notes/Actions";

interface INotebookProps {}

export const Notebook:React.VFC<INotebookProps> = (notebookId) => {
    const dispatch = useDispatch();
    const notes = useSelector(getNotesSorted);

    const removeNoteHandler = (noteId: string) => {
        dispatch(removeNoteRequestAction(noteId));
    }

    return (
        <div className="notebook">
            {notes.map((note) => {
                return (
                    <Note key={note.noteId} mix={"notebook__note"} {...note} onRemove={removeNoteHandler}/>
                );
            })};
        </div>
    );
};