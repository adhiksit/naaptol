import { Star, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

interface ProductCardProps {
  id: string;
  image: string;
  name: string;
  price: number;
  originalPrice?: number;
  rating?: number;
  reviews?: number;
}

export default function ProductCard({
  id,
  image,
  name,
  price,
  originalPrice,
  rating = 4.5,
  reviews = 128,
}: ProductCardProps) {
  const discountPercent = originalPrice
    ? Math.round(((originalPrice - price) / originalPrice) * 100)
    : 0;

  return (
    <Link to={`/product/${id}`}>
      <div className="bg-card rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 group cursor-pointer transform hover:-translate-y-2">
        {/* Image Container */}
        <div className="relative overflow-hidden bg-muted h-72 flex items-center justify-center">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-500 ease-out"
          />

          {/* Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

          {discountPercent > 0 && (
            <div className="absolute top-4 right-4 bg-secondary text-secondary-foreground px-3 py-1.5 rounded-lg text-sm font-bold shadow-lg">
              -{discountPercent}%
            </div>
          )}

          {/* Quick Add Button */}
          <button className="absolute bottom-4 right-4 bg-primary text-primary-foreground p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 hover:bg-primary/90 hover:scale-110">
            <ShoppingCart className="w-5 h-5" />
          </button>
        </div>

        {/* Product Info */}
        <div className="p-4">
          <h3 className="font-semibold text-foreground text-sm md:text-base line-clamp-2 group-hover:text-primary transition">
            {name}
          </h3>

          {/* Rating */}
          <div className="flex items-center gap-2 mt-2">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${
                    i < Math.floor(rating)
                      ? "fill-yellow-400 text-yellow-400"
                      : "text-muted-foreground"
                  }`}
                />
              ))}
            </div>
            <span className="text-xs text-muted-foreground">({reviews})</span>
          </div>

          {/* Price */}
          <div className="flex items-center gap-2 mt-3">
            <span className="text-lg font-bold text-primary">₹{price}</span>
            {originalPrice && (
              <span className="text-sm text-muted-foreground line-through">
                ₹{originalPrice}
              </span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}
