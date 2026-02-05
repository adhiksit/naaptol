import Header from "@/components/Header";
import { Link } from "react-router-dom";
import { Trash2, Plus, Minus, ArrowRight } from "lucide-react";
import { useState } from "react";

interface CartItem {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
  size?: string;
}

export default function Cart() {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: "1",
      name: "Classic College Hoodie",
      price: 899,
      image:
        "https://images.pexels.com/photos/19461584/pexels-photo-19461584.jpeg?auto=compress&cs=tinysrgb&w=200",
      quantity: 1,
      size: "M",
    },
    {
      id: "2",
      name: "Premium College T-Shirt",
      price: 349,
      image:
        "https://images.pexels.com/photos/5693888/pexels-photo-5693888.jpeg?auto=compress&cs=tinysrgb&w=200",
      quantity: 2,
      size: "L",
    },
  ]);

  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity <= 0) {
      removeItem(id);
      return;
    }
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item,
      ),
    );
  };

  const removeItem = (id: string) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );
  const tax = subtotal * 0.18; // 18% GST
  const shipping = subtotal > 500 ? 0 : 100;
  const total = subtotal + tax + shipping;

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Page Header */}
      <section className="bg-muted py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground">
            Shopping Cart
          </h1>
          <p className="text-muted-foreground mt-2">
            {cartItems.length} item{cartItems.length !== 1 ? "s" : ""} in your
            cart
          </p>
        </div>
      </section>

      {cartItems.length > 0 ? (
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-4 p-4 border border-border rounded-lg hover:bg-muted/50 transition"
                >
                  {/* Image */}
                  <div className="w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden bg-muted">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Product Info */}
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground">
                      {item.name}
                    </h3>
                    {item.size && (
                      <p className="text-sm text-muted-foreground">
                        Size: {item.size}
                      </p>
                    )}
                    <p className="text-lg font-bold text-primary mt-2">
                      ₹{item.price}
                    </p>
                  </div>

                  {/* Quantity & Actions */}
                  <div className="flex flex-col items-end gap-4">
                    {/* Quantity Control */}
                    <div className="flex items-center gap-2 border border-border rounded-lg">
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity - 1)
                        }
                        className="p-2 hover:bg-muted transition"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="px-3 font-semibold">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                        className="p-2 hover:bg-muted transition"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>

                    {/* Remove Button */}
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-destructive hover:text-destructive/80 transition"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 bg-muted rounded-lg p-6 space-y-4">
                <h2 className="text-2xl font-bold text-foreground">
                  Order Summary
                </h2>

                <div className="space-y-3 py-4 border-y border-border">
                  <div className="flex justify-between text-foreground">
                    <span>Subtotal</span>
                    <span>₹{subtotal}</span>
                  </div>
                  <div className="flex justify-between text-foreground">
                    <span>Tax (18%)</span>
                    <span>₹{Math.round(tax)}</span>
                  </div>
                  <div className="flex justify-between text-foreground">
                    <span>Shipping</span>
                    <span className={shipping === 0 ? "text-green-600" : ""}>
                      {shipping === 0 ? "FREE" : `₹${shipping}`}
                    </span>
                  </div>
                </div>

                <div className="flex justify-between text-xl font-bold text-foreground">
                  <span>Total</span>
                  <span className="text-primary">₹{Math.round(total)}</span>
                </div>

                {shipping > 0 && subtotal <= 500 && (
                  <p className="text-sm text-green-600">
                    Add ₹{500 - subtotal} more for free shipping!
                  </p>
                )}

                <Link
                  to="/checkout"
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 py-3 rounded-lg font-semibold transition flex items-center justify-center gap-2"
                >
                  Proceed to Checkout
                  <ArrowRight className="w-5 h-5" />
                </Link>

                <Link
                  to="/shop"
                  className="w-full border border-border hover:bg-muted py-3 rounded-lg font-semibold transition text-center"
                >
                  Continue Shopping
                </Link>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="container mx-auto px-4 py-16">
          <div className="text-center space-y-6">
            <div className="text-6xl">🛒</div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              Your cart is empty
            </h2>
            <p className="text-muted-foreground">
              Looks like you haven't added anything yet. Start shopping to find
              great college merchandise!
            </p>
            <Link
              to="/shop"
              className="inline-block bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 rounded-lg font-semibold transition"
            >
              Start Shopping
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
