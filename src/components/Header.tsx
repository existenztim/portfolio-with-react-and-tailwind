import React from 'react'
import { TypeAnimation } from 'react-type-animation';
import { AiOutlineArrowDown } from 'react-icons/ai';
const Header = () => {
  return (
    <div id="main">
        <img className="w-full h-screen object-cover"src={window.location.origin + '/img/herobg.webp'} alt="screen filled with blurry HTML code"/>
        <div className="w-full h-screen absolute top-0 left-0 bg-white/30">
          <div className="max-w-[700] m-auto h-full w-full flex flex-col justify-center :items-start items-center">
            <h1 className="sm:text-7xl text-4xl font-bold text-gray-800">Tim Sundell</h1>
            <h2 className="flex sm:text-3xl text-xl py-4 px-2 my-2 text-white rounded-lg bg-gray-800">
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
            <div className="absolute flex justify-center max-w-[100px] w-full bottom-20 hover:bottom-0 ease-in duration-200 ">
              <a 
                href="#about" 
                className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 hover:bg-gray-300 ease-in duration-300">
                <AiOutlineArrowDown className="cursor-pointer" size ={50}/>
              </a>
            </div>
          </div>  
        </div>
    </div>
  );
}

export default Header