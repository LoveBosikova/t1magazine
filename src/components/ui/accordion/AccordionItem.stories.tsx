import AccordionItem from "./AccordionItem";
import questions from "../../../mocks/questions";
import '../../../index.scss'
import '../../../App.module.scss'

export default {
    title: 'Accordion',
    component: AccordionItem
}

export const AccordionPiece = () => <AccordionItem {...questions[0]}></AccordionItem>