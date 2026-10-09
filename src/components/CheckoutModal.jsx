import React, { useState } from 'react';
import { Icon } from './Icons';

export default function CheckoutModal({ isOpen, onClose, total, onSuccess, t }) {
  const [formData, setFormData] = useState({
    name: 'Aarav Sharma',
    phone: '+91 9876543210',
    pincode: '110001',
    address: 'Flat 402, Green Park Main, New Delhi',
    payment: 'upi'
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    onSuccess();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="relative bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-stone-200">
        
        <button onClick={onClose} className="absolute top-5 right-5 text-stone-400 hover:text-stone-700">
          <Icon.Close />
        </button>

        <div className="space-y-1 mb-6">
          <span className="text-[11px] font-bold text-emerald-800 uppercase tracking-wider">Fast 2-Minute Checkout</span>
          <h3 className="font-serif text-2xl font-extrabold text-stone-900">
            {t.checkout.heading}
          </h3>
          <p className="text-xs text-stone-500">Total: <strong className="text-emerald-950 font-black text-sm">₹{total}</strong></p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 text-xs">
          <div>
            <label className="block font-bold text-stone-700 mb-1">{t.checkout.name}</label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-3.5 py-2.5 bg-stone-50 rounded-xl border border-stone-300 focus:outline-none focus:border-emerald-800 text-stone-800"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block font-bold text-stone-700 mb-1">{t.checkout.phone}</label>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-3.5 py-2.5 bg-stone-50 rounded-xl border border-stone-300 focus:outline-none focus:border-emerald-800 text-stone-800"
              />
            </div>
            <div>
              <label className="block font-bold text-stone-700 mb-1">{t.checkout.pincode}</label>
              <input
                type="text"
                required
                value={formData.pincode}
                onChange={(e) => setFormData({ ...formData, pincode: e.target.value })}
                className="w-full px-3.5 py-2.5 bg-stone-50 rounded-xl border border-stone-300 focus:outline-none focus:border-emerald-800 text-stone-800"
              />
            </div>
          </div>

          <div>
            <label className="block font-bold text-stone-700 mb-1">{t.checkout.address}</label>
            <textarea
              rows="2"
              required
              value={formData.address}
              onChange={(e) => setFormData({ ...formData, address: e.target.value })}
              className="w-full px-3.5 py-2.5 bg-stone-50 rounded-xl border border-stone-300 focus:outline-none focus:border-emerald-800 text-stone-800"
            ></textarea>
          </div>

          <div>
            <label className="block font-bold text-stone-700 mb-2">{t.checkout.paymentMode}</label>
            <div className="space-y-2">
              <label className="flex items-center space-x-3 p-3 bg-stone-50 rounded-xl border border-stone-200 cursor-pointer hover:bg-stone-100">
                <input
                  type="radio"
                  name="payment"
                  checked={formData.payment === 'upi'}
                  onChange={() => setFormData({ ...formData, payment: 'upi' })}
                />
                <span className="font-bold text-stone-800">{t.checkout.upi}</span>
              </label>
              <label className="flex items-center space-x-3 p-3 bg-stone-50 rounded-xl border border-stone-200 cursor-pointer hover:bg-stone-100">
                <input
                  type="radio"
                  name="payment"
                  checked={formData.payment === 'cod'}
                  onChange={() => setFormData({ ...formData, payment: 'cod' })}
                />
                <span className="font-bold text-stone-800">{t.checkout.cod}</span>
              </label>
            </div>
          </div>

          <button
            type="submit"
            className="w-full mt-4 bg-emerald-950 hover:bg-black text-white font-extrabold py-3.5 rounded-full shadow-lg transition-all text-sm flex items-center justify-center space-x-2"
          >
            <span>{t.checkout.confirmBtn} (Pay ₹{total})</span>
            <Icon.Check />
          </button>
        </form>

      </div>
    </div>
  );
}
