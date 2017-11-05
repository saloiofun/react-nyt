import React from 'react'

export const FormGroup = props =>
  <div className='form-group'>
    <label htmlFor={props.label}><strong>{props.header}</strong></label>
    <input id={props.label} className='form-control' {...props} />
  </div>
