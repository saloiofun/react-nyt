import React from 'react'

export const TopicInput = props =>
  <div className='form-group'>
    <label for='Topic'>Topic</label>
    <input type='text' className='form-control' {...props} id='Topic' aria-describedby='topicHelp' placeholder='Enter Topic' />
  </div>
