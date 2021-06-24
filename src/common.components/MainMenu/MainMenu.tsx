import './MainMenu.scss';
import * as React from "react";
import {Text} from "../Text/Text";

interface IMainMenuProps {
    userPanelHidden?: boolean;
}

export const MainMenu: React.FC<IMainMenuProps> = React.memo(() => {


    return (
        <nav className="main-menu">

        </nav>
    );
});
