import type { Meta, StoryObj } from '@storybook/react';
import { ThemeSwitcher, ThemeSwitcherProps } from 'shared/ui/ThemeSwitcher/ui/ThemeSwitcher';

const meta: Meta<ThemeSwitcherProps> = {
    title: 'ui/ThemeSwitcher',
    component: ThemeSwitcher,
    argTypes: {
    },
};

export default meta;
type Story = StoryObj<ThemeSwitcherProps>;

export const Standerd: Story = {
    args: {
    },
};
