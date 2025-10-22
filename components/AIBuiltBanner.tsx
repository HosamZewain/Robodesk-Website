import React from 'react';

const AIBuiltBanner: React.FC = () => {
  return (
    <div
      className="fixed top-10 -right-24 z-[100] transform rotate-45 bg-gradient-to-r from-orange-500 to-violet-600 text-white font-bold text-center py-3 w-80 shadow-xl text-lg"
      aria-label="Built with love by AI"
    >
      <div className="flex items-center justify-center gap-2">
        <span>Built With ❤️ By</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6" aria-hidden="true">
            <path d="M12 8V4H8"></path>
            <rect width="16" height="12" x="4" y="8" rx="2"></rect>
            <path d="M2 14h2"></path>
            <path d="M20 14h2"></path>
            <path d="M15 13v2"></path>
            <path d="M9 13v2"></path>
        </svg>
      </div>
    </div>
  );
};

export default AIBuiltBanner;