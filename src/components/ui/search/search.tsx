import { useState } from 'react';

import style from './Search.module.scss'

interface Props { q: string; onChange: any; }

function Search (props: Props) {
    // q        - строка поиска
    // onChange - изменение поискового запросы
    const { q, onChange } = props;
    return (
        <div className={style.search}>
            <label htmlFor='search' className={style.label}>
                <input value={q} onChange={onChange} type='text' name='search' id='search' placeholder='Search by title' className={style.searchBar}/>
            </label>
        </div>
    )
}

export default Search;