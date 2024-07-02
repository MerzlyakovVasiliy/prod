import type { Meta, StoryObj } from '@storybook/react';
import { Input, InputProps } from './Input';

const meta: Meta<InputProps> = {
    title: 'ui/Input',
    component: Input,
    argTypes: {
    },
};

export default meta;
type Story = StoryObj<InputProps>;

export const InputStandard: Story = {
    args: {
        type: 'text',
        placeholder: 'type text',
        value: 'hello world',
    },
};
