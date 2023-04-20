import NoteContext from "./NoteContext";
import { useState } from "react";
const NoteState =(props)=>{
  const host='https://note-app-kt42.onrender.com';
    const notesi=[];
// console.log(token);
    const getnotes = async()=>{
      // console.log(token);
      const response=await fetch (`${host}/api/notes/fetchnotes`,{
        method: 'GET',
        headers:{
          'Content-Type': 'application/json',
          "auth-token": localStorage.getItem('authtoken')
        }
    });
    const json= await response.json();
    // console.log(json);
    // console.log(json);
    if(json.message!=='no notes')
    {
    setnotes(json);
    }
    }
    const [notes,setnotes] =useState(notesi);
    const addnote=async(title,description,tag)=>{
      // const tags=await tag.split('#');
      
     await fetch (`${host}/api/notes/addnotes`,{
        method: 'POST',
        headers:{
          'Content-Type': 'application/json',
          'auth-token' : localStorage.getItem('authtoken')
        },
        body: JSON.stringify({title, description ,tag})
    });
    // const json= response.json();
    // console.log(json);
      //logic
        getnotes();
    }
    const deletenote=async (id)=>{
      // console.log(token);
      await fetch (`${host}/api/notes/deletenote/${id}`,{
        method: 'DELETE',
        headers:{
          'Content-Type': 'application/json',
          "auth-token": localStorage.getItem('authtoken')
        }
    });

       const newnote=notes.filter((note)=>{return note._id!==id})
       setnotes(newnote);
    }
    const editnote=async (id,title,description,tag)=>{
      //api
      console.log(tag);
      if(tag.length ===0)
    {
       tag="General"
    }
      const response=await fetch (`${host}/api/notes/updatenote/${id}`,{
          method: 'PUt',
          headers:{
            'Content-Type': 'application/json',
            'auth-token' :  localStorage.getItem('authtoken')
          },
          body: JSON.stringify({title, description ,tag})
      });
      const json= response.json();
      console.log(json);

      getnotes();
    //   for(let i=0; i<notes.length; i++)
    // {
    //   const element=notes[i];
    //   if(element._id===id)
    //   {
    //     element.title=title;
    //     element.description=description;
    //     element.tag=tag;
    //   }
    //   //logic
    // }
  }
    return (
     <NoteContext.Provider value={{notes,addnote,deletenote,editnote,getnotes}}>
         {props.children}
     </NoteContext.Provider>
    )
}
export default NoteState;