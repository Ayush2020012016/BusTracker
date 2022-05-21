import React from 'react'
import BusViewItem from './BusViewItem'

const History = () => {
  return (
    <div className="p-3 shadow-lg m-4 rounded-lg bg-white">
        <p className="font-semibold">Search History</p>
        <BusViewItem name="St John" time="6pm - 7pm" dest="RIT - Pampady"/>
        <BusViewItem name="St John" time="6pm - 7pm" dest="RIT - Pampady"/>
        <BusViewItem name="St John" time="6pm - 7pm" dest="RIT - Pampady"/>
    </div>
  )
}

export default History