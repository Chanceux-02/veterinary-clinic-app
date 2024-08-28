
'use client'
import React from 'react'
import { useState, useEffect } from 'react';
import ChildNavComponent from './ChildNavComponent';
function NavigationComponent() {

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
  
        window.addEventListener('scroll', handleScroll);
  
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
      <ChildNavComponent scroll={scrolled}/>
    )
}

export default NavigationComponent
