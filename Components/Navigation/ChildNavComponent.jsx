import React from 'react'
import Link from 'next/link';
import styles from './childNav.module.css'

function ChildNavComponent({ scroll }) {
    return (

        <div className={'navigation-container w-[100%] absolute z-50'}>

            <div className={`drawer ${'nav1:hidden'}`}>
                <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <label htmlFor="my-drawer" className="btn bg-blue-950 bg-opacity-20 border-none drawer-button absolute top-2 right-2">&#9776;</label>
                </div>
                <div className="drawer-side relative cpLg:fixed">
                    <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay hidden cpLg:block"></label>
                    <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
                        <label htmlFor="my-drawer" aria-label="close sidebar" className="z-10 absolute top-2 right-2 drawer-button cpLg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </label>
                        <li className={'mt-6'}><a>Sidebar Item 1</a></li>
                        <li><a>Sidebar Item 2</a></li>
                    </ul>
                </div>
            </div>


            <div className={`${styles.nav} justify-center mx-auto px-20 py-12 bg-blue-950 text-white transition-width duration-1000 ease-in-out hidden nav1:flex rounded-none mt-0 ${scroll ? 'fixed left-0 right-0 top-0 w-full rounded-none' : 'nav2:w-[70%] nav2:mt-10 nav2:rounded-lg'} `}>
                <section>
                    <h1>Logo</h1>
                </section>
                <section className={'flex w-[80%] justify-center mx-auto px-5 font-bold'}>
                    <div className="dropdown dropdown-hover mx-5">
                        <div tabIndex={0} role="button" className="m-1">SERVICES &#x25BE;</div>
                        <ul tabIndex={0} className="dropdown-content bg-blue-950 rounded-md menu z-[1] w-52 p-2 shadow shadow-[rgba(242,240,240,0.2)]">
                            <li><a>GROOMING</a></li>
                            <li><a>BOARDING</a></li>
                            <li><a>SURGERY</a></li>
                            <li><a>TELEMEDECINE</a></li>
                        </ul>
                    </div>
                    <div className="dropdown dropdown-hover mx-5">
                        <div tabIndex={0} role="button" className="m-1">ABOUT  &#x25BE;</div>
                        <ul tabIndex={0} className="dropdown-content bg-blue-950 rounded-md menu z-[1] w-52 p-2 shadow shadow-[rgba(242,240,240,0.2)]">
                            <li><a>MEET THE TEAM</a></li>
                            <li><a>TESTIMONIALS</a></li>
                            <li><a>PATIENT CENTER</a></li>
                        </ul>
                    </div>
                    <div className="dropdown dropdown-hover mx-5">
                        <div tabIndex={0} role="button" className="m-1">RESOURCES  &#x25BE;</div>
                        <ul tabIndex={0} className="dropdown-content bg-blue-950 rounded-md menu z-[1] w-52 p-2 shadow shadow-[rgba(242,240,240,0.2)]">
                            <li><a>AVAILABLE PRODUCTS</a></li>
                            <li><a>BLOG</a></li>
                        </ul>
                    </div>
                    <div className="dropdown dropdown-hover mx-5">
                        <div tabIndex={0} role="button" className="m-1">CONTACT  &#x25BE;</div>
                        <ul tabIndex={0} className="dropdown-content bg-blue-950 rounded-md menu z-[1] w-52 p-2 shadow shadow-[rgba(242,240,240,0.2)]">
                            <li><a>BOOK APPOINTMENT</a></li>
                            <li><a>SEND EMAIL</a></li>
                        </ul>
                    </div>
                </section>
                <section>
                    <h5 className={scroll ? "hidden" : "block"}>&#128222; 800-462-8749</h5>
                    <Link href="#" className={`btn btn-xs sm:btn-sm md:btn-md lg:btn-lg bg-white h-auto text-black border-none font-semibold hover:text-white p-3 ${scroll ? "block" : "hidden"} `}>BOOK AN APPOINTMENT</Link>
                </section>
            </div>
        </div>
    )
}

export default ChildNavComponent

