import React, { useState, useMemo, useEffect } from 'react';
import { PRODUCTS_DATA, CATEGORIES_DATA } from './data/products';
import { TRANSLATIONS } from './data/translations';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductCard from './components/ProductCard';
import ProductModal from './components/ProductModal';
import CartDrawer from './components/CartDrawer';
import CheckoutModal from './components/CheckoutModal';
import WhyChooseUs from './components/WhyChooseUs';
import Reviews from './components/Reviews';
import Footer from './components/Footer';
import LanguageModal from './components/LanguageModal';

export default function App() {
  // Language State: 'hi' or 'en'
  const [lang, setLang] = useState(() => {
    return localStorage.getItem('sati_lang') || 'hi';
  });

  // Show Language Selector Popup on First Visit
  const [showLangModal, setShowLangModal] = useState(() => {
    return !localStorage.getItem('sati_lang_selected');
  });

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

  // Selected weights per product
  const [selectedWeights, setSelectedWeights] = useState({
    "aam-ka-aachar": "500g",
    "lal-mirch-bharwa": "500g",
    "lahsun-ka-aachar": "500g",
    "mishrit-aachar": "500g",
    "ankurit-methi": "500g",
    "apple-cider-vinegar": "500ml",
  });

  // Current dictionary
  const t = TRANSLATIONS[lang] || TRANSLATIONS.hi;

  const handleSelectLanguage = (selectedLang) => {
    setLang(selectedLang);
    localStorage.setItem('sati_lang', selectedLang);
    localStorage.setItem('sati_lang_selected', 'true');
    setShowLangModal(false);
    showToast(selectedLang === 'hi' ? "भाषा 'हिन्दी' सेट हो गई! 🇮🇳" : "Language set to 'English'! 🇬🇧");
  };

  const handleToggleLanguage = () => {
    const nextLang = lang === 'hi' ? 'en' : 'hi';
    setLang(nextLang);
    localStorage.setItem('sati_lang', nextLang);
    showToast(nextLang === 'hi' ? "भाषा: हिन्दी 🇮🇳" : "Language: English 🇬🇧");
  };

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
    const productTitle = lang === 'hi' ? product.title : product.titleEn;

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
          title: productTitle,
          weight: chosenWeight,
          price: variant.price,
          originalPrice: variant.originalPrice,
          image: product.image,
          quantity: 1,
        },
      ];
    });

    showToast(`${productTitle} (${chosenWeight}) ${lang === 'hi' ? 'basket me add ho gaya! 🫙' : 'added to basket!'}`);
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
        showToast(lang === 'hi' ? "Favorites se remove kiya gaya." : "Removed from favorites.");
        return prev.filter((id) => id !== productId);
      } else {
        showToast(lang === 'hi' ? "Wishlist me add ho gaya! ❤️" : "Saved to wishlist! ❤️");
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
        p.titleEn.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.descriptionEn.toLowerCase().includes(q);

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="min-h-screen flex flex-col bg-[#fdfbf7] selection:bg-emerald-900 selection:text-white">
      
      {/* First Visit Language Selection Modal */}
      <LanguageModal
        isOpen={showLangModal}
        onSelectLanguage={handleSelectLanguage}
      />

      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-emerald-950 text-white px-5 py-3 rounded-2xl shadow-2xl flex items-center space-x-2 border border-emerald-800">
          <span>🌿</span>
          <span className="font-semibold text-xs sm:text-sm">{toastMessage}</span>
        </div>
      )}

      {/* Header with Language Switcher */}
      <Header
        cartCount={cartCount}
        cartTotal={cartSubtotal}
        onOpenCart={() => setIsCartOpen(true)}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        wishlistCount={wishlist.length}
        lang={lang}
        onToggleLanguage={handleToggleLanguage}
        t={t}
      />

      <main className="flex-1">
        {/* Hero Section */}
        <Hero lang={lang} t={t} />

        {/* Categories Section */}
        <section id="categories" className="py-10 bg-white border-b border-stone-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-6">
              <div>
                <span className="text-xs font-bold text-amber-700 uppercase tracking-widest bg-amber-50 px-2.5 py-1 rounded-full border border-amber-200">
                  {t.categoriesSub}
                </span>
                <h2 className="text-2xl font-serif font-extrabold text-stone-900 mt-1">
                  {t.categoriesHeading}
                </h2>
              </div>
              <button
                onClick={() => setSelectedCategory("all")}
                className="text-xs font-bold text-emerald-900 hover:underline"
              >
                {t.viewAll} ({PRODUCTS_DATA.length})
              </button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
              {CATEGORIES_DATA.map((cat) => {
                const isSelected = selectedCategory === cat.id;
                const label = lang === 'hi' ? cat.labelHi : cat.labelEn;
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
                      {label}
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
                {t.productsHeading}
              </h2>
              <p className="text-xs sm:text-sm text-stone-500 mt-0.5">
                {t.productsSub}
              </p>
            </div>

            {selectedCategory !== "all" && (
              <button
                onClick={() => setSelectedCategory("all")}
                className="self-start text-xs font-bold bg-stone-200 hover:bg-stone-300 px-3 py-1.5 rounded-full text-stone-700"
              >
                ✕ Clear Filter
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
                  lang={lang}
                  t={t}
                />
              );
            })}
          </div>
        </section>

        {/* Why Choose Us */}
        <WhyChooseUs t={t} />

        {/* Customer Reviews */}
        <Reviews lang={lang} t={t} />
      </main>

      {/* Footer */}
      <Footer lang={lang} t={t} />

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
        lang={lang}
        t={t}
      />

      {/* Product Quick-View Modal */}
      {activeModalProduct && (
        <ProductModal
          product={activeModalProduct}
          onClose={() => setActiveModalProduct(null)}
          selectedWeight={selectedWeights[activeModalProduct.id] || activeModalProduct.variants[0].weight}
          onWeightChange={handleWeightChange}
          onAddToCart={handleAddToCart}
          lang={lang}
          t={t}
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
        t={t}
      />

      {/* Order Success Popup */}
      {orderSuccess && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md">
          <div className="bg-white rounded-3xl max-w-md w-full p-8 text-center space-y-4 shadow-2xl border border-amber-200">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-800 rounded-full flex items-center justify-center mx-auto text-3xl font-black">
              ✓
            </div>
            <h3 className="font-serif text-2xl font-extrabold text-stone-900">
              {t.orderSuccess.title}
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              {t.orderSuccess.msg}
            </p>
            <div className="bg-stone-50 p-4 rounded-2xl border border-stone-200 text-xs text-left space-y-1">
              <p className="font-bold text-stone-800">Order ID: #SA-2026-9042</p>
              <p className="text-stone-500">{t.orderSuccess.deliveryTime}</p>
              <p className="text-emerald-700 font-semibold">Payment: Confirmed</p>
            </div>
            <button
              onClick={() => setOrderSuccess(false)}
              className="w-full bg-emerald-950 text-white font-bold py-3 rounded-full text-xs hover:bg-black"
            >
              {t.orderSuccess.continueShopping}
            </button>
          </div>
        </div>
      )}

    </div>
  );
}
