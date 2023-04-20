import React, { useState, useEffect,useContext} from "react";
import { Transition } from "@headlessui/react";
import { Link,useLocation } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NoteContext from '../context/content/NoteContext'
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const context=useContext(NoteContext);
    const {setnotes} =context;
  let location = useLocation();
  useEffect(() => {
    // console.log("hello");
  },[location])
  const handleLogout=()=>{
    localStorage.removeItem('authtoken');
    setnotes([]);
    toast.success("Logout-Successfull",{position:'bottom-right'});
  }
  return (
    <div>
      <div>
        <nav className="bg-gray-800 text-gray-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="#a855f7" strokeWidth={2}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
</svg>
                </div>
                <div className="hidden md:block">
                  <div className="ml-10 flex items-baseline space-x-4">
                    <Link
                      to="/"
                      className={ `hover:bg-gray-700 text-${location.pathname==="/"?"white":"gray-300"} hover:text-white  px-3 py-2 rounded-md text-sm font-medium`}
                    >
                      Home
                    </Link>

                   {!localStorage.getItem('authtoken') ? <div>
                    
                    <Link
                      to="/login"
                      className={`text-${location.pathname==="/login"?"white":"gray-300"}  hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium`}
                    >
                      Log-In
                    </Link>
                    <Link
                      to="/signup"
                      className={`text-${location.pathname==="/signup"?"white":"gray-300"} hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium`}
                    >
                      Signup
                    </Link> </div> : <Link
                      to="/login"
                      className={`text-${location.pathname==="/login"?"white":"gray-300"}  hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium`} onClick={handleLogout}
                    >
                      logout
                    </Link> }

                    
                  </div>
                </div>
              </div>
              <div className="-mr-2 flex md:hidden">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  type="button"
                  className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                  aria-controls="mobile-menu"
                  aria-expanded="false"
                >
                  <span className="sr-only">Open main menu</span>
                  {!isOpen ? (
                    <svg
                      className="block h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="block h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>

          <Transition
            show={isOpen}
            enter="transition ease-out duration-100 transform"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="transition ease-in duration-75 transform"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            {(ref) => (
              <div className="md:hidden" id="mobile-menu">
                <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                  <Link
                    to="/"
                    className={`hover:bg-gray-700 text-${location.pathname==="/"?"white":"gray-300"} block px-3 py-2 rounded-md text-base font-medium`}
                  >
                    Home
                  </Link>

                  {!localStorage.getItem('authtoken') ? <div>
                    
                    <Link
                      to="/login"
                      className={`text-${location.pathname==="/login"?"white":"gray-300"}  hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium`}
                    >
                      Log-In
                    </Link>
                    <Link
                      to="/signup"
                      className={`text-${location.pathname==="/signup"?"white":"gray-300"} hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium`}
                    >
                      Signup
                    </Link> </div> : <Link
                      to="/login"
                      className={`text-${location.pathname==="/login"?"white":"gray-300"}  hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium`} onClick={handleLogout}
                    >
                      logout
                    </Link> }
                  
                </div>
              </div>
            )}
          </Transition>
        </nav>
      </div>
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

export default Navbar;
