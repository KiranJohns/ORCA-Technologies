import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { arrow } from '../assets/icons';

const swipe1 = "Rotate the island to see more ➟";
const HomeInfo = ({ currentStage }) => {
  const [swipe, setSwipe] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setSwipe(false);
    }, 3500);
  }, []);


const InfoBox = ({ text, link, btnText }) => (
  <div className='info-box'>
    <p className="font-medium sm:text-xl text-center">{text}</p>
    <Link to={link} className='neo-brutalism-white neo-btn'>
      {btnText}
      <img src={arrow} alt="arrow" />
    </Link>
  </div>
);



  const renderContent = {
    1: (
      <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
        Hi, I am <span>Kiran 👋</span>
        <br />
       {swipe ? swipe1 : (<div className='geeks'><span >A Front-End Developer from India</span></div>)  }
      </h1>
    ),
    2: (
      <InfoBox
        text="Worked on many projects and picked up many skills along the way"
        link="/about"
        btnText="Learn More"
      />
    ),
    3: (
      <InfoBox
        text="Crafting digital experiences that captivate and inspire"
        link="/projects"
        btnText="Visit my portfolio"
      />
    ),
    4: (
      <InfoBox
        text="Transforming concepts into seamless user experiences"
        link="/contact"
        btnText="Let's talk"
      />
    )
  };

  return renderContent[currentStage] || null;
};

export default HomeInfo;
