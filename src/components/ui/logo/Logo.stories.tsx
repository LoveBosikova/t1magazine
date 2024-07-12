import Logo from './Logo';
import '../../../index.scss'
import '../../../App.module.scss'
import type { Meta, StoryObj } from '@storybook/react';

const meta : Meta<typeof Logo> = {
    title: 'Logo',
    component: Logo
}
export default meta;

type Story = StoryObj<typeof Logo>;

export const LogoDefault: Story = {}