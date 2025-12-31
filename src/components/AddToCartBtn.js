"use client"; // 👈 આ લાઈન બહુ મહત્વની છે. આનાથી Next.js ને ખબર પડે કે આ બ્રાઉઝરમાં ચાલશે.

import useCartStore from "../store/useCartStore";

const AddToCartBtn = ({ product }) => {
    // Store માંથી function મંગાવ્યું
    const addToCart = useCartStore((state) => state.addToCart);

    return (
        <button
            onClick={() => {
                addToCart(product); // Click કરતા Store માં ડેટા જશે
                alert("Added to cart!"); // કામચલાઉ Alert (Feedback માટે)
            }}
            className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-700 w-full md:w-auto transition"
        >
            Add to Cart
        </button>
    );
};

export default AddToCartBtn;