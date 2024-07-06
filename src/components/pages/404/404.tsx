import style from './404.module.scss';

function ErrorPage () {
    return (
        <section className={style.pageWrap}>
            <div>
                <h1>404</h1>
                <p>Sorryage hadn't found</p>

            </div>
        </section>
    )
}

export default ErrorPage;