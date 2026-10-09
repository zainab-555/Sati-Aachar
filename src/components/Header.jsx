import React, { useState } from 'react';
import { Icon } from './Icons';

export default function Header({
  cartCount,
  cartTotal,
  onOpenCart,
  searchQuery,
  setSearchQuery,
  wishlistCount,
  onOpenAuth
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Announcement Bar */}
      <div className="bg-gradient-to-r from-emerald-950 via-emerald-900 to-amber-900 text-amber-200 text-xs py-2 px-4 text-center font-medium tracking-wide flex items-center justify-center space-x-3">
        <span className="hidden md:inline">✨ 100% शुद्ध घर का बना अचार</span>
        <span className="inline-block w-1.5 h-1.5 rounded-full bg-amber-400"></span>
        <span>कूपन कोड <span className="bg-amber-400 text-emerald-950 font-bold px-1.5 py-0.5 rounded uppercase">SATI10</span> लगाएं 10% छूट के लिए</span>
        <span className="inline-block w-1.5 h-1.5 rounded-full bg-amber-400"></span>
        <span className="font-semibold text-white">🚚 ₹499 से अधिक के ऑर्डर पर मुफ़्त डिलीवरी</span>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-stone-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 gap-4">
            
            {/* Mobile Menu */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-stone-700 hover:bg-stone-100"
            >
              <Icon.Menu />
            </button>

            {/* Logo */}
            <a href="#" className="flex items-center space-x-3 group notranslate" translate="no">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-900 to-emerald-950 p-1 shadow-md flex items-center justify-center transform group-hover:rotate-3 transition-transform overflow-hidden">
                <svg className="w-9 h-9" viewBox="0 0 100 100" fill="none">
                  {/* Green leaves */}
                  <path d="M52 24C52 24 58 14 68 18C68 28 58 30 52 24Z" fill="#22c55e"/>
                  <path d="M48 24C48 24 40 16 34 22C34 30 44 30 48 24Z" fill="#4ade80"/>
                  {/* Red chili underline */}
                  <path d="M22 68C28 66 38 72 50 74C65 76 78 68 82 56C78 62 66 68 50 66C38 64 30 58 24 62C20 64 18 68 22 68Z" fill="#ef4444"/>
                  {/* Sati stylized text */}
                  <text x="50" y="54" textAnchor="middle" fill="#fef08a" fontSize="28" fontWeight="900" fontFamily="Playfair Display, serif">सा</text>
                </svg>
              </div>
              <div className="notranslate" translate="no">
                <div className="flex items-baseline space-x-1.5">
                  <span className="font-serif text-2xl sm:text-3xl font-extrabold text-emerald-950 tracking-tight">Sati</span>
                  <span className="font-serif text-2xl sm:text-3xl font-extrabold text-amber-600 tracking-tight">Aachar</span>
                </div>
                <p className="text-[10px] tracking-widest uppercase font-semibold text-stone-500 flex items-center space-x-1">
                  <span className="notranslate" translate="no">स्वाद नानी के हाथों का</span>
                  <span>•</span>
                  <span className="text-emerald-700 font-bold">Home Made</span>
                </p>
              </div>
            </a>

            {/* Search Input */}
            <div className="flex-1 max-w-xl hidden md:block">
              <div className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="खोजें: आम का अचार, भरवा मिर्च, लहसुन, मेथी..."
                  className="w-full pl-11 pr-10 py-2.5 bg-stone-100 hover:bg-stone-100/80 focus:bg-white text-stone-800 text-sm rounded-full border border-stone-200 focus:border-emerald-800 focus:ring-2 focus:ring-emerald-800/20 transition-all outline-none"
                />
                <div className="absolute left-3.5 top-3 text-stone-400">
                  <Icon.Search />
                </div>
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-3.5 top-3 text-xs bg-stone-200 text-stone-600 rounded-full w-4 h-4 flex items-center justify-center hover:bg-stone-300"
                  >
                    ✕
                  </button>
                )}
              </div>
            </div>

            {/* Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-6 text-sm font-semibold text-stone-700">
              <a href="#flavors" className="hover:text-emerald-800 transition-colors">सर्वश्रेष्ठ उत्पाद</a>
              <a href="#categories" className="hover:text-emerald-800 transition-colors">श्रेणियां</a>
              <a href="#why-sati" className="hover:text-emerald-800 transition-colors">हमारी खासियत</a>
              <a href="#reviews" className="hover:text-emerald-800 transition-colors">ग्राहक समीक्षाएं</a>
            </nav>

            {/* Basket Button */}
            <div className="flex items-center space-x-3">
              <button
                onClick={onOpenCart}
                className="flex items-center space-x-2 bg-emerald-950 hover:bg-black text-white px-4 py-2.5 rounded-full shadow-md transition-all active:scale-95"
              >
                <div className="relative">
                  <Icon.Cart />
                  {cartCount > 0 && (
                    <span className="absolute -top-2 -right-2 bg-amber-400 text-emerald-950 font-black text-xs w-5 h-5 rounded-full flex items-center justify-center shadow-sm">
                      {cartCount}
                    </span>
                  )}
                </div>
                <div className="text-left hidden sm:block">
                  <span className="block text-[10px] uppercase font-bold text-amber-300 leading-tight">My Basket</span>
                  <span className="block text-xs font-bold text-white leading-tight">₹{cartTotal}</span>
                </div>
              </button>
            </div>

          </div>

          {/* Mobile search bar */}
          <div className="pb-3 md:hidden">
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="खोजें: आम, मिर्च, लहसुन..."
                className="w-full pl-10 pr-8 py-2 bg-stone-100 text-stone-800 text-sm rounded-xl border border-stone-200 focus:bg-white focus:border-emerald-800 outline-none"
              />
              <div className="absolute left-3 top-2.5 text-stone-400">
                <Icon.Search />
              </div>
            </div>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-stone-200 px-6 py-4 space-y-3">
            <a href="#flavors" onClick={() => setMobileMenuOpen(false)} className="block text-stone-800 font-semibold py-1">🌶️ सर्वश्रेष्ठ उत्पाद</a>
            <a href="#categories" onClick={() => setMobileMenuOpen(false)} className="block text-stone-800 font-semibold py-1">🫙 श्रेणियां</a>
            <a href="#why-sati" onClick={() => setMobileMenuOpen(false)} className="block text-stone-800 font-semibold py-1">☀️ हमारी खासियत</a>
            <a href="#reviews" onClick={() => setMobileMenuOpen(false)} className="block text-stone-800 font-semibold py-1">⭐ ग्राहक समीक्षाएं</a>
          </div>
        )}
      </header>
    </>
  );
}
