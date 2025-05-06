import React, { useEffect, useState } from 'react';
import { Bot } from 'lucide-react';
import { generateRayId } from '../utils/security';

export const LoadingScreen = () => {
  const [ip, setIp] = useState<string>('');
  const [rayId] = useState(() => generateRayId());

  useEffect(() => {
    // Fetch real IP address
    fetch('https://api.ipify.org?format=json')
      .then(response => response.json())
      .then(data => setIp(data.ip))
      .catch(() => setIp('Unknown'));
  }, []);

  return (
    <div className="fixed inset-0 z-50 bg-zinc-900 flex flex-col items-center justify-center">
      <Bot className="w-16 h-16 text-sky-400 animate-bounce mb-8" />
      <h1 className="text-4xl font-bold mb-4">Checking your browser...</h1>
      <p className="text-xl text-gray-400 max-w-2xl text-center mb-8">
        We need to check your browser to make sure that you're a legitimate user, this won't
        take long and you'll be directed to your requested content shortly...
      </p>
      <div className="w-64 h-2 bg-zinc-800 rounded-full overflow-hidden mb-8">
        <div className="h-full bg-sky-400 animate-[loading_2s_ease-in-out_infinite]"></div>
      </div>
      <p className="text-gray-500">Waiting for havenservices.cc to respond...</p>
      <p className="text-gray-600 text-sm mt-8">
        Ray ID: {rayId} • IP address: {ip || '...'}
      </p>
    </div>
  );
};
