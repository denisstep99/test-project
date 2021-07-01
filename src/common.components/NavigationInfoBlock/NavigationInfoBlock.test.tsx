import React from 'react';
import {shallow, ShallowWrapper} from 'enzyme';
import {NavigationInfoBlock} from './NavigationInfoBlock';
import {Link} from "react-router-dom";

describe('NavigationInfoBlock component.', () => {
    let navigationInfoBlock: ShallowWrapper;

    beforeEach(() => {
        navigationInfoBlock = shallow(<NavigationInfoBlock currentSection="Параметры оператора MVNO" breadCrumbs={[
            {label: "Основное"},
            {label: "Побочное", link: "/link_1"},
            {label: "Лишнее", link: "/link_2"},
        ]}/>);
    });

    it('Should render correctly', () => {
        expect(navigationInfoBlock).toMatchSnapshot();
    });

    it('Breadcrumbs with link param should be links', () => {
        const breadCrumbs = navigationInfoBlock.find('.navigation-info-block__bread-crumb');
        expect(breadCrumbs).toHaveLength(3);

        const breadCrumbsLinks = breadCrumbs.filter(Link);
        expect(breadCrumbsLinks).toHaveLength(2);
    });
});