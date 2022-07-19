import React from 'react'
import {HiArrowLeft} from 'react-icons/hi'

const NavBar = ({show, goBack}) => {
  return (
    <div className="bg-black text-white p-3 shadow-sm text-2xl flex justify-between">
        <div className="place-items-start">{show ? <HiArrowLeft onClick={goBack}/> : ''}</div>
        <ul>Bus Tracker</ul>
        <div></div>
    </div>
  )
}

export default NavBar