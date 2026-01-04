'use client';

import {
  Send,
  Globe,
  DollarSign,
  Zap,
  Shield,
  Clock,
  TrendingUp,
  ArrowLeft,
  Users,
  MapPin,
  CreditCard,
  Smartphone,
  Sparkles,
  CheckCircle
} from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';

const corridors = [
  { id: 'us', name: 'USA', code: 'USD', flag: '🇺🇸', rate: 1.0, fee: 0, color: 'bg-blue-500' },
  { id: 'eu', name: 'European Union', code: 'EUR', flag: '🇪🇺', rate: 0.92, fee: 0.5, color: 'bg-indigo-500' },
  { id: 'uk', name: 'United Kingdom', code: 'GBP', flag: '🇬🇧', rate: 0.79, fee: 0.5, color: 'bg-red-500' },
  { id: 'ae', name: 'UAE', code: 'AED', flag: '🇦🇪', rate: 3.67, fee: 0, color: 'bg-emerald-500' },
];

const recipients = [
  { id: 1, name: 'Maria Rodriguez', type: 'Family', country: 'Mexico', avatarColor: 'bg-purple-500' },
  { id: 2, name: 'James Okafor', type: 'Friend', country: 'Nigeria', avatarColor: 'bg-green-500' },
  { id: 3, name: 'Chen Wei', type: 'Business', country: 'China', avatarColor: 'bg-amber-500' },
  { id: 4, name: 'Fatima Hassan', type: 'Family', country: 'Kenya', avatarColor: 'bg-cyan-500' },
];

const transferMethods = [
  { id: 'stellar', name: 'Stellar Network', fee: 0, time: 'Instant', icon: Zap, color: 'from-cyan-500 to-blue-500' },
  { id: 'bank', name: 'Bank Transfer', fee: 1.5, time: '1-3 days', icon: CreditCard, color: 'from-purple-500 to-pink-500' },
  { id: 'mobile', name: 'Mobile Money', fee: 0.5, time: 'Minutes', icon: Smartphone, color: 'from-emerald-500 to-green-500' },
];

