import Header from "@/components/Header";
import ProductCard from "@/components/ProductCard";
import CategoryCard from "@/components/CategoryCard";
import TrustBadge from "@/components/TrustBadge";
import { Link } from "react-router-dom";
import {
  Truck,
  RotateCcw,
  Shield,
  Zap,
  ArrowRight,
  ChevronRight,
} from "lucide-react";

export default function Home() {
  // Featured products data
  const featuredProducts = [
    {
      id: "1",
      name: "Classic College Hoodie",
      price: 899,
      originalPrice: 1299,
      image:
        "https://images.unsplash.com/photo-1556821552-7f41c5d440db?w=500&h=500&fit=crop",
      rating: 4.8,
      reviews: 245,
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
    },
  ];

  // Categories data
  const categories = [
    {
      id: "hoodies",
      name: "Hoodies",
      itemCount: 45,
      image:
        "https://images.unsplash.com/photo-1556821552-7f41c5d440db?w=500&h=500&fit=crop",
      bgColor: "bg-indigo-50",
    },
    {
      id: "tshirts",
      name: "T-Shirts",
      itemCount: 67,
      image:
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=500&fit=crop",
      bgColor: "bg-orange-50",
    },
    {
      id: "accessories",
      name: "Accessories",
      itemCount: 89,
      image:
        "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=500&h=500&fit=crop",
      bgColor: "bg-blue-50",
    },
    {
      id: "bottoms",
      name: "Bottoms",
      itemCount: 34,
      image:
        "https://images.unsplash.com/photo-1506629082847-11d3e392e467?w=500&h=500&fit=crop",
      bgColor: "bg-green-50",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Banner Section */}
      <section className="relative bg-gradient-to-r from-primary via-primary/90 to-secondary min-h-96 md:min-h-[500px] flex items-center overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -mr-48 -mt-48"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-white/5 rounded-full -ml-36 -mb-36"></div>

        {/* Content */}
        <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left side - Text */}
            <div className="text-white animate-slide-up">
              <p className="text-primary-foreground/90 text-sm md:text-base font-semibold uppercase tracking-wide mb-4">
                New Arrivals
              </p>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
                Express Your College Spirit
              </h1>
              <p className="text-lg text-primary-foreground/90 mb-8">
                Discover premium college merchandise designed for students who
                want to look good while repping their college pride.
              </p>
              <div className="flex gap-4">
                <Link
                  to="/shop"
                  className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-8 py-3 rounded-lg font-semibold transition-all hover:shadow-lg inline-flex items-center gap-2"
                >
                  Shop Now
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <button className="border-2 border-primary-foreground text-primary-foreground hover:bg-white/10 px-8 py-3 rounded-lg font-semibold transition">
                  Learn More
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-white/20">
                <div>
                  <p className="text-3xl font-bold">2K+</p>
                  <p className="text-sm text-primary-foreground/80">Products</p>
                </div>
                <div>
                  <p className="text-3xl font-bold">15K+</p>
                  <p className="text-sm text-primary-foreground/80">Happy Customers</p>
                </div>
                <div>
                  <p className="text-3xl font-bold">4.8★</p>
                  <p className="text-sm text-primary-foreground/80">Avg Rating</p>
                </div>
              </div>
            </div>

            {/* Right side - Image */}
            <div className="hidden md:flex justify-end">
              <img
                src="https://images.unsplash.com/photo-1556821552-7f41c5d440db?w=600&h=600&fit=crop"
                alt="Hero Product"
                className="w-80 h-80 object-cover rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-primary text-sm md:text-base font-semibold uppercase tracking-wide mb-3">
              Shop by Category
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Find What You're Looking For
            </h2>
            <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
              Browse our curated selection of college hoodies, t-shirts,
              accessories, and more.
            </p>
          </div>

          {/* Categories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {categories.map((category) => (
              <CategoryCard key={category.id} {...category} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section id="featured" className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <div>
              <p className="text-primary text-sm md:text-base font-semibold uppercase tracking-wide mb-3">
                Best Sellers
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Featured Products
              </h2>
            </div>
            <Link
              to="/shop"
              className="text-primary hover:text-secondary font-semibold flex items-center gap-2 transition hidden md:flex"
            >
              View All <ChevronRight className="w-5 h-5" />
            </Link>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>

          {/* View All Button - Mobile */}
          <div className="md:hidden flex justify-center">
            <Link
              to="/shop"
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 rounded-lg font-semibold transition-all inline-flex items-center gap-2"
            >
              View All Products
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Badges Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-primary text-sm md:text-base font-semibold uppercase tracking-wide mb-3">
              Why Choose Us
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              We're Here For You
            </h2>
          </div>

          {/* Badges Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <TrustBadge
              icon={Truck}
              title="Fast Delivery"
              description="Get your orders delivered in 3-5 business days across India"
            />
            <TrustBadge
              icon={RotateCcw}
              title="Easy Returns"
              description="Not satisfied? Return within 30 days for a full refund"
            />
            <TrustBadge
              icon={Shield}
              title="Secure Payment"
              description="Your transactions are protected with industry-standard encryption"
            />
            <TrustBadge
              icon={Zap}
              title="Live Support"
              description="Get instant help from our friendly customer support team"
            />
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-primary to-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Ready to upgrade your college style?
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Join thousands of college students already wearing NAAPTOL. Limited
            time offers and exclusive deals await!
          </p>
          <Link
            to="/shop"
            className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:shadow-lg inline-flex items-center gap-2"
          >
            Start Shopping Now
            <ArrowRight className="w-6 h-6" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            {/* Brand */}
            <div>
              <h3 className="text-2xl font-bold mb-4">NAAPTOL</h3>
              <p className="text-background/80 text-sm">
                Your go-to destination for premium college merchandise.
              </p>
            </div>

            {/* Links */}
            <div>
              <h4 className="font-semibold mb-4">Shop</h4>
              <ul className="space-y-2 text-sm text-background/80">
                <li>
                  <a href="#" className="hover:text-background transition">
                    All Products
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-background transition">
                    New Arrivals
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-background transition">
                    Sale
                  </a>
                </li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-background/80">
                <li>
                  <a href="#" className="hover:text-background transition">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-background transition">
                    Shipping Info
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-background transition">
                    Returns
                  </a>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-background/80">
                <li>
                  <a href="#" className="hover:text-background transition">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-background transition">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-background transition">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-background/20 pt-8 flex flex-col md:flex-row items-center justify-between">
            <p className="text-sm text-background/80">
              © 2024 NAAPTOL. All rights reserved.
            </p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="text-background/80 hover:text-background transition">
                Twitter
              </a>
              <a href="#" className="text-background/80 hover:text-background transition">
                Instagram
              </a>
              <a href="#" className="text-background/80 hover:text-background transition">
                Facebook
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
