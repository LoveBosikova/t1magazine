import Accordion from './accordion';
import '../../../index.scss'
import '../../../App.module.scss'
import type { Meta, StoryObj } from '@storybook/react';
import questions from '../../../mocks/questions';


const meta : Meta<typeof Accordion> = {
    title: 'Accordion',
    component: Accordion
}
export default meta;

type Story = StoryObj<typeof Accordion>;

export const AccordionFull: Story = {
    args: {
    questions: questions,
    },
};