import React from 'react'

export const Topic = props =>
  <div className='form-group'>
    <label for='Topic'><h5>Topic</h5></label>
    <input type='text' className='form-control' {...props} id='Topic' aria-describedby='topicHelp' />
  </div>
