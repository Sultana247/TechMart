import React, { useEffect, useState } from 'react';

const Header = () => {
   const [navbars, setNavbar]=useState([]);
   useEffect(()=>{
    fetch('navbar.json')
    .then(res=>res.json())
    .then(data=>setNavbar(data))
   }
    
   
    ,[])
   
    
    return (
        <div>
           <div className="navbar bg-green-700 text-white p-6 montserrat-font flex justify-between">
                <div className="">
                    <div className=''>
                        <a className="md:text-2xl lg:text-5xl font-bold">TechMart</a>
                        
                    </div>
                </div>
                <div>
                    <label className="input text-black md:w-xl">
                        <input type="search" required placeholder="Search" />
                       <i className="fa-solid fa-magnifying-glass"></i>
                     </label>
                </div>
                <div className="flex gap-2">
                    
                    <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                        <img
                            alt="Tailwind CSS Navbar component"
                            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                        </div>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-green-700 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li>
                        <a className="justify-between">
                            Profile
                            <span className="badge">New</span>
                        </a>
                        </li>
                        <li><a>Settings</a></li>
                        <li><a>Logout</a></li>
                    </ul>
                    </div>
                </div>
            </div>
            {/* navebar */}
            <nav>
                <div className="navbar bg-base-100 shadow-sm pl-10 pr-10 ">
                    <div className="max-w-6xl mx-auto">
                        <ul className='flex gap-12'>
                          {
                            navbars.map((navbar, idx)=>
                            <li navbar={navbar} key={idx}>
                                <div className="dropdown dropdown-hover">
                                    <div tabIndex={0} role="button" className=" ">{navbar.gadget_name}</div>
                                    <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52  shadow-sm">
                                        
                                       {
                                                navbar.submenu.map((sub, idx)=>
                                                    
                                                <li sub={sub} key={idx} className="dropdown dropdown-hover dropdown-right ">
                                                    <div tabIndex={0} role="button" className="">{sub.name}</div>
                                                    <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box  w-52  shadow-sm">
                                                        
                                                        {
                                                           sub.submenu.map((secondsub, idx)=>
                                                           <div secondsub={secondsub} key={{idx}} className="dropdown dropdown-hover dropdown-right">
                                                                <div tabIndex={0} role="button" className="">{secondsub}</div>
                                                                 
                                                            </div>)
                                                        }
                                                    </ul>
                                                </li>)
                                            }
                                        
                                    </ul>
                                </div>
                                {/* <div className="dropdown dropdown-hover">
                                    <div tabIndex={0} role="button" className=" m-1">{navbar.gadget_name}</div>
                                        <ul tabIndex="-1" className="dropdown-hover dropdown-content menu bg-base-100 rounded-box z-1  shadow-sm">
                                            {
                                                navbar.submenu.map((sub, idx)=>
                                                    
                                                <div sub={sub} key={idx} className="dropdown dropdown-hover dropdown-right">
                                                    <div tabIndex={0} role="button" className="">{sub.name}</div>
                                                    <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1  shadow-sm">
                                                        {
                                                           sub.submenu.map(secondsub=>
                                                           <div className="dropdown dropdown-hover dropdown-right">
                                                                <div secondsub={secondsub} tabIndex={0} role="button" className=" ">{secondsub}</div>
                                                        
                                                           </div>)
                                                        }
                                                    </ul>
                                                </div>)
                                            }
                                        </ul>
                                </div> */}
                            </li>)
                          }
                            
                            

                        </ul>
                    </div>
                    
                    
                </div>
            </nav>
        </div>
    );
};

export default Header;