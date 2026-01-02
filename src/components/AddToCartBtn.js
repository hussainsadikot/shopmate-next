"use client";

import useCartStore from "../store/useCartStore";

const AddToCartBtn = ({ product }) => {
    // Store માંથી બધું મંગાવ્યું
    const cart = useCartStore((state) => state.cart);
    const addToCart = useCartStore((state) => state.addToCart);
    const decreaseQuantity = useCartStore((state) => state.decreaseQuantity);

    // ચેક કરો: આ પ્રોડક્ટ કાર્ટમાં છે? અને છે તો કેટલી?
    const cartItem = cart.find((item) => item.id === product.id);
    const qty = cartItem ? cartItem.quantity : 0;

    // જો કાર્ટમાં ન હોય (0 હોય), તો સાદું બટન બતાવો
    if (qty === 0) {
        return (
            <button
                onClick={(e) => {
                    e.preventDefault(); // લિંક પર ક્લિક થતું અટકાવવા
                    addToCart(product);
                }}
                className="mt-3 w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-all active:scale-95"
            >
                Add to Cart
            </button>
        );
    }

    // જો કાર્ટમાં હોય, તો + અને - વાળું બટન બતાવો
    return (
        <div className="mt-3 flex items-center justify-between bg-blue-50 rounded-lg border border-blue-200 overflow-hidden w-full">
            {/* માઈનસ બટન */}
            <button
                onClick={(e) => {
                    e.preventDefault();
                    decreaseQuantity(product.id);
                }}
                className="px-4 py-2 bg-blue-200 text-blue-800 font-bold hover:bg-blue-300 transition"
            >
                −
            </button>

            {/* વચ્ચે આંકડો */}
            <span className="font-bold text-blue-900">{qty}</span>

            {/* પ્લસ બટન */}
            <button
                onClick={(e) => {
                    e.preventDefault();
                    addToCart(product);
                }}
                className="px-4 py-2 bg-blue-600 text-white font-bold hover:bg-blue-700 transition"
            >
                +
            </button>
        </div>
    );
};

export default AddToCartBtn;