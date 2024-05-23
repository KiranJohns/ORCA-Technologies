import React from 'react'

const About = () => {
  return (
    <section className='relative flex lg:flex-row flex-col max-container h-screen'>
      <div>

        <h1 className='head-text'>
          Hello I'm <span className='blue-gradient_text font-semibold drop-shadow'>Kiran</span>
        </h1>
        <div className='mt-5 flex flex-col gap-3'>
          <p >
            Full Stack Developer based in India, specializing in Front End Development
            through hands-on learning and building applications.
          </p>
        </div>

        <div className='py-10 flex flex-col'>
        <h3 className='subhead-text'>My Skills</h3> 
        </div>

      </div>
    </section>
  )
}

export default About