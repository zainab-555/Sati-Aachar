import React, { useState, useEffect } from 'react';
import { Icon } from './Icons';

export default function Hero({ lang, t }) {
  const [slide, setSlide] = useState(0);

  const heroSlides = [
    {
      titleHi: "सती होम मेड आम और भरवा मिर्च का असली स्वाद",
      titleEn: "Authentic Sati Mango & Banarasi Stuffed Red Chilli Pickles",
      subtitleHi: "पारंपरिक विधि से तैयार, शुद्ध कच्ची घानी सरसों का तेल और खड़े मसालों का संगम।",
      subtitleEn: "Sun-cured in ceramic martabans with pure cold-pressed mustard oil and hand-pounded spices.",
      image: "images/4.jpeg",
      tagHi: "लाल मिर्च भरवा अचार",
      tagEn: "Banarasi Stuffed Chilli"
    },
    {
      titleHi: "लहसुन और अंकुरित मेथी का पाचक व स्वास्थ्यवर्धक अचार",
      titleEn: "Digestive Garlic & Sprouted Fenugreek Health Pickles",
      subtitleHi: "स्वाद भी और सेहत भी! जोड़ों के दर्द और पाचन के लिए रामबाण आयुर्वेदिक नुस्खा।",
      subtitleEn: "Immunity and digestion booster made from whole garlic and freshly sprouted methi seeds.",
      image: "images/8jpeg.jpeg",
      tagHi: "टेस्ट किया क्या?",
      tagEn: "Grandma's Health Vault"
    },
    {
      titleHi: "100% शुद्ध नेचुरल एप्पल साइडर विनेगर और मिक्स्ड अचार",
      titleEn: "100% Raw Apple Cider Vinegar & Crunchy Garden Mix Pickle",
      subtitleHi: "कच्चे हिमालयी सेबों से निर्मित प्राकृतिक सिरका और परिवार का मनपसंद पंचरंगा अचार।",
      subtitleEn: "Raw Himalayan apple juice fermented with Mother, plus crunchiest vegetable medley.",
      image: "images/1.jpeg",
      tagHi: "नेचुरल एप्पल साइडर",
      tagEn: "100% Pure Vinegar"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const current = heroSlides[slide];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#f8f6f0] to-[#fdfbf7] py-6 sm:py-10 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Banner Carousel Card */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-r from-emerald-950 via-emerald-900 to-[#2c1d11] text-white">
          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[460px] items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 p-6 sm:p-10 lg:p-12 z-10 space-y-6">
              <div className="inline-flex items-center space-x-2 bg-amber-400/20 border border-amber-400/40 px-3.5 py-1.5 rounded-full text-amber-300 text-xs sm:text-sm font-semibold">
                <span>☀️</span>
                <span>{t.hero.badge}</span>
              </div>

              <div className="space-y-4">
                <span className="text-amber-400 text-xs font-bold uppercase tracking-wider block">
                  {lang === 'hi' ? current.tagHi : current.tagEn}
                </span>
                <h1 className="font-serif text-3xl sm:text-5xl font-extrabold leading-tight text-amber-50">
                  {lang === 'hi' ? current.titleHi : current.titleEn}
                </h1>
                <p className="text-stone-300 text-xs sm:text-sm max-w-xl font-light leading-relaxed">
                  {lang === 'hi' ? current.subtitleHi : current.subtitleEn}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href="#flavors"
                  className="bg-amber-400 hover:bg-amber-500 text-emerald-950 font-bold px-7 py-3 rounded-full shadow-lg text-sm flex items-center space-x-2 transition-all"
                >
                  <span>{t.hero.shopNow}</span>
                  <Icon.ArrowRight />
                </a>
                <a
                  href="#why-sati"
                  className="bg-white/10 hover:bg-white/20 text-white font-medium px-6 py-3 rounded-full border border-white/20 text-sm transition-all"
                >
                  {t.hero.heritage}
                </a>
              </div>

              <div className="pt-4 border-t border-white/10 grid grid-cols-3 gap-3 text-xs text-stone-300">
                <div>{t.hero.trust1}</div>
                <div>{t.hero.trust2}</div>
                <div>{t.hero.trust3}</div>
              </div>
            </div>

            {/* Right Image */}
            <div className="lg:col-span-5 p-6 h-72 sm:h-96 lg:h-full flex items-center justify-center">
              <div className="w-full h-full max-h-[380px] rounded-2xl overflow-hidden shadow-2xl border-2 border-amber-400/30 bg-white/5 backdrop-blur-md flex items-center justify-center p-4">
                <img
                  src={current.image}
                  alt={lang === 'hi' ? current.titleHi : current.titleEn}
                  className="max-h-full max-w-full object-contain filter drop-shadow-xl"
                />
              </div>
            </div>

          </div>

          {/* Dots */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex space-x-2">
            {heroSlides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setSlide(idx)}
                className={`h-2 rounded-full transition-all ${slide === idx ? "w-8 bg-amber-400" : "w-2 bg-white/40"}`}
              />
            ))}
          </div>
        </div>

        {/* 4 Feature Badges */}
        <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6">
          <div className="bg-white p-3.5 rounded-2xl border border-stone-200 flex items-center space-x-3">
            <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-800 flex items-center justify-center"><Icon.Sun /></div>
            <div>
              <h4 className="text-xs font-bold text-stone-900">{t.hero.feat1}</h4>
              <p className="text-[11px] text-stone-500">{t.hero.feat1Sub}</p>
            </div>
          </div>
          <div className="bg-white p-3.5 rounded-2xl border border-stone-200 flex items-center space-x-3">
            <div className="w-9 h-9 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center"><Icon.Sparkles /></div>
            <div>
              <h4 className="text-xs font-bold text-stone-900">{t.hero.feat2}</h4>
              <p className="text-[11px] text-stone-500">{t.hero.feat2Sub}</p>
            </div>
          </div>
          <div className="bg-white p-3.5 rounded-2xl border border-stone-200 flex items-center space-x-3">
            <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center"><Icon.ShieldCheck /></div>
            <div>
              <h4 className="text-xs font-bold text-stone-900">{t.hero.feat3}</h4>
              <p className="text-[11px] text-stone-500">{t.hero.feat3Sub}</p>
            </div>
          </div>
          <div className="bg-white p-3.5 rounded-2xl border border-stone-200 flex items-center space-x-3">
            <div className="w-9 h-9 rounded-xl bg-orange-50 text-orange-700 flex items-center justify-center"><Icon.Truck /></div>
            <div>
              <h4 className="text-xs font-bold text-stone-900">{t.hero.feat4}</h4>
              <p className="text-[11px] text-stone-500">{t.hero.feat4Sub}</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
