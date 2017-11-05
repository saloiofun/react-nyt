import React from 'react'

export const EndYearInput = props =>
  <div className='form-group'>
    <label for='EndYear'>End Year</label>
    <input type='number' className='form-control' {...props} id='EndYear' min='0' aria-describedby='EndYearHelp' placeholder='Enter End Year' />
  </div>
