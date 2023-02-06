import React from 'react'
import quant from '../assets/quant.jpg'

interface portfolio {
    imgLink:string,
    alt:string,
    title:string,
    details:string,
    demoLink:string,
    id:string;
}
const portfolioData:portfolio[] = [
    {
        imgLink: "/img/quant.jpg",
        alt: "Desktop screenshot of firefly project",
        title: "Quant Firefly",
        details: "Javascript HTML CSS.",
        demoLink: "https://existenztim.github.io/Cluedo-with-localstorage-highscore/",
        id: "1"
    },
    {
        imgLink: "/img/gottfrid.jpg",
        alt: "Desktop screenshot of gottfrid donuts project",
        title: "Gottfrids Donutshop",
        details: "Javascript HTML CSS",
        demoLink: "https://existenztim.github.io/Cluedo-with-localstorage-highscore/",
        id: "2"
    },
    {
        imgLink: "/img/simpsons.jpg",
        alt: "Desktop screenshot of cluedo simpsons project",
        title: "Simpsons Cluedo",
        details: "Javascript HTML CSS.",
        demoLink: "https://existenztim.github.io/Cluedo-with-localstorage-highscore/",
        id: "3"
    },

    {
        imgLink: "/img/quant.jpg",
        alt: "Desktop screenshot of firefly project",
        title: "Simpsons Cluedo",
        details: "Javascript HTML CSS.",
        demoLink: "https://existenztim.github.io/Cluedo-with-localstorage-highscore/",
        id: "4"
    }
];
const portfolio = () => {
  return (
    <section className="bg-gray-200">
        <div id="projects" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
            <h3 className="text-4xl font-bold text-center text-gray-900 pb-16">Projects</h3>
            <p className="text-center py-8">
                The projects listed here is only projects I have created that has a working
                demonstration. To see a full list of my work make a visit to my github page.
                Content will be added on an regular basis. 
            </p>
            <div className="grid sm:grid-cols-2 gap-12">
            {portfolioData.map(project => (
                // group attribute makes the attributes after to apply to the child elements aswell
               <div key={project.id} className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-gray-200 to-gray-900"> 
                    <img className="rounded-xl group-hover:opacity-10 ease-in duration-300" 
                        src={window.location.origin + project.imgLink}/>
                    
                    <div className="hidden group-hover:block absolute m-0">
                        <h3 className="text-2xl font-bold text-white tracking-wider text-center">
                            {project.title}
                        </h3>
                        <p className="pb-4 bp-2 text-white text-center">{project.details}</p>
                        <a href={project.demoLink}>
                            <p className="text-center p-3 rounded-lg bg-white text-gray-700 font-bold cursor-pointer text-lg">Watch demo</p>
                        </a>
                      
            
                    </div>
               </div>
         ))}
            </div>
        </div>
    </section>
  )
}

export default portfolio
