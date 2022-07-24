import React from 'react'
import BusViewItem from './BusViewItem'

const BusView = ({id,name,time,dest}) => {
  return (
    <div className="m-4 p-3 gap-3 bg-white rounded-lg" >
        <h3 className="font-semibold">Available Buses</h3>
        <BusViewItem id={id} name={name} time={time} dest={dest}/>
    </div>
  )
}

export default BusView