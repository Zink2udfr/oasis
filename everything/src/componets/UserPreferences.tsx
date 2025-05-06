import React, { useState, useEffect } from 'react';
import { Settings } from 'lucide-react';
import { getUserPreferences, saveUserPreferences, type UserPreferences, type NotificationPosition } from '../data/user';

export const UserPreferencesModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [preferences, setPreferences] = useState<UserPreferences>(getUserPreferences());

  const positions: NotificationPosition[] = ['bottom-right', 'bottom-left', 'top-right', 'top-left', 'center'];

  const handleToggleLoadingScreen = () => {
    const newPreferences = {
      ...preferences,
      security: {
        ...preferences.security,
        loadingScreen: !preferences.security.loadingScreen
      }
    };
    setPreferences(newPreferences);
    saveUserPreferences(newPreferences);
  };

  const handleDiscordChange = (field: keyof typeof preferences.notifications.discord, value: string | boolean) => {
    const newPreferences = {
      ...preferences,
      notifications: {
        ...preferences.notifications,
        discord: {
          ...preferences.notifications.discord,
          [field]: value
        }
      }
    };
    setPreferences(newPreferences);
    saveUserPreferences(newPreferences);
  };

  const handleAnnouncementChange = (field: keyof typeof preferences.notifications.announcement, value: string | boolean) => {
    const newPreferences = {
      ...preferences,
      notifications: {
        ...preferences.notifications,
        announcement: {
          ...preferences.notifications.announcement,
          [field]: value
        }
      }
    };
    setPreferences(newPreferences);
    saveUserPreferences(newPreferences);
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 p-3 bg-zinc-800 hover:bg-zinc-700 rounded-full shadow-lg transition-colors"
        title="User Preferences"
      >
        <Settings className="w-6 h-6" />
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="bg-zinc-900 border border-white/10 rounded-lg p-6 w-full max-w-md max-h-[90vh] overflow-y-auto">
            <h2 className="text-2xl font-bold mb-4">User Preferences</h2>
            
            <div className="space-y-6">
              {/* Security Settings */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Security</h3>
                <div className="flex items-center justify-between">
                  <label className="flex items-center space-x-2">
                    <span>Security Check Screen</span>
                    <span className="text-sm text-gray-400">(5% chance on page change)</span>
                  </label>
                  <button
                    onClick={handleToggleLoadingScreen}
                    className={`relative w-12 h-6 rounded-full transition-colors ${
                      preferences.security.loadingScreen ? 'bg-pink-600' : 'bg-zinc-700'
                    }`}
                  >
                    <div
                      className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform ${
                        preferences.security.loadingScreen ? 'translate-x-6' : 'translate-x-0'
                      }`}
                    />
                  </button>
                </div>
              </div>

              {/* Announcement Settings */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Announcement Bar</h3>
                
                {/* Enable/Disable */}
                <div className="flex items-center justify-between">
                  <label>Enable Announcement</label>
                  <button
                    onClick={() => handleAnnouncementChange('enabled', !preferences.notifications.announcement.enabled)}
                    className={`relative w-12 h-6 rounded-full transition-colors ${
                      preferences.notifications.announcement.enabled ? 'bg-pink-600' : 'bg-zinc-700'
                    }`}
                  >
                    <div
                      className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform ${
                        preferences.notifications.announcement.enabled ? 'translate-x-6' : 'translate-x-0'
                      }`}
                    />
                  </button>
                </div>

                {/* Show Once */}
                <div className="flex items-center justify-between">
                  <label>Show Only Once</label>
                  <button
                    onClick={() => handleAnnouncementChange('showOnce', !preferences.notifications.announcement.showOnce)}
                    className={`relative w-12 h-6 rounded-full transition-colors ${
                      preferences.notifications.announcement.showOnce ? 'bg-pink-600' : 'bg-zinc-700'
                    }`}
                  >
                    <div
                      className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform ${
                        preferences.notifications.announcement.showOnce ? 'translate-x-6' : 'translate-x-0'
                      }`}
                    />
                  </button>
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label>Announcement Message</label>
                  <textarea
                    value={preferences.notifications.announcement.message}
                    onChange={(e) => handleAnnouncementChange('message', e.target.value)}
                    rows={2}
                    className="w-full px-3 py-2 bg-zinc-800 rounded-lg border border-white/10 focus:border-pink-500 focus:outline-none resize-none"
                  />
                </div>

                {/* Link Text */}
                <div className="space-y-2">
                  <label>Link Text</label>
                  <input
                    type="text"
                    value={preferences.notifications.announcement.linkText}
                    onChange={(e) => handleAnnouncementChange('linkText', e.target.value)}
                    className="w-full px-3 py-2 bg-zinc-800 rounded-lg border border-white/10 focus:border-pink-500 focus:outline-none"
                  />
                </div>

                {/* Link URL */}
                <div className="space-y-2">
                  <label>Link URL</label>
                  <input
                    type="text"
                    value={preferences.notifications.announcement.linkUrl}
                    onChange={(e) => handleAnnouncementChange('linkUrl', e.target.value)}
                    className="w-full px-3 py-2 bg-zinc-800 rounded-lg border border-white/10 focus:border-pink-500 focus:outline-none"
                  />
                </div>

                {/* Text Color */}
                <div className="space-y-2">
                  <label>Text Color</label>
                  <input
                    type="color"
                    value={preferences.notifications.announcement.textColor}
                    onChange={(e) => handleAnnouncementChange('textColor', e.target.value)}
                    className="w-full h-10 rounded-lg cursor-pointer"
                  />
                </div>

                {/* Background Color */}
                <div className="space-y-2">
                  <label>Background Color</label>
                  <input
                    type="color"
                    value={preferences.notifications.announcement.backgroundColor}
                    onChange={(e) => handleAnnouncementChange('backgroundColor', e.target.value)}
                    className="w-full h-10 rounded-lg cursor-pointer"
                  />
                </div>
              </div>

              {/* Discord Notification Settings */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Discord Notification</h3>
                
                {/* Enable/Disable */}
                <div className="flex items-center justify-between">
                  <label>Enable Notification</label>
                  <button
                    onClick={() => handleDiscordChange('enabled', !preferences.notifications.discord.enabled)}
                    className={`relative w-12 h-6 rounded-full transition-colors ${
                      preferences.notifications.discord.enabled ? 'bg-pink-600' : 'bg-zinc-700'
                    }`}
                  >
                    <div
                      className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform ${
                        preferences.notifications.discord.enabled ? 'translate-x-6' : 'translate-x-0'
                      }`}
                    />
                  </button>
                </div>

                {/* Show Once */}
                <div className="flex items-center justify-between">
                  <label>Show Only Once</label>
                  <button
                    onClick={() => handleDiscordChange('showOnce', !preferences.notifications.discord.showOnce)}
                    className={`relative w-12 h-6 rounded-full transition-colors ${
                      preferences.notifications.discord.showOnce ? 'bg-pink-600' : 'bg-zinc-700'
                    }`}
                  >
                    <div
                      className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform ${
                        preferences.notifications.discord.showOnce ? 'translate-x-6' : 'translate-x-0'
                      }`}
                    />
                  </button>
                </div>

                {/* Position */}
                <div className="space-y-2">
                  <label>Position</label>
                  <select
                    value={preferences.notifications.discord.position}
                    onChange={(e) => handleDiscordChange('position', e.target.value as NotificationPosition)}
                    className="w-full px-3 py-2 bg-zinc-800 rounded-lg border border-white/10 focus:border-pink-500 focus:outline-none"
                  >
                    {positions.map((pos) => (
                      <option key={pos} value={pos}>
                        {pos.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Title */}
                <div className="space-y-2">
                  <label>Notification Title</label>
                  <input
                    type="text"
                    value={preferences.notifications.discord.title}
                    onChange={(e) => handleDiscordChange('title', e.target.value)}
                    className="w-full px-3 py-2 bg-zinc-800 rounded-lg border border-white/10 focus:border-pink-500 focus:outline-none"
                  />
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label>Notification Message</label>
                  <textarea
                    value={preferences.notifications.discord.message}
                    onChange={(e) => handleDiscordChange('message', e.target.value)}
                    rows={3}
                    className="w-full px-3 py-2 bg-zinc-800 rounded-lg border border-white/10 focus:border-pink-500 focus:outline-none resize-none"
                  />
                </div>

                {/* Discord Link */}
                <div className="space-y-2">
                  <label>Discord Server Link</label>
                  <input
                    type="url"
                    value={preferences.notifications.discord.discordLink}
                    onChange={(e) => handleDiscordChange('discordLink', e.target.value)}
                    placeholder="https://discord.gg/your-server"
                    className="w-full px-3 py-2 bg-zinc-800 rounded-lg border border-white/10 focus:border-pink-500 focus:outline-none"
                  />
                </div>

                {/* Color */}
                <div className="space-y-2">
                  <label>Text Color</label>
                  <input
                    type="color"
                    value={preferences.notifications.discord.textColor}
                    onChange={(e) => handleDiscordChange('textColor', e.target.value)}
                    className="w-full h-10 rounded-lg cursor-pointer"
                  />
                </div>
              </div>
            </div>

            <div className="mt-6 flex justify-end">
              <button
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 bg-pink-600 hover:bg-blue-500 rounded-lg transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
