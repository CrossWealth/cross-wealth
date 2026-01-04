"use client"

import { Shield, TrendingUp, AlertCircle, Zap } from 'lucide-react';
import { useState } from 'react';

export function CreditScoreDisplay() {
  const [score] = useState(745);
  const [maxScore] = useState(850);
  const percentage = (score / maxScore) * 100;

  const getScoreColor = (score: number) => {
    if (score >= 750) return 'from-emerald-500 to-green-500';
    if (score >= 650) return 'from-amber-500 to-orange-500';
    return 'from-red-500 to-pink-500';
  };

  const getScoreLevel = (score: number) => {
    if (score >= 750) return { label: 'Excellent', icon: Shield };
    if (score >= 650) return { label: 'Good', icon: TrendingUp };
    return { label: 'Improving', icon: AlertCircle };
  };

  const ScoreIcon = getScoreLevel(score).icon;

  return (
    <div className="space-y-4">
      {/* Score Circle */}
      <div className="relative w-48 h-48 mx-auto">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className={`text-5xl font-bold bg-linear-to-r ${getScoreColor(score)} bg-clip-text text-transparent`}>
              {score}
            </div>
            <div className="flex items-center justify-center gap-2 mt-2">
              <ScoreIcon className="w-5 h-5 text-gray-600" />
              <span className="font-medium text-gray-900">
                {getScoreLevel(score).label}
              </span>
            </div>
            <div className="text-sm text-gray-500 mt-1">Out of {maxScore}</div>
          </div>
        </div>
        <svg className="w-full h-full transform -rotate-90">
          <circle
            cx="96"
            cy="96"
            r="80"
            stroke="url(#gradient)"
            strokeWidth="12"
            fill="none"
            strokeDasharray="502.4"
            strokeDashoffset={502.4 - (percentage / 100) * 502.4}
            strokeLinecap="round"
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#06b6d4" />
              <stop offset="100%" stopColor="#3b82f6" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Credit Factors */}
      <div className="space-y-3">
        <h4 className="font-semibold text-gray-900 flex items-center gap-2">
          <Zap className="w-4 h-4 text-amber-500" />
          AI Credit Factors
        </h4>
        <div className="grid grid-cols-2 gap-3">
          {[
            { label: 'Payment History', score: 95, color: 'bg-emerald-500' },
            { label: 'Savings Pattern', score: 88, color: 'bg-cyan-500' },
            { label: 'Transaction Age', score: 76, color: 'bg-amber-500' },
            { label: 'Diversity', score: 82, color: 'bg-blue-500' },
          ].map((factor) => (
            <div key={factor.label} className="bg-gray-50 rounded-lg p-3">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-gray-700">{factor.label}</span>
                <span className="text-sm font-bold text-gray-900">{factor.score}%</span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className={`h-full ${factor.color} rounded-full transition-all duration-700`}
                  style={{ width: `${factor.score}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Action Button */}
      <button className="w-full py-3 bg-linear-to-r from-gray-900 to-gray-800 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
        View Credit Report
      </button>
    </div>
  );
}