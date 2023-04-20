import React ,{ useContext ,useState} from 'react'
import NoteContext from '../context/content/NoteContext'
import Editnote from './Editnote';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Noteitem(props) {
  const context=useContext(NoteContext);
  const {deletenote} =context;
  const { note } = props;
   const [show,setshow]=useState(false);
  const updatenote=async (togl)=>{
    // console.log(note);
    document.body.style.overflow='scroll';
    setshow(togl);

  }

  return (
    <div>
      <div className="max-w-sm rounded overflow-hidden shadow-lg w-full">
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{note.title}</div>
          <p className="text-gray-700 text-base">{note.description}</p>
        </div>
        <div className="px-6 pt-4 pb-2 ">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #{note.tag}
          </span>
          <div className="inline-block bg-gray-200 hover:bg-gray-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700  mr-2 mb-1 " onClick={()=>{updatenote(true)}}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className=" inline-block h-6 w-6  cursor-pointer "
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
              />
            </svg>
          </div>
          <div className="inline-block bg-gray-200 hover:bg-gray-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700  mr-2 mb-1" onClick={()=>{  toast.error('Note deleted',{
            position: "bottom-right"});deletenote(note._id)}}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="inline-block h-6 w-6  cursor-pointer"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              />
            </svg>
          </div>
        </div>
      </div>
      {show && <Editnote note={note} updatenote={updatenote}/>}
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
  );
}

export default Noteitem;
