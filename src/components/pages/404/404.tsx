import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

import style from './404.module.scss';

function ErrorPage () {
    return (
    <>
        <Helmet>
            <title>Even errors are goon in Goods4you</title>
            <meta name='description' content='Page not foond, please tru again' />
        </Helmet>
        <section className={style.pageWrap}>
            <div className={style.contentWrap}>
                <h1 className={style.errorText}>404</h1>
                <p className={style.apologies}>Sorry, page hadn't found</p>
                <div className={style.linkWrap}>
                    <Link to='/' className={style.link}>Catalog</Link>
                </div>
            </div>
        </section>
    </>
    )
}

export default ErrorPage;