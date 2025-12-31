import ProductCard from "../components/ProductCard"; // આપણે બનાવેલી ડિઝાઈન
import { products } from "../data"; // આપણે બનાવેલો ડેટા

export default function Home() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">New Arrivals</h1>

      {/* 👇 આ Grid System છે: મોબાઈલમાં 1 કાર્ડ, અને લેપટોપમાં 3 કાર્ડ દેખાશે */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        gap: "24px"
      }}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}