import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getUserPreferences, type UserPreferences, defaultPreferences } from '../data/user';

export const AnnouncementBar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [preferences, setPreferences] = useState<UserPreferences>(defaultPreferences);

  useEffect(() => {
    const userPrefs = getUserPreferences();
    setPreferences(userPrefs);
    
    const hasSeenAnnouncement = localStorage.getItem('hasSeenAnnouncement');
    if (userPrefs?.notifications?.announcement && 
        (!hasSeenAnnouncement || !userPrefs.notifications.announcement.showOnce) && 
        userPrefs.notifications.announcement.enabled) {
      setIsVisible(true);
    }
  }, []);

  useEffect(() => {
    // Update CSS variable for navbar positioning
    document.documentElement.style.setProperty(
      '--announcement-height',
      isVisible ? '40px' : '0px'
    );
  }, [isVisible]);

  const handleClose = () => {
    if (preferences?.notifications?.announcement?.showOnce) {
      localStorage.setItem('hasSeenAnnouncement', 'true');
    }
    setIsVisible(false);
  };

  if (!isVisible || !preferences?.notifications?.announcement) return null;

  const { message, textColor, backgroundColor, linkText, linkUrl } = preferences.notifications.announcement;

  return (
    <div 
      className="fixed top-0 left-0 right-0 z-50 h-10"
      style={{ backgroundColor }}
    >
      <div className="max-w-7xl mx-auto py-2 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center flex-wrap">
          <div className="flex-1 flex items-center justify-center min-w-0">
            <span
              className="text-sm font-medium"
              style={{ color: textColor }}
            >
              {message}
            </span>
            {linkText && linkUrl && (
              <Link
                to={linkUrl}
                className="ml-3 text-sm font-medium hover:opacity-80 transition-opacity underline"
                style={{ color: textColor }}
              >
                {linkText}
              </Link>
            )}
          </div>
          <button
            onClick={handleClose}
            className="ml-3 flex p-1 rounded-md hover:bg-white/10 transition-colors"
            style={{ color: textColor }}
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
};