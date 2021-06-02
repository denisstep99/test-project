import './NotebookScreen.scss';
import * as React from "react";
import {useCallback, useEffect, useState} from "react";
import {INPUT_TYPE, InputField} from "../common.components/InputField/InputField";
import {Button} from "../common.components/Button/Button";
import {Notebook} from "../components/Notebook/Notebook";
import {useDispatch, useSelector} from "react-redux";
import {addNotesRequestAction, setNoteRequestAction} from "../sagas/notes/Actions";
import {v4 as uuid} from "uuid";
import {getMaxPosition, getNoteById} from "../store/notes/Selectors";


interface INotebookScreenProps {}

export const NotebookScreen: React.VFC<INotebookScreenProps> = () => {

    const dispatch = useDispatch();

    const [position, setPosition] = useState<number>(1);
    const [title, setTitle] = useState<string>("");
    const [description, setDescription] = useState<string>("");

    const [editNoteId, setEditNoteId] = useState<string | null>(null);
    const editableNote = useSelector(getNoteById(editNoteId || ''));
    const buttonLabel = editNoteId ? "Отредактировать" : "Добавить";

    const maxPosition = useSelector(getMaxPosition) + 1;

    const positionChangeHandler = useCallback((position: string) => {
        const currentPosition = parseInt(position);

        if (currentPosition > 0 && currentPosition <= maxPosition) {
            setPosition(currentPosition);
        }
    }, [maxPosition]);

    const addButtonClickHandler = () => {
        if (editNoteId && editableNote) {

            setEditNoteId(null);

            dispatch(setNoteRequestAction({
                position,
                description,
                noteId: editNoteId,
                title: title,
            }));

            return;
        }
        const noteId = uuid();

        if (!position || !title || !description) {
            return;
        }

        setPosition(1);
        setTitle("");
        setDescription("");

        dispatch(addNotesRequestAction({
            position,
            title,
            description,
            noteId
        }));
    };

    const noteEditHandler = (noteId: string) => {
        setEditNoteId(noteId);
    }

    useEffect(() => {
        if (editableNote) {
            setPosition(editableNote.position);
            setTitle(editableNote.title);
            setDescription(editableNote.description);
        }
    }, [editableNote]);

    useEffect(() => {
        if (position > maxPosition) {
            setPosition(maxPosition);
        }
    }, [maxPosition, position]);


    return (
        <div className="notebook-screen">
            <div className="notebook-screen__header">
                <InputField
                    disabled={!!editNoteId}
                    value={position}
                    type={INPUT_TYPE.NUMBER}
                    max={maxPosition}
                    onChange={positionChangeHandler}
                    placeholder="Номер"
                />
                <InputField
                    value={title}
                    type={INPUT_TYPE.TEXT}
                    onChange={setTitle}
                    placeholder="Название"
                />
                <InputField
                    value={description}
                    type={INPUT_TYPE.TEXT}
                    onChange={setDescription}
                    placeholder="Описание"
                />
                <Button label={buttonLabel} onClick={addButtonClickHandler}/>
            </div>

            <Notebook onEdit={noteEditHandler}/>
        </div>
    );
};