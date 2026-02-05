import React from 'react'



function Learncard({ advantage , image, description }) {
  return (
    <div className='h-67 w-100 border-zinc-400  shadow-2xl mt-6 bg-pink-100 rounded-2xl flex flex-col  justify-evenly items-center'>
<div className='h-20 w-20 text-2xl rounded-2xl'> <img className='h-19 w-19 mt-2' src={image} alt={advantage} /></div>
<h1 className='text-blue-500 font-bold mt-2 '>{advantage}</h1>
<p className='p-5'> {description}</p>
    </div>
  )
} 

export default Learncard