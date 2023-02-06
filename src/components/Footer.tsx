import React from 'react'
import { AiFillMail } from 'react-icons/ai'
import { FaGithub, FaLinkedin, FaMapMarkerAlt } from 'react-icons/fa'

const Footer = () => {
  return (
    <section className="bg-gray-300" id="get-in-touch">
       <div id="resume" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
          <h3 className="text-4xl font-bold text-center text-gray-900 pb-16">Get in touch</h3>
            <div className="flex justify-center p-6">
              <a href="mailto:tim920129@hotmail.com" className="px-6">
                <AiFillMail className="cursor-pointer" size ={20}/>
              </a>
              <a href="https://github.com/existenztim" className="px-6">
                <FaGithub className="cursor-pointer" size ={20}/>
              </a>
              <a href="https://www.linkedin.com/in/tim-sundell-87b644252/" className="px-6">
                <FaLinkedin className="cursor-pointer" size ={20}/>
              </a>
              <a href="https://goo.gl/maps/8sr45aLpEsRrRtyM7" className="px-6">
                <FaMapMarkerAlt className="cursor-pointer" size ={20}/>
              </a>
            </div>
            <p className="text-center text-lg font-semibold text-slate-600">tim920129@hotmail.com</p>
        </div>
  </section>
  )
}
export default Footer