import React from 'react'
import styles from './clientContact.module.css'
import wave from '/public/images/bubble-side-divider.svg'
import Image from 'next/image';

function Testimonial() {
    return (
        <div className={`${styles.testimonialWrapper}`}>
            <Image
                src={wave}
                alt=""
                width={1200}
                height={675}
                layout="responsive"
                objectFit="cover"
            />
        </div>
    )
}

export default Testimonial
