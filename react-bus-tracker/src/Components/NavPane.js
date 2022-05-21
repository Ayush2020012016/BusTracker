import React from 'react'
import NavBar from './NavBar'
import History from './History'
import SearchBus from './SearchBus'
import BusView from './BusView'
import { useState } from 'react'

const NavPane = () => {

  const [toggleBusView, setToggleBusView] = useState(false)
  const [toggleArrow, setToggleArrow] = useState(false)

  return (
    <div className="h-screen w-5/12 border-r-2 border-slate-200 shadow-xl bg-gray-100">
        <NavBar show={toggleArrow} goBack={()=>setToggleBusView(!toggleBusView)}/>
        {toggleBusView ? '' : <SearchBus onClick={()=>[setToggleBusView(!toggleBusView),setToggleArrow(!toggleArrow)]}/>}
        {toggleBusView ? <BusView />: ''}
        {toggleBusView ? '' : <History/>}
    </div>
  )
}

export default NavPane