import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { useGlobalContext } from '../../context/context'
import { useGlobalAuthContext } from '../../context/AuthContext'

import Header from '../../components/Header/Header'
import SearchedMovies from '../../components/SearchedMovies/SearchedMovies'
import Footer from '../../components/Footer/Footer'

import './Search.css'

const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&query="`

const Search = () => {
  const { query, setQuery, searchMovies } = useGlobalContext()
  const { user } = useGlobalAuthContext()

  const navigate = useNavigate()

  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })
  }, [])

  useEffect(() => {
    if (!user) {
      navigate('/')
    }
  }, [user, navigate])

  return (
    <>
      <Header />
      <div className='search'>
        <form
          className='search-form'
          onSubmit={e => {
            e.preventDefault()
            setQuery('')
            searchMovies(SEARCH_API + query, query)
          }}
        >
          <input
            type='text'
            className='form-input'
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder='Enter your search here'
          />
        </form>
      </div>

      <SearchedMovies />

      <Footer />
    </>
  )
}

export default Search
