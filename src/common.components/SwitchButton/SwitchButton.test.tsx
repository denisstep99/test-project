import React from 'react';
import {shallow, ShallowWrapper} from 'enzyme';
import {SwitchButton} from './SwitchButton';

describe('SwitchButton component.', () => {
    let switchButton: ShallowWrapper;

    beforeEach(() => {
        switchButton = shallow(<SwitchButton isSwitchedOn labelFor={'my_label'}/>);
    });

    it('Should render correctly', () => {
        expect(switchButton).toMatchSnapshot();
    });

    it('Should change the class on check', () => {
        expect(switchButton.hasClass('switch-button_on')).toBeTruthy();

        switchButton.setProps({isSwitchedOn: false});
        expect(switchButton.hasClass('switch-button_on')).toBeFalsy();
    });

    it("Should display the text set by params", () => {
        switchButton.setProps({labelOn: "RU", labelOff: "EN"});
        expect(switchButton.text()).toBe("ENRU");
    })

    it('Should be disabled when the prop disabled is true', () => {
        switchButton.setProps({disabled: true});
        expect(switchButton.hasClass('switch-button_disabled')).toBeTruthy();
    });
});
