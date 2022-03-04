import React from 'react'
import { Link } from 'react-router-dom'

// Context
import { useGlobalContext } from '../../context/context'

// Hooks
import { useLogOut } from '../../hooks/useLogOut'

// Styles
import './Footer.css'

const Footer = () => {
  const { toggleMode } = useGlobalContext()
  const { logout } = useLogOut()

  return (
    <div
      className={
        toggleMode === 'white'
          ? 'footer footerWhiteBackground footerBlackColor'
          : 'footer footerBlackBackground footerWhiteColor'
      }
    >
      <Link to='/search' className='search-icon'>
        <i
          className={
            toggleMode === 'white'
              ? 'fa-solid fa-magnifying-glass footerBlackColor'
              : 'fa-solid fa-magnifying-glass footerWhiteColor'
          }
        ></i>
        <span
          className={
            toggleMode === 'white' ? ' footerBlackColor' : ' footerWhiteColor'
          }
        >
          Search
        </span>
      </Link>

      <Link to='#' className='search-icon' onClick={logout}>
        <i
          className={
            toggleMode === 'white'
              ? 'fa-solid fa-arrow-left footerBlackColor'
              : 'fa-solid fa-arrow-left footerWhiteColor'
          }
        ></i>
        <span
          className={
            toggleMode === 'white' ? ' footerBlackColor' : ' footerWhiteColor'
          }
        >
          Logout
        </span>
      </Link>
    </div>
  )
}

export default Footer
