import React from 'react'
import Testimonial from './Testimonial';
import styles from './clientContact.module.css'


export default function ClientContact() {
    return (
        <div className={`${styles.contactWrapper} relative`}>
            <Testimonial />
        </div>

    )
}
