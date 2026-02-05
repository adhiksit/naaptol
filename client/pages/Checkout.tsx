import Header from "@/components/Header";
import { Link } from "react-router-dom";
import { ArrowLeft, Check } from "lucide-react";
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Checkout() {
  const [step, setStep] = useState(1);
  const [shippingData, setShippingData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
  });

  const [paymentMethod, setPaymentMethod] = useState("card");

  const cartItems = [
    {
      id: "1",
      name: "Classic College Hoodie",
      price: 899,
      quantity: 1,
    },
    {
      id: "2",
      name: "Premium College T-Shirt",
      price: 349,
      quantity: 2,
    },
  ];

  const subtotal = 899 + 349 * 2;
  const tax = subtotal * 0.18;
  const shipping = 0;
  const total = subtotal + tax + shipping;

  const handleShippingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(2);
  };

  const handlePaymentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(3);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Page Header */}
      <section className="bg-muted py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground">
            Checkout
          </h1>
          <p className="text-muted-foreground mt-2">Step {step} of 3</p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Checkout Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Step Indicator */}
            <div className="flex items-center gap-4">
              {[1, 2, 3].map((s) => (
                <div key={s} className="flex items-center gap-2">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold text-sm transition ${
                      s < step
                        ? "bg-primary text-primary-foreground"
                        : s === step
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {s < step ? <Check className="w-5 h-5" /> : s}
                  </div>
                  <span
                    className={`text-sm font-semibold ${
                      s <= step ? "text-foreground" : "text-muted-foreground"
                    }`}
                  >
                    {s === 1
                      ? "Shipping"
                      : s === 2
                        ? "Payment"
                        : "Confirmation"}
                  </span>
                  {s < 3 && (
                    <div
                      className={`w-12 h-0.5 mx-2 ${
                        s < step ? "bg-primary" : "bg-border"
                      }`}
                    ></div>
                  )}
                </div>
              ))}
            </div>

            {/* Step 1: Shipping Information */}
            {step === 1 && (
              <form onSubmit={handleShippingSubmit} className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-6">
                    Shipping Information
                  </h2>

                  {/* Name Fields */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={shippingData.firstName}
                        onChange={(e) =>
                          setShippingData({
                            ...shippingData,
                            firstName: e.target.value,
                          })
                        }
                        className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={shippingData.lastName}
                        onChange={(e) =>
                          setShippingData({
                            ...shippingData,
                            lastName: e.target.value,
                          })
                        }
                        className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  {/* Email & Phone */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={shippingData.email}
                        onChange={(e) =>
                          setShippingData({
                            ...shippingData,
                            email: e.target.value,
                          })
                        }
                        className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="john@example.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">
                        Phone *
                      </label>
                      <input
                        type="tel"
                        required
                        value={shippingData.phone}
                        onChange={(e) =>
                          setShippingData({
                            ...shippingData,
                            phone: e.target.value,
                          })
                        }
                        className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="+91 98765 43210"
                      />
                    </div>
                  </div>

                  {/* Address */}
                  <div className="mb-4">
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      Address *
                    </label>
                    <input
                      type="text"
                      required
                      value={shippingData.address}
                      onChange={(e) =>
                        setShippingData({
                          ...shippingData,
                          address: e.target.value,
                        })
                      }
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="123 College Street"
                    />
                  </div>

                  {/* City, State, Pincode */}
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-4">
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">
                        City *
                      </label>
                      <input
                        type="text"
                        required
                        value={shippingData.city}
                        onChange={(e) =>
                          setShippingData({
                            ...shippingData,
                            city: e.target.value,
                          })
                        }
                        className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="New Delhi"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">
                        State *
                      </label>
                      <input
                        type="text"
                        required
                        value={shippingData.state}
                        onChange={(e) =>
                          setShippingData({
                            ...shippingData,
                            state: e.target.value,
                          })
                        }
                        className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="Delhi"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">
                        Pincode *
                      </label>
                      <input
                        type="text"
                        required
                        value={shippingData.pincode}
                        onChange={(e) =>
                          setShippingData({
                            ...shippingData,
                            pincode: e.target.value,
                          })
                        }
                        className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="110001"
                      />
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 py-3 rounded-lg font-semibold transition"
                >
                  Continue to Payment
                </button>
              </form>
            )}

            {/* Step 2: Payment Information */}
            {step === 2 && (
              <form onSubmit={handlePaymentSubmit} className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-6">
                    Payment Method
                  </h2>

                  <div className="space-y-4">
                    {/* Credit/Debit Card */}
                    <label
                      className="flex items-center p-4 border-2 rounded-lg cursor-pointer transition hover:border-primary"
                      style={{
                        borderColor:
                          paymentMethod === "card"
                            ? "var(--primary)"
                            : "var(--border)",
                      }}
                    >
                      <input
                        type="radio"
                        name="payment"
                        value="card"
                        checked={paymentMethod === "card"}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                        className="w-5 h-5"
                      />
                      <span className="ml-3 font-semibold text-foreground">
                        Credit / Debit Card
                      </span>
                    </label>

                    {paymentMethod === "card" && (
                      <div className="ml-8 space-y-4 mb-4">
                        <input
                          type="text"
                          placeholder="Cardholder Name"
                          className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                        <input
                          type="text"
                          placeholder="1234 5678 9012 3456"
                          className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                        <div className="grid grid-cols-2 gap-4">
                          <input
                            type="text"
                            placeholder="MM/YY"
                            className="px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                          />
                          <input
                            type="text"
                            placeholder="CVV"
                            className="px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                          />
                        </div>
                      </div>
                    )}

                    {/* UPI */}
                    <label
                      className="flex items-center p-4 border-2 rounded-lg cursor-pointer transition hover:border-primary"
                      style={{
                        borderColor:
                          paymentMethod === "upi"
                            ? "var(--primary)"
                            : "var(--border)",
                      }}
                    >
                      <input
                        type="radio"
                        name="payment"
                        value="upi"
                        checked={paymentMethod === "upi"}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                        className="w-5 h-5"
                      />
                      <span className="ml-3 font-semibold text-foreground">
                        UPI / Google Pay
                      </span>
                    </label>

                    {/* Net Banking */}
                    <label
                      className="flex items-center p-4 border-2 rounded-lg cursor-pointer transition hover:border-primary"
                      style={{
                        borderColor:
                          paymentMethod === "netbanking"
                            ? "var(--primary)"
                            : "var(--border)",
                      }}
                    >
                      <input
                        type="radio"
                        name="payment"
                        value="netbanking"
                        checked={paymentMethod === "netbanking"}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                        className="w-5 h-5"
                      />
                      <span className="ml-3 font-semibold text-foreground">
                        Net Banking
                      </span>
                    </label>

                    {/* Cash on Delivery */}
                    <label
                      className="flex items-center p-4 border-2 rounded-lg cursor-pointer transition hover:border-primary"
                      style={{
                        borderColor:
                          paymentMethod === "cod"
                            ? "var(--primary)"
                            : "var(--border)",
                      }}
                    >
                      <input
                        type="radio"
                        name="payment"
                        value="cod"
                        checked={paymentMethod === "cod"}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                        className="w-5 h-5"
                      />
                      <span className="ml-3 font-semibold text-foreground">
                        Cash on Delivery
                      </span>
                    </label>
                  </div>
                </div>

                <div className="flex gap-4">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="flex-1 border border-border hover:bg-muted py-3 rounded-lg font-semibold transition flex items-center justify-center gap-2"
                  >
                    <ArrowLeft className="w-5 h-5" />
                    Back
                  </button>
                  <button
                    type="submit"
                    className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90 py-3 rounded-lg font-semibold transition"
                  >
                    Review Order
                  </button>
                </div>
              </form>
            )}

            {/* Step 3: Order Confirmation */}
            {step === 3 && (
              <div className="space-y-6">
                <div className="text-center py-12">
                  <div className="text-6xl mb-4">✓</div>
                  <h2 className="text-3xl font-bold text-foreground mb-2">
                    Order Placed Successfully!
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    Your order has been confirmed. You'll receive a confirmation
                    email shortly.
                  </p>

                  <div className="bg-muted rounded-lg p-6 mb-6 text-left">
                    <p className="text-sm text-muted-foreground mb-2">
                      Order Number
                    </p>
                    <p className="text-2xl font-bold text-foreground">
                      #NAP12345678
                    </p>
                  </div>

                  <Link
                    to="/"
                    className="inline-block bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 rounded-lg font-semibold transition"
                  >
                    Continue Shopping
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* Order Summary Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 bg-muted rounded-lg p-6 space-y-6">
              <h2 className="text-xl font-bold text-foreground">
                Order Summary
              </h2>

              <div className="space-y-3 max-h-64 overflow-y-auto">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex justify-between text-sm text-foreground"
                  >
                    <span>
                      {item.name} x{item.quantity}
                    </span>
                    <span className="font-semibold">
                      ₹{item.price * item.quantity}
                    </span>
                  </div>
                ))}
              </div>

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
                  <span className="text-green-600">FREE</span>
                </div>
              </div>

              <div className="flex justify-between text-lg font-bold text-foreground">
                <span>Total</span>
                <span className="text-primary">₹{Math.round(total)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
