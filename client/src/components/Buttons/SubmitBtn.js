import React from 'react'

export const SubmitBtn = props =>
  <button {...props} className='btn btn-warning'>
    {props.children}
  </button>
