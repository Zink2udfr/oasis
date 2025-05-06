// User preferences and settings

export type NotificationPosition = 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left' | 'center';

export interface NotificationSettings {
  position: NotificationPosition;
  textColor: string;
  enabled: boolean;
  showOnce: boolean;
  message: string;
  title: string;
  discordLink: string;
}

export interface AnnouncementSettings {
  enabled: boolean;
  showOnce: boolean;
  message: string;
  textColor: string;
  backgroundColor: string;
  linkText: string;
  linkUrl: string;
}

export interface UserPreferences {
  security: {
    loadingScreen: boolean;
  };
  notifications: {
    discord: NotificationSettings;
    announcement: AnnouncementSettings;
  };
}

export const defaultPreferences: UserPreferences = {
  security: {
    loadingScreen: true
  },
  notifications: {
    discord: {
      position: 'top-right',
      textColor: '#87CEEB',
      enabled: true,
      showOnce: true,
      message: 'Our previous Discord server has been terminated. Please join our new community server for continued support and updates.',
      title: 'Discord Server Notice',
      discordLink: 'https://discord.gg/oasisud'
    },
    announcement: {
      enabled: false,
      showOnce: false,
      message: '🎉 Release Sale: Get 10% off with code NEWDISCORD',
      textColor: '#ffffff',
      backgroundColor: '#e74180', // Darker blue
    }
  }
};

export const getUserPreferences = (): UserPreferences => {
  const stored = localStorage.getItem('userPreferences');
  if (stored) {
    return JSON.parse(stored);
  }
  return defaultPreferences;
};

export const saveUserPreferences = (preferences: UserPreferences) => {
  localStorage.setItem('userPreferences', JSON.stringify(preferences));
};
