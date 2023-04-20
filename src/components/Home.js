import React  from 'react'
import Addnote from './Addnote'
import Notes from './Notes'

export default function Home() {
  // document.body.style.backgroundColor="white";
    // console.log(a)
    
  return (
    <>
    <div className=" flex justify-end  w-[98vw] ">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="#a855f7" strokeWidth={2}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>
    <h1 className="font-bold text-3xl mb-5 text-purple-500">{localStorage.getItem('name')}</h1>
    </div>
    
      <Addnote/>
    <h1 className="font-bold text-xl mb-5 ml-32">Your Notes</h1>
    <div className="flex  justify-center mb-10 flex-col ml-40">
    <Notes/>
    </div>
    
    </>
  )
}
