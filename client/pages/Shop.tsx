import Header from "@/components/Header";
import ProductCard from "@/components/ProductCard";
import { useState, useRef } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating?: number;
  reviews?: number;
  category: string;
  isFeatured?: boolean;
}

export default function Shop() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const carouselRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  const allProducts: Product[] = [
    {
      id: "1",
      name: "Classic College Hoodie",
      price: 899,
      originalPrice: 1299,
      image: "https://images.pexels.com/photos/19461584/pexels-photo-19461584.jpeg?auto=compress&cs=tinysrgb&w=600",
      rating: 4.8,
      reviews: 245,
      category: "hoodies",
      isFeatured: true,
    },
    {
      id: "2",
      name: "Premium College T-Shirt",
      price: 349,
      originalPrice: 599,
      image: "https://images.pexels.com/photos/5693888/pexels-photo-5693888.jpeg?auto=compress&cs=tinysrgb&w=600",
      rating: 4.6,
      reviews: 189,
      category: "tshirts",
    },
    {
      id: "3",
      name: "Logo Baseball Cap",
      price: 299,
      originalPrice: 449,
      image: "https://images.pexels.com/photos/33974813/pexels-photo-33974813.jpeg?auto=compress&cs=tinysrgb&w=600",
      rating: 4.7,
      reviews: 156,
      category: "accessories",
    },
    {
      id: "4",
      name: "College Backpack",
      price: 1299,
      originalPrice: 1899,
      image: "https://images.pexels.com/photos/31359734/pexels-photo-31359734.jpeg?auto=compress&cs=tinysrgb&w=600",
      rating: 4.9,
      reviews: 312,
      category: "accessories",
      isFeatured: true,
    },
    {
      id: "5",
      name: "Fleece Sweatpants",
      price: 649,
      originalPrice: 999,
      image: "https://images.pexels.com/photos/33223905/pexels-photo-33223905.jpeg?auto=compress&cs=tinysrgb&w=600",
      rating: 4.5,
      reviews: 134,
      category: "bottoms",
    },
    {
      id: "6",
      name: "College Sticker Pack",
      price: 99,
      originalPrice: 199,
      image: "https://images.pexels.com/photos/19461584/pexels-photo-19461584.jpeg?auto=compress&cs=tinysrgb&w=600",
      rating: 4.4,
      reviews: 98,
      category: "accessories",
    },
    {
      id: "7",
      name: "Vintage College Sweatshirt",
      price: 799,
      originalPrice: 1199,
      image: "https://images.pexels.com/photos/5693888/pexels-photo-5693888.jpeg?auto=compress&cs=tinysrgb&w=600",
      rating: 4.7,
      reviews: 201,
      category: "hoodies",
    },
    {
      id: "8",
      name: "Polo T-Shirt",
      price: 449,
      originalPrice: 749,
      image: "https://images.pexels.com/photos/33974813/pexels-photo-33974813.jpeg?auto=compress&cs=tinysrgb&w=600",
      rating: 4.6,
      reviews: 167,
      category: "tshirts",
    },
    {
      id: "9",
      name: "College Water Bottle",
      price: 299,
      originalPrice: 499,
      image: "https://images.pexels.com/photos/33223905/pexels-photo-33223905.jpeg?auto=compress&cs=tinysrgb&w=600",
      rating: 4.8,
      reviews: 234,
      category: "accessories",
    },
  ];

  const categories = [
    { id: "hoodies", label: "Hoodies", emoji: "🧥" },
    { id: "tshirts", label: "T-Shirts", emoji: "👕" },
    { id: "bottoms", label: "Bottoms", emoji: "👖" },
    { id: "accessories", label: "Accessories", emoji: "🎒" },
  ];

  const scrollCarousel = (key: string, direction: "left" | "right") => {
    const carousel = carouselRefs.current[key];
    if (carousel) {
      const scrollAmount = 400;
      carousel.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const getProductsByCategory = (categoryId: string) => {
    return allProducts.filter((p) => p.category === categoryId);
  };

  const sectionCollections = [
    {
      key: "hot-deals",
      title: "🔥 Hot Deals",
      subtitle: "Limited time offers on your favorites",
      products: allProducts.filter((p) => p.originalPrice && p.originalPrice - p.price > 300),
    },
    {
      key: "featured",
      title: "✨ Featured Collection",
      subtitle: "Our top-rated products",
      products: allProducts.filter((p) => p.isFeatured),
    },
    {
      key: "new-arrivals",
      title: "🆕 New Arrivals",
      subtitle: "Fresh styles just added",
      products: allProducts.slice(0, 6),
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted">
      <Header />

      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-primary via-primary/80 to-secondary overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 right-20 w-72 h-72 bg-white rounded-full mix-blend-overlay blur-3xl"></div>
          <div className="absolute bottom-0 left-20 w-96 h-96 bg-secondary/30 rounded-full mix-blend-overlay blur-3xl"></div>
        </div>

        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-start">
          <p className="text-primary-foreground/80 text-sm md:text-base font-semibold uppercase tracking-widest mb-3">
            Explore & Discover
          </p>
          <h1 className="text-5xl md:text-6xl font-black text-primary-foreground mb-4 leading-tight">
            College Essentials
          </h1>
          <p className="text-lg text-primary-foreground/90 max-w-2xl">
            Curated collection of premium college merchandise designed for style, comfort, and self-expression.
          </p>
        </div>
      </section>

      {/* Category Filter Tabs */}
      <section className="container mx-auto px-4 py-8 sticky top-24 bg-gradient-to-b from-background via-background to-transparent z-10">
        <div className="flex gap-3 overflow-x-auto pb-4 scrollbar-hide">
          <button
            onClick={() => setSelectedCategory(null)}
            className={`px-6 py-2 rounded-full font-semibold whitespace-nowrap transition-all ${
              selectedCategory === null
                ? "bg-primary text-primary-foreground shadow-lg scale-105"
                : "bg-muted text-foreground hover:bg-muted/80"
            }`}
          >
            All Products
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-6 py-2 rounded-full font-semibold whitespace-nowrap transition-all flex items-center gap-2 ${
                selectedCategory === cat.id
                  ? "bg-primary text-primary-foreground shadow-lg scale-105"
                  : "bg-muted text-foreground hover:bg-muted/80"
              }`}
            >
              <span>{cat.emoji}</span>
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      {/* Category View */}
      {selectedCategory && (
        <section className="container mx-auto px-4 py-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                {categories.find((c) => c.id === selectedCategory)?.label}
              </h2>
              <p className="text-muted-foreground mt-2">
                {getProductsByCategory(selectedCategory).length} products available
              </p>
            </div>
            <button
              onClick={() => setSelectedCategory(null)}
              className="p-2 hover:bg-muted rounded-lg transition"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {getProductsByCategory(selectedCategory).map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </section>
      )}

      {/* Carousel Sections */}
      {!selectedCategory && (
        <div className="space-y-16 py-8">
          {sectionCollections.map((section) => (
            <section key={section.key} className="container mx-auto px-4">
              <div className="mb-6">
                <h2 className="text-2xl md:text-3xl font-black text-foreground mb-2">
                  {section.title}
                </h2>
                <p className="text-muted-foreground">{section.subtitle}</p>
              </div>

              {/* Carousel */}
              <div className="relative group">
                <div
                  ref={(el) => {
                    if (el) carouselRefs.current[section.key] = el;
                  }}
                  className="flex gap-6 overflow-x-auto scrollbar-hide pb-4"
                >
                  {section.products.map((product) => (
                    <div
                      key={product.id}
                      className="flex-shrink-0 w-80 transition-transform duration-300 hover:scale-105"
                    >
                      <ProductCard {...product} />
                    </div>
                  ))}
                </div>

                {/* Navigation Buttons */}
                <button
                  onClick={() => scrollCarousel(section.key, "left")}
                  className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-primary text-primary-foreground p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity z-10 hover:bg-primary/90"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={() => scrollCarousel(section.key, "right")}
                  className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-primary text-primary-foreground p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity z-10 hover:bg-primary/90"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
            </section>
          ))}
        </div>
      )}

      {/* All Products Section */}
      {!selectedCategory && (
        <section className="container mx-auto px-4 py-16">
          <div className="mb-8">
            <h2 className="text-3xl md:text-4xl font-black text-foreground mb-2">
              🎯 All Products
            </h2>
            <p className="text-muted-foreground">Browse our complete collection</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {allProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </section>
      )}

      {/* Brand Story Section */}
      {!selectedCategory && (
        <section className="bg-foreground text-background py-16 mt-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-black mb-4">
              Why NAAPTOL?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div>
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-xl font-bold mb-2">Instant Style</h3>
                <p className="text-background/80">
                  Elevate your college look instantly with premium pieces
                </p>
              </div>
              <div>
                <div className="text-4xl mb-4">🎓</div>
                <h3 className="text-xl font-bold mb-2">Student Approved</h3>
                <p className="text-background/80">
                  Designed by students, for students
                </p>
              </div>
              <div>
                <div className="text-4xl mb-4">🏆</div>
                <h3 className="text-xl font-bold mb-2">Quality Assured</h3>
                <p className="text-background/80">
                  Premium materials that last through college and beyond
                </p>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
