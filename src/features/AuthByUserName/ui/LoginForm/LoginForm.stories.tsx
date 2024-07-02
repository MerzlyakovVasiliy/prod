import type { Meta, StoryObj } from '@storybook/react';
import { LoginForm, LoginFormProps } from './LoginForm';

const meta: Meta<LoginFormProps> = {
    title: 'features/LoginForm',
    component: LoginForm,
    argTypes: {
    },
};

export default meta;
type Story = StoryObj<LoginFormProps>;

export const InputStandard: Story = {
    args: {
    },
};
