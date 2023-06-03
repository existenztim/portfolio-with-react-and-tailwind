import React from 'react';

interface portfolio {
  imgLink: string;
  alt: string;
  title: string;
  details: string;
  demoLink: string;
  id: string;
}
const portfolioData: portfolio[] = [
  {
    imgLink: '/img/tick.webp',
    alt: 'Desktop screenshot of tick-tack-toe project',
    title: 'Tick-tack-toe',
    details: 'TypeScript, HTML, SASS, Vue.',
    demoLink: 'https://deluxe-pothos-c81544.netlify.app/',
    id: '1',
  },

  {
    imgLink: '/img/pokedex.webp',
    alt: 'Desktop screenshot of pokédex project',
    title: 'Pokédex',
    details: 'TypeScript, HTML, SASS, Vue, Prettier.',
    demoLink: 'https://soft-chimera-f82e04.netlify.app/',
    id: '2',
  },
  {
    imgLink: '/img/quant.webp',
    alt: 'Desktop screenshot of firefly project',
    title: 'Quant Firefly',
    details: 'JavaScript, HTML, SCSS, GSAP, Prettier, ESLint.',
    demoLink: 'https://existenztim.github.io/Graphical-design-tools-coding-a-design/',
    id: '3',
  },
  {
    imgLink: '/img/gottfrid.webp',
    alt: 'Desktop screenshot of gottfrid donuts project',
    title: 'Gottfrids Donutshop',
    details: 'JavaScript, HTML, SCSS, GSAP, Prettier, ESLint.',
    demoLink: 'https://medieinstitutet.github.io/fed22d-js-grundkurs-gruppuppgift-webbshop-team-n00bless/',
    id: '4',
  },
  {
    imgLink: '/img/simpsons.webp',
    alt: 'Desktop screenshot of cluedo simpsons project',
    title: 'Simpsons Cluedo',
    details: 'TypeScript, Prettier, ESLint HTML, SCSS.',
    demoLink: 'https://existenztim.github.io/Cluedo-with-localstorage-highscore/',
    id: '5',
  },

  {
    imgLink: '/img/greensock.webp',
    alt: 'Desktop screenshot of firefly project',
    title: 'SVG With GreenSock-Animation',
    details: 'JavaScript, HTML, GSAP.',
    demoLink: 'https://existenztim.github.io/SVG-with-GreenSock-Animation/',
    id: '6',
  },
];
const Briefcase = () => {
  return (
    <section className="bg-gray-200 pb-8 dark:bg-gray-900 ">
      <div id="projects" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16" data-aos="fade" data-aos-duration="1000">
        <h3 className="first-letter:text-orange-600 text-4xl font-bold text-center text-gray-900 dark:text-gray-200 pb-16">
          Projects
        </h3>
        <p className="text-center py-8 dark:text-gray-200">
          The projects listed here have working demonstrations. To see a full list of my work visit my github page.
          Content will be added on a regular basis.
        </p>
        <div className="grid sm:grid-cols-2 gap-12">
          {portfolioData.map(project => (
            // group attribute makes the attributes after to apply to the child elements aswell
            <div
              key={project.id}
              className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 dark:shadow-gray-700 rounded-xl group hover:bg-gradient-to-r from-gray-200 to-gray-900"
              data-aos="zoom-in"
            >
              <img
                className="rounded-xl group-hover:opacity-10 ease-in duration-300"
                src={window.location.origin + project.imgLink}
                alt={project.alt}
                width={450}
                height={350}
                loading="lazy"
              ></img>

              <div className="hidden group-hover:block absolute m-0">
                <h3 className="text-2xl font-bold text-white tracking-wider text-center">{project.title}</h3>
                <p className="pb-4 bp-2 text-white text-center">{project.details}</p>
                <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                  <p className="text-center p-3 rounded-lg bg-white text-gray-700 font-bold cursor-pointer text-lg">
                    Watch demo
                  </p>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Briefcase;
