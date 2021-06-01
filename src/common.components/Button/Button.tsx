import './Button.scss';
import * as React from "react";

interface IButtonProps {
    label: string;

    onClick?(): void;
}

export const Button: React.VFC<IButtonProps> = React.memo(({label, onClick}) => {
    return (
      <button className="button" onClick={onClick}>
          {label}
      </button>
    );
});
