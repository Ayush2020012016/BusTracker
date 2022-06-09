import React from 'react'

const Progess = ({percentage}) => {
  return (
    <div>
        <div className=" h-screen mt-6 mb-5 bg-gray-200 w-3 rounded-lg">
            <div className=" bg-blue-600 w-3 rounded-lg" style={{"height": percentage }}></div>
          </div>
    </div>
  )
}

export default Progess