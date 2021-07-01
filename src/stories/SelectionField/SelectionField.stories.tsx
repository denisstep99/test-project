import React, {useState} from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';

import {SelectionField} from "../../common.components/SelectionField/SelectionField";
import {DecoratorFunction} from "@storybook/addons";
import {StoryFnReactReturnType} from "@storybook/react/dist/ts3.4/client/preview/types";

const stateDecorator: DecoratorFunction<StoryFnReactReturnType> = (Story, context) => React.createElement(() => {
    const [value, setValue] = useState();

    return (
        <Story args={{...context.args,
            value,
            onChange: setValue,
        }}/>
    );
});

export default {
    title: 'Example/SelectionField',
    component: SelectionField,
    argTypes: {},
    decorators: [stateDecorator]
} as ComponentMeta<typeof SelectionField>;

const Template: ComponentStory<typeof SelectionField> = (args) => <SelectionField {...args} />;

export const Default = Template.bind({});
Default.args = {
    items: [{value: "apple", label: "Яблоко"}, {value: "pear", label: "Груша"}, {
        value: "strawberry",
        label: "Клубника"
    }, {value: "cranberry", label: "Клюква"}]
};

export const Opened = Template.bind({});
Opened.args = {
    items: [{value: "apple", label: "Яблоко"}, {value: "pear", label: "Груша"}, {
        value: "strawberry",
        label: "Клубника"
    }, {value: "cranberry", label: "Клюква"}],
    reactSelectProps: {
        menuIsOpen: true
    }
};

export const WithGroups = Template.bind({});
WithGroups.args = {
    items: [{label: "Фрукты", options: [{value: "apple", label: "Яблоко"}, {value: "pear", label: "Груша"}]}, {label: "Ягоды", options: [{
        value: "strawberry",
        label: "Клубника"
    }, {value: "cranberry", label: "Клюква"}]}],
};

export const WithGroupsOpened = Template.bind({});
WithGroupsOpened.args = {
    items: [{label: "Фрукты", options: [{value: "apple", label: "Яблоко"}, {value: "pear", label: "Груша"}]}, {label: "Ягоды", options: [{
            value: "strawberry",
            label: "Клубника"
        }, {value: "cranberry", label: "Клюква"}]}],
    reactSelectProps: {
        menuIsOpen: true
    }
};