'use client'
import { productsDummyData } from '@/constants';
import React, { createContext, useContext, useState, ReactNode } from 'react';


interface ChatContextType {
    isSeller:boolean, 
    setIsSeller:(isSeller:boolean) => void;

    products: ProductProps[] | null,
    setProducts: (products: ProductProps[] | null) => void;

    userData: boolean;
    setUserData: (userData:boolean) => void;

    cartItems: {product_name:string} | null,
    setCartItems: (cartItems: {product_name: string} | null) => void;

    currency: string;
    
}

// Provide a default value matching the shape of ChatContextType
const ChatContext = createContext<ChatContextType | undefined>(undefined);

export const ChatProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const currency = process.env.NEXT_PUBLIC_CURRENCY || '$'

    const [products, setProducts] = useState<ProductProps[] | null>(productsDummyData)
    const [userData, setUserData] = useState(false)
    const [isSeller, setIsSeller] = useState(true)
    const [cartItems, setCartItems] = useState<{product_name: string } | null>(null)


    return(
        <ChatContext.Provider value={{
            products, setProducts, userData, setUserData, 
            isSeller, setIsSeller, cartItems, setCartItems, 
            currency, 

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