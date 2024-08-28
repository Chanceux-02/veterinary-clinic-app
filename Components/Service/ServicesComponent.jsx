import React from 'react'
import styles from './service.module.css'
import Image from 'next/image';
import headerBG from '/public/images/headerBg.webp'


function ServicesComponent() {
  return (
    <>
      <div className={`${styles.servicesWrapper} flex flex-wrap gap-12 justify-center py-12 mx-2`}>
        <a href="http://">
          <div className="relative w-[350px] h-[350px]"> {/* Set the desired dimensions */}
            <Image
              src={headerBG}
              alt="Description of the image"
              layout="fill"   // Fills the parent container
              objectFit="cover" // Ensures the image covers the entire div
              className={'rounded-lg'}
            />
          </div>
        </a>
        <a href="http://">
          <div className="relative w-[350px] h-[350px]"> {/* Set the desired dimensions */}
            <Image
              src={headerBG}
              alt="Description of the image"
              layout="fill"   // Fills the parent container
              objectFit="cover" // Ensures the image covers the entire div
              className={'rounded-lg'}

            />
          </div>
        </a>
        <a href="http://">
          <div className="relative w-[350px] h-[350px]"> {/* Set the desired dimensions */}
            <Image
              src={headerBG}
              alt="Description of the image"
              layout="fill"   // Fills the parent container
              objectFit="cover" // Ensures the image covers the entire div
              className={'rounded-lg'}

            />
          </div>
        </a>
        <a href="http://">
          <div className="relative w-[350px] h-[350px]"> {/* Set the desired dimensions */}
            <Image
              src={headerBG}
              alt="Description of the image"
              layout="fill"   // Fills the parent container
              objectFit="cover" // Ensures the image covers the entire div
              className={'rounded-lg'}

            />
          </div>
        </a>
      </div>
      <div className={`${styles.bgblue} py-12`}>
        <div className={`w-[100%] mx-auto flex gap-4 justify-center`}>
          <div className="relative w-[500px] h-[500px]">
            <Image
              src={headerBG}
              alt="Description of the image"
              layout="fill"  
              objectFit="cover"
              className={'rounded-lg'}

            />
          </div>
          <div className={'w-[50%] text-white'}>
            <p className={`text-6xl`}>Welcome to Anderson Veterinary Clinic</p>
            <p className={`text-2xl`}>Anderson Veterinary Clinic is a full-service animal hospital and welcomes both emergency treatment cases as well as pet patients in need of routine medical, surgical, and dental care. Dr. Natasha Anderson has years of experience treating serious conditions and offering regular pet wellness care. Beyond first-rate pet care, we make our clinic comfortable, kid-friendly, and calm, so your pet can relax in the waiting room and look forward to meeting our San Diego veterinarian.</p>
          </div>
        </div>

      </div>
    </>

  )
}

export default ServicesComponent
