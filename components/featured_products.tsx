'use client'
import React from 'react'
import {featuredProductData} from "@/constants"
import Image from 'next/image'


const products = [
    {
        id: 1,
        image: "/images/girl_with_headphone_image.png",
        title: "Unparalleled Sound",
        description: "Experience crystal-clear audio with premium headphones.",
    },
    {
        id: 2,
        image: "/images/girl_with_earphone_image.png",
        title: "Stay Connected",
        description: "Compact and stylish earphones for every occasion.",
    },
    {
        id: 3,
        image: "/images/boy_with_laptop_image.png",
        title: "Power in Every Pixel",
        description: "Shop the latest laptops for work, gaming, and more.",
    },
];
const FeaturedProducts = () => {


    return (
        <div className="mt-14 mb-5">
            <div className="flex flex-col items-center">
                <p className="text-3xl font-medium">Featured Products</p>
                <div className="w-28 h-0.5  mt-2"></div>
            </div>

            <div className="w-full template-300 gap-8 lg:gap-14 mt-12 md:px-14 px-4">
                {featuredProductData.map(({ id, image, title, description }) => (
                    <div key={id} className="relative group h-[400px] min-w-[300px] ">
                        <div className="relative w-full h-full min-w-[320px]">
                            <Image
                                src={image}
                                alt={title}
                                fill
                                className="object-cover group-hover:brightness-75 transition duration-300"
                            />
                        </div>

                        <div className=" group-hover:-translate-y-4 transition duration-300 absolute bottom-8 left-8 text-white space-y-2">

                            <p className="font-medium text-xl lg:text-2xl">{title}</p>
                            <p className="text-sm lg:text-base leading-5 max-w-60">
                                {description}
                            </p>
                            <button className="flex items-center gap-1.5 bg-orange-600 px-4 py-2 rounded">
                                Buy now <Image className="h-3 w-3" width={3} height={3} src={"/icons/redirect_icon.svg"} alt="Redirect Icon" />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default FeaturedProducts