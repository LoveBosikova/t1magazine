import { useState } from 'react';

import closeIcon from '../../../assets/close.svg';

import styles from './AccordionItem.module.scss';

export interface IQuestion {
    id: number | string,
    question: string,
    answer: string
};

function AccordionItem (props: IQuestion) {
    const [isOpen, setIsOpen] = useState(false);
    
    return (
        <li className={styles.itemWrap}>
            <button title='Close this answer' className={styles.queationWrap} onClick={()=> setIsOpen(!isOpen)}>
                <p className={styles.questionText}>{props.question}</p>
                <picture className={isOpen ? styles.closeCross: styles.closePlus}>
                    <img className={styles.btnIcon} src={closeIcon} alt='Close this answer' />
                </picture>
            </button>
            <p className={ isOpen ? styles.answerOpen: styles.answer }>{props.answer}</p>
        </li>
    )
}

export default AccordionItem;