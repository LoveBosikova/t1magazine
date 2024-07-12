import Accordion from '../../ui/accordion/accordion';

import questions from '../../../mocks/questions';

import style from './Faq.module.scss';

function Faq () {
    return (
        <section id='faq' className={style.faq}>
            <div className={style.contentWrap}>
                <h2 className={style.title}>FAQ</h2>
                <div className={style.accordeonWrap}>
                    <Accordion questions={questions}></Accordion>
                </div>
            </div>
        </section>
    )
}

export default Faq;