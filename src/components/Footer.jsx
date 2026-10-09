import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-[#121915] text-stone-300 pt-14 pb-20 md:pb-10 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          
          {/* Brand */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center space-x-3 notranslate" translate="no">
              <div className="w-10 h-10 rounded-xl bg-emerald-800 flex items-center justify-center text-amber-300 font-serif font-black text-xl border border-amber-400/30 overflow-hidden">
                सा
              </div>
              <div>
                <span className="font-serif text-2xl font-bold text-white">Sati Aachar</span>
                <p className="text-[10px] text-amber-400 tracking-wider uppercase font-semibold">Home Made & Pure</p>
              </div>
            </div>
            <p className="text-xs text-stone-400 leading-relaxed max-w-sm">
              भारत के पारंपरिक स्वाद और नानी-दादी के नुस्खों को समर्पित। 100% शुद्ध सरसों तेल और ताज़ा खड़े मसालों से बना असली देसी अचार।
            </p>
            <p className="text-xs text-amber-300 font-bold">
              "टेस्ट किया क्या?"
            </p>
          </div>

          {/* Quick links */}
          <div className="space-y-2 text-xs">
            <h4 className="font-bold text-white uppercase tracking-wider mb-2">लोकप्रिय अचार</h4>
            <p className="text-stone-400">आम का अचार (Mango Pickle)</p>
            <p className="text-stone-400">लाल मिर्च भरवा (Stuffed Chilli)</p>
            <p className="text-stone-400">लहसुन का अचार (Garlic Pickle)</p>
            <p className="text-stone-400">मिश्रित अचार (Mix Pickle)</p>
            <p className="text-stone-400">अंकुरित मेथी का अचार</p>
            <p className="text-stone-400">Apple Cider Natural Vinegar</p>
          </div>

          {/* Contact */}
          <div className="space-y-2 text-xs">
            <h4 className="font-bold text-white uppercase tracking-wider mb-2">संपर्क व कस्टमर सपोर्ट</h4>
            <p className="text-stone-400">📞 +91 98765 43210</p>
            <p className="text-stone-400">✉️ support@satiaachar.com</p>
            <p className="text-stone-400">🚚 All India Delivery Available</p>
            <div className="pt-2 text-emerald-400 font-bold text-[11px]">
              ✓ 100% शाकाहारी (Pure Veg)
            </div>
          </div>

        </div>

        <div className="pt-6 border-t border-stone-800 text-center text-xs text-stone-500">
          <p>© 2026 Sati Aachar. All rights reserved. शुद्धता और स्वाद का अटूट विश्वास।</p>
        </div>
      </div>
    </footer>
  );
}
