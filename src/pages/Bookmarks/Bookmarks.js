import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

// Context
import { useGlobalContext } from '../../context/context'
import { useGlobalAuthContext } from '../../context/AuthContext'
import { useBookmarks } from '../../hooks/useBookmarks'

// Components
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import MovieCard from '../../components/MovieCard/MovieCard'

// Style
import './Bookmarks.css'

const Bookmarks = () => {
  const { isLoading, toggleMode } = useGlobalContext()
  const { user } = useGlobalAuthContext()
  const { documents } = useBookmarks('bookmarks')

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

      <h4
        className={
          toggleMode === 'white'
            ? 'category blackColorCategory white'
            : 'category whiteColorCategory black'
        }
      >
        Bookmarks
      </h4>

      <section className='all'>
        {documents
          ? documents.map(movie => {
              const {
                number,
                title,
                poster_path,
                release_date,
                vote_average
              } = movie

              return (
                <article className='one-movie' key={number}>
                  <MovieCard
                    movie={movie}
                    id={number}
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

export default Bookmarks
