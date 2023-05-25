import React from 'react'
import SearchForm from './SearchForm/SearchForm'
import css from "./SearchPageMain.module.css"
import searchBar from './searchBar.svg'
import document from './document.svg'
import folders from './folders.svg'

const SearchPageMain = () => {
  return (
    <main className={css.main_search}>
      <div className={css.main__wrapper_search}>
        <div className={css.main__left}>
          <h1 className={css.main_header}>Найдите необходимые данные в пару кликов.</h1>
          <section>Задайте параметры поиска.<br></br> 
              Чем больше заполните, тем точнее поиск
          </section>
          <SearchForm />
        </div>
        <div className={css.main__right}>
          <div className={css.upper_imgs}>
            <img src={document} alt='document' />
            <img src={folders} alt='folders' />
          </div>
          <div>
            <img className={css.searchBarImg} src={searchBar} alt='searchBar' />
          </div>
        </div>
      </div>
    </main>
  )
}

export default SearchPageMain