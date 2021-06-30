import './SelectionField.scss';
import * as React from "react";
import {ChangeEvent, ChangeEventHandler} from "react";
import Select from 'react-select';
import {SelectionFieldOption} from './SelectionFieldOption/SelectionFieldOption';
import cx from "classnames";

interface IItem<T extends string | number = string> {
    label?: string;
    value: T;
}

interface IGroupItems<T extends string | number = string> {
    label: string;
    items: Array<IItem<T>>;
}

interface ISelectionFieldProps<T extends string | number = string> {
    value: T;
    items: Array<IItem<T> | IGroupItems<T>>;
    disabled?: boolean;
    className?: string;

    onChange?(value: T): void;
}

export const SelectionField = React.memo<ISelectionFieldProps>(({
                                                                    value,
                                                                    items,
                                                                    disabled,
                                                                    className,
                                                                    onChange
                                                                }) => {
    return (
        <div className={"selection-field"}>
            <Select components={{ Option: SelectionFieldOption }} classNamePrefix="selection-field"
                    options={[
                        {label: 'Chocolate', options: [{value: 'strawberry', label: 'Strawberry'}, {value: 'strawberry', label: 'Strawberry'}]},
                        {value: 'strawberry', label: 'Strawberry'},
                        {label: 'Chocolate', options: [{value: 'strawberry', label: 'Strawberry'}, {value: 'strawberry', label: 'Strawberry'}]},
                        {value: 'vanilla', label: 'Vanilla'}
                    ]} onChange={(value) => console.log(value)} value={{value: 'chocolade', label: '3'}}/>
        </div>
    );
});