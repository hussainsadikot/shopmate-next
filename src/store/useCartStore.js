import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useCartStore = create(
    persist(
        (set) => ({
            cart: [],

            // 1. ઉમેરવાનું લોજીક (વધારે છે)
            addToCart: (product) => set((state) => {
                const existingItem = state.cart.find((item) => item.id === product.id);
                if (existingItem) {
                    return {
                        cart: state.cart.map((item) =>
                            item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                        ),
                    };
                } else {
                    return { cart: [...state.cart, { ...product, quantity: 1 }] };
                }
            }),

            // 2. ઘટાડવાનું લોજીક (નવું Feature) 👇
            decreaseQuantity: (productId) => set((state) => {
                const existingItem = state.cart.find((item) => item.id === productId);

                // જો 1 જ હોય અને માઈનસ દબાવે, તો લિસ્ટમાંથી કાઢી નાખો
                if (existingItem.quantity === 1) {
                    return { cart: state.cart.filter((item) => item.id !== productId) };
                }
                // નહિતર ખાલી કોન્ટીટી ઓછી કરો
                else {
                    return {
                        cart: state.cart.map((item) =>
                            item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
                        ),
                    };
                }
            }),

            // 3. પૂરું કાઢી નાખવાનું લોજીક
            removeFromCart: (productId) => set((state) => ({
                cart: state.cart.filter((item) => item.id !== productId),
            })),
        }),
        {
            name: 'shopmate-cart',
        }
    )
);

export default useCartStore;