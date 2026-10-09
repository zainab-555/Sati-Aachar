import React from 'react';
import { Icon } from './Icons';

export default function Reviews() {
  const reviews = [
    {
      id: 1,
      name: "पूजा अग्रवाल",
      city: "दिल्ली",
      text: "सती का आम का अचार बिल्कुल मेरी दादी के हाथ के अचार जैसा लगा। बाज़ार के सिरके वाले अचारों से हजार गुना बेहतर और शुद्ध सरसों तेल की सौंधी खुशबू!",
      rating: 5,
      product: "आम का अचार"
    },
    {
      id: 2,
      name: "विकास सिंह",
      city: "लखनऊ",
      text: "बनारसी भरवा लाल मिर्च का अचार खाकर मज़ा आ गया! मसालेदार और तीखापन एकदम सटीक है। पराठे के साथ रोज़ खा रहे हैं।",
      rating: 5,
      product: "लाल मिर्च का भरवा अचार"
    },
    {
      id: 3,
      name: "अनिल शर्मा",
      city: "जयपुर",
      text: "लहसुन का अचार पेट और गैस की समस्या के लिए कमाल की चीज़ है। बहुत स्वादिष्ट और असरदार। टेस्ट किया क्या? सच में नंबर 1 है!",
      rating: 5,
      product: "लहसुन का अचार"
    }
  ];

  return (
    <section id="reviews" className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-10 space-y-2">
        <span className="text-xs font-bold uppercase tracking-widest text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
          ग्राहक अनुभव
        </span>
        <h2 className="font-serif text-2xl sm:text-3xl font-extrabold text-stone-900">
          सती अचार के दीवानों की राय
        </h2>
        <p className="text-stone-500 text-xs sm:text-sm">
          हज़ारों घरों में रोज़ की थाली का अभिन्न हिस्सा
        </p>
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
                "{r.text}"
              </p>
            </div>
            <div className="pt-3 border-t border-stone-100 flex items-center justify-between text-xs">
              <div>
                <span className="font-bold text-stone-900 block">{r.name}</span>
                <span className="text-stone-400 text-[11px]">{r.city} • {r.product}</span>
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
