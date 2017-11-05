import React from 'react'

export const StartYear = props =>
  <div className='form-group'>
    <label for='StartYear'><h5>Start Year</h5></label>
    <input type='number' className='form-control' {...props} id='StartYear' min='0' aria-describedby='StartYearHelp' />
  </div>
