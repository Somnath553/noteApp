import React ,{ useContext,useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import NoteContext from '../context/content/NoteContext'
import Noteitem from './Noteitem';

function Notes() {
    const context=useContext(NoteContext);
    const {notes,getnotes} =context;
    const navigate=useNavigate();
    useEffect(()=>{
      if(localStorage.getItem('authtoken'))
      {
        

          getnotes();
      
      } 
      else{
            navigate('/login');
      }
    },[getnotes,navigate]);
  return (
    
    <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4 sm:grid-cols-1">
      {notes.length===0&& <h1 className="text-3xl">No notes to display</h1>}
      {notes.map((note,index) =>{return <Noteitem key={index} note={note}/>})}
    </div>
  )
}
Notes.defaultProps={
  notes: []
}
export default Notes
