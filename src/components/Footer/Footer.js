import React from 'react'
import { Link } from 'react-router-dom'

import { useGlobalContext } from '../../context/context'
import { useLogOut } from '../../hooks/useLogOut'

import './Footer.css'

const Footer = () => {
  const { toggleMode } = useGlobalContext()
  const { logout } = useLogOut()

  return (
    <div
      className={
        toggleMode === 'white'
          ? 'footer footerBlackBackground'
          : 'footer footerWhiteBackground'
      }
    >
      <Link to='/search' className='search-icon'>
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
      </Link>

      <Link to='#' className='search-icon' onClick={logout}>
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
      </Link>
    </div>
  )
}

export default Footer
