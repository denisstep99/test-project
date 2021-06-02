import './Notebook.scss';
import * as React from "react";
import {Note} from "../Note/Note";
import {useSelector} from "react-redux";
import {getNotesSorted} from "../../store/notes/Selectors";

interface INotebookProps {}

export const Notebook:React.VFC<INotebookProps> = (notebookId) => {

    const notes = useSelector(getNotesSorted);

    console.log(notes);

    return (
        <div className="notebook">
            {notes.map((note) => {
                return (
                    <Note key={note.noteId} mix={"notebook__note"} {...note} />
                );
            })};
        </div>
    );
};