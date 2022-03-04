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
          ? 'footer footerWhiteBackgroundAlpha footerBlackColor'
          : 'footer footerBlackBackgroundAlpha footerWhiteColor'
      }
    >
      <Link to='/search' className='search-icon'>
        <button
          className={
            toggleMode === 'white'
              ? 'footerBlackBackground'
              : 'footerWhiteBackground'
          }
        >
          <i
            className={
              toggleMode === 'white'
                ? 'fa-solid fa-magnifying-glass footerWhiteColor'
                : 'fa-solid fa-magnifying-glass footerBlackColor'
            }
          ></i>
          <span
            className={
              toggleMode === 'white' ? ' footerWhiteColor' : ' footerBlackColor'
            }
          >
            Search
          </span>
        </button>
      </Link>

      <Link to='#' className='search-icon' onClick={logout}>
        <button
          className={
            toggleMode === 'white'
              ? 'footerBlackBackground'
              : 'footerWhiteBackground'
          }
        >
          <i
            className={
              toggleMode === 'white'
                ? 'fa-solid fa-arrow-left footerWhiteColor'
                : 'fa-solid fa-arrow-left footerBlackColor'
            }
          ></i>
          <span
            className={
              toggleMode === 'white' ? ' footerWhiteColor' : ' footerBlackColor'
            }
          >
            Logout
          </span>
        </button>
      </Link>
    </div>
  )
}

export default Footer
