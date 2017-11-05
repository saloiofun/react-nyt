import React from 'react'

export const SubmitBtn = props =>
  <button {...props} className='btn btn-info float-right btn-lg text-white'>
    {props.children}
  </button>
