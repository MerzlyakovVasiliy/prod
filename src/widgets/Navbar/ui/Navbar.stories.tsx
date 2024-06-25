import type { Meta, StoryObj } from '@storybook/react';
import { Navbar } from 'widgets/Navbar';
import { NavbarProps } from 'widgets/Navbar/ui/Navbar';

const meta: Meta<NavbarProps> = {
    title: 'widget/Navbar',
    component: Navbar,
    argTypes: {
    },
};

export default meta;
type Story = StoryObj<NavbarProps>;

export const Standard: Story = {
    args: {
    },
};
