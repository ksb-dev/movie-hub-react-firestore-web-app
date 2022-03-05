import React, { useState } from 'react'
import { useRef } from 'react'
import { useNavigate, Link } from 'react-router-dom'

// Context
import { useGlobalContext } from '../../context/context'
import { useGlobalAuthContext } from '../../context/AuthContext'

// Components
import mode from '../../images/mode.svg'
import menu from '../../images/menu.svg'
import whiteMode from '../../images/white-mode.svg'
import whiteMenu from '../../images/white-menu.svg'

// Styles
import './Header.css'

const Header = () => {
  const { toggleMode, setToggleMode, fetchMovies } = useGlobalContext()
  const allMenu = useRef(null)

  const navigate = useNavigate()
  const { user } = useGlobalAuthContext()

  const POPULAR = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&language=en-US&sort_by=popularity.desc`
  const TRENDING = `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_MOVIE_API_KEY}`
  const NOW_PLAYING = `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&language=en-US`
  const UPCOMING = `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&language=en-US`
  const TOP_RATED = `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&language=en-US`

  const toggle = mode => {
    if (mode === 'white') {
      setToggleMode('black')
    } else {
      setToggleMode('white')
    }
  }

  const hideMenu = () => {
    allMenu.current.style.transform = 'translateX(100%)'
  }

  const showMenu = () => {
    allMenu.current.style.transform = 'translateX(0%)'
  }

  const handlePopular = () => {
    navigate('/')

    setTimeout(() => {
      fetchMovies(POPULAR, 'popular', 1)
    }, 300)
    allMenu.current.style.transform = 'translateX(100%)'
  }

  const handleTrending = () => {
    navigate('/')

    setTimeout(() => {
      fetchMovies(TRENDING, 'trending', 1)
    }, 300)
    allMenu.current.style.transform = 'translateX(100%)'
  }

  const handleNowPlaying = () => {
    navigate('/')

    setTimeout(() => {
      fetchMovies(NOW_PLAYING, 'now playing', 1)
    }, 300)
    allMenu.current.style.transform = 'translateX(100%)'
  }

  const handleUpcoming = () => {
    navigate('/')

    setTimeout(() => {
      fetchMovies(UPCOMING, 'upcoming', 1)
    }, 300)
    allMenu.current.style.transform = 'translateX(100%)'
  }

  const handleTopRated = () => {
    navigate('/')

    setTimeout(() => {
      fetchMovies(TOP_RATED, 'top rated', 1)
    }, 300)
    allMenu.current.style.transform = 'translateX(100%)'
  }

  return (
    <>
      {/* movie categories */}

      <div
        ref={allMenu}
        className={
          toggleMode === 'white'
            ? 'all-menu menuWhiteBackground'
            : 'all-menu menuBlackBackground'
        }
      >
        <ul
          className={
            toggleMode === 'white'
              ? 'all-menu-list headerBlackColor'
              : 'all-menu-list headerWhiteColor'
          }
        >
          <li>
            <i
              className='fa-solid fa-circle-xmark fa-2x'
              onClick={hideMenu}
            ></i>
          </li>
          <li className='bookmarks'>
            <Link to='/bookmarks'>Wishlist</Link>
          </li>
          <li onClick={handlePopular}>Popular</li>
          <li onClick={handleTrending}>Trending</li>
          <li onClick={handleNowPlaying}>Now Playing</li>
          <li onClick={handleUpcoming}>Upcoming</li>
          <li onClick={handleTopRated}>Top Rated</li>
        </ul>
      </div>

      {/* Name, search, mode, menu */}

      <div
        className={
          toggleMode === 'white'
            ? 'header headerWhiteBackgroundAlpha headerBlackColor'
            : 'header headerBlackBackgroundAlpha headerWhiteColor'
        }
      >
        <div className='name-mode-menu'>
          <h3 className='name' onClick={handlePopular}>
            MovieHub
          </h3>

          {user && (
            <h4
              className={
                toggleMode === 'white' ? 'headerBlackColor' : 'headerWhiteColor'
              }
            >
              {user.displayName !== null ? (
                <span>Welcome, {user.displayName}</span>
              ) : (
                'Welcome'
              )}
            </h4>
          )}

          <div className='mode-menu'>
            <h3>
              <img
                src={toggleMode === 'white' ? mode : whiteMode}
                alt=''
                className='mode'
                onClick={() => toggle(toggleMode)}
              />
            </h3>
            <h3>
              <img
                src={toggleMode === 'white' ? menu : whiteMenu}
                alt=''
                className='menu'
                onClick={showMenu}
              />
            </h3>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
