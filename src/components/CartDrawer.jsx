import React, { useState } from 'react';
import { Icon } from './Icons';

export default function CartDrawer({
  isOpen,
  onClose,
  cart,
  onUpdateQuantity,
  onRemoveItem,
  subtotal,
  onOpenCheckout
}) {
  const [couponCode, setCouponCode] = useState("");
  const [discountPercent, setDiscountPercent] = useState(0);
  const [couponMessage, setCouponMessage] = useState("");

  if (!isOpen) return null;

  const freeDeliveryThreshold = 499;
  const deliveryFee = subtotal >= freeDeliveryThreshold || subtotal === 0 ? 0 : 49;
  const discountAmount = Math.round((subtotal * discountPercent) / 100);
  const grandTotal = Math.max(0, subtotal - discountAmount + deliveryFee);
  const amountNeeded = Math.max(0, freeDeliveryThreshold - subtotal);

  const handleApplyCoupon = (e) => {
    e.preventDefault();
    const code = couponCode.trim().toUpperCase();
    if (code === "SATI10") {
      setDiscountPercent(10);
      setCouponMessage("✓ 'SATI10' applied! 10% discount added!");
    } else {
      setCouponMessage("Invalid coupon code. Try using 'SATI10'!");
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col">
          
          {/* Header */}
          <div className="p-5 border-b border-stone-200 flex items-center justify-between bg-stone-50">
            <div className="flex items-center space-x-2">
              <Icon.Cart className="w-5 h-5 text-emerald-950" />
              <h3 className="font-serif text-lg font-bold text-stone-900">
                Aapka Pickle Basket ({cart.reduce((s, i) => s + i.quantity, 0)})
              </h3>
            </div>
            <button
              onClick={onClose}
              className="p-1 rounded-full text-stone-500 hover:text-stone-900 hover:bg-stone-200"
            >
              <Icon.Close />
            </button>
          </div>

          {/* Free Shipping Bar */}
          <div className="p-4 bg-amber-50 border-b border-amber-200 text-xs">
            {amountNeeded > 0 ? (
              <div>
                <div className="flex justify-between font-bold text-amber-900 mb-1">
                  <span>₹{amountNeeded} ka aur add karein FREE delivery ke liye! 🚚</span>
                  <span>{Math.round(((freeDeliveryThreshold - amountNeeded) / freeDeliveryThreshold) * 100)}%</span>
                </div>
                <div className="w-full h-2 bg-amber-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-amber-500"
                    style={{ width: `${Math.min(100, ((freeDeliveryThreshold - amountNeeded) / freeDeliveryThreshold) * 100)}%` }}
                  ></div>
                </div>
              </div>
            ) : (
              <div className="flex items-center space-x-1.5 text-emerald-800 font-bold">
                <Icon.Check className="w-4 h-4 text-emerald-600" />
                <span>Mubaarak! Aapko mil rahi hai FREE All-India Delivery! 🎉</span>
              </div>
            )}
          </div>

          {/* Cart Item List */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4 custom-scrollbar">
            {cart.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-4 p-8">
                <div className="text-6xl">🫙</div>
                <h4 className="font-bold text-stone-800 text-lg">Basket Khaali Hai</h4>
                <p className="text-stone-500 text-xs">
                  Ghar ke bane shuddh aachar ke bina khana adhura hai. Bestsellers me se choose karein!
                </p>
                <button
                  onClick={onClose}
                  className="bg-emerald-900 text-white font-bold text-xs px-6 py-3 rounded-full shadow hover:bg-emerald-800"
                >
                  Explore Flavors
                </button>
              </div>
            ) : (
              cart.map((item) => (
                <div
                  key={item.key}
                  className="flex items-center space-x-3.5 p-3 bg-stone-50 rounded-2xl border border-stone-200"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-16 h-16 rounded-xl object-contain bg-white border border-stone-200 shrink-0 p-1"
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-xs sm:text-sm text-stone-900 truncate">
                      {item.title}
                    </h4>
                    <p className="text-[11px] font-semibold text-emerald-800">
                      Jar Size: {item.weight}
                    </p>
                    <div className="flex items-center space-x-2 mt-1">
                      <span className="font-bold text-stone-900 text-xs">
                        ₹{item.price * item.quantity}
                      </span>
                      <span className="text-[10px] text-stone-400 line-through">
                        ₹{item.originalPrice * item.quantity}
                      </span>
                    </div>
                  </div>

                  {/* Quantity Controller */}
                  <div className="flex items-center space-x-1.5 bg-white border border-stone-200 rounded-lg p-1">
                    <button
                      onClick={() => onUpdateQuantity(item.key, -1)}
                      className="w-5 h-5 rounded flex items-center justify-center text-stone-600 hover:bg-stone-100"
                    >
                      <Icon.Minus className="w-3 h-3" />
                    </button>
                    <span className="text-xs font-bold px-1">{item.quantity}</span>
                    <button
                      onClick={() => onUpdateQuantity(item.key, 1)}
                      className="w-5 h-5 rounded flex items-center justify-center text-stone-600 hover:bg-stone-100"
                    >
                      <Icon.Plus className="w-3 h-3" />
                    </button>
                  </div>

                  {/* Remove */}
                  <button
                    onClick={() => onRemoveItem(item.key)}
                    className="text-stone-400 hover:text-red-500 p-1"
                  >
                    <Icon.Trash />
                  </button>
                </div>
              ))
            )}
          </div>

          {/* Footer Summary */}
          {cart.length > 0 && (
            <div className="p-5 border-t border-stone-200 bg-stone-50/80 space-y-3.5">
              
              {/* Promo input */}
              <form onSubmit={handleApplyCoupon} className="flex gap-2">
                <input
                  type="text"
                  value={couponCode}
                  onChange={(e) => setCouponCode(e.target.value)}
                  placeholder="Coupon: SATI10"
                  className="flex-1 px-3 py-2 text-xs bg-white border border-stone-300 rounded-xl uppercase font-bold text-stone-800 outline-none"
                />
                <button
                  type="submit"
                  className="bg-emerald-950 text-white text-xs font-bold px-4 py-2 rounded-xl hover:bg-black"
                >
                  Apply
                </button>
              </form>
              {couponMessage && (
                <p className={`text-[11px] font-bold ${discountPercent > 0 ? "text-emerald-700" : "text-red-600"}`}>
                  {couponMessage}
                </p>
              )}

              {/* Price Details */}
              <div className="space-y-1.5 text-xs text-stone-600 pt-2 border-t border-stone-200">
                <div className="flex justify-between">
                  <span>Subtotal:</span>
                  <span className="font-semibold text-stone-900">₹{subtotal}</span>
                </div>
                {discountAmount > 0 && (
                  <div className="flex justify-between text-emerald-700 font-semibold">
                    <span>Coupon Discount (10%):</span>
                    <span>-₹{discountAmount}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>Delivery Charges:</span>
                  <span className="font-semibold text-stone-900">
                    {deliveryFee === 0 ? <span className="text-emerald-700 font-bold">FREE</span> : `₹${deliveryFee}`}
                  </span>
                </div>
                <div className="flex justify-between text-sm font-black text-stone-900 pt-2 border-t border-stone-200">
                  <span>Grand Total:</span>
                  <span className="text-base text-emerald-950">₹{grandTotal}</span>
                </div>
              </div>

              {/* Checkout Button */}
              <button
                onClick={() => {
                  onClose();
                  onOpenCheckout(grandTotal);
                }}
                className="w-full bg-emerald-950 hover:bg-black text-white font-extrabold py-3.5 rounded-full shadow-lg transition-all flex items-center justify-center space-x-2 text-sm"
              >
                <span>Proceed to Checkout</span>
                <Icon.ArrowRight />
              </button>

            </div>
          )}

        </div>
      </div>
    </div>
  );
}
