import Footer from './footer';
import '../../../index.scss'
import '../../../App.module.scss'
import type { Meta, StoryObj } from '@storybook/react';

const meta : Meta<typeof Footer> = {
    title: 'Footer',
    component: Footer
}
export default meta;

type Story = StoryObj<typeof Footer>;

export const FooterDefault: Story = {}