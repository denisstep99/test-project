import './Text.scss';
import * as React from 'react';
import cx from 'classnames';
import {useTranslation} from 'react-i18next';

interface ITextProps {
    label?: string;
    classname?: string | Array<string>;
    params?: object;
    preventInterpolation?: boolean;
}

export const Text: React.FC<ITextProps> = ({
                                               classname,
                                               children,
                                               label,
                                               params,
                                               preventInterpolation = false,
                                           }) => {
    const {t} = useTranslation();

    const defineContent = () => {
        if (children) {
            if (typeof children === 'string' && !preventInterpolation) {
                return t(children, params);
            }
            return children;
        }
        if (label && !preventInterpolation) {
            return t(label, params);
        }
        return label;
    };

    const content = defineContent();

    return (
        <span className={cx(classname, 'text')}>
            {content}
        </span>
    );
};