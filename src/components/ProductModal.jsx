import React from 'react';
import { Icon } from './Icons';

export default function ProductModal({
  product,
  onClose,
  selectedWeight,
  onWeightChange,
  onAddToCart
}) {
  if (!product) return null;

  const currentVariant =
    product.variants.find((v) => v.weight === selectedWeight) || product.variants[0];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div className="relative bg-white rounded-3xl max-w-3xl w-full shadow-2xl border border-stone-200 overflow-hidden flex flex-col md:flex-row max-h-[90vh]">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-white/90 hover:bg-white text-stone-700 flex items-center justify-center shadow"
        >
          <Icon.Close />
        </button>

        {/* Left Image View */}
        <div className="md:w-1/2 relative bg-stone-50 flex items-center justify-center p-6">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-full object-contain max-h-[380px]"
          />
          <div className="absolute top-4 left-4 bg-amber-400 text-stone-900 font-extrabold text-xs px-3 py-1 rounded-full shadow">
            {product.badge || "Sati Special"}
          </div>
        </div>

        {/* Right Details */}
        <div className="md:w-1/2 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto custom-scrollbar space-y-4">
          <div>
            <div className="flex items-center space-x-2 text-xs font-bold text-amber-600 mb-1">
              <span>⭐ {product.rating} Rating</span>
              <span>•</span>
              <span>{product.reviewsCount} समीक्षाएं</span>
            </div>

            <h3 className="font-serif text-2xl font-bold text-stone-900 leading-snug">
              {product.title}
            </h3>
            <p className="text-xs text-stone-500 font-medium">
              {product.englishTitle}
            </p>

            <div className="mt-3 p-3 bg-amber-50 rounded-xl border border-amber-200 text-xs space-y-1">
              <p className="font-bold text-amber-900">स्वाद और विशेषता (Taste Profile):</p>
              <p className="text-amber-800">{product.tasteProfile}</p>
            </div>

            <p className="text-xs text-stone-600 mt-3 leading-relaxed">
              {product.description}
            </p>

            {/* Ingredients */}
            <div className="mt-4 pt-4 border-t border-stone-100 text-xs space-y-1">
              <span className="font-bold text-stone-800">शुद्ध सामग्री (Ingredients):</span>
              <p className="text-stone-500 leading-relaxed text-[11px]">
                {product.ingredients}
              </p>
            </div>

            <div className="mt-2 text-[11px] text-stone-500 flex items-center space-x-2">
              <span className="font-bold text-stone-700">सुरक्षित अवधि (Shelf Life):</span>
              <span>{product.shelfLife}</span>
            </div>

            {/* Jar size buttons */}
            <div className="mt-4">
              <span className="block text-xs font-bold text-stone-700 mb-1.5">
                मात्रा चुनें:
              </span>
              <div className="grid grid-cols-3 gap-2">
                {product.variants.map((v) => {
                  const isSelected = selectedWeight === v.weight;
                  return (
                    <button
                      key={v.weight}
                      onClick={() => onWeightChange(product.id, v.weight)}
                      className={`py-2 text-xs font-bold rounded-xl border transition-all ${
                        isSelected
                          ? "bg-emerald-900 text-white border-emerald-900 shadow-sm"
                          : "bg-stone-50 text-stone-700 border-stone-200 hover:bg-stone-100"
                      }`}
                    >
                      {v.weight} - ₹{v.price}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Modal Footer CTA */}
          <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
            <div>
              <span className="text-2xl font-black text-stone-900">
                ₹{currentVariant.price}
              </span>
              <span className="text-xs text-stone-400 line-through ml-2">
                ₹{currentVariant.originalPrice}
              </span>
            </div>

            <button
              onClick={() => {
                onAddToCart(product, selectedWeight);
                onClose();
              }}
              className="bg-emerald-900 hover:bg-emerald-950 text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-full shadow-lg flex items-center space-x-2 transition-all active:scale-95"
            >
              <Icon.Cart className="w-4 h-4" />
              <span>Basket me daalein</span>
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
