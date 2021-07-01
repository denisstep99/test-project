import './SelectionField.scss';
import * as React from "react";
import Select from 'react-select';
import {SelectionFieldOption} from './SelectionFieldOption/SelectionFieldOption';
import cx from "classnames";

interface IItem {
    label?: string;
    value: string | number;
}

interface IGroup {
    label: string;
    options: Array<IItem>;
}

interface ISelectionFieldProps {
    value: number | string;
    items: Array<IItem | IGroup>;
    disabled?: boolean;
    className?: string;
    placeholder?: string;

    onChange?(value: number | string): void;

    //используется для тестирования отображения компонента.
    reactSelectProps?: object;
}

export const SelectionField = React.memo<ISelectionFieldProps>(({
                                                                    value,
                                                                    items,
                                                                    disabled,
                                                                    className,
                                                                    onChange,
                                                                    placeholder,
                                                                    reactSelectProps = {}
                                                                }) => {
    const changeEventHandler = (item: IItem) => {
        onChange && onChange(item.value);
    }

    const getItemByValue = (value?: string | number): IItem | false => {
        let resultItem: IItem | false = false;

        if (!value) {
            return false;
        }

        items.some((item) => {
            if ((item as IGroup).options) {
                const searchedItem = (item as IGroup).options.find(currentItem => currentItem.value === value);

                if (searchedItem) {
                    return resultItem = searchedItem;
                }
            } else {
                if ((item as IItem).value === value) {
                    return resultItem = (item as IItem);
                }
            }
            return false;
        });

        return resultItem;
    }

    return (
        <div className={cx("selection-field", className)}>
            <Select components={{Option: SelectionFieldOption}} classNamePrefix="selection-field"
                    options={items} onChange={changeEventHandler} isDisabled={disabled} placeholder={placeholder}
                    value={getItemByValue(value)} {...reactSelectProps} />
        </div>
    );
});