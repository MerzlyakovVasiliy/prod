import type { Meta, StoryObj } from '@storybook/react';
import {
    Button, ButtonProps, ButtonSize, ButtonTheme,
} from './Button';

const meta: Meta<ButtonProps> = {
    title: 'ui/Button',
    component: Button,
    argTypes: {
        theme: {
            control: {
                type: 'select',
                options: Object.values(ButtonTheme),
            },
        },
    },
};

export default meta;
type Story = StoryObj<ButtonProps>;

export const Clear: Story = {
    args: {
        theme: ButtonTheme.CLEAR,
        children: 'Text',
    },
};

export const ClearInverted: Story = {
    args: {
        theme: ButtonTheme.CLEAR_INVERTED,
        children: 'Text',
    },
};

export const Outline: Story = {
    args: {
        theme: ButtonTheme.OUTLINE,
        children: 'Text',
    },
};

export const BackGroundTheme: Story = {
    args: {
        theme: ButtonTheme.BACKGROUND,
        children: 'Text',
    },
};

export const BackGroundInvertedTheme: Story = {
    args: {
        theme: ButtonTheme.BACKGROUND_INVERTED,
        children: 'Text',
    },
};

export const SquearL: Story = {
    args: {
        theme: ButtonTheme.BACKGROUND_INVERTED,
        children: '>',
        square: true,
        size: ButtonSize.L,
    },
};

export const SquearM: Story = {
    args: {
        theme: ButtonTheme.BACKGROUND_INVERTED,
        children: '>',
        square: true,
        size: ButtonSize.M,
    },
};

export const SquearXL: Story = {
    args: {
        theme: ButtonTheme.BACKGROUND_INVERTED,
        children: '>',
        square: true,
        size: ButtonSize.XL,
    },
};

export const Disabled: Story = {
    args: {
        theme: ButtonTheme.BACKGROUND_INVERTED,
        children: '>',
        square: true,
        size: ButtonSize.XL,
        disabled: true,
    },
};
