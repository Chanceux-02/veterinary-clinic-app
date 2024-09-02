import React from 'react'
import fb from '/public/images/fb.svg'
import insta from '/public/images/insta.svg'
import loc from '/public/images/loc.svg'
import x from '/public/images/fb.svg'
import Image from 'next/image'
import Link from 'next/link'


function FooterComponent() {
    return (
        <div className={`bg-[#172146] h-[500px] py-[5%]`}>

            <div className={` flex justify-center gap-40`}>

                <di className={`bg-[#172242CC] w-[600px] h-[300px] shadow shadow-blue-500/50 rounded-lg p-7 flex flex-col justify-around text-white`}>
                    <Image
                        src={loc}
                        alt=""
                        responsive
                        objectFit="cover"
                        className={`w-[50px]`}
                    />
                    <Link href='#' className={`text-2xl`}>Location</Link>
                    <p className={`text-sm break-words`}>43682 Yundt Mews, Simonisborough, RI 70282-8469</p>
                    <Link href='#' className={`text-2xl`}>CONNECT WITH US</Link>
                </di>

                <div className={`flex flex-col w-[25%] gap-20`}>
                    <div className={`w-full`}>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero et debitis commodi perspiciatis adipisci quisquam qui reprehenderit ipsum, rem perferendis facere totam fuga incidunt dolores quo sunt consectetur enim molestiae?
                        </p>

                    </div>
                    <div className={`flex justify-between`}>
                        <a href="http://">
                            <Image
                                src={fb}
                                alt=""
                                responsive
                                objectFit="cover"
                                className={`w-[50px]`}
                            />
                        </a>
                        <a href="http://">
                            <Image
                                src={insta}
                                alt=""
                                responsive
                                objectFit="cover"
                                className={`w-[50px]`}
                            />
                        </a>
                        <a href="http://">
                            <Image
                                src={x}
                                alt=""
                                responsive
                                objectFit="cover"
                                className={`w-[50px]`}
                            />
                        </a>

                    </div>
                </div>

            </div>

        </div>
    )
}

export default FooterComponent
