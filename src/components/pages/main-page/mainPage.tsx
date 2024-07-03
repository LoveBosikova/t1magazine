import About from "../../blocks/about/about";
import FeaturesList from "../../blocks/features-list/features-list";

import style from './MainPage.module.scss';

function MainPage () {
    return (
        <main className={style.contentWrap}>
            <About></About>
            <FeaturesList></FeaturesList>
        
            {/* Каталог тайтл*/}
            {/* Поиск */}
            {/* Сам каталог */}
            {/* Вопросики */}
        </main>
    )
}

export default MainPage;