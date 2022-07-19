import React from 'react'
import BusViewItem from './BusViewItem'

const BusView = () => {
  return (
    <div className="m-4 p-3 gap-3 bg-white rounded-lg" >
        <h3 className="font-semibold">Available Buses</h3>
        <BusViewItem id="1" name="St John" time="6pm - 7pm" dest="RIT - Pampady"/>
        <BusViewItem id="1" name="St John" time="6pm - 7pm" dest="RIT - Pampady"/>
    </div>
  )
}

export default BusView