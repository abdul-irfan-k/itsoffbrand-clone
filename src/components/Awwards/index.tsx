import React from 'react'

const Awwards = () => {
  return (
    <div className="mt-40 my-[100vh] relative px-5 w-full h-screen  text-neutral-300 uppercase">
    <div className="sticky top-[10%] flex flex-col">
      <span>featured work</span>
      <span></span>
    </div>
    <div className="gap-20 ml-auto flex flex-col w-[65%] ">
      <div className='flex items-center justify-between'>
        <span className='text-4xl'>awwards</span>
        <div className='gap-2 flex flex-col text-lg text-end'>
            <span>site of the day<sup>04</sup></span>
            <span>developer awward<sup>03</sup></span>
            <span>honors<sup>14</sup></span>
        </div>
      </div>
      <div className='flex items-center justify-between text-end'>
        <span className='text-4xl'>fwa</span>
        <div className='gap-2 flex flex-col text-lg'>
            <span>fwa of the day<sup>03</sup></span>
        </div>
      </div>
      <div className='flex items-center justify-between text-end'>
        <span className='text-4xl'>css design awward</span>
        <div className='gap-2 flex flex-col text-lg'>
            <span>site of the day<sup>08</sup></span>
        </div>
      </div>
      <div className='flex items-center justify-between text-end'>
        <span className='text-4xl'>orpetron</span>
        <div className='gap-2 flex flex-col text-lg'>
            <span>site of the day<sup>08</sup></span>
            <span>site of the month<sup>01</sup></span>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Awwards