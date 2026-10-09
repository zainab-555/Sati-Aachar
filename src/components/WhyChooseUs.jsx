import React from 'react';

export default function WhyChooseUs() {
  return (
    <section id="why-sati" className="py-16 bg-gradient-to-b from-[#f8f6f0] to-[#f4eedb] border-t border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="text-xs font-extrabold uppercase tracking-widest text-amber-700 bg-amber-100 px-3 py-1 rounded-full border border-amber-300">
            सती अचार की खासियत
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-stone-900">
            बाज़ार के अचारों से अलग, घर जैसा शुद्ध स्वाद
          </h2>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            हम किसी भी प्रकार का सिंथेटिक एसेंस या केमिकल नहीं मिलाते। शुद्ध कच्ची घानी सरसों का तेल और प्राकृतिक धूप में पके पारंपरिक मसालों का भरोसा।
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-7 rounded-3xl border border-stone-200 shadow-sm hover:-translate-y-1 transition-all space-y-4">
            <div className="w-14 h-14 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center text-2xl">
              ☀️
            </div>
            <h3 className="font-serif text-lg font-bold text-stone-900">21 दिन धूप में पकाया गया</h3>
            <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
              पारंपरिक मर्तबानों में प्राकृतिक धूप से तैयार किया जाता है, जिससे मसालों का तेल में प्राकृतिक रस घुल जाता है।
            </p>
          </div>

          <div className="bg-white p-7 rounded-3xl border border-stone-200 shadow-sm hover:-translate-y-1 transition-all space-y-4">
            <div className="w-14 h-14 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center text-2xl">
              🌿
            </div>
            <h3 className="font-serif text-lg font-bold text-stone-900">शुद्ध कच्ची घानी सरसों तेल</h3>
            <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
              कोल्हू से निकला शुद्ध तीखा सरसों का तेल जो प्राकृतिक प्रिजर्वेटिव की तरह काम करता है।
            </p>
          </div>

          <div className="bg-white p-7 rounded-3xl border border-stone-200 shadow-sm hover:-translate-y-1 transition-all space-y-4">
            <div className="w-14 h-14 rounded-2xl bg-red-100 text-red-800 flex items-center justify-center text-2xl">
              🌶️
            </div>
            <h3 className="font-serif text-lg font-bold text-stone-900">हाथों से कुटे खड़े मसाले</h3>
            <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
              मेथी दाना, बनारसी सौंफ, पीली सरसों, हींग और कश्मीरी लाल मिर्च का सही अनुपात।
            </p>
          </div>

          <div className="bg-white p-7 rounded-3xl border border-stone-200 shadow-sm hover:-translate-y-1 transition-all space-y-4">
            <div className="w-14 h-14 rounded-2xl bg-stone-100 text-stone-800 flex items-center justify-center text-2xl">
              🫙
            </div>
            <h3 className="font-serif text-lg font-bold text-stone-900">हाइजीनिक एयरटाइट पैकिंग</h3>
            <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
              फूड-ग्रेड सीलबंद जार में पैक किया जाता है ताकि खुशबू और ताजगी महीनों तक बरकरार रहे।
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
