import React from 'react'
import styles from './clientContact.module.css'
import wave from '/public/images/bubble-side-divider.svg'
import cat from '/public/images/services/cat.webp'
import icon1 from '/public/images/services/icon-1.webp'
import Image from 'next/image'
import Link from 'next/link'


export default function ClientContact() {
    return (
        <>
            <div className={`${styles.contactWrapper} relative h-fill pb-12`}>
                <Image
                    src={wave}
                    alt=""
                    width={1200}
                    height={675}
                    layout="responsive"
                    objectFit="cover"
                    className={`absolute`}
                />
                <Image
                    src={cat}
                    alt=""
                    fill
                    objectFit="cover"
                    className={`-z-30`}
                />
                <div className={`bg-[#000000a2] absolute bottom-0 top-0 -z-10 w-full h-full`}></div>

                <div className={`w-full mx-auto pt-[12%]`}>
                    <h1 className={`text-7xl text-white font-extrabold text-center`}>How can we help you?</h1>

                    <div className={` w-[80%] mx-auto mt-[5%] flex flex-wrap justify-center gap-10 max-w-[1500px]`}>

                        <di className={`bg-[#172242CC] w-[600px] h-[300px] laptop-and-desktop:w-[400px] laptop-and-desktop:h-[200px] rounded-lg p-7 flex flex-col justify-around text-white hover:bg-[#172242f5]`}>
                            <Image
                                src={icon1}
                                alt=""
                                responsive
                                objectFit="cover"
                                className={`w-[50px]`}
                            />
                            <Link href='#' className={`text-2xl`}>Contact Us</Link>
                            <p className={`text-sm break-words`}>Lorem ipsum dolor sit amet consectetur adipisicing elit?</p>
                            <Link href='#' className={`text-2xl`}>CONNECT WITH US</Link>
                        </di>
                        <di className={`bg-[#172242CC] w-[600px] h-[300px] laptop-and-desktop:w-[400px] laptop-and-desktop:h-[200px] rounded-lg p-7 flex flex-col justify-around text-white hover:bg-[#172242f5]`}>
                            <Image
                                src={icon1}
                                alt=""
                                responsive
                                objectFit="cover"
                                className={`w-[50px]`}
                            />
                            <Link href='#' className={`text-2xl`}>Online Forms</Link>
                            <p className={`text-sm break-words`}>Lorem ipsum dolor sit amet consectetur adipisicing elit?</p>
                            <Link href='#' className={`text-2xl`}>VIEW FORMS</Link>
                        </di>
                        <di className={`bg-[#172242CC] w-[600px] h-[300px] laptop-and-desktop:w-[400px] laptop-and-desktop:h-[200px] rounded-lg p-7 flex flex-col justify-around text-white hover:bg-[#172242f5]`}>
                            <Image
                                src={icon1}
                                alt=""
                                responsive
                                objectFit="cover"
                                className={`w-[50px]`}
                            />
                            <Link href='#' className={`text-2xl`}>Book An Appointment</Link>
                            <p className={`text-sm break-words`}>Lorem ipsum dolor sit amet consectetur adipisicing elit?</p>
                            <Link href='#' className={`text-2xl`}>SCHEDULE NOW</Link>
                        </di>
                        <di className={`bg-[#172242CC] w-[600px] h-[300px] laptop-and-desktop:w-[400px] laptop-and-desktop:h-[200px] rounded-lg p-7 flex flex-col justify-around text-white hover:bg-[#172242f5]`}>
                            <Image
                                src={icon1}
                                alt=""
                                responsive
                                objectFit="cover"
                                className={`w-[50px]`}
                            />
                            <Link href='#' className={`text-2xl`}>Wellness Care and Checkups</Link>
                            <p className={`text-sm break-words`}>Lorem ipsum dolor sit amet consectetur adipisicing elit?</p>
                            <Link href='#' className={`text-2xl`}>LEARN MORE</Link>
                        </di>

                    </div>

                    <div className={`appointmentForm pt-5 mt-12`}>
                        <h1 className={` text-4xl cpLg:text-6xl text-white font-extrabold text-center mb-12`} >Appointment Request</h1>
                        <form className={`mx-auto w-[90%] tablet:w-[50%] max-w-[1500px]`}>
                            <div className={`flex gap-5 justify-center w-full flex-col tabletM:flex-row`}>
                                <div className={`flex flex-col gap-5 w-full tabletM:w-[50%]`}>

                                    <input type="text" name="name" placeholder="Enter You Name" className="input input-bordered input-info w-full" />
                                    <input type="email" name="email" placeholder="Enter Your Email" className="input input-bordered input-info w-full" />
                                    <input type="number" name="cpNum" placeholder="Phone Number" className="input input-bordered input-info w-full" />
                                    <input type="text" name="date" placeholder="Select Data" className="input input-bordered input-info w-full" />
                                    <input type="text" name="time" placeholder="Select Time" className="input input-bordered input-info w-full" />
                                </div>
                                <div className={`w-full tabletM:w-[50%]`}>
                                    <textarea name="" id="" placeholder="Some message" className="textarea textarea-info h-full w-full min-h-[200px] "></textarea>
                                </div>
                            </div>
                            <div className={`flex justify-center mt-12`}>
                                <button type="submit" className="btn btn-wide mx-auto bg-white text-black mt-5">Submit</button>
                            </div>
                        </form>
                    </div>

                </div>

            </div>
        </>
    )
}
