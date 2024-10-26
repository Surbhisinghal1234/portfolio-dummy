import React from 'react'
import { mernProjects4 } from '../home/service/service.js';
import { Link } from 'react-router-dom'; 


function MernProjects() {
  return (
    <div className="projects-page py-[3rem]">
             <div className="flex justify-between items-center">
       <h1 className='my-[3rem] text-4xl font-bold text-center'>Mern Projects</h1>
       <Link
            to="/"
            className="px-4 py-2 border-2 border-white rounded-2xl hover:text-black hover:bg-white  transition duration-300 ease-in-out delay-150 "
          >
            Go to Home
          </Link>
          </div>
    <div className="project-list grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {mernProjects4.map((project, index) => (
        <div key={index} className="project-item  flex rounded p-4 flex-col gap-4">
        <a href=""> <img src={project.image} alt={project.heading} /></a> 
          <h3>{project.heading}</h3>
          <p>{project.paragraph}</p>
          <div className="flex space-x-4">

          <a href="#"className='px-4 py-2 bg-custom-gradient-bg text-white rounded-[2rem]'  >{project.buttonText1}</a>
          <a className='px-4 py-2  text-white rounded-[2rem] border-2 border-whit' href="#">{project.buttonText2}</a>
        </div>
        </div>

      ))}
    </div>
  </div>
  )
}

export default MernProjects