import './Notebook.scss';
import * as React from "react";

interface INotebookProps {
    notebookId: string;
}

export const Notebook:React.FC<INotebookProps> = (notebookId) => {
    return (
        <div className="notebook">

        </div>
    );
};