import style from './Search.module.scss'

function Search () {
    return (
        <div className={style.search}>
            <label htmlFor='search' className={style.label}>
                <input type='text' name='search' id='search' placeholder='Search by title' className={style.searchBar}/>
            </label>
        </div>
    )
}

export default Search;