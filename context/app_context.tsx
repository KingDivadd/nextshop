'use client'
import { productsDummyData } from '@/constants';
import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';


interface ChatContextType {
    isSeller:boolean, 
    setIsSeller:(isSeller:boolean) => void;

    products: ProductProps[] | null,
    setProducts: (products: ProductProps[] | null) => void;

    userData: boolean;
    setUserData: (userData:boolean) => void;

    cartItems: {[_id:string]:number} | null,
    setCartItems: (cartItems:{[_id:string]:number} | null) => void;

    currency: string;

    addToCart: (_id: string) => void
    updateCartQuantity: (_id: string, quantity: number) => void
    getCartCount: () => number
    getCartAmount: () => number | undefined
    
}

// Provide a default value matching the shape of ChatContextType
const ChatContext = createContext<ChatContextType | undefined>(undefined);

export const ChatProvider: React.FC<{ children: ReactNode }> = ({ children }) => {

    useEffect(() => {
        fetchProductData()
    }, [])
    const currency = process.env.NEXT_PUBLIC_CURRENCY || '$'

    const [products, setProducts] = useState<ProductProps[] | null>(null)
    const [userData, setUserData] = useState(false)
    const [isSeller, setIsSeller] = useState(true)
    const [cartItems, setCartItems] = useState<{[_id:string]:number} | null>(null)

    async function fetchProductData() {
        setProducts(productsDummyData)
    }

    const addToCart = (_id: string): void => {
        const cartData: { [id: string]: number } = structuredClone(cartItems || {})
    
        cartData[_id] = (cartData[_id] || 0) + 1
        setCartItems(cartData)
    }
    
    const updateCartQuantity = (_id: string, quantity: number): void => {
        const cartData: { [id: string]: number } = structuredClone(cartItems || {})
    
        if (quantity === 0) {
            // delete cartData[_id]
        } else {
            cartData[_id] = quantity
        }
    
        setCartItems(cartData)
    }
    
    const getCartCount = (): number => {
        let totalCount = 0
        if (!cartItems) return totalCount
    
        for (const id in cartItems) {
            totalCount += cartItems[id]
        }
        return totalCount
    }
    
    const getCartAmount = (): number => {
        if (!products || !cartItems) return 0
    
        let totalAmount = 0
    
        for (const id in cartItems) {
            const product = products.find(p => p._id === id)
            if (product) {
                totalAmount += product.offerPrice * cartItems[id]
            }
        }
    
        return Math.floor(totalAmount * 100) / 100
    }
    

    return(
        <ChatContext.Provider value={{
            products, setProducts, userData, setUserData, 
            isSeller, setIsSeller, cartItems, setCartItems, 
            currency, addToCart, updateCartQuantity, getCartAmount, getCartCount

        }}>{children}</ChatContext.Provider>
    )
}


export const useChat = () => {
    const context = useContext(ChatContext);
    if (!context) {
        throw new Error("useChat must be used within a ChatProvider");
    }
    return context;
};