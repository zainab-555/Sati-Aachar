import React from 'react';

export const Icon = {
  Search: (props) => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
    </svg>
  ),
  Cart: (props) => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/>
    </svg>
  ),
  User: (props) => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
    </svg>
  ),
  Heart: ({ filled, ...props }) => (
    <svg className="w-5 h-5" fill={filled ? "currentColor" : "none"} stroke="currentColor" viewBox="0 0 24 24" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
    </svg>
  ),
  Star: (props) => (
    <svg className="w-4 h-4 text-amber-400 fill-amber-400" viewBox="0 0 20 20" {...props}>
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
    </svg>
  ),
  ShieldCheck: (props) => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
    </svg>
  ),
  Truck: (props) => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"/>
    </svg>
  ),
  Sun: (props) => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/>
    </svg>
  ),
  Sparkles: (props) => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.286L13 21l-2.286-6.857L5 12l5.714-2.286L13 3z"/>
    </svg>
  ),
  Plus: (props) => (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"/>
    </svg>
  ),
  Minus: (props) => (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4"/>
    </svg>
  ),
  Close: (props) => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
    </svg>
  ),
  Eye: (props) => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
    </svg>
  ),
  ArrowRight: (props) => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
    </svg>
  ),
  Check: (props) => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
    </svg>
  ),
  Trash: (props) => (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
    </svg>
  ),
  Menu: (props) => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>
    </svg>
  )
};
