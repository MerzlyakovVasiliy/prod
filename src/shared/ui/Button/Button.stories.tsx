import type { Meta, StoryObj } from '@storybook/react';
import { Button, ButtonProps, ThemeButton } from './Button';

const meta: Meta<ButtonProps> = {
    title: 'ui/Button',
    component: Button,
    argTypes: {
        theme: {
            control: {
                type: 'select',
                options: Object.values(ThemeButton),
            },
        },
    },
};

export default meta;
type Story = StoryObj<ButtonProps>;

export const Clear: Story = {
    args: {
        theme: ThemeButton.CLEAR,
        children: 'Clear Button',
    },
};

export const Outline: Story = {
    args: {
        theme: ThemeButton.OUTLINE,
        children: 'Button with Custom Class',
    },
};

export const WithAdditionalProps: Story = {
    args: {
        children: 'Button with Props',
        onClick: () => alert('Button clicked!'),
    },
};
