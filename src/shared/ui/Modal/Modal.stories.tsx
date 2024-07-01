import type { Meta, StoryObj } from '@storybook/react';
import { Modal, ModalProps } from './Modal';

const meta: Meta<ModalProps> = {
    title: 'ui/Modal',
    component: Modal,
    argTypes: {},
};

export default meta;
type Story = StoryObj<ModalProps>;

export const ModalStandard: Story = {
    args: {
        isOpen: true,
        children: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam at,
         consequatur eligendi enim in incidunt, magnam nemo porro quam repellendus saepe sit totam voluptates! Commodi
         harum labore natus unde voluptatem. Ab aspernatur aut commodi dolorum, esse illo in iste maiores maxime neque
         odio quibusdam recusandae sunt tenetur vero voluptate voluptatibus. Aperiam asperiores at dignissimos esse
         eum quia sed velit. Consectetur cum deleniti enim ex fuga laudantium pariatur ratione repellendus tenetur
         veritatis. A accusantium, asperiores cum debitis deleniti illum magnam molestias nulla officia possimus 
         quia sit temporibus vel velit voluptatem. A, debitis harum ipsa optio quisquam sunt unde velit voluptatem
         voluptates.`,
    },
};
