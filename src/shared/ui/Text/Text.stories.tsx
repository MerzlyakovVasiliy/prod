import type { Meta, StoryObj } from '@storybook/react';
import { Text, TextProps, TextTheme } from 'shared/ui/Text/Text';

const meta: Meta<TextProps> = {
    title: 'ui/Text',
    component: Text,
    argTypes: {
    },
};

export default meta;
type Story = StoryObj<TextProps>;

export const Title$Text: Story = {
    args: {
        title: 'Title input',
        text: 'Text input',
    },
};

export const TitleOnly: Story = {
    args: {
        title: 'Title input',
    },
};

export const TextOnly: Story = {
    args: {
        text: 'Text input',
    },
};

export const ErrorTitle$Text: Story = {
    args: {
        title: 'Title input',
        text: 'Text input',
        theme: TextTheme.ERROR,
    },
};
