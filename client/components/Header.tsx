import { Link } from "react-router-dom";
import { ShoppingCart, Search, User, Menu } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="border-b border-border bg-white sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-primary">NAAPTOL</h1>
            <p className="text-xs text-muted-foreground">College Merch</p>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-foreground hover:text-primary transition">
              Home
            </Link>
            <Link to="/shop" className="text-foreground hover:text-primary transition">
              Shop
            </Link>
            <a href="#categories" className="text-foreground hover:text-primary transition">
              Categories
            </a>
            <a href="#about" className="text-foreground hover:text-primary transition">
              About
            </a>
          </nav>

          {/* Icons */}
          <div className="hidden md:flex items-center gap-4">
            <button className="p-2 hover:bg-muted rounded-lg transition">
              <Search className="w-5 h-5 text-foreground" />
            </button>
            <button className="p-2 hover:bg-muted rounded-lg transition">
              <User className="w-5 h-5 text-foreground" />
            </button>
            <Link
              to="/cart"
              className="p-2 hover:bg-muted rounded-lg transition relative"
            >
              <ShoppingCart className="w-5 h-5 text-foreground" />
              <span className="absolute top-1 right-1 w-4 h-4 bg-secondary text-secondary-foreground text-xs rounded-full flex items-center justify-center">
                0
              </span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 space-y-3 border-t border-border pt-4">
            <Link
              to="/"
              className="block text-foreground hover:text-primary transition"
            >
              Home
            </Link>
            <Link
              to="/shop"
              className="block text-foreground hover:text-primary transition"
            >
              Shop
            </Link>
            <a href="#categories" className="block text-foreground hover:text-primary transition">
              Categories
            </a>
            <a href="#about" className="block text-foreground hover:text-primary transition">
              About
            </a>
            <div className="flex gap-4 pt-4 border-t border-border">
              <button className="flex-1 p-2 hover:bg-muted rounded-lg transition flex items-center justify-center gap-2">
                <Search className="w-5 h-5" />
                Search
              </button>
              <button className="flex-1 p-2 hover:bg-muted rounded-lg transition flex items-center justify-center gap-2">
                <User className="w-5 h-5" />
                Account
              </button>
              <Link
                to="/cart"
                className="flex-1 p-2 hover:bg-muted rounded-lg transition flex items-center justify-center gap-2 relative"
              >
                <ShoppingCart className="w-5 h-5" />
                Cart
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
