'use client';
import React, { useEffect, useState } from "react";
import {  orderDummyData } from "@/constants";
import Image from "next/image";
import { useChat } from "@/context/app_context";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Loading from "@/components/loading";

const MyOrders = () => {

    const { currency } = useChat();

    const [orders, setOrders] = useState<OrderProps[] | null>(null);
    const [loading, setLoading] = useState(true);

    const fetchOrders = async () => {
        setOrders(orderDummyData)
        setLoading(false);
    }

    useEffect(() => {
        fetchOrders();
    }, []);

    return (
        <>
            <Navbar />
            <div className="flex flex-col justify-between px-6 md:px-16 lg:px-32 py-6 min-h-screen">
                <div className="space-y-5">
                    <h2 className="text-lg font-medium mt-6">My Orders</h2>
                    {loading ? 
                        <Loading /> 
                        : 
                        <div className="max-w-5xl border-t border-gray-300 text-sm">
                            {orders && orders.map((order:OrderProps, index:number) => (
                                <div key={index} className="flex flex-col md:flex-row gap-5 justify-between p-5 border-b border-gray-300">
                                    <div className="flex-1 flex gap-5 max-w-80">
                                        <Image
                                            width={70}
                                            height={70}
                                            className="max-w-16 max-h-16 object-cover"
                                            src={"/icons/box_icon.svg"}
                                            alt="box_icon"
                                        />
                                        <p className="flex flex-col gap-3">
                                            <span className="font-medium text-base">
                                                {order.items.map((item:ItemOrderType) => item.product.name + ` x ${item.quantity}`).join(", ")}
                                            </span>
                                            <span>Items : {order.items.length}</span>
                                        </p>
                                    </div>
                                    <div>
                                        <p>
                                            <span className="font-medium">{order.address.full_name}</span>
                                            <br />
                                            <span >{order.address.area}</span>
                                            <br />
                                            <span>{`${order.address.city}, ${order.address.state}`}</span>
                                            <br />
                                            <span>{order.address.phone_number}</span>
                                        </p>
                                    </div>
                                    <p className="font-medium my-auto">{currency}{order.amount}</p>
                                    <div>
                                        <p className="flex flex-col">
                                            <span>Method : COD</span>
                                            <span>Date : {new Date(order.date).toLocaleDateString()}</span>
                                            <span>Payment : Pending</span>
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    }
                </div>
            </div>
            <Footer />
        </>
    );
};

export default MyOrders;