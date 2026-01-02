import Image from "next/image"; // Next.js માં ઈમેજ માટે આ ખાસ ટૂલ વપરાય છે
import Link from "next/link";
import AddToCartBtn from "./AddToCartBtn"; // 👈 1. આપણે બનાવેલું બટન ઈમ્પોર્ટ કરો

const ProductCard = ({ product }) => {
    return (
        <div className="border p-4 rounded-lg shadow hover:shadow-lg transition">
            {/* Product Image */}
            <Link href={`/product/${product.id}`}>
                <div className="relative w-full h-48 mb-4">
                    <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover rounded"
                    />
                </div>
            </Link>


            {/* Product Info */}
            <h2 className="text-lg font-bold">{product.name}</h2>
            <p className="text-gray-600">₹{product.price}</p>

            {/* Button */}
            <AddToCartBtn product={product} />
        </div>
    );
};

export default ProductCard;