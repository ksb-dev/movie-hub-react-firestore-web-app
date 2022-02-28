import React from 'react'
import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { useSignup } from '../../hooks/useSignup'
import { useGlobalAuthContext } from '../../context/AuthContext'

// styles
import './Signup.css'

export default function Signup () {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [displayName, setDisplayName] = useState('')

  const { error, isPending, signup } = useSignup()
  const navigate = useNavigate()

  const { user } = useGlobalAuthContext()

  useEffect(() => {
    if (user) {
      navigate('/')
    }
  }, [user, navigate])

  const handleSubmit = e => {
    e.preventDefault()
    signup(email, password, displayName)
  }

  return (
    <>
      <form onSubmit={handleSubmit} className='signup-form'>
        <h2>sign up</h2>

        <label>
          <span>email:</span>
          <input
            type='email'
            onChange={e => setEmail(e.target.value)}
            value={email}
          />
        </label>

        <label>
          <span>password:</span>
          <input
            type='password'
            onChange={e => setPassword(e.target.value)}
            value={password}
          />
        </label>

        <label>
          <span>display name:</span>
          <input
            type='text'
            onChange={e => setDisplayName(e.target.value)}
            value={displayName}
          />
        </label>

        {!isPending && <button className='btn'>Sign up</button>}

        {isPending && (
          <button className='btn' disabled>
            Signing up
          </button>
        )}

        <Link to='/login'>Login</Link>

        {error && <p>{error}</p>}
      </form>
    </>
  )
}
