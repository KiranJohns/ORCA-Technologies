import React, { useState, useEffect } from 'react'
import {skills, experiences} from '../constants'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import CTA from '../components/CTA';
import Loading1 from '../components/Loading1';

const About = () => {

  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, [])

  return (
    <div>
    { isLoading ? (
      <Loading1/>
    ) : (
    <section className='relative flex lg:flex-row flex-col max-container h-screen '>
      <div>

        <h1 className='head-text'>
          Hello I'm <span className='text-white font-semibold drop-shadow'>Kiran</span>
        </h1>
        <div className='mt-5 flex flex-col gap-3'>
          <p >
            Full Stack Developer based in India, specializing in Front End Development
            through hands-on learning and building applications.
          </p>
        </div>

        <div className='py-10 flex flex-col'>
        <h3 className='subhead-text'>My Skills</h3> 

        <div className='mt-16 flex flex-wrap justify-center gap-12 '>
          {skills.map((skill)=>(
            <div className='block-container w-20 h-20 '>
              <div className='btn-back rounded-xl'/>
              <div className='btn-front rounded-xl flex justify-center items-center'>
                <img src={skill.imageUrl} alt={skill.name} 
                className='w-1/2 h-1/2 object-contain'
                />
              </div>
            </div>
          )
        )}
        </div>
        </div>

        <div className='py-16'>
         <h3 className='subhead-text'>Work Experience</h3>
         <div className='mt-5 flex flex-col gap-3 text-slate-800'>
          <p >
          As a seasoned web developer, I specialize in creating dynamic and responsive web applications using cutting-edge 
          technologies such as Next.js and React. With a strong foundation in HTML and CSS,
           I bring designs to life using SCSS for modular and maintainable styling, Tailwind CSS for rapid UI development, 
           and Bootstrap for its robust component library. My diverse experience across numerous projects has honed my ability to deliver 
           visually appealing, user-centric, and performance-optimized solutions, ensuring seamless user experiences on all devices.
          </p>
        </div>
         <div className='mt-12 flex'>
          <VerticalTimeline>
          {experiences.map((experience, id)=>(
           <VerticalTimelineElement
           key={id}
           date={experience.date}
             iconStyle={{background: experience.iconBg, }}
           contentStyle={{
            borderBottom: '8px',
            borderStyle: 'solid',
            borderBottomColor: experience.iconBg,
            boxShadow:'none'
           }}>
            <div>
              <h3 className='text-black text-xl font-poppins font-semibold'>
                {experience.title}
              </h3>
              <p className='text-black-500 font-medium font-base' style={{margin:0}}>
                {experience.company_name}
              </p>
            </div>
            <ul className='my-5 list-disc ml-5 space-y-2'>
              {experience.points.map((point, index)=>(
                 <li key={`experience-point-${index}`} className='text-black-500/50 font-normal pl-1 text-sm'>
                  {point}
                 </li>
              ))}
            </ul>
           </VerticalTimelineElement>
          ))}
          </VerticalTimeline>
         </div>
        </div>

        <hr className='border-white h-6'/>
        <CTA/>
        
      </div>
    </section>
       )}
       </div>
  )
}

export default About