import React, {useState} from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import {SwitchButton} from "../../common.components/SwitchButton/SwitchButton";
import {DecoratorFunction} from "@storybook/addons";
import {StoryFnReactReturnType} from "@storybook/react/dist/ts3.4/client/preview/types";

const labelDecorator: DecoratorFunction<StoryFnReactReturnType> = (Story) => {
    return (
        <div>
            <label htmlFor="my_id">Связанный лейбл</label>
            <br/>
            <Story/>
        </div>
    )
}

const stateDecorator: DecoratorFunction<StoryFnReactReturnType> = (Story, context) => React.createElement(() => {
    const [isSwitchedOn, setIsSwitchedOn] = useState();

    return (
        <Story args={{...context.args,
            isSwitchedOn,
            onChange: setIsSwitchedOn,
        }}/>
    );
});

export default {
    title: 'Example/SwitchButton',
    component: SwitchButton,
    argTypes: {},
    decorators: [stateDecorator]
} as ComponentMeta<typeof SwitchButton>;

const Template: ComponentStory<typeof SwitchButton> = (args) => <SwitchButton {...args} />;

export const Default = Template.bind({});

export const Labeled = Template.bind({});
Labeled.args = {
    labelOff: "OFF",
    labelOn: "ON"
};

export const Disabled = Template.bind({});
Disabled.args = {
    disabled: true,
    labelOff: "OFF",
    labelOn: "ON"
};

export const ConnectedWithLabel = Template.bind({});
ConnectedWithLabel.args = {
    labelFor: "my_id",
    labelOff: <span>{String.fromCodePoint(0x1F620)}</span>,
    labelOn: <span>{String.fromCodePoint(0x1F609)}</span>
};
ConnectedWithLabel.decorators = [stateDecorator, labelDecorator];
