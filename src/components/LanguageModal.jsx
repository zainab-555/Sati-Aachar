import React from 'react';

export default function LanguageModal({ isOpen, onSelectLanguage }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-fadeIn">
      <div className="relative bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-2xl border border-stone-200 text-center space-y-6">
        
        {/* Brand Icon */}
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-900 to-emerald-950 mx-auto flex items-center justify-center shadow-lg border border-amber-400/30">
          <span className="font-serif text-3xl font-bold text-amber-300">सा</span>
        </div>

        {/* Title */}
        <div className="space-y-1.5">
          <h2 className="font-serif text-2xl font-extrabold text-stone-900">
            Welcome to Sati Aachar
          </h2>
          <p className="text-xs text-stone-500 font-medium">
            Please choose your preferred language / अपनी भाषा चुनें:
          </p>
        </div>

        {/* Language Selection Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
          
          {/* Hindi Option */}
          <button
            onClick={() => onSelectLanguage('hi')}
            className="group p-4 rounded-2xl border-2 border-emerald-900/30 hover:border-emerald-900 bg-emerald-50/50 hover:bg-emerald-900 hover:text-white transition-all text-left flex flex-col justify-between shadow-sm hover:shadow-md"
          >
            <div>
              <div className="text-2xl mb-1">🇮🇳</div>
              <h3 className="font-serif font-black text-lg text-emerald-950 group-hover:text-amber-300">
                हिन्दी
              </h3>
            </div>
            <p className="text-[11px] text-emerald-800/80 group-hover:text-emerald-100 mt-2 font-medium">
              पारंपरिक देसी स्वाद व घरेलू अचार
            </p>
          </button>

          {/* English Option */}
          <button
            onClick={() => onSelectLanguage('en')}
            className="group p-4 rounded-2xl border-2 border-amber-600/30 hover:border-amber-700 bg-amber-50/50 hover:bg-emerald-950 hover:text-white transition-all text-left flex flex-col justify-between shadow-sm hover:shadow-md"
          >
            <div>
              <div className="text-2xl mb-1">🇬🇧</div>
              <h3 className="font-serif font-black text-lg text-amber-900 group-hover:text-amber-300">
                English
              </h3>
            </div>
            <p className="text-[11px] text-amber-800/80 group-hover:text-stone-200 mt-2 font-medium">
              Authentic Indian homemade pickles
            </p>
          </button>

        </div>

        <p className="text-[10px] text-stone-400">
          💡 You can also switch languages anytime from the top navigation bar!
        </p>

      </div>
    </div>
  );
}
