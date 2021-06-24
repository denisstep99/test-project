import './MainMenuItem.scss';
import * as React from "react";
import {NavLink} from "react-router-dom";

interface IMainMenuItemProps {
    title: string;
    link?: string;
    exact?: boolean;

    onClick?(): void;
}

export const MainMenuItem: React.FC<IMainMenuItemProps> = React.memo(({link, title, onClick, exact}) => {
    if (link) {
        return (
            <NavLink to={link} exact={exact} onClick={onClick} className="main-menu-item" activeClassName="main-menu-item_selected">
                {title}
            </NavLink>
        );
    }
    return (
        <div onClick={onClick} className="main-menu-item">
            {title}
        </div>
    )
});
