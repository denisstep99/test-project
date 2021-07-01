import './NavigationInfoBlock.scss';
import * as React from "react";
import cx from 'classnames';

import {Link} from "react-router-dom";

interface IBreadCrumb {
    label: string;
    link?: string;
}

interface INavigationInfoBlockProps {
    className?: string;
    /**
     * Текущий раздел
     */
    currentSection: string;
    /**
     * Хлебные крошки к подразделам
     */
    breadCrumbs?: Array<IBreadCrumb>
}

export const NavigationInfoBlock: React.VFC<INavigationInfoBlockProps> = (({
                                                                               className,
                                                                               currentSection,
                                                                               breadCrumbs
                                                                           }) => {
    return (
        <div className={cx('navigation-info-block', className)}>
            <div className="navigation-info-block__label">
                {currentSection}
            </div>
            <div className="navigation-info-block__bread-crumbs">
                {
                    breadCrumbs?.map((breadCrumb, index) => {
                        const {link, label} = breadCrumb;

                        if (link) {
                            return (
                                <Link key={index} to={link} className="navigation-info-block__bread-crumb">
                                    {label}
                                </Link>
                            );
                        }
                        return (
                            <span key={index} className="navigation-info-block__bread-crumb">
                                {label}
                            </span>
                        );
                    })
                }
            </div>
        </div>
    );
});