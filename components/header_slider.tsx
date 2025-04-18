'use client'
import React, { useEffect, useState, useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { sliderData } from "@/constants"
import Image from 'next/image'

const HeaderSlider = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: false,
        align: "start",
        direction: "ltr",
    }, [Autoplay({ delay: 5000 })])

    const [selectedIndex, setSelectedIndex] = useState(0)

    const onSelect = useCallback(() => {
        if (!emblaApi) return
        setSelectedIndex(emblaApi.selectedScrollSnap())
    }, [emblaApi])

    useEffect(() => {
        if (!emblaApi) return

        emblaApi.on('select', onSelect)
        onSelect()
    }, [emblaApi, onSelect])

    return (
        <div className='relative bg-[#E6E9F2] py-8 md:px-14 px-5 mt-6 rounded-xl min-w-full'>
            <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex">
                    {sliderData.map((data, ind) => {
                        const { id, title, offer, buttonText1, buttonText2, img } = data
                        return (
                            <div key={id} className="min-w-full flex items-center justify-center">
                                <div className="w-full flex flex-col-reverse md:flex-row items-center justify-between">
                                    <div className="md:pl-8 mt-10 md:mt-0">
                                        <p className="md:text-base text-orange-600 pb-1">{offer}</p>
                                        <h1 className="max-w-lg md:text-[40px] md:leading-[48px] text-2xl font-semibold">
                                            {title}
                                        </h1>
                                        <div className="flex items-center mt-4 md:mt-6">
                                            <button className="md:px-10 px-7 md:py-2.5 py-2 bg-orange-600 rounded-full text-white font-medium">
                                                {buttonText1}
                                            </button>
                                            <button className="group flex items-center gap-2 px-6 py-2.5 font-medium">
                                                {buttonText2}
                                                <Image className="group-hover:translate-x-1 transition" width={18} height={18} src={"/icons/arrow_icon.svg"} alt="arrow_icon" />
                                            </button>
                                        </div>
                                    </div>
                                    <div className="flex items-center flex-1 justify-center">
                                        <span className="relative md:w-72 w-48 h-48 md:h-72 overflow-hidden">
                                            <Image
                                                src={img}
                                                alt={`Slide ${ind + 1}`}
                                                objectFit='contain'
                                                layout='fill'
                                            />
                                        </span>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>

            {/* Pagination */}
            <div className="absolute -bottom-5 md:-bottom-10 left-1/2 -translate-x-1/2 flex justify-center gap-2">
                {sliderData.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => emblaApi && emblaApi.scrollTo(index)}
                        className={`w-2 h-2 rounded-full transition ${
                            selectedIndex === index ? 'bg-orange-600' : 'bg-gray-300'
                        }`}
                    />
                ))}
            </div>
        </div>
    )
}

export default HeaderSlider
