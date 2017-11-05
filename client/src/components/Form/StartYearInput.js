import React from 'react'

export const StartYearInput = props =>
  <div className='form-group'>
    <label for='StartYear'>Start Year</label>
    <input type='number' className='form-control' {...props} id='StartYear' min='0' aria-describedby='StartYearHelp' placeholder='Enter Start Year' />
  </div>
