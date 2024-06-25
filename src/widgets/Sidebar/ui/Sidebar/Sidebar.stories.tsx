import type { Meta, StoryObj } from '@storybook/react';
import 'app/styles/index.scss';
import { Sidebar } from 'widgets/Sidebar';
import { SidebarProps } from 'widgets/Sidebar/ui/Sidebar/Sidebar';

const meta: Meta<SidebarProps> = {
    title: 'widget/Sidebar',
    component: Sidebar,
    argTypes: {
    },
};

export default meta;
type Story = StoryObj<SidebarProps>;

export const Standard: Story = {
    args: {
    },
};
