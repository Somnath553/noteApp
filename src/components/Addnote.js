import React ,{ useContext,useState } from 'react'

import NoteContext from '../context/content/NoteContext'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Addnote() {
    const context=useContext(NoteContext);
    const {addnote}=context;
    const [note,setnote]=useState({title:"",description:"",tag:""});
    const handleClick=async(e)=>{
          e.preventDefault();
          await addnote(note.title,note.description,note.tag);
          setnote({title:"",description:"",tag:""})
          toast.success('Note added', {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme:"colored"
            });
    }
   const onChange=(e)=>{
      setnote({...note,[e.target.name]:e.target.value});
   };
  return (
    <div>
      <h1 className="font-bold text-xl mb-5 ml-4" >Add Notes</h1> 
    <div className=" flex  justify-center mt-12 mr-[11.25rem]">
      <div className="w-full max-w-xs ">
  <form className="bg-white shadow-md rounded lg:w-[50rem] md:w-[30rem] px-8 pt-6 pb-8 mb-4">
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
        title
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-white focus:outline-2" value={note.title} id="title" name="title" type="text" placeholder="title" onChange={onChange} minLength={3} required/>
    </div>
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
        Description
      </label>
      <textarea className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700  leading-tight focus:outline-white focus:outline-2 h-32 " value={note.description} id="description" name="description" type="text" placeholder="description" onChange={onChange} minLength={3} required></textarea>
      
    </div>
    <div className="mb-6">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="tag">
        tag
      </label>
      <input className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-white focus:outline-2" value={note.tag} id="tag" name="tag" type="text" placeholder="tag" onChange={onChange}/>
      
    </div>
    <button className="shadow disabled:bg-purple-400 bg-purple-600 hover:bg-purple-500 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit" onClick={handleClick} disabled={note.title.length<4 || note.description.length<5} >
        Addnote
      </button>
  </form>

</div>
      
    </div>
    <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
/>
{/* Same as */}
<ToastContainer />
    </div>
  )
}

export default Addnote
