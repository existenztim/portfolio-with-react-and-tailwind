import React from 'react'

const About = () => {
  return (
    <section className="bg-gray-50">
        <div id="about" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
            <h3 className="text-4xl font-bold text-center text-gray-900 pb-16">About me</h3>
            <div className="flex flex-col xl:flex-row xl:gap-20">
                <div className="xl:w-1/2">
                    <h4  className="text-3xl font-bold text-center text-gray-900">
                        Who am I?
                    </h4>
                    <div className="relative max-w-[261px] mt-8 m-auto border-4 p-20 border-gray-900 rounded-xl h-[294px] bg-gray-100 shadow-lg shadow-gray-400">
                        <img className="rounded-xl absolute top-[45%] left-[45%] translate-x-[-50%]  translate-y-[-50%] bg-gray-100 shadow-lg shadow-gray-400 hover:top-[50%] hover:left-[50%] ease-in duration-200" src={window.location.origin + '/img/tim.webp'} alt="A smiling Tim Sundell looking into the camera"/>
                    </div>
                    <p className="py-8">
                    I'm a 31 year old aspiring front end developer with a passion for creating 
                    beautiful user interfaces and experiences. I'm constantly exploring the latest technologies and trends, 
                    and I'm eager to apply my skills to create innovative projects. I'm currently looking for an internship so I can apply my knowledge in a real-world setting.<br></br><br></br>
                    When im not coding I like to go with walks with my dog, watch ice-hockey and occasionally go hiking.                         

                    </p>
                </div>
                <div className="xl:w-1/2">
                    <h4 className="text-3xl font-bold text-center text-gray-900">
                        What I can do for you.
                    </h4>
                    <p className="py-8">
                        After the summer of 2023 I will have my first internship, that's where you come in to the picture! Below you will see a list with various skills I will
                        either master completly, or have a good understanding of by the time we make acquaintance.<br></br><br></br> I am however open to learn something completly new during
                        my internship! So if you use other libraries/framworks than the list you see below, no problem. Contact me and we can discuss a study plan so I'm well prepared by the
                        time the internship starts. 
                    </p>
                    <div className="relative max-w-[275px] mt-8 m-auto border-4 p-20 border-gray-900 rounded-xl h-72 bg-gray-100 shadow-lg shadow-gray-400">
                        <ol className="grid grid-cols-2 w-[275px] h-72 gap-2 rounded-xl absolute top-[55%] left-[55%] translate-x-[-50%]  translate-y-[-50%] bg-gray-900 shadow-lg shadow-gray-400 text-white hover:top-[50%] hover:left-[50%] ease-in duration-200">
                            <li className="text-center py-2">JavaScript</li>
                            <li className="text-center py-2">TypeScript</li>
                            <li className="text-center py-2">React</li>
                            <li className="text-center py-2">Vue.js</li>
                            <li className="text-center py-2">Node.js</li>
                            <li className="text-center py-2">GIT</li>
                            <li className="text-center py-2">HTML5</li>
                            <li className="text-center py-2">CSS/SCSS</li>
                            <li className="text-center py-2">Tailwind</li>
                            <li className="text-center py-2">Jest</li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    </section>

  )
}

export default About