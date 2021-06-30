import React from "react";
import {OptionProps} from "react-select";
import './SelectionFieldOption.scss'
import cx from "classnames";

interface ISelectionFieldOption extends OptionProps<any, any>{}

export const SelectionFieldOption: React.FC<ISelectionFieldOption> = ({isSelected, innerProps, isFocused, children, className}) => {
    return (
        <div
            className={cx(
                {
                    'selection-field__option': true,
                    'selection-field__option_is-focused': isFocused,
                    'selection-field__option_is-selected': isSelected,
                },
                className
            )}
            {...innerProps}
        >
            {children}
        </div>
    );
};