import type { Meta, StoryObj } from '@storybook/react';
import 'app/styles/index.scss';
import { PageError } from 'widgets/PageError';
import { PageErrorProps } from 'widgets/PageError/ui/PageError';

const meta: Meta<PageErrorProps> = {
    title: 'widget/PageError',
    component: PageError,
    argTypes: {
    },
};

export default meta;
type Story = StoryObj<PageErrorProps>;

export const Standard: Story = {
    args: {
    },
};
