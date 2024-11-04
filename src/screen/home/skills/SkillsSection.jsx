import React from 'react'
import skillsArray from './skills.js';

function SkillsSection() {
  return (
   <>
   <div className='my-[6rem] ' id='skill'>

   <h1 className='text-[2rem] md:text-[3rem] font-bold text-center mb-[2rem]'>Skills</h1>
    <div  className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4  lg:grid-cols-5 xl:grid-cols-8 place-items-center gap-6">
      {skillsArray.map((item, index) => (
        <div key={index} className="border-2 border-white rounded-lg p-6 w-[8rem] h-[8rem]  flex flex-col justify-center items-center">
          <img  src={item.skillImage} alt={item.title} className="w-30 h-20" />
          <h2 className="text-xl font-bold mt-4">{item.title}</h2>
        </div>
      ))}
    </div>
   </div>

   </>
  )
}

export default SkillsSection