import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

// Context
import { useGlobalContext } from '../../context/context'
import { useGlobalAuthContext } from '../../context/AuthContext'

// Components
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import MovieCard from '../../components/MovieCard/MovieCard'

// Style
import './Movies.css'

const Movies = () => {
  const { movies, isLoading, category, toggleMode } = useGlobalContext()
  const { user } = useGlobalAuthContext()

  const navigate = useNavigate()

  useEffect(() => {
    if (!user) {
      navigate('/login')
    }
  }, [user, navigate])

  if (isLoading) {
    return <div className='loading'></div>
  }

  return (
    <>
      <Header />
      {/* single movie */}

      {/* movie category*/}

      {category && (
        <h4
          className={
            toggleMode === 'white'
              ? 'category blackColorCategory whiteMovies'
              : 'category whiteColorCategory blackMovies'
          }
        >
          {category}
        </h4>
      )}

      <section className='all'>
        {movies
          ? movies.map(movie => {
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

      <Footer />
    </>
  )
}

export default Movies
