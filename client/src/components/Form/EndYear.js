import React from 'react'

export const EndYear = props =>
  <div className='form-group'>
    <label for='EndYear'><h5>End Year</h5></label>
    <input type='number' className='form-control' {...props} id='EndYear' min='0' aria-describedby='EndYearHelp' />
  </div>
