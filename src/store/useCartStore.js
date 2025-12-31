import { create } from 'zustand';

// આ આપણું "Store" છે
const useCartStore = create((set) => ({

    // શરૂઆતમાં કાર્ટ ખાલી છે
    cart: [],

    // ફંક્શન: કાર્ટમાં વસ્તુ ઉમેરવા માટે
    addToCart: (product) => set((state) => {
        // પહેલા ચેક કરો કે આ વસ્તુ ઓલરેડી છે?
        const existingItem = state.cart.find((item) => item.id === product.id);

        if (existingItem) {
            // જો હોય, તો ખાલી quantity વધારો (Quantity + 1)
            return {
                cart: state.cart.map((item) =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                ),
            };
        } else {
            // જો નવી હોય, તો લિસ્ટમાં ઉમેરો (Quantity 1 સાથે)
            return { cart: [...state.cart, { ...product, quantity: 1 }] };
        }
    }),

    // ફંક્શન: કાર્ટમાંથી વસ્તુ કાઢવા માટે (પછી કામ લાગશે)
    removeFromCart: (productId) => set((state) => ({
        cart: state.cart.filter((item) => item.id !== productId),
    })),

}));

export default useCartStore;