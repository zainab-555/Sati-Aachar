import React, { useState, useMemo } from 'react';
import { PRODUCTS_DATA, CATEGORIES_DATA } from './data/products';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductCard from './components/ProductCard';
import ProductModal from './components/ProductModal';
import CartDrawer from './components/CartDrawer';
import CheckoutModal from './components/CheckoutModal';
import WhyChooseUs from './components/WhyChooseUs';
import Reviews from './components/Reviews';
import Footer from './components/Footer';

export default function App() {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [activeModalProduct, setActiveModalProduct] = useState(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [checkoutTotal, setCheckoutTotal] = useState(0);
  const [orderSuccess, setOrderSuccess] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);

  // Selected weight per product: { [productId]: "500g" }
  const [selectedWeights, setSelectedWeights] = useState({
    "aam-ka-aachar": "500g",
    "lal-mirch-bharwa": "500g",
    "lahsun-ka-aachar": "500g",
    "mishrit-aachar": "500g",
    "ankurit-methi": "500g",
    "apple-cider-vinegar": "500ml",
  });

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const handleWeightChange = (productId, weight) => {
    setSelectedWeights((prev) => ({ ...prev, [productId]: weight }));
  };

  const handleAddToCart = (product, weight = null) => {
    const chosenWeight = weight || selectedWeights[product.id] || product.variants[0].weight;
    const variant = product.variants.find((v) => v.weight === chosenWeight) || product.variants[0];
    const cartKey = `${product.id}-${chosenWeight}`;

    setCart((prev) => {
      const existing = prev.find((item) => item.key === cartKey);
      if (existing) {
        return prev.map((item) =>
          item.key === cartKey ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [
        ...prev,
        {
          key: cartKey,
          productId: product.id,
          title: product.title,
          weight: chosenWeight,
          price: variant.price,
          originalPrice: variant.originalPrice,
          image: product.image,
          quantity: 1,
        },
      ];
    });

    showToast(`${product.title} (${chosenWeight}) basket me add ho gaya! 🫙`);
  };

  const handleUpdateQuantity = (key, delta) => {
    setCart((prev) =>
      prev
        .map((item) => {
          if (item.key === key) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean)
    );
  };

  const handleRemoveItem = (key) => {
    setCart((prev) => prev.filter((item) => item.key !== key));
  };

  const handleToggleWishlist = (productId) => {
    setWishlist((prev) => {
      if (prev.includes(productId)) {
        showToast("Favorites se remove kiya gaya.");
        return prev.filter((id) => id !== productId);
      } else {
        showToast("Wishlist me add ho gaya! ❤️");
        return [...prev, productId];
      }
    });
  };

  const cartCount = useMemo(() => {
    return cart.reduce((sum, item) => sum + item.quantity, 0);
  }, [cart]);

  const cartSubtotal = useMemo(() => {
    return cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }, [cart]);

  // Filtered Products
  const filteredProducts = useMemo(() => {
    return PRODUCTS_DATA.filter((p) => {
      const matchesCategory =
        selectedCategory === "all" || p.category === selectedCategory;

      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.englishTitle.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.ingredients.toLowerCase().includes(q);

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="min-h-screen flex flex-col bg-[#fdfbf7] selection:bg-emerald-900 selection:text-white">
      
      {/* Toast */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-emerald-950 text-white px-5 py-3 rounded-2xl shadow-2xl flex items-center space-x-2 border border-emerald-800">
          <span>🌿</span>
          <span className="font-semibold text-xs sm:text-sm">{toastMessage}</span>
        </div>
      )}

      {/* Header */}
      <Header
        cartCount={cartCount}
        cartTotal={cartSubtotal}
        onOpenCart={() => setIsCartOpen(true)}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        wishlistCount={wishlist.length}
        onOpenAuth={() => showToast("Sati Aachar Customer Portal me aapka swaagat hai!")}
      />

      <main className="flex-1">
        {/* Hero Section */}
        <Hero />

        {/* Categories Section */}
        <section id="categories" className="py-10 bg-white border-b border-stone-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-6">
              <div>
                <span className="text-xs font-bold text-amber-700 uppercase tracking-widest bg-amber-50 px-2.5 py-1 rounded-full border border-amber-200">
                  श्रेणियां (Categories)
                </span>
                <h2 className="text-2xl font-serif font-extrabold text-stone-900 mt-1">
                  घर के बने पारंपरिक अचार
                </h2>
              </div>
              <button
                onClick={() => setSelectedCategory("all")}
                className="text-xs font-bold text-emerald-900 hover:underline"
              >
                सभी देखें ({PRODUCTS_DATA.length})
              </button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
              {CATEGORIES_DATA.map((cat) => {
                const isSelected = selectedCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => {
                      setSelectedCategory(cat.id);
                      document.getElementById("flavors")?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className={`p-3.5 rounded-2xl text-center border transition-all ${
                      isSelected
                        ? "bg-emerald-950 text-white border-emerald-950 shadow-md scale-105"
                        : "bg-[#fcfaf6] hover:bg-white text-stone-800 border-stone-200 hover:border-emerald-800"
                    }`}
                  >
                    <div className="text-2xl mb-1">{cat.icon}</div>
                    <div className={`text-xs font-bold truncate ${isSelected ? "text-amber-300" : "text-stone-900"}`}>
                      {cat.label}
                    </div>
                    <div className={`text-[10px] truncate ${isSelected ? "text-stone-300" : "text-stone-500"}`}>
                      {cat.englishLabel}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section id="flavors" className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div>
              <h2 className="text-2xl sm:text-3xl font-serif font-extrabold text-stone-900">
                हमारे शुद्ध उत्पाद (Best Sellers)
              </h2>
              <p className="text-xs sm:text-sm text-stone-500 mt-0.5">
                कच्ची घानी सरसों का तेल • खड़े मसाले • 100% शुद्धता
              </p>
            </div>

            {selectedCategory !== "all" && (
              <button
                onClick={() => setSelectedCategory("all")}
                className="self-start text-xs font-bold bg-stone-200 hover:bg-stone-300 px-3 py-1.5 rounded-full text-stone-700"
              >
                ✕ Clear Category Filter
              </button>
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredProducts.map((product) => {
              const currentWeight = selectedWeights[product.id] || product.variants[0].weight;
              const cartKey = `${product.id}-${currentWeight}`;
              const cartItem = cart.find((item) => item.key === cartKey);

              return (
                <ProductCard
                  key={product.id}
                  product={product}
                  selectedWeight={currentWeight}
                  onWeightChange={handleWeightChange}
                  onAddToCart={handleAddToCart}
                  cartItem={cartItem}
                  onUpdateQuantity={handleUpdateQuantity}
                  onOpenModal={setActiveModalProduct}
                  isWishlisted={wishlist.includes(product.id)}
                  onToggleWishlist={handleToggleWishlist}
                />
              );
            })}
          </div>
        </section>

        {/* Why Choose Us */}
        <WhyChooseUs />

        {/* Customer Reviews */}
        <Reviews />
      </main>

      {/* Footer */}
      <Footer />

      {/* Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        subtotal={cartSubtotal}
        onOpenCheckout={(total) => {
          setCheckoutTotal(total);
          setIsCheckoutOpen(true);
        }}
      />

      {/* Product Quick-View Modal */}
      {activeModalProduct && (
        <ProductModal
          product={activeModalProduct}
          onClose={() => setActiveModalProduct(null)}
          selectedWeight={selectedWeights[activeModalProduct.id] || activeModalProduct.variants[0].weight}
          onWeightChange={handleWeightChange}
          onAddToCart={handleAddToCart}
        />
      )}

      {/* Checkout Modal */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        total={checkoutTotal}
        onSuccess={() => {
          setIsCheckoutOpen(false);
          setCart([]);
          setOrderSuccess(true);
        }}
      />

      {/* Order Success Popup */}
      {orderSuccess && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md">
          <div className="bg-white rounded-3xl max-w-md w-full p-8 text-center space-y-4 shadow-2xl border border-amber-200">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-800 rounded-full flex items-center justify-center mx-auto text-3xl font-black">
              ✓
            </div>
            <h3 className="font-serif text-2xl font-extrabold text-stone-900">
              धन्यवाद! आपका ऑर्डर प्राप्त हो गया! 🎉
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              सती अचार का शुद्ध बैच तैयार करके सुरक्षित सीलबंद पैकिंग में आपके पते पर रवाना किया जा रहा है।
            </p>
            <div className="bg-stone-50 p-4 rounded-2xl border border-stone-200 text-xs text-left space-y-1">
              <p className="font-bold text-stone-800">ऑर्डर आईडी: #SA-2026-9042</p>
              <p className="text-stone-500">डिलीवरी: 2 से 3 दिन में</p>
              <p className="text-emerald-700 font-semibold">भुगतान: कन्फर्म</p>
            </div>
            <button
              onClick={() => setOrderSuccess(false)}
              className="w-full bg-emerald-950 text-white font-bold py-3 rounded-full text-xs hover:bg-black"
            >
              Continue Shopping
            </button>
          </div>
        </div>
      )}

    </div>
  );
}
