import React ,{ useState} from 'react'
import { useNavigate } from "react-router-dom";

function Login() {
  // document.body.style.backgroundColor="#080710";

  const [data,setData]=useState({email: '', password:''});
  const [verify,setverify] = useState('');
  let history=useNavigate();
  const handlesubmit=async (e)=>{
     e.preventDefault();
     const response=await fetch (`https://note-app-kt42.onrender.com/api/auth/login`,{
      method: 'POST',
      headers:{
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({email:data.email,password:data.password})
  });
  const json=await response.json();
  // console.log(json.success);
  if(json.success)
  {
     localStorage.setItem('authtoken',json.authtoken);
    localStorage.setItem('name',json.name);
    

      history('/');
    
  }
  else{
    setverify('Invalid email or password');
  }
  }
  const onChange=(e)=>{
    setData({...data,[e.target.name]:e.target.value});
  };
  return (
    <div className="flex flex-col items-center  mt-10">
      <p className=" mb-1 text-red-400 text-center text-xs">{verify}</p>
    <form className="w-full max-w-sm py-5 px-5 border-2" onSubmit={handlesubmit}>
  <div className="md:flex md:items-center mb-6">
    <div className="md:w-1/3">
      <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-full-name">
        Email
      </label>
    </div>
    <div className="md:w-2/3">
      <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"type="email" name="email" placeholder="Email or Phone" id="email" value={data.email} onChange={onChange}/>
    </div>
  </div>
  <div className="md:flex md:items-center mb-6">
    <div className="md:w-1/3">
      <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-password">
        Password
      </label>
    </div>
    <div className=" md:w-2/3">
  {data.password.length<6 && <p className=" text-red-400 text-center text-xs">Password must be at least 6 characters</p>}
      <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" type="password" name="password" id="password"placeholder="Password" value={data.password}onChange={onChange}/>
      
    </div> 
  </div>
  <div className="md:flex md:items-center">
    <div className="md:w-1/3"></div>
    <div className="md:w-2/3">
      <button className="shadow disabled:bg-purple-400 bg-purple-600 hover:bg-purple-500 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit" disabled={data.password.length<6} >
        Login
      </button>
    </div>
  </div>
</form>
    </div>
  )
}

export default Login
