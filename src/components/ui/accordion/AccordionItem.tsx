import closeIcon from '../../../assets/close.svg';

import styles from './AccordionItem.module.scss';

export interface IQuestion {
    id: number | string,
    question: string,
    answer: string
};

function AccordionItem (props: IQuestion) {
    return (
        <div className={styles.itemWrap}>
            <button>
                <p>{props.question}</p>
                <picture>
                    <img src={closeIcon} alt='' />
                </picture>
            </button>
            <p className={styles.answer}>{props.answer}</p>
        </div>
    )
}

export default AccordionItem;