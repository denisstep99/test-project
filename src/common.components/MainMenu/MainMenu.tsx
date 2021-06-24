import './MainMenu.scss';
import * as React from "react";
import cx from 'classnames';
import {Link} from "react-router-dom";

//todo User тип вынести
interface IUser {
    username: string;
    userRole: string; // todo enum
}

interface IMainMenuProps {
    userPanelHidden?: boolean;
    user?: IUser;
    className?: string;
    logoutLink?: string;
}

export const MainMenu: React.FC<IMainMenuProps> = React.memo(({children, logoutLink, user, userPanelHidden, className}) => {
    return (
        <div className={cx("main-menu", className)}>
            <nav className="main-menu__navigation">
                {children}
            </nav>
            {
                !userPanelHidden && user && <div className="main-menu__user-block">
                    {user.username} ({user.userRole}) |
                    {
                        logoutLink && <Link className={"main-menu__logout-link"} to={logoutLink}>
                            Выйти
                        </Link>
                    }
                </div>
            }
        </div>
    );
});
