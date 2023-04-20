import React ,{ useState} from 'react'
import { useNavigate } from "react-router-dom";

function Signin() {
  const [data,setData]=useState({email: '',name:'', password:'',cpassword: '',otp:''});
  const [votp,setvotp] = useState('');
  const [show,setshow] = useState(false);
  const history =useNavigate();
  const onChange=(e)=>{
    setData({...data,[e.target.name]:e.target.value});
 };
 const usercreate = async (e) => {
  e.preventDefault();
  if(data.otp===votp)
  {
  const response=await fetch (`https://note-app-kt42.onrender.com/api/auth/createuser`,{
   method: 'POST',
   headers:{
     'Content-Type': 'application/json',
   },
   body: JSON.stringify({name: data.name,email:data.email,password:data.password})
});
const json=await response.json();
if(json.success)
{
  localStorage.setItem('authtoken',json.authtoken);
    history('/login');
}
else{
  alert(json.message);
  console.log(json,data.name,data.email,data.password);
}
  }
  else{
    alert('otp doenot match');
  }

 };
 const handlesubmit = async(e) => {
     e.preventDefault();
     if(data.password===data.cpassword)
  {
    setshow(true);
  const response=await fetch (`https://note-app-kt42.onrender.com/api/auth/otp`,{
   method: 'POST',
   headers:{
     'Content-Type': 'application/json',
   },
   body: JSON.stringify({name: data.name,email:data.email,password:data.password})
});
const json=await response.json();
if(json.success)
{
  //  setData({botp:json.otp,show:true});
  // localStorage.setItem('otp',json.otp);
  setvotp(json.otp);
  // console.log(data.botp,json);
}
else{
  alert(json.message);
  console.log(json);
}
  }
  else{
    alert('password doenot match');
  }
 };
  return (
    <div>
     {!show ? <div className="  flex  justify-center">
      <div className="antialiased bg-gray-200 text-gray-900 font-sans"/>
    <div className="flex items-center h-screen w-full">
      <div className="w-full bg-white rounded shadow-lg p-8 m-2 md:max-w-sm md:mx-auto">
      <span className="block w-full text-xl uppercase font-bold mb-4">Login</span>      
        <form className="mb-4" action="/" method="post">
          <div className="mb-4 md:w-full">
            <label htmlFor="email" className="block text-xs mb-1">Email</label>
            <input className="w-full border rounded text-black p-2 outline-none focus:shadow-outline" type="email" name="email" value={data.email} onChange={onChange} id="email" placeholder="Username or Email"/>
          </div>
          <div className="mb-4 md:w-full">
            <label htmlFor="text" className="block text-xs mb-1">Username</label>
            <input className="w-full border text-black rounded p-2 outline-none focus:shadow-outline" type="text" name="name" value={data.name}  onChange={onChange} id="name" placeholder="Username or Email"/>
          </div>
          <div className="mb-6 md:w-full">
            <label htmlFor="password" className="block text-xs mb-1">Password</label>
            <input className="w-full border text-black rounded p-2 outline-none focus:shadow-outline" type="password" name="password" value={data.password} onChange={onChange}  id="password" placeholder="Password"/>
          </div>
          <div className="mb-6 md:w-full">
            <label htmlFor="password" className="block text-xs mb-1">Confirm Password</label>
            <input className="w-full border rounded p-2 outline-none focus:border-2 text-black" type="password" name="cpassword" value={data.cpassword}  onChange={onChange} id="cpassword" placeholder="Password"/>
          </div>
          
          <button className="bg-purple-500 hover:bg-purple-400 text-white uppercase text-sm font-semibold px-4 py-2 rounded" onClick={handlesubmit}>Sign in</button>
        </form>
    </div>
  </div>
    </div>:<div className="flex flex-col items-center  mt-10">
    <form className="w-full max-w-sm py-5 px-5 border-2">
  
  <div className="md:flex md:items-center mb-6">
    <div className="md:w-1/3">
      <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-password">
        Password
      </label>
    </div>
    <div className="md:w-2/3">
      <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" type="text" name="otp" value={data.otp}  onChange={onChange} id="otp" placeholder="otp"/>
    </div>
  </div>
  <div className="md:flex md:items-center">
    <div className="md:w-1/3"></div>
    <div className="md:w-2/3">
      <button className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit" onClick={usercreate}>
        Verify
      </button>
    </div>
  </div>
</form>
    </div>}
    
    </div>
  )
}

export default Signin
