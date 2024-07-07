import questions from '../../../mocks/questions';

import AccordionItem, { IQuestion } from './AccordionItem';

import style from './Accordion.module.scss';

function Accordion (props: IQuestion[]) {
    return (
    <ul className={style.contentWrap}>
        {questions.map((question: IQuestion) => <AccordionItem key={question.question} {...question}></AccordionItem> )}
    </ul>
    )
}

export default Accordion;