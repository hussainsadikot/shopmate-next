"use client"; // Store વાપરીએ છીએ એટલે Client Component

import useCartStore from "../../store/useCartStore";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
export default function CartPage() {
    // Store માંથી ડેટા અને ફંક્શન લીધા
    // 1. State to check if loaded
    const [isClient, setIsClient] = useState(false);

    // 2. Store data
    const cart = useCartStore((state) => state.cart);
    const removeFromCart = useCartStore((state) => state.removeFromCart);

    // 3. જ્યારે પેજ લોડ થઈ જાય, ત્યારે જ કહો કે "હવે હું ક્લાયન્ટ છું"
    useEffect(() => {
        setIsClient(true);
    }, []);

    // 4. જો હજી લોડ થતું હોય, તો ખાલી લોડિંગ બતાવો (એરરથી બચવા)
    if (!isClient) {
        return <div className="p-10 text-center">Loading cart...</div>;
    }

    // 5. ગણતરી
    const totalAmount = cart.reduce((total, item) => total + item.price * item.quantity, 0);

    // જો કાર્ટ ખાલી હોય તો...
    if (cart.length === 0) {
        return (
            <div className="p-10 text-center">
                <h2 className="text-2xl font-bold mb-4">Your Cart is Empty 😔</h2>
                <Link href="/" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
                    Go Shopping
                </Link>
            </div>
        );
    }

    // જો વસ્તુ હોય તો...
    return (
        <div className="p-8 max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>

            <div className="bg-white shadow rounded-lg p-6">
                {cart.map((item) => (
                    <div key={item.id} className="flex items-center justify-between border-b py-4 last:border-0">

                        {/* Image & Name */}
                        <div className="flex items-center gap-4">
                            <div className="w-20 h-20 relative">
                                <img src={item.image} alt={item.name} className="w-full h-full object-cover rounded" />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold">{item.name}</h3>
                                <p className="text-gray-500">Price: ₹{item.price}</p>
                            </div>
                        </div>

                        {/* Quantity & Remove */}
                        <div className="text-right">
                            <p className="font-semibold mb-2">Qty: {item.quantity}</p>
                            <button
                                onClick={() => removeFromCart(item.id)}
                                className="text-red-500 text-sm hover:underline"
                            >
                                Remove
                            </button>
                        </div>
                    </div>
                ))}

                {/* Total & Checkout */}
                <div className="mt-6 border-t pt-6 flex justify-between items-center">
                    <h2 className="text-2xl font-bold">Total: ₹{totalAmount}</h2>
                    <button
                        className="bg-green-600 text-white px-8 py-3 rounded-lg text-lg hover:bg-green-700"
                        onClick={() => alert("Checkout Feature coming soon!")}
                    >
                        Checkout
                    </button>
                </div>
            </div>
        </div>
    );
}