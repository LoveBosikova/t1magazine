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
        <div className={styles.itemWrap}>
            <button className={styles.queationWrap} onClick={()=> setIsOpen(!isOpen)}>
                <p className={styles.questionText}>{props.question}</p>
                <picture className={isOpen ? styles.closeCross: styles.closePlus}>
                    <img src={closeIcon} alt='' />
                </picture>
            </button>
            <p className={ isOpen ? styles.answerOpen: styles.answer }>{props.answer}</p>
        </div>
    )
}

export default AccordionItem;