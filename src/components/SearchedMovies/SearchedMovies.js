import React from 'react'

// Context
import { useGlobalContext } from '../../context/context'

// Components
import MovieCard from '../MovieCard/MovieCard'

// Styles
import './SearchedMovies.css'

const SearchedMovies = () => {
  const {
    searchedMovies,
    isLoading,
    searchTerm,
    toggleMode,
    searchError
  } = useGlobalContext()

  if (isLoading) {
    return <div className='loading'></div>
  }

  return (
    <>
      {/* error */}

      {searchError.show && (
        <div
          className={
            toggleMode === 'white'
              ? 'err blackColorCategory'
              : 'err whiteColorCategory'
          }
        >
          {searchError.msg}
        </div>
      )}

      {/* movie category*/}

      {searchTerm && (
        <h4
          className={
            toggleMode === 'white'
              ? 'cat blackColorCategory'
              : 'cat whiteColorCategory'
          }
        >
          {searchTerm}
        </h4>
      )}

      {/* single movie */}

      <section className='all'>
        {searchedMovies
          ? searchedMovies.map(movie => {
              const {
                id,
                title,
                poster_path,
                release_date,
                vote_average
              } = movie

              return (
                <article className='one-movie' key={id}>
                  <MovieCard
                    movie={movie}
                    id={id}
                    title={title}
                    poster_path={poster_path}
                    vote_average={vote_average}
                    release_date={release_date}
                    marked={false}
                  />
                </article>
              )
            })
          : ''}
      </section>
    </>
  )
}

export default SearchedMovies
