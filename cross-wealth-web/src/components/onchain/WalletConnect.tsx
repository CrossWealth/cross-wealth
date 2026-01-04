"use client"


import { Wallet, LogOut, Copy, Check } from 'lucide-react';
import { useState } from 'react';

export function WalletConnect() {
  const [isConnected, setIsConnected] = useState(false);
  const [address, setAddress] = useState('GABCD...XYZ123');
  const [copied, setCopied] = useState(false);

  const handleConnect = () => {
    setIsConnected(true);
    // In production: Integrate with Freighter/Albedo wallet
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative">
      {isConnected ? (
        <div className="flex items-center space-x-2">
          <div className="hidden sm:flex items-center space-x-2 px-3 py-2 bg-linear-to-r from-cyan-50 to-blue-50 rounded-full border border-cyan-200">
            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
            <span className="text-sm font-medium text-cyan-800">Connected</span>
          </div>
          <button
            onClick={handleCopy}
            className="group flex items-center space-x-2 px-4 py-2 bg-white border border-gray-300 rounded-xl hover:border-cyan-300 hover:shadow-md transition-all duration-200"
          >
            <Wallet className="w-4 h-4 text-gray-600" />
            <span className="text-sm font-medium text-gray-800 hidden md:inline">
              {address}
            </span>
            {copied ? (
              <Check className="w-4 h-4 text-emerald-500" />
            ) : (
              <Copy className="w-4 h-4 text-gray-400 group-hover:text-cyan-500" />
            )}
          </button>
          <button
            onClick={() => setIsConnected(false)}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Disconnect"
          >
            <LogOut className="w-5 h-5 text-gray-600" />
          </button>
        </div>
      ) : (
        <button
          onClick={handleConnect}
          className="group flex items-center space-x-2 px-4 py-3 bg-linear-to-r from-cyan-600 to-blue-700 text-white rounded-xl hover:from-cyan-700 hover:to-blue-800 hover:shadow-lg transition-all duration-300 hover:scale-105"
        >
          <Wallet className="w-5 h-5 group-hover:rotate-12 transition-transform" />
          <span className="font-semibold">Connect Wallet</span>
          <div className="hidden sm:inline-flex items-center px-2 py-1 bg-white/20 rounded-full text-xs">
            $0 gas
          </div>
        </button>
      )}
    </div>
  );
}