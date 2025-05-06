import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "What should I do if I have an issue?",
    answer: "If you encounter any issues, our support team is available 24/7 through our Discord server. Join our community and create a ticket in the support channel for immediate assistance."
  },
  {
    question: "How can I confirm if the software works on my PC?",
    answer: "Check our system requirements page or contact our support team for a detailed compatibility check. We ensure our software works on most modern Windows systems."
  },
  {
    question: "How fast is delivery?",
    answer: "Delivery is instant! Once your payment is confirmed, you'll receive immediate access to your purchase through our automated system."
  },
  {
    question: "What's the difference between an Internal and External product?",
    answer: "Internal products run within the game process, while External products run as separate applications. Each has its own advantages - contact support for detailed guidance."
  },
  {
    question: "Why should I trust you?",
    answer: "We've been in business since 2019, serving thousands of satisfied customers. Our reputation speaks for itself through our community reviews and continuous support."
  }
];

export const Discord = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="relative">
      {/* Discord Section */}
      <div className="relative py-24 bg-[#18181B]">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center">
            <h2 className="text-5xl font-bold mb-6">
              Join The <span className="text-sky-400">Community</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl">
              Become a member of our Discord server to stay up-to-date with the latest news, updates, and announcements. 
              Our community is a great place to meet other players, share your experiences, and get help from our support team.
            </p>
            <a
              href="https://discord.gg/havenud"
              className="inline-flex items-center px-8 py-4 bg-sky-600 hover:bg-sky-500 text-white font-medium rounded-lg transition-colors duration-200"
            >
              Join Discord
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 127.14 96.36" fill="currentColor">
                <path d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="relative py-24 bg-[#18181B]">
        {/* Section Line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
        
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 opacity-[0.15]" 
            style={{
              backgroundImage: `
                radial-gradient(circle at 25% 25%, white 1px, transparent 1px),
                radial-gradient(circle at 75% 75%, white 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px',
              animation: 'twinkle 4s infinite'
            }}>
          </div>
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold">
              Frequently Asked <span className="text-sky-400">Questions</span>
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-zinc-900/90 border border-white/10 rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-white/5 transition-colors"
                >
                  <span className="text-lg font-medium">{faq.question}</span>
                  <ChevronDown 
                    className={`h-5 w-5 transform transition-transform ${
                      openFaq === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-4 text-gray-300">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
