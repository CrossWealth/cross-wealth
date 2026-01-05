'use client';

import {
  PiggyBank,
  Target,
  PlusCircle,
  TrendingUp,
  Clock,
  Shield,
  Zap,
  Calendar,
  DollarSign,
  Sparkles,
  ArrowLeft,
  CheckCircle,
  Repeat
} from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';

const savingsGoals = [
  {
    id: 1,
    name: "Family Home",
    target: 15000,
    current: 8500,
    color: "from-purple-500 to-pink-500",
    icon: "🏠",
    deadline: "Dec 2025",
    progress: 57
  },
  {
    id: 2,
    name: "Education Fund",
    target: 5000,
    current: 3200,
    color: "from-blue-500 to-cyan-500",
    icon: "🎓",
    deadline: "Aug 2025",
    progress: 64
  },
  {
    id: 3,
    name: "Emergency Fund",
    target: 3000,
    current: 1800,
    color: "from-emerald-500 to-green-500",
    icon: "🛡️",
    deadline: "Jun 2025",
    progress: 60
  }
];

const autoSaveOptions = [
  {
    id: 'roundup',
    name: 'Round-up Savings',
    description: 'Round up every transaction to nearest dollar',
    icon: PlusCircle,
    amount: 45.80,
    active: true
  },
  {
    id: 'percentage',
    name: 'Percentage Auto-save',
    description: 'Save 10% of every remittance',
    icon: TrendingUp,
    amount: 120.50,
    active: true
  },
  {
    id: 'weekly',
    name: 'Weekly Savings',
    description: 'Save $50 every Monday',
    icon: Calendar,
    amount: 200.00,
    active: false
  }
];

const savingStrategies = [
  {
    id: 1,
    name: 'AI-Optimized Saving',
    description: 'Smart algorithm adjusts savings based on your income patterns',
    icon: Zap,
    benefit: '+15% efficiency',
    color: 'bg-linear-to-r from-cyan-500 to-blue-500'
  },
  {
    id: 2,
    name: 'Community Pool',
    description: 'Join savings circle with others for better returns',
    icon: Shield,
    benefit: '2.5% APY',
    color: 'bg-linear-to-r from-purple-500 to-pink-500'
  },
  {
    id: 3,
    name: 'Goal-Based',
    description: 'Automatically allocate to specific goals',
    icon: Target,
    benefit: 'Faster completion',
    color: 'bg-linear-to-r from-emerald-500 to-green-500'
  }
];

