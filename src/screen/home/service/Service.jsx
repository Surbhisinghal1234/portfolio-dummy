import React, { useState } from "react";
import "./service.css"
import { Link } from "react-router-dom";
import {
  htmlCssProjects1,
  jsProjects2,
  reactProjects3,
  mernProjects4,
} from "./service.js";

const Service = () => {
  const [selectedCategory, setSelectedCategory] = useState("htmlCss");

  const categories = [
    { name: "HTML/CSS Projects", value: "htmlCss", displayName: "HTML/CSS" },
    { name: "JavaScript Projects", value: "js", displayName: "JS" },
    { name: "React Projects", value: "react", displayName: "React" },
    { name: "MERN Projects", value: "mern", displayName: "MERN" },
  ];

  const projects = {
    htmlCss: htmlCssProjects1,
    js: jsProjects2,
    react: reactProjects3,
    mern: mernProjects4,
  };

  const currentCategory = categories.find(
    (category) => category.value === selectedCategory
  );

  return (
    <div className="my-[6rem]" id="project">
      <h1 className="text-[2rem] md:text-[3rem] font-bold text-center mb-[2rem]">
        My Projects
      </h1>

       <ul className="flex justify-center space-x-2 md:space-x-4 mb-[2rem] text-[.6rem] sm:text-[1rem] md:text-base">
        {categories.map((category) => (
          <li key={category.value}>
            <button
              onClick={() => setSelectedCategory(category.value)}
              className={`px-2 py-1 md:px-4 md:py-2 rounded-lg ${
                selectedCategory === category.value
                  ? "border-2 text-white"
                  : "bg-gray-500 text-black"
              }`}
            >
              {category.name}
            </button>
          </li>
        ))}
      </ul>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[3rem]">
        {projects[selectedCategory].slice(0, 3).map((project, index) => (
          <div
            key={index}
            className="project-item p-4  rounded-lg  flex flex-col gap-4"
          >
            <a href="">
              <img 
                src={project.image}
                alt={project.heading}
                className=" object-cover h-[15rem] w-[100%]"
              />
            </a>
            <h3 className="text-xl font-medium">{project.heading}</h3>
            <p className="">{project.paragraph}</p>
            <div className="flex space-x-4">
              <a
                href={project.vercelLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-4 py-2 bg-custom-gradient-bg text-white rounded-[2rem]"
              >
                {project.buttonText1}
              </a>
              <a
                href={project.githubLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-4 py-2 text-white rounded-[2rem] border-2 border-white"
              >
                {project.buttonText2}
              </a>
            </div>
          </div>
        ))}
      </div>

      <Link
        to={`/${selectedCategory}-projects`}
        className="mt-4 inline-block rounded-3xl px-4 py-2 font-bold bg-white text-black"
      >
        View All {currentCategory.displayName} Projects
      </Link>
    </div>
  );
};

export default Service;
