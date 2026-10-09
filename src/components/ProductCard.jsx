import React from 'react';
import { Icon } from './Icons';

export default function ProductCard({
  product,
  selectedWeight,
  onWeightChange,
  onAddToCart,
  cartItem,
  onUpdateQuantity,
  onOpenModal,
  isWishlisted,
  onToggleWishlist,
  lang,
  t
}) {
  const currentVariant =
    product.variants.find((v) => v.weight === selectedWeight) || product.variants[0];
  const cartKey = `${product.id}-${selectedWeight}`;

  const title = lang === 'hi' ? product.title : product.titleEn;
  const description = lang === 'hi' ? product.description : product.descriptionEn;
  const badge = lang === 'hi' ? product.badge : product.badgeEn;

  return (
    <div className="bg-white rounded-3xl border border-stone-200/90 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group relative">
      
      {/* Product Image Box */}
      <div
        className="relative aspect-square w-full bg-stone-50 overflow-hidden cursor-pointer"
        onClick={() => onOpenModal(product)}
      >
        <img
          src={product.image}
          alt={title}
          className="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-500"
        />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 flex flex-col space-y-1.5 z-10">
          {badge && (
            <span className="bg-amber-400 text-stone-900 font-extrabold text-[10px] tracking-wide uppercase px-2.5 py-1 rounded-full shadow">
              {badge}
            </span>
          )}
          <span className="bg-emerald-900/90 text-white font-medium text-[10px] px-2 py-0.5 rounded-md backdrop-blur-sm">
            🌶️ {t.heatLevel}: {product.spiceLevel}/4
          </span>
        </div>

        {/* Wishlist & Quick View */}
        <div className="absolute top-3 right-3 flex flex-col space-y-2 z-10">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onToggleWishlist(product.id);
            }}
            className={`w-9 h-9 rounded-full flex items-center justify-center shadow-md transition-all ${
              isWishlisted
                ? "bg-red-500 text-white"
                : "bg-white/90 text-stone-700 hover:text-red-500 hover:bg-white"
            }`}
            title="Wishlist"
          >
            <Icon.Heart filled={isWishlisted} className="w-4 h-4" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              onOpenModal(product);
            }}
            className="w-9 h-9 rounded-full bg-white/90 hover:bg-white text-stone-700 hover:text-emerald-900 flex items-center justify-center shadow-md transition-all"
            title="Quick View"
          >
            <Icon.Eye className="w-4 h-4" />
          </button>
        </div>

        {/* Discount Tag */}
        <div className="absolute bottom-3 left-3 bg-red-600 text-white text-[11px] font-black px-2 py-0.5 rounded shadow">
          {currentVariant.discount}
        </div>
      </div>

      {/* Product Content */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        <div>
          {/* Rating */}
          <div className="flex items-center justify-between text-xs mb-1.5">
            <div className="flex items-center space-x-1 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded-md text-amber-900 font-bold">
              <Icon.Star className="w-3.5 h-3.5" />
              <span>{product.rating}</span>
            </div>
            <span className="text-[11px] text-stone-400 font-medium">
              ({product.reviewsCount} {t.reviewsCount})
            </span>
          </div>

          <h3
            onClick={() => onOpenModal(product)}
            className="font-serif text-lg font-bold text-stone-900 group-hover:text-emerald-900 transition-colors cursor-pointer leading-snug"
          >
            {title}
          </h3>

          <p className="text-xs text-stone-500 line-clamp-2 mt-2 leading-relaxed">
            {description}
          </p>
        </div>

        {/* Jar Size Selector */}
        <div>
          <span className="block text-[10px] font-bold uppercase tracking-wider text-stone-400 mb-1.5">
            {t.selectJarSize}
          </span>
          <div className="grid grid-cols-3 gap-1.5">
            {product.variants.map((v) => {
              const isSelected = selectedWeight === v.weight;
              return (
                <button
                  key={v.weight}
                  onClick={() => onWeightChange(product.id, v.weight)}
                  className={`py-1.5 text-xs font-bold rounded-xl border transition-all ${
                    isSelected
                      ? "bg-emerald-900 text-white border-emerald-900 shadow-sm"
                      : "bg-stone-50 border-stone-200 text-stone-700 hover:bg-stone-100"
                  }`}
                >
                  {v.weight}
                </button>
              );
            })}
          </div>
        </div>

        {/* Price & Add to Cart */}
        <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
          <div>
            <div className="flex items-baseline space-x-2">
              <span className="text-xl font-black text-stone-900">
                ₹{currentVariant.price}
              </span>
              <span className="text-xs text-stone-400 line-through">
                ₹{currentVariant.originalPrice}
              </span>
            </div>
            <span className="text-[10px] text-emerald-700 font-semibold block">
              {t.pureHomeMade}
            </span>
          </div>

          {cartItem ? (
            <div className="flex items-center space-x-2 bg-emerald-900 text-white rounded-full px-2 py-1 shadow">
              <button
                onClick={() => onUpdateQuantity(cartKey, -1)}
                className="w-6 h-6 rounded-full bg-emerald-950 hover:bg-black flex items-center justify-center text-xs font-bold"
              >
                <Icon.Minus className="w-3 h-3" />
              </button>
              <span className="font-bold text-xs px-1.5">{cartItem.quantity}</span>
              <button
                onClick={() => onUpdateQuantity(cartKey, 1)}
                className="w-6 h-6 rounded-full bg-emerald-950 hover:bg-black flex items-center justify-center text-xs font-bold"
              >
                <Icon.Plus className="w-3 h-3" />
              </button>
            </div>
          ) : (
            <button
              onClick={() => onAddToCart(product, selectedWeight)}
              className="bg-emerald-900 hover:bg-emerald-950 text-white font-bold text-xs px-4 py-2.5 rounded-full shadow hover:shadow-md transition-all flex items-center space-x-1.5 active:scale-95"
            >
              <Icon.Plus className="w-3.5 h-3.5" />
              <span>{t.addToCart}</span>
            </button>
          )}
        </div>

      </div>
    </div>
  );
}
