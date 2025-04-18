'use clien'
import React from 'react'
import Image from 'next/image'

const Banner = () => {
    return (
        <div className="flex flex-col md:flex-row items-center justify-between md:pl-20 py-14 md:py-0 bg-[#E6E9F2] my-16 rounded-xl overflow-hidden">
            <Image
                className="max-w-56"
                width={280}
                height={280}
                src={"/images/jbl_soundbox_image.png"}
                alt="jbl_soundbox_image"
            />
            <div className="flex flex-col items-center justify-center text-center space-y-2 px-4 md:px-0">
                <h2 className="text-2xl md:text-3xl font-semibold max-w-[290px]">
                Level Up Your Gaming Experience
                </h2>
                <p className="max-w-[343px] font-medium text-gray-800/60">
                From immersive sound to precise controls—everything you need to win
                </p>
                <button className="group flex items-center justify-center gap-1 px-12 py-2.5 bg-orange-600 rounded text-white">
                Buy now
                <Image width={18} height={18} className="group-hover:translate-x-1 transition" src={"/icons/arrow_icon_white.svg"} alt="arrow_icon_white" />
                </button>
            </div>
            <Image
                width={280}
                height={280}
                className="hidden md:block max-w-80"
                src={"/images/md_controller_image.png"}
                alt="md_controller_image"
            />
            <Image
                width={280}
                height={280}
                className="md:hidden"
                src={"/images/sm_controller_image.png"}
                alt="sm_controller_image"
            />
        </div>
    )
}

export default Banner