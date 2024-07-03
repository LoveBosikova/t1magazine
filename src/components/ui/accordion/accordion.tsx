import questions from '../../../mocks/questions';

import AccordionItem, { IQuestion } from './AccordionItem';

import style from './Accordion.module.scss';

function Accordion (props: IQuestion[]) {
    return (
    <div className={style.contentWrap}>
        {questions.map((question: IQuestion) => <AccordionItem {...question}></AccordionItem> )}
    </div>
    )
}

export default Accordion;