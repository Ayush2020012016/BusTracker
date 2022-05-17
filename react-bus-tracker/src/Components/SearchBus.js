import React from 'react'

const SearchBus = () => {
  return (
    <div>
        <div className="grid gap-4 p-3 bg-white m-4 rounded-lg shadow-lg">
            <input input="text" placeholder="From Bus Stop" className="p-3 rounded-lg shadow-sm border-2 border-blue-300"/>
            <input input="text" placeholder="To Bus Stop" className="p-3 rounded-lg shadow-sm border-2 border-green-300"/>
            <button className="bg-green-500 p-3 rounded-lg font-semibold active:bg-green-600 shadow-sm text-white">Find Buses</button>
        </div>
    </div>
  )
}

export default SearchBus