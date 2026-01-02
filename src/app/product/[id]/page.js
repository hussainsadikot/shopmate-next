import { products } from "../../../data";
import Link from "next/link";
import AddToCartBtn from "../../../components/AddToCartBtn";

export default async function ProductDetails({ params }) {
    const resolvedParams = await params;
    const productId = parseInt(resolvedParams.id);
    const product = products.find((p) => p.id === productId);

    if (!product) {
        return <div className="p-10 text-center text-red-500">Product not found!</div>;
    }

    return (
        <div className="p-4 md:p-8 max-w-6xl mx-auto">


            {/* Responsive Layout: મોબાઈલમાં ઉભું (col), લેપટોપમાં આડું (row) */}
            <div className="flex flex-col md:flex-row gap-8 bg-white p-4 md:p-8 rounded-xl shadow-sm">

                {/* Left: Image (મોબાઈલમાં ફૂલ સાઈઝ) */}
                <div className="w-full md:w-1/2 h-64 md:h-96 bg-gray-100 rounded-lg overflow-hidden flex justify-center items-center">
                    <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-contain mix-blend-multiply"
                    />
                </div>

                {/* Right: Details */}
                <div className="w-full md:w-1/2 flex flex-col justify-center">
                    <h1 className="text-2xl md:text-4xl font-bold text-gray-800">{product.name}</h1>
                    <p className="text-xl md:text-3xl text-blue-600 font-bold mt-2">₹{product.price}</p>

                    <p className="mt-4 text-gray-600 leading-relaxed text-sm md:text-base">
                        Experience premium quality with the new {product.name}.
                        Perfect for daily use with durable build quality and modern design.
                        Order now and get fast delivery!
                    </p>

                    <div className="mt-8">
                        <AddToCartBtn product={product} />
                    </div>
                </div>
            </div>
        </div>
    );
}