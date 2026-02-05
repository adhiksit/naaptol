import Header from "@/components/Header";
import { Star, Truck, RotateCcw, Heart } from "lucide-react";
import { useState } from "react";
import { useParams } from "react-router-dom";

export default function ProductDetail() {
  const { productId } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  // Placeholder product data
  const product = {
    id: productId,
    name: "Classic College Hoodie",
    price: 899,
    originalPrice: 1299,
    rating: 4.8,
    reviews: 245,
    images: [
      "https://images.pexels.com/photos/19461584/pexels-photo-19461584.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/19461584/pexels-photo-19461584.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/19461584/pexels-photo-19461584.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
    description:
      "Premium quality college hoodie made from 100% organic cotton. Perfect for campus life and weekend hangouts. Features embroidered college logo and comfortable fit.",
    specs: [
      { label: "Material", value: "100% Organic Cotton" },
      { label: "Weight", value: "250 gsm" },
      { label: "Care", value: "Machine wash cold" },
      { label: "Sizes", value: "XS, S, M, L, XL, XXL" },
    ],
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Image Gallery */}
          <div>
            <div className="sticky top-24 space-y-4">
              <div className="bg-muted rounded-lg overflow-hidden h-96 md:h-[500px]">
                <img
                  src={product.images[selectedImage]}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex gap-4">
                {product.images.map((image, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(idx)}
                    className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition ${
                      selectedImage === idx ? "border-primary" : "border-border"
                    }`}
                  >
                    <img
                      src={image}
                      alt={`Product ${idx + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Product Info */}
          <div>
            <div className="sticky top-24 space-y-6">
              {/* Title & Rating */}
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  {product.name}
                </h1>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          i < Math.floor(product.rating)
                            ? "fill-yellow-400 text-yellow-400"
                            : "text-muted-foreground"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">
                    ({product.reviews} reviews)
                  </span>
                </div>
              </div>

              {/* Price */}
              <div className="space-y-2">
                <div className="flex items-center gap-4">
                  <span className="text-4xl font-bold text-primary">
                    ₹{product.price}
                  </span>
                  <span className="text-2xl text-muted-foreground line-through">
                    ₹{product.originalPrice}
                  </span>
                  <span className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                    -
                    {Math.round(
                      ((product.originalPrice - product.price) /
                        product.originalPrice) *
                        100,
                    )}
                    %
                  </span>
                </div>
                <p className="text-muted-foreground">
                  You save ₹{product.originalPrice - product.price}
                </p>
              </div>

              {/* Description */}
              <div>
                <h3 className="font-semibold text-foreground mb-2">
                  Description
                </h3>
                <p className="text-muted-foreground">{product.description}</p>
              </div>

              {/* Specifications */}
              <div>
                <h3 className="font-semibold text-foreground mb-3">
                  Specifications
                </h3>
                <div className="space-y-2">
                  {product.specs.map((spec, idx) => (
                    <div
                      key={idx}
                      className="flex justify-between py-2 border-b border-border"
                    >
                      <span className="text-muted-foreground">
                        {spec.label}
                      </span>
                      <span className="font-semibold text-foreground">
                        {spec.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quantity & Actions */}
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <label className="text-foreground font-semibold">
                    Quantity
                  </label>
                  <div className="flex items-center gap-2 border border-border rounded-lg">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-4 py-2 hover:bg-muted transition"
                    >
                      −
                    </button>
                    <span className="px-4 py-2 font-semibold">{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="px-4 py-2 hover:bg-muted transition"
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="flex gap-4">
                  <button className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90 py-3 rounded-lg font-semibold transition">
                    Add to Cart
                  </button>
                  <button className="flex-1 border border-border hover:bg-muted py-3 rounded-lg font-semibold transition">
                    Buy Now
                  </button>
                </div>

                <button className="w-full flex items-center justify-center gap-2 py-3 border border-border rounded-lg text-foreground hover:bg-muted transition">
                  <Heart className="w-5 h-5" />
                  Add to Wishlist
                </button>
              </div>

              {/* Trust Badges */}
              <div className="space-y-3 pt-4 border-t border-border">
                <div className="flex gap-3">
                  <Truck className="w-5 h-5 text-primary flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground text-sm">
                      Fast Delivery
                    </p>
                    <p className="text-xs text-muted-foreground">
                      3-5 business days
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <RotateCcw className="w-5 h-5 text-primary flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground text-sm">
                      Easy Returns
                    </p>
                    <p className="text-xs text-muted-foreground">
                      30 days return
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
