import React from 'react';
import { Icon } from './Icons';

export default function Reviews({ lang, t }) {
  const reviews = [
    {
      id: 1,
      nameHi: "पूजा अग्रवाल",
      nameEn: "Pooja Agarwal",
      cityHi: "नई दिल्ली",
      cityEn: "New Delhi",
      textHi: "सती का आम का अचार बिल्कुल मेरी दादी के हाथ के अचार जैसा लगा। बाज़ार के सिरके वाले अचारों से हजार गुना बेहतर और शुद्ध सरसों तेल की सौंधी खुशबू!",
      textEn: "Sati's mango pickle tastes exactly like my Nani's homemade recipe. Millions times better than commercial pickles with synthetic vinegar!",
      rating: 5,
      productHi: "आम का अचार",
      productEn: "Mango Pickle"
    },
    {
      id: 2,
      nameHi: "विकास सिंह",
      nameEn: "Vikas Singh",
      cityHi: "लखनऊ",
      cityEn: "Lucknow",
      textHi: "बनारसी भरवा लाल मिर्च का अचार खाकर मज़ा आ गया! मसालेदार और तीखापन एकदम सटीक है। पराठे के साथ रोज़ खा रहे हैं।",
      textEn: "The Banarasi stuffed red chili pickle is unbelievable! The spice blend with amchur is so addictive with parathas and dal chawal.",
      rating: 5,
      productHi: "लाल मिर्च भरवा",
      productEn: "Stuffed Red Chilli"
    },
    {
      id: 3,
      nameHi: "डॉ. अनिल शर्मा",
      nameEn: "Dr. Anil Sharma",
      cityHi: "जयपुर",
      cityEn: "Jaipur",
      textHi: "लहसुन और मेथी का अचार पेट और पाचन के लिए कमाल की चीज़ है। बहुत स्वादिष्ट और असरदार। 'टेस्ट किया क्या?' सच में लाजवाब!",
      textEn: "The garlic and sprouted methi pickles are fantastic for digestion and gut health. Truly authentic and preservative-free!",
      rating: 5,
      productHi: "लहसुन का अचार",
      productEn: "Garlic Pickle"
    }
  ];

  return (
    <section id="reviews" className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-10 space-y-2">
        <span className="text-xs font-bold uppercase tracking-widest text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
          {t.reviewsHeading}
        </span>
        <h2 className="font-serif text-2xl sm:text-3xl font-extrabold text-stone-900">
          {t.reviewsSub}
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {reviews.map((r) => (
          <div key={r.id} className="bg-white p-6 rounded-3xl border border-stone-200 shadow-sm flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="flex space-x-1">
                {[...Array(r.rating)].map((_, i) => (
                  <Icon.Star key={i} />
                ))}
              </div>
              <p className="text-stone-700 text-xs sm:text-sm leading-relaxed">
                "{lang === 'hi' ? r.textHi : r.textEn}"
              </p>
            </div>
            <div className="pt-3 border-t border-stone-100 flex items-center justify-between text-xs">
              <div>
                <span className="font-bold text-stone-900 block">
                  {lang === 'hi' ? r.nameHi : r.nameEn}
                </span>
                <span className="text-stone-400 text-[11px]">
                  {lang === 'hi' ? `${r.cityHi} • ${r.productHi}` : `${r.cityEn} • ${r.productEn}`}
                </span>
              </div>
              <span className="text-emerald-700 font-bold text-[10px] bg-emerald-50 px-2 py-0.5 rounded-full">
                ✓ Verified
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
