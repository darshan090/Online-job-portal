import React from 'react'
import { Outlet } from 'react-router-dom'

const Applayout = () => {
  return (
    <div>
        App layout
        <Outlet />
    </div>
  )
}

export default Applayout