import './Pagination.scss';
import * as React from "react";
import cx from 'classnames';

interface IPagination {
    className?: string;
    /**
     * Текущая страница
     */
    currentPage: string;
    /**
     * Количество страниц
     */
    pagesCount: number;
    /**
     * Количество отображаемых страниц
     */
    displayPagesCount: number;
    /**
     * Обработчик смены страницы
     */
    onPageChange?(currentPage: number): void;
}

export const NavigationInfoBlock: React.VFC<IPagination> = (({
                                                                               className,
                                                                               currentPage,
    pagesCount,
    displayPagesCount
                                                                           }) => {
    return (
        <div className={cx('pagination', className)}>

        </div>
    );
});