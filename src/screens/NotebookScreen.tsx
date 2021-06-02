import './NotebookScreen.scss';
import * as React from "react";
import {useState} from "react";
import {INPUT_TYPE, InputField} from "../common.components/InputField/InputField";
import {Button} from "../common.components/Button/Button";
import {Notebook} from "../components/Notebook/Notebook";
import {useDispatch} from "react-redux";
import {addNotesRequestAction} from "../sagas/notes/Actions";
import {v4 as uuid} from "uuid";


interface INotebookScreenProps {}

export const NotebookScreen:React.VFC<INotebookScreenProps> = () => {

    const dispatch = useDispatch();

    const [position, setPosition] = useState<number>(1);
    const [title, setTitle] = useState<string>("");
    const [description, setDescription] = useState<string>("");

    const addButtonClickHandler = () => {
        const noteId = uuid();

        console.log(position, title, description);

        if (!position || !title || !description) {
            return;
        }

        dispatch(addNotesRequestAction({
            position,
            title,
            description,
            noteId
        }));
    };

    return (
        <div className="notebook-screen">
            <div className="notebook-screen__header">
                <InputField type={INPUT_TYPE.NUMBER} onChange={(value) => setPosition(parseInt(value))} placeholder="Номер"/>
                <InputField type={INPUT_TYPE.TEXT} onChange={setTitle} placeholder="Название"/>
                <InputField type={INPUT_TYPE.TEXT} onChange={setDescription} placeholder="Описание"/>
                <Button label="Добавить" onClick={addButtonClickHandler}/>
            </div>

            <Notebook />
        </div>
    );
};