import React from 'react'
import { TypeAnimation } from 'react-type-animation';
import {FaGithub, FaInstagramSquare, FaLinkedin, } from 'react-icons/fa'
const Header = () => {
  return (
    <div id="main">
        <img className="w-full h-screen object-cover"src={window.location.origin + '/img/herobg.jpg'} />
        <div className="w-full h-screen absolute top-0 left-0 bg-white/50">
          <div className="max-w-[700] m-auto h-full w-full flex flex-col justify-center :items-start items-center">
            <h1 className="sm:text-5xl text-4xl font-bold text-gray-800">Tim Sundell</h1>
            <h2 className="flex sm:text-3xl text-2xl pt-4 text-gray-600">
            <TypeAnimation
              sequence={[
                'Aspiring front end developer', // Types 'One'
                1000, // Waits 1s
                'AI enthusiast', // Deletes 'One' and types 'Two'
                2000, // Waits 2s
                'Coder and designer', // Types 'Three' without deleting 'Two'
                2000,
                'I like dogs',
                2000,
                'I like ice-hockey',
                2000,
                'I like hiking',
                2000,
                // () => {
                //   console.log('Done typing!'); // Place optional callbacks anywhere in the array
                // }
              ]}
      wrapper="div"
      cursor={true}
      repeat={Infinity}
      style={{ fontSize: '1em', paddingLeft: '5px' }}
    />
            </h2>
            <div className="flex justify-between pt-6 max-w-[200px] w-full">
              <FaGithub className="cursor-pointer" size ={20}/>
              <FaLinkedin className="cursor-pointer" size ={20}/>
              <FaInstagramSquare className="cursor-pointer" size ={20}/>
            </div>
          </div>  
        </div>
    </div>
  );
}

export default Header