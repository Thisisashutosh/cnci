import React from 'react'
import Timeline from '../components/Timeline'
import Topbar from "../components/Topbar"

const Details = () => {
  return (
    <div className='w-full flex flex-col items-center justify-center'>
        <Topbar/>
        <Timeline/>
    </div>
  )
}

export default Details