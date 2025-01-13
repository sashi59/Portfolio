import React from 'react';
import studion_bg from "../assets/studion_bg.png"
import aiprepmate from "../assets/aiprepmate.png"
import twitch_bg from "../assets/tw_bg.png"
import weather from "../assets/weather.jpg"
import ambutrack from "../assets/am_bg.png"
import byte from "../assets/byte_bg.png"
import {  AiOutlineGithub } from 'react-icons/ai'
import Reveal from './Reveal';

const projects = [
  {
    img: aiprepmate,
    title: "AI PrepMate",
    description: "AI PrepMate is an innovative AI-driven platform designed to help individuals prepare for interviews and career advancements.",
    links: {
      site: "https://ai-prepmate.vercel.app",
      github: "https://github.com/sashi59/AI-PrepMate",
    },
  },
    {
      img: studion_bg,
      title: "StudiOn LMS",
      description: "Virtual Learning Platform, Admin can sell Course and set Lectures and users have to purchase for access.",
      links: {
        site: "https://git-studi-on.onrender.com/",
        github: "https://github.com/sashi59/Git-Studi-On",
      },
    },
    {
      img: twitch_bg,
      title: "Twitch- Socila Media App",
      description: "A fullstack Social Media App with Real time Chat Integration",
      links: {
        site: "https://twitch-social-media-app.onrender.com/",
        github: "https://github.com/sashi59/Twitch-Social-Media-App",
      },
    },
    {
      img: ambutrack,
      title: "AmbuTrack Android App",
      description: "This app provide emergency response by notifying ambulances and Hospital Staff  and also provide efficient navigation",
      links: {
        site: "https://we.tl/t-NzZUuDBZAf",
        github: "https://github.com/sashi59/Ambulance-Tracking-App",
      },
    },
    {
      setSize:true,
      img: weather,
      title: "Weather Forecasting Android App",
      description: "A mobile-friendly Weather application using Kotlin & Android Studio ",
      links: {
        site: "https://github.com/sashi59/Weather-Forcasting-App",
        github: "https://github.com/sashi59/Weather-Forcasting-App",
      },
    },
    {
      img: byte,
      title: "BYTE Club",
      description: "A website for College Club- BYTE Club.",
      links: {
        site: "https://bytebvm31.github.io/ByteClub/",
        github: "https://github.com/bytebvm31/ByteClub",
      },
    },
  ]

const Portfolio = () => {
  return (
    <div className='max-w-[1000px] mx-auto p-6 md:my-20' id="portfolio">
        <h2 className='text-3xl font-bold text-gray-200 mb-8'>Portfolio</h2>
        {projects.map((project, index) => (
            <Reveal key={index}>
            <div key={index} 
            className={`flex flex-col md:flex-row ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''} mb-12`}>
                <div className='w-full md:w-1/2 p-4'>
                    <img 
                        onClick={() => window.open(project.links.site, "_blank")}
                        src={project.img}
                        alt={project.title}
                        className={`w-full h-full object-cover rounded-lg shadow-lg scale-105 ${project.setSize ? "max-h-96 max-w-52 md:mx-9":""} `}
                    />
                </div>
                <div className='w-full md:w-1/2 p-4 flex flex-col justify-center'>
                    <h3 className='text-2xl font-semibold text-gray-200 mb-4'>{project.title}</h3>
                    <p className='text-gray-300 mb-4'>{project.description}</p>
                    <div className='flex space-x-4'>
                        <a href={project.links.site}
                            className='px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700
                                        transition duration-300'>
                            View Site
                        </a>
                        <a href={project.links.github}
                            className='px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700
                                        transition duration-300'>
                            <AiOutlineGithub/>
                        </a>

                    </div>

                </div>

            </div>
            </Reveal>
        ))}
        
    </div>
  )
}

export default Portfolio