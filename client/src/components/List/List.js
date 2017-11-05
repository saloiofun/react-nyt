import React from 'react'

export const List = ({ children }) => {
  return (
    <div>
      <ul className='list-group'>
        {children}
      </ul>
    </div>
  )
}
