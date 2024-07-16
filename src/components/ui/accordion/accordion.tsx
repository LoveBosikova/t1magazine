import AccordionItem, { IQuestion } from './AccordionItem';

import style from './Accordion.module.scss';

function Accordion (props: any) {
    return (
    <ul className={style.contentWrap}>
        {props.questions && props.questions.map((question: IQuestion) => <AccordionItem key={question.question} {...question}></AccordionItem> )}
    </ul>
    )
}

export default Accordion;