export default function SavePage() {
  const [selectedGoal, setSelectedGoal] = useState<number | null>(null);
  const [autoSaveAmount, setAutoSaveAmount] = useState(50);
  const [frequency, setFrequency] = useState('weekly');

  return (
    <div className="min-h-screen bg-linear-to-b from-blue-50 to-gray-50 pb-20">
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
                <div className="p-2 bg-linear-to-r from-cyan-500 to-blue-600 rounded-xl">
                  <PiggyBank className="w-6 h-6 text-white" />
                </div>
                <h1 className="text-xl font-bold text-gray-900">Save & Grow</h1>
              </div>
            </div>
            
            <div className="flex items-center space-x-2 px-4 py-2 bg-linear-to-r from-emerald-100 to-green-100 rounded-full">
              <Sparkles className="w-4 h-4 text-emerald-600" />
              <span className="text-sm font-medium text-emerald-700">AI Savings Assistant</span>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Goals & Auto-save */}
          <div className="lg:col-span-2 space-y-8">
            {/* Current Goals */}
            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-xl font-bold text-gray-900">Your Savings Goals</h2>
                  <p className="text-gray-600">Track progress towards financial targets</p>
                </div>
                <button className="px-4 py-2 bg-linear-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-medium hover:opacity-90 transition-opacity flex items-center gap-2">
                  <PlusCircle className="w-4 h-4" />
                  New Goal
                </button>
              </div>

              <div className="space-y-6">
                {savingsGoals.map((goal) => (
                  <div
                    key={goal.id}
                    onClick={() => setSelectedGoal(goal.id)}
                    className={`p-5 border-2 rounded-xl cursor-pointer transition-all duration-200 ${
                      selectedGoal === goal.id
                        ? 'border-cyan-500 bg-cyan-50 scale-102'
                        : 'border-gray-200 hover:border-cyan-300 hover:scale-102'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-4">
                        <div className="text-3xl">{goal.icon}</div>
                        <div>
                          <h3 className="font-bold text-gray-900">{goal.name}</h3>
                          <div className="flex items-center text-sm text-gray-600">
                            <Calendar className="w-3 h-3 mr-1" />
                            Target: {goal.deadline}
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-gray-900">
                          ${goal.current.toLocaleString()}
                        </div>
                        <div className="text-sm text-gray-600">
                          of ${goal.target.toLocaleString()}
                        </div>
                      </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="mb-4">
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-700">{goal.progress}% complete</span>
                        <span className="font-medium text-gray-900">
                          ${(goal.target - goal.current).toLocaleString()} to go
                        </span>
                      </div>
                      <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                        <div
                          className={`h-full bg-linear-to-r ${goal.color} rounded-full transition-all duration-1000`}
                          style={{ width: `${goal.progress}%` }}
                        />
                      </div>
                    </div>

                    {/* Quick Actions */}
                    <div className="flex space-x-3">
                      <button className="flex-1 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition-colors text-sm">
                        Add Funds
                      </button>
                      <button className="flex-1 px-4 py-2 bg-linear-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-medium hover:opacity-90 transition-opacity text-sm">
                        Boost Savings
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Auto-save Settings */}
            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-xl font-bold text-gray-900">Auto-save Settings</h2>
                  <p className="text-gray-600">Automatically grow your savings without thinking</p>
                </div>
                <Repeat className="w-5 h-5 text-cyan-600" />
              </div>

              <div className="space-y-6">
                {autoSaveOptions.map((option) => {
                  const Icon = option.icon;
                  return (
                    <div
                      key={option.id}
                      className="flex items-center justify-between p-4 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors"
                    >
                      <div className="flex items-center space-x-4">
                        <div className={`p-3 rounded-lg ${
                          option.active
                            ? 'bg-linear-to-r from-cyan-500 to-blue-600'
                            : 'bg-gray-100'
                        }`}>
                          <Icon className={`w-5 h-5 ${option.active ? 'text-white' : 'text-gray-600'}`} />
                        </div>
                        <div>
                          <div className="font-medium text-gray-900">{option.name}</div>
                          <div className="text-sm text-gray-600">{option.description}</div>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-4">
                        <div className="text-right">
                          <div className="font-bold text-gray-900">${option.amount.toFixed(2)}</div>
                          <div className="text-sm text-gray-600">saved this month</div>
                        </div>
                        <div className={`w-12 h-6 rounded-full relative ${
                          option.active ? 'bg-cyan-500' : 'bg-gray-300'
                        }`}>
                          <div className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-transform ${
                            option.active ? 'transform translate-x-7' : 'transform translate-x-1'
                          }`} />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* New Auto-save Setup */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Set Up New Auto-save</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Amount
                    </label>
                    <div className="relative">
                      <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="number"
                        value={autoSaveAmount}
                        onChange={(e) => setAutoSaveAmount(Number(e.target.value))}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Frequency
                    </label>
                    <select
                      value={frequency}
                      onChange={(e) => setFrequency(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none transition-colors"
                    >
                      <option value="daily">Daily</option>
                      <option value="weekly">Weekly</option>
                      <option value="monthly">Monthly</option>
                      <option value="per-transaction">Per Transaction</option>
                    </select>
                  </div>

                  <div className="flex items-end">
                    <button className="w-full px-6 py-3 bg-linear-to-r from-emerald-500 to-green-600 text-white rounded-lg font-medium hover:opacity-90 transition-opacity">
                      Activate Auto-save
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Strategies & AI Assistant */}
          <div className="space-y-8">
            {/* AI Savings Assistant */}
            <div className="bg-linear-to-br from-cyan-500 to-blue-600 rounded-2xl p-6 text-white">
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-2 bg-white/20 rounded-lg">
                  <Sparkles className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">AI Savings Assistant</h3>
                  <p className="text-cyan-100">Personalized recommendations</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="p-4 bg-white/10 rounded-xl">
                  <div className="font-medium mb-2">💡 Suggestion</div>
                  <p className="text-sm text-cyan-100">
                    Based on your spending patterns, you could save an additional $120/month by rounding up transactions.
                  </p>
                </div>

                <div className="p-4 bg-white/10 rounded-xl">
                  <div className="font-medium mb-2">🎯 Opportunity</div>
                  <p className="text-sm text-cyan-100">
                    Community pool interest rates increased to 2.8% APY this month.
                  </p>
                </div>

                <div className="p-4 bg-white/10 rounded-xl">
                  <div className="font-medium mb-2">📈 Progress</div>
                  <p className="text-sm text-cyan-100">
                    You're 23 days ahead of your Family Home goal schedule!
                  </p>
                </div>
              </div>

              <button className="w-full mt-6 py-3 bg-white text-cyan-700 rounded-xl font-semibold hover:bg-gray-100 transition-colors">
                View All Recommendations
              </button>
            </div>

            {/* Saving Strategies */}
            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-6">Smart Strategies</h3>
              
              <div className="space-y-4">
                {savingStrategies.map((strategy) => {
                  const Icon = strategy.icon;
                  return (
                    <div
                      key={strategy.id}
                      className="p-4 border border-gray-200 rounded-xl hover:border-cyan-300 hover:shadow-md transition-all duration-200"
                    >
                      <div className="flex items-center space-x-4 mb-3">
                        <div className={`p-3 rounded-lg ${strategy.color}`}>
                          <Icon className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <div className="font-bold text-gray-900">{strategy.name}</div>
                          <div className="text-xs text-emerald-600 font-medium">{strategy.benefit}</div>
                        </div>
                      </div>
                      <p className="text-sm text-gray-600 mb-3">{strategy.description}</p>
                      <button className="w-full py-2 text-sm text-cyan-600 font-medium hover:text-cyan-700 hover:bg-cyan-50 rounded-lg transition-colors">
                        Learn More →
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-6">Savings Stats</h3>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <div>
                    <div className="text-sm text-gray-600">Total Saved</div>
                    <div className="text-xl font-bold text-gray-900">$13,500</div>
                  </div>
                  <TrendingUp className="w-5 h-5 text-emerald-600" />
                </div>

                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <div>
                    <div className="text-sm text-gray-600">Monthly Growth</div>
                    <div className="text-xl font-bold text-gray-900">+8.2%</div>
                  </div>
                  <Zap className="w-5 h-5 text-amber-600" />
                </div>

                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <div>
                    <div className="text-sm text-gray-600">Auto-save Total</div>
                    <div className="text-xl font-bold text-gray-900">$366.30</div>
                  </div>
                  <Clock className="w-5 h-5 text-cyan-600" />
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="text-center">
                  <div className="text-sm text-gray-600">Savings Streak</div>
                  <div className="text-2xl font-bold text-gray-900">42 days</div>
                  <div className="text-xs text-emerald-600 font-medium">Keep it up! 🔥</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}