import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { AppContent } from './AppContent';
import { DiscordNotice } from './components/DiscordNotice';
import { AnnouncementBar } from './components/AnnouncementBar';

function App() {
  return (
    <Router>
      <AnnouncementBar />
      <AppContent />
      <DiscordNotice />
    </Router>
  );
}

export default App;
