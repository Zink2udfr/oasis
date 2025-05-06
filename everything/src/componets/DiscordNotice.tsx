import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { getUserPreferences, type UserPreferences, defaultPreferences } from '../data/user';

export const DiscordNotice = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [preferences, setPreferences] = useState<UserPreferences>(defaultPreferences);

  useEffect(() => {
    // Initialize preferences
    const userPrefs = getUserPreferences();
    setPreferences(userPrefs);
    
    // Check if notice should be shown
    const hasSeenNotice = localStorage.getItem('hasSeenDiscordNotice');
    if (userPrefs?.notifications?.discord && 
        (!hasSeenNotice || !userPrefs.notifications.discord.showOnce) && 
        userPrefs.notifications.discord.enabled) {
      setIsVisible(true);
    }
  }, []);

  const handleClose = () => {
    if (preferences?.notifications?.discord?.showOnce) {
      localStorage.setItem('hasSeenDiscordNotice', 'true');
    }
    setIsVisible(false);
  };

  // Don't render if preferences aren't loaded or discord notifications aren't configured
  if (!isVisible || !preferences?.notifications?.discord) return null;

  const position = preferences.notifications.discord.position === 'center' 
    ? 'fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm'
    : `fixed ${preferences.notifications.discord.position.split('-').join(' ')} m-4`;

  const noticeClass = preferences.notifications.discord.position === 'center'
    ? 'w-full max-w-md mx-4'
    : 'max-w-md';

  return (
    <div className={`z-50 ${position}`}>
      <div className={`${noticeClass} bg-zinc-900/95 backdrop-blur-sm border border-red-500/20 rounded-lg p-4 shadow-lg animate-fade-in`}>
        <div className="flex items-start justify-between">
          <div className="flex-1 mr-4">
            <h3 
              className="text-lg font-semibold mb-2"
              style={{ color: preferences.notifications.discord.textColor }}
            >
              {preferences.notifications.discord.title}
            </h3>
            <p className="text-gray-300">
              {preferences.notifications.discord.message}
            </p>
            <a 
              href={preferences.notifications.discord.discordLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-3 font-medium hover:opacity-80 transition-opacity"
              style={{ color: preferences.notifications.discord.textColor }}
            >
              Join New Server →
            </a>
          </div>
          <button
            onClick={handleClose}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};
