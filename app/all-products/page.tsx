'use client'
import React from 'react'
import Navbar from '@/components/navbar'
import ProductCard from '@/components/product_card'
import { useChat } from '@/context/app_context'
import { useRouter } from 'next/navigation'
import Footer from '@/components/footer'

interface Product {
    _id: string;
    name: string;
    description: string;
    image: string[];
    offerPrice: number;
}

const AllProducts = () => {
    const router = useRouter()
    const {products} = useChat()

    return (
        <div className="">
            <Navbar />
            <main className='w-full px-6 md:px-16 lg:px-32 mt-10'>
                <div className='w-full flex flex-col items-start '>
                    <div className="flex flex-col items-end ">
                        <p className="text-2xl font-medium">All products</p>
                        <div className="w-16 h-[1.5px] bg-orange-600 rounded-full"></div>
                    </div>

                    <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 mt-6 pb-14 w-full">
                        {products && products.map((data: Product, ind: number) => {
                            return (
                                <div key={ind} className="flex justify-center">
                                <ProductCard product={data} />
                                </div>
                            )
                        })}
                    </section>


                </div>
            </main>
            <Footer />
        </div>
    )
}

export default AllProducts