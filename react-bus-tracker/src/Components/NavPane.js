import React from 'react'
import NavBar from './NavBar'
import History from './History'
import SearchBus from './SearchBus'

const NavPane = () => {
  return (
    <div className="h-screen w-5/12 border-r-2 border-slate-200 shadow-xl bg-gray-100">
        <NavBar/>
        <SearchBus/>
        <History/>
    </div>
  )
}

export default NavPane