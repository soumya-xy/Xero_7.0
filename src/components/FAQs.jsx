import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQs = () => {
  const faqs = [
    
    {
      question: "How can I support a creator?",
      answer: "Connect your Aptos Petra Wallet, browse creators, select a support tier, and complete your contribution using Aptos tokens (APT)."
    },
    
    {
      question: "How do I start as a creator?",
      answer: "Click \"Join as a Creator,\" connect your Petra Wallet, and set up your profile. Add tiers, upload content, and start engaging with your supporters."
    },
    {
      question: "What rewards can I offer?",
      answer: "You can offer NFTs, token-gated content, community access, or personalized perks. Use blockchain to provide exclusive, verifiable benefits."
    },
    {
      question: "Why is Aptos used on this platform?",
      answer: "Aptos is chosen for its fast transactions, low fees, and developer-friendly ecosystem, ensuring an efficient and seamless experience."
    },
    {
      question: "What are gas fees on Aptos?",
      answer: "Gas fees on Aptos are minimal compared to other blockchains. These fees are required to process transactions and support network operations."
    },
    {
      question: "How do I set up my Petra Wallet?",
      answer: "Visit Petra Wallet's website, install the extension, and follow the instructions. You'll find a step-by-step guide on our \"Getting Started\" page."
    }
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative bg-gray-900 py-20 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute w-[500px] h-[500px] -right-40 top-0 bg-purple-500/10 rounded-full blur-[100px] animate-glow-pulse"></div>
        <div className="absolute w-[400px] h-[400px] -left-20 bottom-0 bg-blue-500/10 rounded-full blur-[100px] animate-glow-pulse-slow"></div>
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="ml-auto w-1/2">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4 animate-gradient bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Find answers to common questions about our platform
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-transparent hover:border-purple-500/50 transition-all duration-300"
              >
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center"
                  onClick={() => toggleFAQ(index)}
                >
                  <span className="text-white font-medium">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-purple-400 transform transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                    openIndex === index ? 'max-h-48 pb-4' : 'max-h-0'
                  }`}
                >
                  <p className="text-gray-400">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQs; 