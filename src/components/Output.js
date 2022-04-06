import { PropaneSharp } from '@mui/icons-material'
import React from 'react'
import OutputRow from './OutputRow'

const Output = (props) => {
  return (
    <div>
        <OutputRow value={props.answer} textSize={{fontSize:'20px'}}></OutputRow>
        <OutputRow value={props.user}></OutputRow>
    </div>
  )
}

export default Output