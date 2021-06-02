import './InputField.scss';
import * as React from "react";
import {ChangeEvent, ChangeEventHandler} from "react";

export enum INPUT_TYPE {
    TEXT = 'text',
    NUMBER = 'number',
}

interface IInputFieldProps {
    placeholder?: string;
    onChange?(value: string): void;

    type: INPUT_TYPE,
}

export const InputField: React.VFC<IInputFieldProps> = ({placeholder, onChange, type}) => {

    const changeValueHandler: ChangeEventHandler =
        (event: ChangeEvent<HTMLInputElement>) => onChange && onChange(event.currentTarget.value || "");

    return (
        <input type={type} min={1} className="input-field" placeholder={placeholder} onChange={changeValueHandler}/>
    );
};