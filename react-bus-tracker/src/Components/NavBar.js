import React from 'react'
import {HiArrowLeft} from 'react-icons/hi'
import {FaAngleDoubleLeft} from 'react-icons/fa'

const NavBar = ({show, goBack}) => {
  return (
    <div className="bg-black text-white p-3 shadow-sm text-2xl flex justify-between">
        {show ? <HiArrowLeft onClick={goBack}/> : ''}
        <ul >Bus Tracker</ul>
        <FaAngleDoubleLeft/>
    </div>
  )
}

export default NavBar