'use client'
import React from 'react'
import ProductCard from '@/components/product_card'
import { useChat } from '@/context/app_context'
import { useRouter } from 'next/navigation'

const HomeProducts = () => {
    const router = useRouter()
    const {products, setProducts} = useChat()

    return (
        <main className='flex flex-col pt-14 items-center'>
            <p className="text-2xl font-medium text-left w-full">Popular products</p>

            <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 mt-6 pb-14 w-full">
                {products && products.map((data, ind:number)=>{
                    return(
                        <div key={ind} className="flex justify-center ">
                            <ProductCard product={data} />
                        </div>
                    )
                })}
            </section>

            <button onClick={() => { router.push('/all-products') }} className="px-12 py-2.5 border rounded text-gray-500/70 hover:bg-slate-50/90 transition">
                See more
            </button>
        </main>
    )
}

export default HomeProducts