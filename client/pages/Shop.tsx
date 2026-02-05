import Header from "@/components/Header";
import ProductCard from "@/components/ProductCard";
import { Slider } from "@/components/ui/slider";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";
import { X } from "lucide-react";

export default function Shop() {
  const [sortBy, setSortBy] = useState("popular");
  const [priceRange, setPriceRange] = useState([100, 2000]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  const allProducts = [
    {
      id: "1",
      name: "Classic College Hoodie",
      price: 899,
      originalPrice: 1299,
      image:
        "https://images.unsplash.com/photo-1556821552-7f41c5d440db?w=500&h=500&fit=crop",
      rating: 4.8,
      reviews: 245,
      category: "hoodies",
    },
    {
      id: "2",
      name: "Premium College T-Shirt",
      price: 349,
      originalPrice: 599,
      image:
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=500&fit=crop",
      rating: 4.6,
      reviews: 189,
      category: "tshirts",
    },
    {
      id: "3",
      name: "Logo Baseball Cap",
      price: 299,
      originalPrice: 449,
      image:
        "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=500&h=500&fit=crop",
      rating: 4.7,
      reviews: 156,
      category: "accessories",
    },
    {
      id: "4",
      name: "College Backpack",
      price: 1299,
      originalPrice: 1899,
      image:
        "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=500&fit=crop",
      rating: 4.9,
      reviews: 312,
      category: "accessories",
    },
    {
      id: "5",
      name: "Fleece Sweatpants",
      price: 649,
      originalPrice: 999,
      image:
        "https://images.unsplash.com/photo-1506629082847-11d3e392e467?w=500&h=500&fit=crop",
      rating: 4.5,
      reviews: 134,
      category: "bottoms",
    },
    {
      id: "6",
      name: "College Sticker Pack",
      price: 99,
      originalPrice: 199,
      image:
        "https://images.unsplash.com/photo-1589985643246-8049b3e0eab7?w=500&h=500&fit=crop",
      rating: 4.4,
      reviews: 98,
      category: "accessories",
    },
    {
      id: "7",
      name: "Vintage College Sweatshirt",
      price: 799,
      originalPrice: 1199,
      image:
        "https://images.unsplash.com/photo-1556821552-7f41c5d440db?w=500&h=500&fit=crop",
      rating: 4.7,
      reviews: 201,
      category: "hoodies",
    },
    {
      id: "8",
      name: "Polo T-Shirt",
      price: 449,
      originalPrice: 749,
      image:
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=500&fit=crop",
      rating: 4.6,
      reviews: 167,
      category: "tshirts",
    },
    {
      id: "9",
      name: "College Water Bottle",
      price: 299,
      originalPrice: 499,
      image:
        "https://images.unsplash.com/photo-1589985643246-8049b3e0eab7?w=500&h=500&fit=crop",
      rating: 4.8,
      reviews: 234,
      category: "accessories",
    },
  ];

  const categories = [
    { id: "hoodies", label: "Hoodies" },
    { id: "tshirts", label: "T-Shirts" },
    { id: "bottoms", label: "Bottoms" },
    { id: "accessories", label: "Accessories" },
  ];

  // Filter and sort products
  let filteredProducts = allProducts.filter((product) => {
    const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
    const matchesCategory =
      selectedCategories.length === 0 || selectedCategories.includes(product.category);
    return matchesPrice && matchesCategory;
  });

  // Sort products
  if (sortBy === "price-low") {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sortBy === "price-high") {
    filteredProducts.sort((a, b) => b.price - a.price);
  } else if (sortBy === "rating") {
    filteredProducts.sort((a, b) => (b.rating || 0) - (a.rating || 0));
  }

  const toggleCategory = (categoryId: string) => {
    setSelectedCategories((prev) =>
      prev.includes(categoryId)
        ? prev.filter((id) => id !== categoryId)
        : [...prev, categoryId]
    );
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Page Header */}
      <section className="bg-muted py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground">
            Shop Our Collection
          </h1>
          <p className="text-muted-foreground mt-2">
            {filteredProducts.length} products available
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex gap-8">
          {/* Filters - Desktop */}
          <div className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-24 space-y-6">
              {/* Price Filter */}
              <div className="pb-6 border-b border-border">
                <h3 className="font-semibold text-foreground mb-4">Price</h3>
                <Slider
                  value={priceRange}
                  onValueChange={setPriceRange}
                  min={0}
                  max={3000}
                  step={50}
                  className="w-full"
                />
                <div className="flex justify-between mt-4 text-sm text-muted-foreground">
                  <span>₹{priceRange[0]}</span>
                  <span>₹{priceRange[1]}</span>
                </div>
              </div>

              {/* Category Filter */}
              <div className="pb-6 border-b border-border">
                <h3 className="font-semibold text-foreground mb-4">Categories</h3>
                <div className="space-y-3">
                  {categories.map((category) => (
                    <label
                      key={category.id}
                      className="flex items-center cursor-pointer"
                    >
                      <Checkbox
                        checked={selectedCategories.includes(category.id)}
                        onCheckedChange={() => toggleCategory(category.id)}
                      />
                      <span className="ml-2 text-foreground text-sm">
                        {category.label}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Rating Filter */}
              <div>
                <h3 className="font-semibold text-foreground mb-4">Rating</h3>
                <div className="space-y-3">
                  {[5, 4, 3].map((rating) => (
                    <label key={rating} className="flex items-center cursor-pointer">
                      <Checkbox />
                      <span className="ml-2 text-foreground text-sm">
                        {rating}★ & above
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Products and Controls */}
          <div className="flex-1">
            {/* Sorting and Mobile Filter */}
            <div className="flex items-center justify-between mb-6 pb-6 border-b border-border">
              <div className="flex items-center gap-4">
                <p className="text-sm text-muted-foreground">Sort by</p>
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-48">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="popular">Most Popular</SelectItem>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                    <SelectItem value="rating">Highest Rated</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Mobile Filter Button */}
              <button
                onClick={() => setShowMobileFilters(!showMobileFilters)}
                className="lg:hidden px-4 py-2 border border-border rounded-lg text-foreground hover:bg-muted transition"
              >
                Filters
              </button>
            </div>

            {/* Mobile Filters */}
            {showMobileFilters && (
              <div className="lg:hidden mb-6 p-4 border border-border rounded-lg space-y-4">
                <div className="flex justify-between items-center">
                  <h3 className="font-semibold">Filters</h3>
                  <button onClick={() => setShowMobileFilters(false)}>
                    <X className="w-5 h-5" />
                  </button>
                </div>
                {/* Mobile Price Filter */}
                <div>
                  <h4 className="font-semibold text-sm mb-2">Price</h4>
                  <Slider
                    value={priceRange}
                    onValueChange={setPriceRange}
                    min={0}
                    max={3000}
                    step={50}
                  />
                </div>
                {/* Mobile Category Filter */}
                <div>
                  <h4 className="font-semibold text-sm mb-2">Categories</h4>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <label
                        key={category.id}
                        className="flex items-center cursor-pointer"
                      >
                        <Checkbox
                          checked={selectedCategories.includes(category.id)}
                          onCheckedChange={() => toggleCategory(category.id)}
                        />
                        <span className="ml-2 text-sm">{category.label}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Products Grid */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} {...product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-muted-foreground text-lg">
                  No products found matching your filters.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
