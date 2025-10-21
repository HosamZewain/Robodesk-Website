
import React, { useState, useEffect } from 'react';

const COOKIE_CONSENT_KEY = 'robodesk_cookie_consent';

const content = {
  en: {
    message: "We use cookies to enhance your browsing experience, serve personalized ads or content, and analyze our traffic. By clicking \"Accept All\", you consent to our use of cookies.",
    accept: "Accept All",
    decline: "Decline",
  },
  ar: {
    message: "نحن نستخدم ملفات تعريف الارتباط لتحسين تجربة التصفح الخاصة بك، وتقديم إعلانات أو محتوى مخصص، وتحليل حركة المرور لدينا. بالنقر على \"قبول الكل\"، فإنك توافق على استخدامنا لملفات تعريف الارتباط.",
    accept: "قبول الكل",
    decline: "رفض",
  }
};

const CookieConsentBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [language, setLanguage] = useState<'en' | 'ar'>('en');

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleConsent = (consentValue: 'accepted' | 'declined') => {
    localStorage.setItem(COOKIE_CONSENT_KEY, consentValue);
    setIsVisible(false);
    if (consentValue === 'accepted') {
      // Logic to initialize analytics scripts would go here
      console.log("Cookie consent accepted. Initializing analytics.");
    }
  };

  if (!isVisible) return null;

  const currentContent = content[language];
  const isRtl = language === 'ar';

  return (
    <div dir={isRtl ? 'rtl' : 'ltr'} className="fixed bottom-0 inset-x-0 pb-2 sm:pb-5 z-50">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="p-4 rounded-lg bg-gray-800 text-white shadow-lg sm:p-6 flex items-center justify-between flex-wrap gap-4">
          <p className="flex-1 font-medium text-sm">{currentContent.message}</p>
          <div className="flex-shrink-0 flex items-center gap-4">
             <button onClick={() => setLanguage(lang => lang === 'en' ? 'ar' : 'en')} className="text-xs font-semibold hover:underline">
              {language === 'en' ? 'العربية' : 'English'}
            </button>
            <button onClick={() => handleConsent('declined')} className="px-4 py-2 rounded-md text-sm font-medium bg-gray-600 hover:bg-gray-500">
              {currentContent.decline}
            </button>
            <button onClick={() => handleConsent('accepted')} className="px-4 py-2 rounded-md text-sm font-medium bg-gradient-to-r from-orange-500 to-violet-600 hover:opacity-90">
              {currentContent.accept}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsentBanner;
