import './Note.scss';
import * as React from "react";
import {ACTION_BUTTON_TYPE, NoteActionButton} from "./NoteActionButton/NoteActionButton";
import {NotePagination} from "./NotePagination/NotePagination";

interface INoteProps {
    index: number;
    title: string;

    description: string;
}

export const Note: React.VFC<INoteProps> = ({index, title, description}) => {
    return (
        <div className="note">
            <div className="note__index">
                {index}
            </div>
            <div className="note__body">
                <div className="note__title">
                    {title}
                </div>
                <div className="note__delimiter" />
                <div className="note__description">
                    {description}
                </div>
                <div className="note__buttons">
                    <NoteActionButton mix="note__action-button_margin_right" type={ACTION_BUTTON_TYPE.DELETE} onClick={() => {}} />
                    <NoteActionButton mix="note__action-button_margin_right" type={ACTION_BUTTON_TYPE.EDIT} onClick={() => {}} />
                    <NotePagination onClick={() => {}} />
                </div>
            </div>
        </div>
    );
}