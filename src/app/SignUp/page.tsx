import React from 'react'

const page = () => {
  return (
    <div className="bg-[#6A9C89] h-screen w-full flex items-center justify-center">
      <form className='w-1/4 h-80 bg-[#C1D8C3] rounded-md flex  flex-col"'>
        <div className="w-full px-10 py-10 flex flex-col justify-between">
          <h1 className="flex justify-center text-2xl font-bold">Create an Account</h1>
          <input type="text" placeholder="Username" className="h-10 border-2 border-[#6A9C89] bg-[#C1D8C3] w-full focus:outline-none text-[#FFFFFF] " />
          <input type="email" placeholder="Email" className="h-10 border-2 border-[#6A9C89] bg-[#C1D8C3] w-full focus:outline-none text-[#FFFFFF] " />
          
          <input type="password" placeholder="Password" className="h-10 border-2 border-[#6A9C89] bg-[#C1D8C3] w-full focus:outline-none text-[#FFFFFF] "/>
          <button type="submit" className="bg-[#6A9C89] text-white rounded py-2">Submit</button>
        </div>
      </form>
    </div>
  )
}

export default page