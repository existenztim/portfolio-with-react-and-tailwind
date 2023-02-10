import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { AiOutlineArrowDown } from 'react-icons/ai';
const Header = () => {
  return (
    <section id="main">
      <div className="w-full h-screen relative">
        <img
          className="w-full h-screen absolute object-cover opacity-25"
          src={window.location.origin + '/img/herobg.webp'}
          alt="screen filled with blurry HTML code"
        />
        <img
          className="w-full h-screen bg-gradient-to-bl from-orange-500 via-transparent to-gray-600 absolute"
          src={window.location.origin + '/img/laptop.svg'}
          alt="screen filled with blurry HTML code"
        />
      </div>

      <div className="w-full h-screen absolute top-0 left-0 ">
        <div className="max-w-[700] m-auto h-full w-full flex flex-col justify-center :items-start items-center relative">
          <h1 className="sm:text-7xl text-4xl font-bold text-white [text-shadow:_0_3px_0_rgb(0_0_0_/_40%)] ">
            &lt;Tim Sundell&lt;/&gt;
          </h1>
          <h2 className="flex sm:text-3xl text-lg py-4 px-2 my-2  text-orange-600 [text-shadow:_2px_1px_0_rgb(0_0_0_/_80%)]">
            <TypeAnimation
              sequence={[
                'Aspiring front end developer', // Types 'One'
                1000, // Waits 1s
                'AI enthusiast', // Deletes 'One' and types 'Two'
                2000, // Waits 2s
                'Coder and designer', // Types 'Three' without deleting 'Two'
                2000,
              ]}
              wrapper="div"
              cursor={true}
              repeat={Infinity}
              style={{ fontSize: '1em', paddingLeft: '5px' }}
            />
          </h2>
          <a
            className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-full"
            href="#get-in-touch"
            aria-label="Go to the contact section"
          >
            Get in touch
          </a>
          <div className="motion-safe:animate-bounce absolute flex justify-center max-w-[100px] w-full bottom-20 hover:bottom-0 ease-in duration-200 ">
            <a
              href="#about"
              aria-label="Go to the about me section"
              className="rounded-full shadow-sm bg-gray-100 dark:bg-gray-700 dark:text-white shadow-gray-400 dark:shadow-gray-700 m-2 p-4 cursor-pointer hover:scale-110 hover:bg-gray-300 hover:dark:bg-gray-600 ease-in duration-300"
            >
              <AiOutlineArrowDown className="cursor-pointer" size={50} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
