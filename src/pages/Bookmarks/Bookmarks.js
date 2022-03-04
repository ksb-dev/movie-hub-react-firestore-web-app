import React, { useState, useEffect } from 'react'
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

const Bookmarks = ({ movies }) => {
  const { user } = useGlobalAuthContext()
  const navigate = useNavigate()
  const { isLoading, toggleMode } = useGlobalContext()
  const { documents } = useBookmarks('bookmarks')

  const [bookmarks, setBookmarks] = useState([])

  //console.log(bookmarks)

  useEffect(() => {
    if (!user) {
      navigate('/login')
    }
  }, [user, navigate])

  useEffect(() => {
    if (user && documents) {
      let res = []

      documents.map(document => {
        if (document.uid === user.uid) {
          res.push(document)
        }
      })

      setBookmarks(res)
    }
  }, [user, documents, movies])

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
            ? 'category blackColorCategory whiteMovies'
            : 'category whiteColorCategory blackMovies'
        }
      >
        Bookmarks
      </h4>

      <section className='all'>
        {bookmarks
          ? bookmarks.map(movie => {
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
