"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import useCartStore from "../store/useCartStore";

const Navbar = () => {
    const cart = useCartStore((state) => state.cart);
    const [isMounted, setIsMounted] = useState(false);
    useEffect(() => {
        setIsMounted(true);
    }, []);


    // આ લાઈન કાર્ટમાં કુલ કેટલી વસ્તુ છે તે ગણે છે
    const totalItems = isMounted ? cart.reduce((total, item) => total + item.quantity, 0) : 0;
    return (
        <nav className="flex justify-between items-center p-4 bg-white shadow-md sticky top-0 z-50">
            <Link href="/" className="text-2xl font-bold text-blue-600">
                ShopMate
            </Link>

            <div className="flex items-center gap-6">
                <Link href="/" className="hover:text-blue-500 font-medium text-gray-700">
                    Home
                </Link>

                <Link href="/cart" className="relative hover:text-blue-500 font-medium text-gray-700">
                    Cart 🛒
                    {totalItems > 0 && (
                        <span className="absolute -top-3 -right-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                            {totalItems}
                        </span>
                    )}
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;