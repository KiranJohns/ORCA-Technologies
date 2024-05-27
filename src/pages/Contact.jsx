import React, { Suspense } from 'react'
import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Canvas } from '@react-three/fiber';
import Fox from '../models/Fox'
import  Loader from '../components/Loader'
import  useAlert from '../hooks/useAlert'
import Alert from '../components/Alert';

const Contact = () => {
  const formRef = useRef(null)
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [isloading, setIsLoading] = useState(false)
  const {alert, showAlert, hideAlert} = useAlert()

   const [currentAnimation, setCurrentAnimation] = useState('idle')

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }
  const handleFocus = () => { setCurrentAnimation('walk')}

  const handleBlur = () => { setCurrentAnimation('idle')}

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true)
    setCurrentAnimation('hit')

    emailjs.send(
      import.meta.env.VITE_EMAIL_SERVICE_ID,
      import.meta.env.VITE_EMAIL_TEMPLATE_ID,
      {
        from_name:form.name,
        to_name:"Kiran",
        from_email:form.email,
        to_email:'mekiranjohnson@gmail.com',
        message:form.message
      },
      import.meta.env.VITE_EMAIL_PUBLIC_KEY
    ).then(()=>{
      setIsLoading(false);
      showAlert({
        show:true, 
        text:'Message sent successfully!',
        type:'Success'
      })
      
      setTimeout(() => {
        hideAlert();
        setCurrentAnimation('idle')
        setForm({name: '', email: '', message:''})
      }, [3000]);
    
     
    })
    .catch((error)=>{
      setIsLoading(false)
      setCurrentAnimation('idle')
      showAlert({
        show: true, 
        text: 'Message not sent',
        type: 'danger'
      })
      console.log(error);
    })
  }

  return (
    <section className='relative flex lg:flex-row flex-col max-container h-[100vh]'>
      {alert.show && <Alert {...alert}/>}
      {/* <Alert {...alert}/> */}
      <div className='flex-1 min-w-[50%] flex flex-col'>
        <h1 className='head-text'>Get In Touch</h1>
        <form onSubmit={handleSubmit} className='w-full flex flex-col gap-7 mt-14'>
          <label className='text-black-500 font-semibold'>
            Name
            <input
              type="text"
              name="name"
              className="input"
              placeholder='Name'
              required value={form.name}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>

          <label className='text-black-500 font-semibold'>
            Email
            <input
              type="email"
              name="email"
              className="input"
              placeholder='yourname@gmail.com'
              required value={form.email}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>

          <label className='text-black-500 font-semibold'>
            Your Message
            <textarea
              name="message"
              className="textarea"
              placeholder='Let me know how I can help you!'
              required value={form.message}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <button
            type='submit'
            className='btn'
            disabled={isloading}
            onFocus={handleFocus}
            onBlur={handleBlur}>
            {isloading ? 'Sending' : 'Send Message'}
          </button>
        </form>
      </div>
      <div className='lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]'>
        <Canvas camera={{
          position:[0, 0, 5],
          fov: 75,
          near: 0.1,
          far:1000
        }}>
          <directionalLight intensity={2.5} position={[0, 0, 1]}/>
          <ambientLight 
          intensity={0.5}
          />
         <Suspense fallback={<Loader/>}>
            <Fox 
            currentAnimation={currentAnimation}
            position={[0.5, 0.35, 0]}
            rotation={[12.6, -0.6, 0]}
            scale={[0.5, 0.5, 0.5]}
            />
         </Suspense>
        </Canvas>
      </div>
    </section>
  )
}

export default Contact