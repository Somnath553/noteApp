import React ,{ useContext ,useState} from 'react'
import NoteContext from '../context/content/NoteContext'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Editnote(props) {
    document.body.style.overflow='hidden';
    const context=useContext(NoteContext);
  const {editnote} =context;
    const { note,updatenote } = props;
    const [notes,setnote]=useState({title:note.title,description:note.description,tag:note.tag});
//    const [show,setshow]=useState(false);
   const handleClick=async (e)=>{
    e.preventDefault();
    
    await editnote(note._id,notes.title,notes.description,notes.tag);
    updatenote(false);
    toast.info("note updated",{position:'bottom-right'});
}
  const onChange=(e)=>{
    setnote({...notes,[e.target.name]:e.target.value});
 };
  return (
    <div className="fixed w-[100vw] h-[100vh] bg-[#00000080] top-0 left-0 right-0 bottom-0">
   
  <form className="bg-white shadow-md rounded absolute lg:w-[50rem] md:w-[30rem] px-8 pt-6 pb-8 mb-4  top-[10%] left-[20%]">
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
        title
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-white focus:outline-2"  id="title" value={notes.title} name="title" type="text" placeholder="title" onChange={onChange} minLength={3} required/>
    </div>
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
        Description
      </label>
      <textarea className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700  leading-tight focus:outline-white focus:outline-2 h-32 " id="description" name="description" type="text" placeholder="description" value={notes.description} onChange={onChange} minLength={3} required></textarea>
      
    </div>
    <div className="mb-6">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="tag">
        tag
      </label>
      <input className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-white focus:outline-2" id="tag" name="tag" type="text" placeholder="tag"  value={notes.tag} onChange={onChange}/>
      
    </div>
    <button className="shadow disabled:bg-purple-400 bg-purple-600 hover:bg-purple-500 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit" onClick={handleClick} disabled={notes.title.length<4 || notes.description.length<5} >
        Editnote
      </button>
      <button className="ml-4 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"  onClick={()=>{updatenote(false);}}>
  Cancel
</button>
  </form>

    <ToastContainer
position="bottom-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="colored"
/>
    </div>
  )
}

export default Editnote;
