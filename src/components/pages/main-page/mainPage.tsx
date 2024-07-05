import About from "../../blocks/about/about";
import Faq from "../../blocks/faq/faq";
import FeaturesList from "../../blocks/features-list/features-list";

import style from './MainPage.module.scss';

function MainPage () {
    return (
        <main className={style.contentWrap}>
            <About></About>
            <FeaturesList></FeaturesList>
            <Faq></Faq>
        </main>
    )
}

export default MainPage;