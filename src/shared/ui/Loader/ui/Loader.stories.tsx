import type { Meta, StoryObj } from '@storybook/react';
import { Loader, LoaderProps } from 'shared/ui/Loader/ui/Loader';

const meta: Meta<LoaderProps> = {
    title: 'ui/Loader',
    component: Loader,
    argTypes: {
    },
};

export default meta;
type Story = StoryObj<LoaderProps>;

export const Standerd: Story = {
    args: {
    },
};
