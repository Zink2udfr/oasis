import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getUserPreferences } from '../data/user';

// Generate a random Ray ID
export const generateRayId = () => {
  const chars = '0123456789abcdef';
  let result = '';
  for (let i = 0; i < 16; i++) {
    result += chars[Math.floor(Math.random() * chars.length)];
  }
  return result;
};

// Security check on page change
export const useSuspiciousActivity = () => {
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    const userPrefs = getUserPreferences();
    
    // Only proceed if loading screen is enabled in preferences
    if (!userPrefs.security.loadingScreen) return;

    // 3% chance of security check on page change
    const shouldCheck = Math.random() < 0.04;
    
    if (shouldCheck) {
      setIsLoading(true);
      const timeout = setTimeout(() => {
        setIsLoading(false);
      }, 2000);
      
      return () => clearTimeout(timeout);
    }
  }, [location.pathname]); // Only run effect when path changes

  return isLoading;
};
