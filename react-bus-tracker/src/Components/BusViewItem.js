import React from 'react'

const BusViewItem = ({name,time,dest}) => {
  return (
    <div>
        <div className="mt-3 bg-slate-100 p-3 border-l-4 border-green-500">
            <ul className="font-semibold">{name}</ul>
            <ul className="font-thin">{time}</ul>
            <ul className="font-semibold">{dest}</ul>
        </div>
    </div>
  )
}

export default BusViewItem