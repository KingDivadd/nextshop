'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { footer_links } from '@/constants'
import { title } from 'process'

const Footer = () => {
    return (
        <footer>
            <div className="flex flex-col md:flex-row items-start justify-center px-6 md:px-16 lg:px-32 gap-10 py-14 border-b border-gray-500/30 text-gray-500">
                <div className="w-4/5">
                    <span className="flex items-center justify-self">
                        <p className="text-lg font-medium text-orange-600">Next</p>
                        <p className="text-lg font-medium ">Shop</p>
                    </span>
                    <p className="mt-6 text-md">
                        Lorem Ipsum is simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum has been the industry's standard dummy text
                        ever since the 1500s, when an unknown printer took a galley of type
                        and scrambled it to make a type specimen book.
                    </p>
                </div>

                <div className="w-1/2 flex items-center justify-start md:justify-center">
                    <div>
                        <h2 className="font-medium text-gray-900 mb-5">Company</h2>
                        <ul className="text-sm space-y-2 flex flex-col">
                            {footer_links.map((data, ind)=>{
                                return (
                                    <Link key={ind} href={data.link} className=''>{data.title}</Link>
                                )
                            }) }
                        </ul>
                    </div>
                </div>

                <div className="w-1/2 flex items-start justify-start md:justify-center">
                    <div>
                        <h2 className="font-medium text-gray-900 mb-5">Get in touch</h2>
                        <div className="text-sm space-y-2">
                            <p>+234-567-890-01</p>
                            <p>iroegbu.dg@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
            <p className="py-4 text-center text-xs md:text-sm">
                Copyright 2025 © DivadLabs All Right Reserved.
            </p>
    </footer>
    )
}

export default Footer