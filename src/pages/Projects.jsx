import React, {useEffect, useState} from 'react'
import { projects } from '../constants'
import { Link } from 'react-router-dom'
import { arrow } from '../assets/icons'
import CTA from '../components/CTA'
import Loading1 from '../components/Loading1'

const Projects = () => {

  const [isLoading, setIsLoading] = useState(true)

  useEffect(()=>{
   setTimeout(() => {
    setIsLoading(false)
   }, 2000);
  },[])

  return (
    <div>
      {
        isLoading ?
        (<Loading1/>)
        :
      (
      <section className='relative flex lg:flex-row flex-col max-container h-screen '>
        <div>
  
          <h1 className='head-text'>
            My<span className='text-white font-semibold drop-shadow'> Projects</span>
          </h1>
          <div className='mt-5 flex flex-col gap-3'>
            <p >
            Welcome to my projects section! As a front-end developer with full stack knowledge, I have had the opportunity to work on a diverse 
            range of projects that highlight my expertise in creating responsive, user-friendly interfaces while also ensuring robust back-end 
            functionality. From developing dynamic single-page applications using modern JavaScript frameworks to designing intuitive user 
            experiences with HTML and CSS, my portfolio reflects a deep commitment to crafting high-quality web solutions. Additionally, my 
            full stack skills enable me to integrate seamless server-side operations, ensuring that each project is not only visually appealing 
            but also technically sound. Explore my work to see how I bring ideas to life through code, balancing aesthetics with performance.
            </p>
          </div>
          <div className='flex flex-wrap my-20 gap-16'>
            {projects.map((project)=>(
              <div className='lg:w-[400px] w-full' key={project.name}>
                <div className='block-container w-12 h-12'>
                <div className={`btn-back rounded-xl ${project.theme}`}/>
                <div className='btn-front rounded-xl flex justify-center items-center'>
                  <img src={project.iconUrl} alt="Project Icon"  className='w-1/2 h-1/2 object-contain'/>
                </div>
                </div>

                <div className='mt-5 flex flex-col'>
                  <h4 className='text-2xl font-poppins font-semibold'>
                    {project.name}
                  </h4>
                  <p className='mt-2 text-slate-900'>
                    {project.description}
                  </p>
                </div>
                <div className='mt-5 flex items-center gap font-poppins'>
                <Link to={project.link} target='_blank' rel='noopener noreferrer'>
                    Live Link
                </Link>
                <img src={arrow} alt="arrow" className=''/>
                </div>
              </div>
            ))}
          </div>
          <hr className='border-white h-6'/>
        <CTA/>
        
    </div>

    </section>
      )}
    </div>
  )
}

export default Projects