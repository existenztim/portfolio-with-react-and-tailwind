import React, {useState} from 'react'
import { AiOutlineHome, AiOutlineMail, AiOutlineMenu, AiOutlineSolution, AiOutlineTable } from 'react-icons/ai'
import { MdWorkOutline } from 'react-icons/md'
const Sidenav = () => {

  const [nav, setNav] = useState(false)
  
  const toggleNav = () => {
    setNav(!nav);
  }
  
  return (

    <nav>
        <AiOutlineMenu size ={30} onClick={toggleNav} className="fixed top-4 right-4 z-[99] md:hidden cursor-pointer"/>
      {
          nav ? ( //open state
          <div className="flex flex-col fixed w-full h-screen bg-white/90 justify-center items-center z-20">
            <a onClick={toggleNav}
              href="#main" 
              aria-label="Go to the header section"
              className="w-[75%] flex justify-center items-center rounded-full bg-gray-100 shadow-lg shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200">
              
              <AiOutlineHome size ={20}/>
              <span className ="pl-4">Home</span>
            </a>
            <a onClick={toggleNav}
              href="#about" 
              aria-label="Go to the about me section"
              className="w-[75%] flex justify-center items-center rounded-full bg-gray-100 shadow-lg shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200">
              
              <AiOutlineSolution size ={20}/>
              <span className ="pl-4">About me</span>
            </a>
            <a onClick={toggleNav}
              href="#resume" 
              aria-label="Go to the resumé section"
              className="w-[75%] flex justify-center items-center rounded-full bg-gray-100 shadow-lg shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200">
              
              <MdWorkOutline size ={20}/>
              <span className ="pl-4">Resumé</span>
            </a>
            <a onClick={toggleNav}
              href="#projects" 
              aria-label="Go to the projects section"
              className="w-[75%] flex justify-center items-center rounded-full bg-gray-100 shadow-lg shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200">
              
              <AiOutlineTable size ={20}/>
              <span className ="pl-4">Projects</span>
            </a>
            <a onClick={toggleNav}
              href="#get-in-touch" 
              aria-label="Go to the contact section"
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
            aria-label="Go to the header section"
            className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 hover:bg-gray-300 ease-in duration-300">
            <AiOutlineHome size ={25}/>
          </a>
          <a 
            href="#about" 
            aria-label="Go to the about me section"
            className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 hover:bg-gray-300 ease-in duration-300">
            <AiOutlineSolution size ={25}/>
          </a>
          <a 
            href="#resume" 
            aria-label="Go to the resumé section"
            className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 hover:bg-gray-300 ease-in duration-300">
            <MdWorkOutline size ={25}/>
          </a>
          <a 
            href="#projects" 
            aria-label="Go to the projects section"
            className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 hover:bg-gray-300 ease-in duration-300">
            <AiOutlineTable size ={25}/>
          </a>
          <a 
            href="#get-in-touch" 
            aria-label="Go to the contact section"
            className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 hover:bg-gray-300 ease-in duration-300">
            <AiOutlineMail size ={25}/>
          </a>
        </div>
      </div>

    </nav>
  );
};

export default Sidenav
