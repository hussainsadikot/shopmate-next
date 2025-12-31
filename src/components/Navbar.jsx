import Link from "next/link"; // Next.js માં <a> ને બદલે Link વપરાય છે

const Navbar = () => {
    return (
        <nav className="flex justify-between items-center p-4 bg-gray-100 shadow-md">
            {/* Logo */}
            <Link href="/" className="text-2xl font-bold text-blue-600">
                ShopMate
            </Link>

            {/* Menu Links */}
            <div className="space-x-4">
                <Link href="/" className="hover:text-blue-500">
                    Home
                </Link>
                <Link href="/cart" className="hover:text-blue-500 font-semibold">
                    Cart (0)
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;