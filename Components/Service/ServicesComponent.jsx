'use client'

import React, { useState } from 'react'
import styles from './service.module.css'
import Image from 'next/image';
import headerBG from '/public/images/headerBg.webp'


function ServicesComponent() {

  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);
  const [isHovered4, setIsHovered4] = useState(false);

  const handleMouseEnter1 = () => setIsHovered1(true);
  const handleMouseLeave1 = () => setIsHovered1(false);

  const handleMouseEnter2 = () => setIsHovered2(true);
  const handleMouseLeave2 = () => setIsHovered2(false);

  const handleMouseEnter3 = () => setIsHovered3(true);
  const handleMouseLeave3 = () => setIsHovered3(false);

  const handleMouseEnter4 = () => setIsHovered4(true);
  const handleMouseLeave4 = () => setIsHovered4(false);

  return (
    <>
      <div className={`${styles.servicesWrapper} flex flex-wrap gap-12 justify-center py-12`}>
        <a href="http://" className={`relative`}>
          <div className="relative w-[90vw] h-[200px] tabletM:w-[350px] tabletM:h-[350px] overflow-hidden rounded-lg"> {/* Set the desired dimensions */}
            <Image
              src={headerBG}
              alt="Description of the image"
              layout="fill"   
              objectFit="cover" 
              className={`rounded-lg transform transition duration-300 ease-in-out ${isHovered1 ? ' scale-110' : ''} `}
            />
          </div>
          <div className={` backdropForImage bg-[#0000007b] z-10 absolute w-full h-full bottom-0 left-0 rounded-lg`}
            onMouseEnter={handleMouseEnter1}
            onMouseLeave={handleMouseLeave1}
          ></div>
          <p className={`text-4xl text-[#ffffff] font-bold rounded-lg w-fit px-5 py-2 shadow absolute z-20 bottom-5 left-5`}>Dental</p>
        </a>
        <a href="http://" className={`relative`}>
          <div className="relative w-[90vw] h-[200px] tabletM:w-[350px] tabletM:h-[350px] overflow-hidden rounded-lg"> {/* Set the desired dimensions */}
            <Image
              src={headerBG}
              alt="Description of the image"
              layout="fill"   
              objectFit="cover" 
              className={`rounded-lg transform transition duration-300 ease-in-out ${isHovered2 ? ' scale-110' : ''} `}
            />
          </div>
          <div className={` backdropForImage bg-[#0000007b] z-10 absolute w-full h-full bottom-0 left-0 rounded-lg`}
            onMouseEnter={handleMouseEnter2}
            onMouseLeave={handleMouseLeave2}
          ></div>
          <p className={`text-4xl text-[#ffffff] font-bold rounded-lg w-fit px-5 py-2 shadow z-20 absolute bottom-5 left-5`}>Surgery</p>
        </a>
        <a href="http://" className={`relative`}>
          <div className="relative w-[90vw] h-[200px] tabletM:w-[350px] tabletM:h-[350px] overflow-hidden rounded-lg"> {/* Set the desired dimensions */}
            <Image
              src={headerBG}
              alt="Description of the image"
              layout="fill"   
              objectFit="cover" 
              className={`rounded-lg transform transition duration-300 ease-in-out ${isHovered3 ? ' scale-110' : ''} `}
            />
          </div>
          <div className={` backdropForImage bg-[#0000007b] z-10 absolute w-full h-full bottom-0 left-0 rounded-lg`}
            onMouseEnter={handleMouseEnter3}
            onMouseLeave={handleMouseLeave3}
          ></div>
          <p className={`text-4xl text-[#ffffff] font-bold rounded-lg w-fit px-5 py-2 shadow z-20 absolute bottom-5 left-5`}>Vaccines</p>
        </a>
        <a href="http://" className={`relative`}>
          <div className="relative w-[90vw] h-[200px] tabletM:w-[350px] tabletM:h-[350px] overflow-hidden rounded-lg"> {/* Set the desired dimensions */}
            <Image
              src={headerBG}
              alt="Description of the image"
              layout="fill"   
              objectFit="cover" 
              className={`rounded-lg transform transition duration-300 ease-in-out ${isHovered4 ? ' scale-110' : ''} `}
            />
          </div>
          <div className={` backdropForImage bg-[#0000007b] z-10 absolute w-full h-full bottom-0 left-0 rounded-lg`}
            onMouseEnter={handleMouseEnter4}
            onMouseLeave={handleMouseLeave4}
          ></div>
          <p className={`text-4xl text-[#ffffff] font-bold rounded-lg w-fit px-5 py-2 shadow z-20 absolute bottom-5 left-5`}>Grooming</p>
        </a>
        
      </div>
      <div className={`${styles.bgblue} py-12`}>
        <div className={`flex flex-col w-[100%] gap-4 justify-center nav1:flex-row nav1:px-5 desktopWide:w-[80%] laptop:mx-auto`}>
          <div className="relative mx-auto w-[80vw] h-[300px] cpLg:h-[400px] nav1:w-[500px] nav1:h-[500px] desktopWide:mx-0">
            <Image
              src={headerBG}
              alt="Description of the image"
              layout="fill"  
              objectFit="cover"
              className={'rounded-lg'}

            />
          </div>
          <div className={'w-[100%] p-5 text-center text-white  nav1:text-start nav1:w-[50%]'}>
            <p className={`text-4xl font-bold mb-5 tablet:text-5xl`}>Welcome to Anderson Veterinary Clinic</p>
            <p className={`text-md tablet:text-xl`}>Anderson Veterinary Clinic is a full-service animal hospital and welcomes both emergency treatment cases as well as pet patients in need of routine medical, surgical, and dental care. Dr. Natasha Anderson has years of experience treating serious conditions and offering regular pet wellness care. Beyond first-rate pet care, we make our clinic comfortable, kid-friendly, and calm, so your pet can relax in the waiting room and look forward to meeting our San Diego veterinarian.</p>
          </div>
        </div>

      </div>
    </>

  )
}

export default ServicesComponent
