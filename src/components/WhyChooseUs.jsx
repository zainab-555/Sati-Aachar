import React from 'react';

export default function WhyChooseUs({ t }) {
  return (
    <section id="why-sati" className="py-16 bg-gradient-to-b from-[#f8f6f0] to-[#f4eedb] border-t border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="text-xs font-extrabold uppercase tracking-widest text-amber-700 bg-amber-100 px-3 py-1 rounded-full border border-amber-300">
            {t.whyUs.badge}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-stone-900">
            {t.whyUs.title}
          </h2>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            {t.whyUs.sub}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-7 rounded-3xl border border-stone-200 shadow-sm hover:-translate-y-1 transition-all space-y-4">
            <div className="w-14 h-14 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center text-2xl">
              ☀️
            </div>
            <h3 className="font-serif text-lg font-bold text-stone-900">{t.whyUs.card1Title}</h3>
            <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
              {t.whyUs.card1Text}
            </p>
          </div>

          <div className="bg-white p-7 rounded-3xl border border-stone-200 shadow-sm hover:-translate-y-1 transition-all space-y-4">
            <div className="w-14 h-14 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center text-2xl">
              🌿
            </div>
            <h3 className="font-serif text-lg font-bold text-stone-900">{t.whyUs.card2Title}</h3>
            <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
              {t.whyUs.card2Text}
            </p>
          </div>

          <div className="bg-white p-7 rounded-3xl border border-stone-200 shadow-sm hover:-translate-y-1 transition-all space-y-4">
            <div className="w-14 h-14 rounded-2xl bg-red-100 text-red-800 flex items-center justify-center text-2xl">
              🌶️
            </div>
            <h3 className="font-serif text-lg font-bold text-stone-900">{t.whyUs.card3Title}</h3>
            <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
              {t.whyUs.card3Text}
            </p>
          </div>

          <div className="bg-white p-7 rounded-3xl border border-stone-200 shadow-sm hover:-translate-y-1 transition-all space-y-4">
            <div className="w-14 h-14 rounded-2xl bg-stone-100 text-stone-800 flex items-center justify-center text-2xl">
              🫙
            </div>
            <h3 className="font-serif text-lg font-bold text-stone-900">{t.whyUs.card4Title}</h3>
            <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
              {t.whyUs.card4Text}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
