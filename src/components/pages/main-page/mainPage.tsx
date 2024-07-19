import { Helmet } from 'react-helmet-async';

import About from "../../blocks/about/about";
import Faq from "../../blocks/faq/faq";
import FeaturesList from "../../blocks/features-list/features-list";

import type { IFeature } from '../../ui/featureCard/featureCard';
import type { Dispatch } from '@reduxjs/toolkit';
import type { SetStateAction } from 'react';

import style from './MainPage.module.scss';


function MainPage ({ products, setProducts } : {
    products: IFeature[], 
    setProducts: Dispatch<SetStateAction<IFeature[]>>}) {

    return (
        <main className={style.contentWrap}>
            <Helmet>
                <title>Catalog | Goods4you</title>
                <meta name='description' content='Catalog with goods from Goods4you' />
            </Helmet>
            <About></About>
            <FeaturesList products={products} setProducts={setProducts}></FeaturesList>
            <Faq></Faq>
        </main>
    )
}

export default MainPage;