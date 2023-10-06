import React from 'react'

import {HiOutlineEmojiSad} from 'react-icons/hi'

import './Error.css'

function Error() {
  return (
    <div className='error'>
      <h1>Error 404</h1>
      <h3>Page is not found {HiOutlineEmojiSad()}</h3>
    </div>
  )
}

export default Error
