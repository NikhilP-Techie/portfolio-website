import React from 'react'
import aboutImg from "../../../src/assets/about.svg"


const aboutContent = [
  {
    title: 'About Me',
    content: `I'm a Python Developer with 3+ years of experience, specializing in web development, Django, and modern frontend frameworks like React. Currently, I work on fintoo.in and fintooinvest.in, playing a key role in their development and optimization.`,
  },
  {
    title: 'Passion',
    content: `Passionate about writing clean, efficient, and scalable code, I'm always eager to explore new technologies and improve my skills. Lately, I've been diving into React, Tailwind CSS, and SQL, enhancing my ability to build dynamic, user-friendly applications.`,
  },
  {
    title: 'Goals',
    content: `In 2025, I'm setting my sights on freelancing as a web app developer. My goal is to help businesses create powerful digital solutions while continuously growing as a developer.`,
  },
  {
    title: 'Tech Stack',
    content: `🚀 Tech Stack: Python, Django, React, JavaScript, Tailwind CSS, SQL, Bootstrap`,
  },
  {
    title: 'Interests',
    content: `💡 Interests: Full-stack development, freelancing, performance optimization, UI/UX`,
  },
]

function About() {
  return (
    <section className="bg-white pt-24">
      <div className="max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
        <div className='grid md:grid-cols-2 sm:grid-cols-1 gap-5'>
          <div>
            <div>
            <h1 className='text-balance text-center text-5xl pt-12 font-semibold tracking-tight text-gray-900 sm:text-6xl'>
              About Me
            </h1>
            {aboutContent.map((content) => (
              <p className='mt-8 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8'>
                {content.content}
              </p>
            ))}
          </div>
          </div>
          <div className='invisible sm:visible md:visible'><img className='rounded-lg' src={aboutImg} alt="" /></div>
        </div>
      </div>
    </section>
  )
}

export default About
