import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import { useFirestore } from '../../hooks/useFirestore'
import { useGlobalAuthContext } from '../../context/AuthContext'
import { useBookmarks } from '../../hooks/useBookmarks'

import './MovieCard.css'

const url =
  'https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png'
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'

const MovieCard = ({ id, poster_path, title, vote_average, release_date }) => {
  const { addDocument } = useFirestore('bookmarks')
  const { user } = useGlobalAuthContext()
  const { documents } = useBookmarks('bookmarks')
  const [bookmark, setBookmark] = useState(false)

  useEffect(() => {
    if (documents) {
      documents.map(document => {
        if (document.poster_path === poster_path) {
          setBookmark(true)
        }
      })
    }
  }, [documents, poster_path])

  const getClassByRate = vote => {
    if (vote >= 8) {
      return 'green'
    } else if (vote >= 5) {
      return 'orange'
    } else {
      return 'red'
    }
  }

  const addBookmark = (id, title, poster_path, release_date, vote_average) => {
    addDocument({
      uid: user.uid,
      number: id,
      title,
      poster_path,
      release_date,
      vote_average
    })
  }

  return (
    <>
      <Link to={`/movie/${id}`}>
        <div className='img-rating'>
          <img
            src={poster_path === null ? url : IMG_PATH + poster_path}
            alt={title}
          />

          <span className={getClassByRate(vote_average)}>{vote_average}</span>
        </div>
      </Link>

      <div className='movie-info'>
        <div className='title-year'>
          <h5 className='title'>
            {title &&
              (title.length > 30 ? title.substring(0, 30) + '...' : title)}
          </h5>

          <div>
            <h5 className='year'>
              {release_date ? release_date.substring(0, 4) : ''}
            </h5>
          </div>
        </div>

        <div className='rating-bookmark'>
          {!bookmark && (
            <h5
              id='add'
              onClick={() =>
                addBookmark(id, title, poster_path, release_date, vote_average)
              }
            >
              <i className='fa-solid fa-plus'></i> Bookmark
            </h5>
          )}

          {bookmark && (
            <h5 id='remove'>
              <i className='fa-solid fa-trash-can'></i> Bookmark
            </h5>
          )}
        </div>
      </div>
    </>
  )
}

export default MovieCard
