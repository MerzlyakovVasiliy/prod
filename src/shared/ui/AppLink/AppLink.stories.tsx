import type { Meta, StoryObj } from '@storybook/react';
import { AppLink, AppLinkProps, AppLinkTheme } from 'shared/ui/AppLink/AppLink';

const meta: Meta<AppLinkProps> = {
    title: 'ui/AppLink',
    component: AppLink,
    argTypes: {
    },
    args: {
        to: '/',
    },
};

export default meta;
type Story = StoryObj<AppLinkProps>;

export const Primary: Story = {
    args: {
        theme: AppLinkTheme.SECONDARY,
        children: 'Link',
    },
};

export const Secondary: Story = {
    args: {
        theme: AppLinkTheme.PRIMARY,
        children: 'Link',
    },
};
