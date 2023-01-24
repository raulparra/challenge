import React from 'react'

export const Button = ( {reset} ) => {
  return (
    <div className='w-[80%] m-auto mt-0 mb-10'>
        <button className="w-[100%] md:w-48 ml:w-48 bg-transparent hover:bg-orange-300 font-semibold hover:text-white py-2 px-4 border-2 border-orange-300 hover:border-transparent rounded"
        onClick={()=> reset() }>Clear
        </button>
    </div>
  )
}
