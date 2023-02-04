import React, {useState} from 'react'
import { AiOutlineHome, AiOutlineMail, AiOutlineMenu, AiOutlineSolution, AiOutlineTable } from 'react-icons/ai'
const Sidenav = () => {

  const [nav, setNav] = useState(false)
  
  const toggleNav = () => {
    setNav(!nav);
  }
  
  return (

    <nav>
        <AiOutlineMenu onClick={toggleNav} className="absolute top-4 right-4 z-[99] md:hidden"/>
      {
          nav ? ( //open state
          <div className="flex flex-col fixed w-full h-screen bg-white/90 justify-center items-center z-20">
            <a 
              href="#main" 
              className="w-[75%] flex justify-center items-center rounded-full bg-gray-100 shadow-lg shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200">
              
              <AiOutlineHome size ={20}/>
              <span className ="pl-4">Home</span>
            </a>
            <a 
              href="#resumé" 
              className="w-[75%] flex justify-center items-center rounded-full bg-gray-100 shadow-lg shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200">
              
              <AiOutlineSolution size ={20}/>
              <span className ="pl-4">Resumé</span>
            </a>
            <a 
              href="#projects" 
              className="w-[75%] flex justify-center items-center rounded-full bg-gray-100 shadow-lg shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200">
              
              <AiOutlineTable size ={20}/>
              <span className ="pl-4">Projects</span>
            </a>
            <a 
              href="#get in touch" 
              className="w-[75%] flex justify-center items-center rounded-full bg-gray-100 shadow-lg shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200">
              
              <AiOutlineMail size ={20}/>
              <span className ="pl-4">Get in touch</span>
            </a>
          </div> 
      
        )
        : ( //closed state
          ''
        )
  }    

      <div className="md:block hidden fixed top-[25%] z-10">
        <div className="flex flex-col">
          <a 
            href="#main" 
            className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 hover:bg-gray-300 ease-in duration-300">
            <AiOutlineHome size ={25}/>
          </a>
          <a 
            href="#resumé" 
            className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 hover:bg-gray-300 ease-in duration-300">
            <AiOutlineSolution size ={25}/>
          </a>
          <a 
            href="#projects" 
            className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 hover:bg-gray-300 ease-in duration-300">
            <AiOutlineTable size ={25}/>
          </a>
          <a 
            href="#get in touch" 
            className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 hover:bg-gray-300 ease-in duration-300">
            <AiOutlineMail size ={25}/>
          </a>
        </div>
      </div>

    </nav>
  );
};

export default Sidenav