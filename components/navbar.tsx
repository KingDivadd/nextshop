'use client'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useChat } from '../context/app_context'
import {SignInButton,SignUpButton,SignedIn,SignedOut,UserButton,} from '@clerk/nextjs'
import { Button } from './ui/button'

const Navbar = () => {
    const router = useRouter()
    const {isSeller, setIsSeller} = useChat()


    return (
        <nav className="flex items-center justify-between px-6 md:px-16 lg:px-32 py-3 border-b border-gray-300 text-gray-700">
            <span className="flex items-center justify-self">
                <p className="text-xl font-medium text-orange-600">Next</p>
                <p className="text-xl font-medium ">Shop</p>
            </span>

            <div className="flex items-center gap-4 lg:gap-8 max-md:hidden">
                <Link href="/" className="hover:text-gray-900 transition">
                Home
                </Link>
                <Link href="/all-products" className="hover:text-gray-900 transition">
                Shop
                </Link>
                <Link href="/" className="hover:text-gray-900 transition">
                About Us
                </Link>
                <Link href="/" className="hover:text-gray-900 transition">
                Contact
                </Link>

                {isSeller && <button onClick={() => router.push('/seller')} className="text-xs border px-4 py-1.5 rounded-full">Seller Dashboard</button>}
            </div>

            <ul className="hidden md:flex items-center gap-4 ">
                <Image width={18} height={18} src={'/icons/search_icon.svg'} alt="search icon" />
                <button className="flex items-center gap-2 hover:text-gray-900 transition">
                <Image src={'/icons/user_icon.svg'} alt="user icon" width={18} height={18} />
                Account
                </button>

                <div className="hidden md:flex items-center gap-4">
                    <SignedIn>
                        <UserButton afterSignOutUrl='/' />
                    </SignedIn>
                    <SignedOut>
                        <SignInButton mode="modal" >
                            Sign In
                        </SignInButton>
                        <SignUpButton mode="modal" >
                            <Button className="px-4 py-2.5 rounded-full bg-orange-600 text-white hover:bg-orange-700 duration-200">
                                Sign Up
                            </Button>
                        </SignUpButton>
                    </SignedOut>
                </div>
            </ul>

            <div className="flex items-center md:hidden gap-3"> 
                {isSeller && <button onClick={() => router.push('/seller')} className="text-xs border px-4 py-1.5 rounded-full">Seller Dashboard</button>}
                <button className="flex items-center gap-2 hover:text-gray-900 transition">
                <Image src={'/icons/user_icon.svg'} alt="user icon" width={18} height={18} />
                Account
                </button>

                <div className="hidden md:flex items-center gap-4">
                    <SignedIn>
                        <UserButton afterSignOutUrl='/' />
                    </SignedIn>
                    <SignedOut>
                        <SignInButton mode="modal" >
                            Sign In
                        </SignInButton>
                        <SignUpButton mode="modal" >
                            <Button className="px-4 py-2.5 rounded-full bg-orange-600 text-white hover:bg-orange-700 duration-200">
                                Sign Up
                            </Button>
                        </SignUpButton>
                    </SignedOut>
                </div>
            </div>

        </nav>
    )
}

export default Navbar