import React from 'react'

const About = () => {
  return (
    <section className="bg-gray-50">
        <div id="about" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
            <h3 className="text-4xl font-bold text-center text-gray-900 pb-16">About me</h3>
            <div className="flex flex-col xl:flex-row xl:gap-20">
                <div className="xl:w-1/2">
                    <h4  className="text-3xl font-bold text-center text-gray-900">
                        What I can do for you.
                    </h4>
                    <div className="relative max-w-[275px] mt-8 m-auto border-4 p-20 border-gray-900 rounded-xl h-72 bg-gray-100 shadow-lg shadow-gray-400">
                        <img className="rounded-xl absolute top-[45%] left-[45%] translate-x-[-50%]  translate-y-[-50%] bg-gray-100 shadow-lg shadow-gray-400" src={window.location.origin + '/img/tim.jpg'} alt="A smiling Tim Sundell looking into the camera"/>
                    </div>
                    <p className="py-8">
                    I'm a 31 year old aspiring front end developer with a passion for creating 
                    beautiful user interfaces and experiences. I'm constantly exploring the latest technologies and trends, 
                    and I'm eager to apply my skills to create innovative projects. I'm currently looking for an internship so I can apply my knowledge in a real-world setting.                         

                    </p>
                </div>
                <div className="xl:w-1/2">
                <h4 className="text-3xl font-bold text-center text-gray-900">
                    What I am looking for.
                </h4>
                <p className="py-8">
                    Starting from the summer of 2023, I am eager to take on new challenges and use my skills to contribute to the success of your project.
                    My solid understanding of HTML, CSS, and JavaScript, combined with my passion for learning and staying up-to-date with the latest technologies, 
                    make me a valuable asset to any team.
                    If you are looking for a developer who is committed to delivering high-quality work, 
                    I would love to discuss how I can contribute to your project's success.
                </p>
                </div>
            </div>
        </div>
    </section>

  )
}

export default About