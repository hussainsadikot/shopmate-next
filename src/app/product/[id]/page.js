import { products } from "../../../data"; // ડેટા ઈમ્પોર્ટ કર્યો
import Link from "next/link";
import AddToCartBtn from "../../../components/AddToCartBtn";
// Next.js માં 'params' prop દ્વારા આપણને ID મળે છે
export default async function ProductDetails({ params }) {
    // 1. URL માંથી ID લો (દા.ત. product/2 હોય તો id = 2)
    const resolvedParams = await params;
    const productId = parseInt(resolvedParams.id);

    // 2. ડેટામાંથી એ ID વાળી પ્રોડક્ટ શોધો
    const product = products.find((p) => p.id === productId);

    // 3. જો પ્રોડક્ટ ન મળે (ખોટી ID હોય), તો આ બતાવો
    if (!product) {
        return <div className="p-10 text-center text-red-500">Product not found!</div>;
    }

    // 4. જો મળી જાય, તો ડિટેલ્સ બતાવો
    return (
        <div className="p-8 max-w-4xl mx-auto">
            <Link href="/" className="text-blue-500 hover:underline mb-4 inline-block">
                ← Back to Shop
            </Link>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
                {/* Left Side: Image */}
                <div className="h-96 bg-gray-100 rounded-lg overflow-hidden">
                    <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Right Side: Info */}
                <div>
                    <h1 className="text-3xl font-bold">{product.name}</h1>
                    <p className="text-2xl text-blue-600 font-semibold mt-2">₹{product.price}</p>

                    <p className="mt-4 text-gray-600">
                        This is a great product. Imagine a nice description here.
                        It has excellent features and comes with a warranty.
                    </p>

                    {/* <button className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-700 transition w-full md:w-auto">
                        Add to Cart
                    </button> */}
                    <AddToCartBtn product={product} />
                </div>
            </div>
        </div>
    );
}