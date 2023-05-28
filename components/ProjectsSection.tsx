import React from "react";
import Image from "next/image";
import Link from "next/link";
import SlideUp from "./SlideUp";
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs";

const projects = [
  {
    name: "Sinau Vokasi",
    description: "A simple website using tech stack ReactJS",
    image: "/SinauVokasi.png",
    github: "https://github.com/rzkjanuarr/sinauvokasi",
    link: "https://sinau-vokasi.vercel.app/",
  },
  {
    name: "Omni Food",
    description: "A simple website using tech stack HTML, CSS, and Javascript.",
    image: "/OmniFood.png",
    github: "https://github.com/rzkjanuarr/omni-food",
    link: "https://omnifood-ikyy.netlify.app",
  },
  {
    name: "Telepatie",
    description: "A simple website using tech stack HTML, CSS.",
    image: "/Telepatie.png",
    github: "https://github.com/rzkjanuarr/slicing-telepatia",
    link: "https://telepatie.netlify.app/ ",
  },
  {
    name: "Bangbelajar Bang",
    description: "A simple website using tech stack HTML, CSS.",
    image: "/BangbelajarBang.png",
    github: "https://github.com/rzkjanuarr/bangbelajarbang",
    link: "https://bangbelajar-loginpagev1.netlify.app/",
  },
  {
    name: "Coding Camp",
    description:
      "A simple website using tech stack PHP and Laravel. Payment Gateway use midtrans.",
    image: "/CodingCamp.png",
    github: "https://github.com/rzkjanuarr/codingcamp",
    link: "-",
  },
  {
    name: "Crud Reactjs",
    description: "A simple website using tech stack ReactJS.",
    image: "/CrudReactjs.png",
    github: "https://github.com/rzkjanuarr/crud-reactjs",
    link: "https://crud-reactjs.vercel.app/",
  },
  {
    name: "Desakuww",
    description: "A simple website using tech stack NextJS.",
    image: "/DesaKuw.png",
    github: "https://github.com/rzkjanuarr/desakuw",
    link: "https://www.figma.com/file/qjnH9JAnn0MEjmlTuvlnmP/Desakuw.?type=design&t=qz9T36k3O1infI48-1",
  },
  {
    name: "Kulineri.ID",
    description: "A simple design website using Figma Tools.",
    image: "/KulineriID.png",
    github: "-",
    link: "https://www.figma.com/file/UW1MTeln1tKUgFXSrDz1sZ/UTU?type=design&node-id=0%3A1&t=qz9T36k3O1infI48-1",
  },
  {
    name: "Jersi.ID",
    description: "A simple design website using Figma Tools.",
    image: "/JersiID.png",
    github: "-",
    link: "https://www.figma.com/file/gikR3OO3twGaz16gWtZ8ly/Jersi.ID?type=design&node-id=21%3A63&t=g5rzRur2SyhlpkX5-1",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects">
      <h1 className="my-10 text-center font-bold text-4xl">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className=" md:w-1/2">
                    <Link href={project.link}>
                      <Image
                        src={project.image}
                        alt=""
                        width={1000}
                        height={1000}
                        className="rounded-xl shadow-xl hover:opacity-70"
                      />
                    </Link>
                  </div>
                  <div className="mt-8 md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4">
                      <Link href={project.github} target="_blank">
                        <BsGithub
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                      <Link href={project.link} target="_blank">
                        <BsArrowUpRightSquare
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProjectsSection;
