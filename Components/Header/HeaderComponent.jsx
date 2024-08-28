import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import styles from './header.module.css'
import headerBG from '/public/images/headerBg.webp'
import wave from '/public/images/bubble-side-divider.svg'

function HeaderComponent() {
  return (
    <div className={'relative'}>
      <Image
        src={headerBG}
        alt="Header Background"
        width={1200}  
        height={675}   
        layout="responsive"  
        objectFit="cover"
      />
       <div className="absolute bottom-0 left-0 w-full flex justify-center">
        <Image
          src={wave}
          alt=""
          width={1200}  
          height={675}   
          layout="responsive"  
          objectFit="cover"
          className={styles.rotate45}
        />
      </div>
      
      <div className={'absolute inset-0 flex flex-col items-center justify-center text-white bg-blue-950 bg-opacity-20 text-center'}>
        <p className={'text-2xl mt-12 cpLg:text-4xl tablet:text-7xl'}>EXPERTS IN ANIMAL CARE</p>
        <p className={'text-sm	 cpLg:text-2xl'}>YOUR BEST FRIENDS DESERVE FRIENDLY PET CARE</p>
        <Link href="#" className="btn btn-wide bg-white text-black border-none mt-10 font-semibold hover:text-white">BOOK AN APPOINTMENT</Link>
      </div>
    </div>
  )
}

export default HeaderComponent