export default function SendPage() {
  const [amount, setAmount] = useState(100);
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('MXN');
  const [selectedCorridor, setSelectedCorridor] = useState('us');
  const [selectedRecipient, setSelectedRecipient] = useState<number | null>(1);
  const [selectedMethod, setSelectedMethod] = useState('stellar');
  const [step, setStep] = useState(1);

  const calculateTotal = () => {
    const corridor = corridors.find(c => c.id === selectedCorridor);
    const method = transferMethods.find(m => m.id === selectedMethod);
    const fee = (method?.fee || 0) + (corridor?.fee || 0);
    return amount + fee;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-gray-50 pb-20">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link
                href="/worker"
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <ArrowLeft className="w-5 h-5 text-gray-600" />
              </Link>
              <div className="flex items-center space-x-2">
                <div className="p-2 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl">
                  <Send className="w-6 h-6 text-white" />
                </div>
                <h1 className="text-xl font-bold text-gray-900">Send Money</h1>
              </div>
            </div>
            
            <div className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-cyan-100 to-blue-100 rounded-full">
              <Zap className="w-4 h-4 text-cyan-600" />
              <span className="text-sm font-medium text-cyan-700">$0 Gas Fees</span>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6">
        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex justify-between items-center">
            {[1, 2, 3, 4].map((stepNum) => (
              <div key={stepNum} className="flex flex-col items-center flex-1">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 transition-all duration-300 ${
                  step >= stepNum
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white scale-110'
                    : 'bg-gray-200 text-gray-400'
                }`}>
                  {step > stepNum ? (
                    <CheckCircle className="w-5 h-5" />
                  ) : (
                    <span className="font-bold">{stepNum}</span>
                  )}
                </div>
                <span className={`text-sm font-medium ${
                  step >= stepNum ? 'text-cyan-700' : 'text-gray-500'
                }`}>
                  {stepNum === 1 && 'Amount'}
                  {stepNum === 2 && 'Recipient'}
                  {stepNum === 3 && 'Method'}
                  {stepNum === 4 && 'Confirm'}
                </span>
              </div>
            ))}
          </div>
          
          <div className="relative mt-2">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gray-200" />
            <div
              className="absolute top-0 left-0 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 transition-all duration-500"
              style={{ width: `${((step - 1) / 3) * 100}%` }}
            />
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Transfer Form */}
          <div className="lg:col-span-2 space-y-8">
            {/* Amount Selection */}
            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-xl font-bold text-gray-900">Transfer Amount</h2>
                  <p className="text-gray-600">Send money across borders instantly</p>
                </div>
                <Globe className="w-5 h-5 text-cyan-600" />
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    You Send
                  </label>
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="number"
                      value={amount}
                      onChange={(e) => setAmount(Number(e.target.value))}
                      className="w-full pl-10 pr-4 py-4 text-xl border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none transition-colors"
                    />
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                      <select
                        value={fromCurrency}
                        onChange={(e) => setFromCurrency(e.target.value)}
                        className="bg-transparent outline-none font-medium text-gray-700"
                      >
                        <option value="USD">USD</option>
                        <option value="EUR">EUR</option>
                        <option value="GBP">GBP</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="flex space-x-2 mt-3">
                    {[50, 100, 250, 500].map((value) => (
                      <button
                        key={value}
                        onClick={() => setAmount(value)}
                        className={`flex-1 py-2 text-sm rounded-lg transition-colors ${
                          amount === value
                            ? 'bg-cyan-500 text-white'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        ${value}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Recipient Gets
                  </label>
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      value={`${(amount * 17.5).toFixed(2)}`}
                      readOnly
                      className="w-full pl-10 pr-4 py-4 text-xl border border-gray-300 bg-gray-50 rounded-lg"
                    />
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                      <span className="font-medium text-gray-700">MXN</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between mt-3 text-sm">
                    <span className="text-gray-600">Exchange Rate</span>
                    <span className="font-medium text-gray-900">1 USD = 17.50 MXN</span>
                  </div>
                </div>
              </div>

              {/* Corridor Selection */}
              <div>
                <h3 className="font-bold text-gray-900 mb-4">Popular Corridors</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {corridors.map((corridor) => (
                    <button
                      key={corridor.id}
                      onClick={() => setSelectedCorridor(corridor.id)}
                      className={`p-4 border-2 rounded-xl text-center transition-all duration-200 ${
                        selectedCorridor === corridor.id
                          ? 'border-cyan-500 bg-cyan-50 scale-105'
                          : 'border-gray-200 hover:border-cyan-300 hover:scale-102'
                      }`}
                    >
                      <div className="text-2xl mb-2">{corridor.flag}</div>
                      <div className="font-medium text-gray-900">{corridor.name}</div>
                      <div className="text-sm text-gray-600">{corridor.code}</div>
                      <div className="text-xs text-emerald-600 font-medium mt-1">
                        {corridor.fee === 0 ? 'No fees' : `${corridor.fee}% fee`}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Recipient Selection */}
            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Choose Recipient</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="font-medium text-gray-900">Saved Recipients</h3>
                  {recipients.map((recipient) => (
                    <div
                      key={recipient.id}
                      onClick={() => setSelectedRecipient(recipient.id)}
                      className={`p-4 border-2 rounded-xl cursor-pointer transition-all duration-200 ${
                        selectedRecipient === recipient.id
                          ? 'border-cyan-500 bg-cyan-50 scale-102'
                          : 'border-gray-200 hover:border-cyan-300 hover:scale-102'
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <div className={`w-10 h-10 rounded-full ${recipient.avatarColor} flex items-center justify-center text-white font-bold`}>
                          {recipient.name.charAt(0)}
                        </div>
                        <div className="flex-1">
                          <div className="font-medium text-gray-900">{recipient.name}</div>
                          <div className="text-sm text-gray-600">{recipient.type} • {recipient.country}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="space-y-4">
                  <h3 className="font-medium text-gray-900">New Recipient</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none transition-colors"
                        placeholder="Enter recipient name"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Country
                      </label>
                      <div className="relative">
                        <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <select className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none transition-colors">
                          <option value="">Select country</option>
                          <option value="mx">Mexico</option>
                          <option value="ng">Nigeria</option>
                          <option value="ke">Kenya</option>
                          <option value="in">India</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Mobile Number
                      </label>
                      <div className="relative">
                        <Smartphone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="tel"
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none transition-colors"
                          placeholder="+1 (555) 123-4567"
                        />
                      </div>
                    </div>

                    <button className="w-full py-3 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition-colors">
                      Save Recipient
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Summary & Methods */}
          <div className="space-y-8">
            {/* Transfer Summary */}
            <div className="bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl p-6 text-white">
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-2 bg-white/20 rounded-lg">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Transfer Summary</h3>
                  <p className="text-cyan-100">Review before sending</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-white/10 rounded-lg">
                  <span className="text-cyan-100">Amount to Send</span>
                  <span className="font-bold">${amount.toFixed(2)}</span>
                </div>

                <div className="flex justify-between items-center p-3 bg-white/10 rounded-lg">
                  <span className="text-cyan-100">Transfer Fee</span>
                  <span className="font-bold">$0.00</span>
                </div>

                <div className="flex justify-between items-center p-3 bg-white/10 rounded-lg">
                  <span className="text-cyan-100">Exchange Rate</span>
                  <span className="font-bold">1 USD = 17.50 MXN</span>
                </div>

                <div className="flex justify-between items-center p-3 bg-white/10 rounded-lg">
                  <span className="text-cyan-100">Recipient Gets</span>
                  <span className="font-bold">${(amount * 17.5).toFixed(2)} MXN</span>
                </div>

                <div className="pt-4 border-t border-white/20">
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-lg">Total Cost</span>
                    <span className="font-bold text-2xl">${calculateTotal().toFixed(2)}</span>
                  </div>
                </div>
              </div>

              <button className="w-full mt-6 py-3 bg-white text-cyan-700 rounded-xl font-semibold hover:bg-gray-100 transition-colors">
                Send Money Now
              </button>
            </div>

            {/* Transfer Methods */}
            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-6">Transfer Method</h3>
              
              <div className="space-y-4">
                {transferMethods.map((method) => {
                  const Icon = method.icon;
                  return (
                    <div
                      key={method.id}
                      onClick={() => setSelectedMethod(method.id)}
                      className={`p-4 border-2 rounded-xl cursor-pointer transition-all duration-200 ${
                        selectedMethod === method.id
                          ? 'border-cyan-500 bg-cyan-50 scale-102'
                          : 'border-gray-200 hover:border-cyan-300 hover:scale-102'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center space-x-3">
                          <div className={`p-2 rounded-lg bg-gradient-to-r ${method.color}`}>
                            <Icon className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <div className="font-medium text-gray-900">{method.name}</div>
                            <div className="text-sm text-gray-600">{method.time}</div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="font-bold text-gray-900">
                            {method.fee === 0 ? 'Free' : `${method.fee}% fee`}
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center text-sm text-gray-600">
                        <Shield className="w-4 h-4 mr-1" />
                        {method.id === 'stellar' && 'Zero gas fees • Instant settlement'}
                        {method.id === 'bank' && 'Secure • Traditional banking'}
                        {method.id === 'mobile' && 'Fast • Direct to mobile wallet'}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Auto-save Feature */}
            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-2 bg-gradient-to-r from-emerald-100 to-green-100 rounded-lg">
                  <Sparkles className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Auto-save with Transfer</h3>
                  <p className="text-sm text-gray-600">Save while you send</p>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <div className="font-medium text-gray-900">Round-up Savings</div>
                    <div className="text-sm text-gray-600">Round up to nearest $5</div>
                  </div>
                  <div className="w-12 h-6 rounded-full bg-emerald-500 relative">
                    <div className="absolute top-1 right-1 w-4 h-4 rounded-full bg-white" />
                  </div>
                </div>

                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <div className="font-medium text-gray-900">Percentage Save</div>
                    <div className="text-sm text-gray-600">Save 5% of each transfer</div>
                  </div>
                  <div className="w-12 h-6 rounded-full bg-gray-300 relative">
                    <div className="absolute top-1 left-1 w-4 h-4 rounded-full bg-white" />
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-gray-200">
                <div className="text-center">
                  <div className="text-sm text-gray-600">Total Auto-saved</div>
                  <div className="text-xl font-bold text-gray-900">$45.80</div>
                  <div className="text-xs text-emerald-600">This month</div>
                </div>
              </div>
            </div>

            {/* Recent Transfers */}
            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Recent Transfers</h3>
              
              <div className="space-y-3">
                {[
                  { to: 'Maria Rodriguez', amount: 250, date: 'Today', status: 'completed' },
                  { to: 'James Okafor', amount: 150, date: 'Yesterday', status: 'completed' },
                  { to: 'Chen Wei', amount: 500, date: '2 days ago', status: 'pending' },
                ].map((transfer, index) => (
                  <div key={index} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                    <div>
                      <div className="font-medium text-gray-900">{transfer.to}</div>
                      <div className="text-sm text-gray-600">{transfer.date}</div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-gray-900">${transfer.amount}</div>
                      <div className={`text-xs font-medium ${
                        transfer.status === 'completed' ? 'text-emerald-600' : 'text-amber-600'
                      }`}>
                        {transfer.status}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <button className="w-full mt-4 py-3 text-cyan-600 font-medium hover:text-cyan-700 hover:bg-cyan-50 rounded-lg transition-colors">
                View All Transfers →
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}