'use client';

import {
  HandCoins,
  TrendingUp,
  Shield,
  Clock,
  CheckCircle,
  AlertCircle,
  DollarSign,
  Calendar,
  Zap,
  ArrowLeft,
  Calculator,
  FileText,
  Sparkles
} from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';

const loanProducts = [
  {
    id: 1,
    name: 'Emergency Loan',
    amount: 1000,
    interest: 8.5,
    term: '3 months',
    color: 'from-blue-500 to-cyan-500',
    icon: Shield,
    description: 'Quick access for urgent needs',
    eligibility: 'Instant approval'
  },
  {
    id: 2,
    name: 'Education Loan',
    amount: 5000,
    interest: 6.5,
    term: '24 months',
    color: 'from-purple-500 to-pink-500',
    icon: TrendingUp,
    description: 'Invest in your future',
    eligibility: 'Pre-approved'
  },
  {
    id: 3,
    name: 'Business Micro-loan',
    amount: 2500,
    interest: 9.0,
    term: '12 months',
    color: 'from-emerald-500 to-green-500',
    icon: HandCoins,
    description: 'Grow your small business',
    eligibility: 'Fast track available'
  }
];

const repaymentSchedule = [
  { month: 1, amount: 350, due: 'Mar 15, 2024', status: 'paid' },
  { month: 2, amount: 350, due: 'Apr 15, 2024', status: 'paid' },
  { month: 3, amount: 350, due: 'May 15, 2024', status: 'pending' },
  { month: 4, amount: 350, due: 'Jun 15, 2024', status: 'upcoming' },
];

export default function BorrowPage() {
  const [loanAmount, setLoanAmount] = useState(1000);
  const [loanTerm, setLoanTerm] = useState(3);
  const [selectedProduct, setSelectedProduct] = useState<number | null>(1);

  const calculateMonthlyPayment = () => {
    const selected = loanProducts.find(p => p.id === selectedProduct);
    if (!selected) return 0;
    const monthlyRate = selected.interest / 100 / 12;
    const payment = (loanAmount * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -loanTerm));
    return payment;
  };

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
                <div className="p-2 bg-linear-to-r from-emerald-500 to-green-600 rounded-xl">
                  <HandCoins className="w-6 h-6 text-white" />
                </div>
                <h1 className="text-xl font-bold text-gray-900">Borrow Smart</h1>
              </div>
            </div>
            
            <div className="flex items-center space-x-2 px-4 py-2 bg-linear-to-r from-emerald-100 to-green-100 rounded-full">
              <Sparkles className="w-4 h-4 text-emerald-600" />
              <span className="text-sm font-medium text-emerald-700">AI Credit Score: 745</span>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Loan Products & Calculator */}
          <div className="lg:col-span-2 space-y-8">
            {/* Available Loan Products */}
            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-xl font-bold text-gray-900">Available Loan Products</h2>
                  <p className="text-gray-600">Choose from AI-powered loan options</p>
                </div>
                <div className="px-3 py-1 bg-cyan-100 text-cyan-700 rounded-full text-sm font-medium">
                  Pre-approved
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {loanProducts.map((product) => {
                  const ProductIcon = product.icon;
                  return (
                    <div
                      key={product.id}
                      onClick={() => setSelectedProduct(product.id)}
                      className={`p-5 border-2 rounded-xl cursor-pointer transition-all duration-200 ${
                        selectedProduct === product.id
                          ? 'border-cyan-500 bg-cyan-50 scale-102'
                          : 'border-gray-200 hover:border-cyan-300 hover:scale-102'
                      }`}
                    >
                      <div className="flex items-center space-x-3 mb-4">
                        <div className={`p-3 rounded-lg bg-linear-to-r ${product.color}`}>
                          <ProductIcon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="font-bold text-gray-900">{product.name}</h3>
                          <div className="text-xs text-gray-600">{product.description}</div>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-600">Amount</span>
                          <span className="font-bold text-gray-900">${product.amount.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-600">Interest Rate</span>
                          <span className="font-bold text-emerald-600">{product.interest}%</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-600">Term</span>
                          <span className="font-bold text-gray-900">{product.term}</span>
                        </div>
                      </div>

                      <div className="mt-4 pt-4 border-t border-gray-200">
                        <div className="flex items-center text-sm text-emerald-600">
                          <CheckCircle className="w-4 h-4 mr-1" />
                          {product.eligibility}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Loan Calculator */}
            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-900">Loan Calculator</h2>
                <Calculator className="w-5 h-5 text-cyan-600" />
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Loan Amount
                  </label>
                  <div className="space-y-2">
                    <div className="relative">
                      <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="number"
                        value={loanAmount}
                        onChange={(e) => setLoanAmount(Number(e.target.value))}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none transition-colors"
                      />
                    </div>
                    <div className="flex space-x-2">
                      {[500, 1000, 2500, 5000].map((amount) => (
                        <button
                          key={amount}
                          onClick={() => setLoanAmount(amount)}
                          className={`flex-1 py-2 text-sm rounded-lg transition-colors ${
                            loanAmount === amount
                              ? 'bg-cyan-500 text-white'
                              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                          }`}
                        >
                          ${amount}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Loan Term (Months)
                  </label>
                  <div className="space-y-2">
                    <div className="relative">
                      <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="number"
                        value={loanTerm}
                        onChange={(e) => setLoanTerm(Number(e.target.value))}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none transition-colors"
                      />
                    </div>
                    <div className="flex space-x-2">
                      {[3, 6, 12, 24].map((term) => (
                        <button
                          key={term}
                          onClick={() => setLoanTerm(term)}
                          className={`flex-1 py-2 text-sm rounded-lg transition-colors ${
                            loanTerm === term
                              ? 'bg-cyan-500 text-white'
                              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                          }`}
                        >
                          {term} months
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Calculation Results */}
              <div className="bg-linear-to-r from-cyan-50 to-blue-50 rounded-xl p-6">
                <h3 className="font-bold text-gray-900 mb-4">Loan Summary</h3>
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Monthly Payment</span>
                      <span className="font-bold text-gray-900">
                        ${calculateMonthlyPayment().toFixed(2)}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Total Interest</span>
                      <span className="font-bold text-gray-900">
                        ${(calculateMonthlyPayment() * loanTerm - loanAmount).toFixed(2)}
                      </span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Total Payment</span>
                      <span className="font-bold text-gray-900">
                        ${(calculateMonthlyPayment() * loanTerm).toFixed(2)}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">APR</span>
                      <span className="font-bold text-emerald-600">8.5%</span>
                    </div>
                  </div>
                </div>

                <button className="w-full mt-6 py-3 bg-linear-to-r from-emerald-500 to-green-600 text-white rounded-lg font-semibold hover:opacity-90 transition-opacity">
                  Apply for This Loan
                </button>
              </div>
            </div>
          </div>

          {/* Right Column - Application & Repayment */}
          <div className="space-y-8">
            {/* Quick Application */}
            <div className="bg-linear-to-br from-emerald-500 to-green-600 rounded-2xl p-6 text-white">
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-2 bg-white/20 rounded-lg">
                  <Zap className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Quick Apply</h3>
                  <p className="text-emerald-100">90-second application process</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-white text-emerald-600 rounded-full flex items-center justify-center font-bold">
                    1
                  </div>
                  <div>
                    <div className="font-medium">Select Loan Product</div>
                    <div className="text-sm text-emerald-100">Choose from pre-approved options</div>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-white text-emerald-600 rounded-full flex items-center justify-center font-bold">
                    2
                  </div>
                  <div>
                    <div className="font-medium">Enter Amount</div>
                    <div className="text-sm text-emerald-100">Use calculator for estimates</div>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-white text-emerald-600 rounded-full flex items-center justify-center font-bold">
                    3
                  </div>
                  <div>
                    <div className="font-medium">AI Review</div>
                    <div className="text-sm text-emerald-100">Instant credit decision</div>
                  </div>
                </div>
              </div>

              <button className="w-full mt-6 py-3 bg-white text-emerald-700 rounded-xl font-semibold hover:bg-gray-100 transition-colors">
                Start Application
              </button>
            </div>

            {/* Active Loans & Repayment */}
            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-6">Active Loan</h3>
              
              <div className="space-y-4 mb-6">
                <div className="p-4 bg-cyan-50 rounded-xl">
                  <div className="flex justify-between items-center mb-2">
                    <div className="font-medium text-gray-900">Emergency Loan</div>
                    <div className="px-2 py-1 bg-emerald-100 text-emerald-700 rounded text-xs font-medium">
                      Active
                    </div>
                  </div>
                  <div className="flex justify-between text-sm text-gray-600 mb-1">
                    <span>Remaining Balance</span>
                    <span className="font-bold text-gray-900">$700</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-emerald-500 rounded-full" style={{ width: '70%' }} />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <div className="text-2xl font-bold text-gray-900">$350</div>
                    <div className="text-sm text-gray-600">Monthly Payment</div>
                  </div>
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <div className="text-2xl font-bold text-gray-900">2</div>
                    <div className="text-sm text-gray-600">Payments Left</div>
                  </div>
                </div>
              </div>

              {/* Repayment Schedule */}
              <div>
                <h4 className="font-medium text-gray-900 mb-3">Upcoming Payments</h4>
                <div className="space-y-3">
                  {repaymentSchedule.map((payment) => (
                    <div
                      key={payment.month}
                      className="flex items-center justify-between p-3 border border-gray-200 rounded-lg"
                    >
                      <div className="flex items-center space-x-3">
                        {payment.status === 'paid' ? (
                          <CheckCircle className="w-4 h-4 text-emerald-600" />
                        ) : payment.status === 'pending' ? (
                          <Clock className="w-4 h-4 text-amber-600" />
                        ) : (
                          <AlertCircle className="w-4 h-4 text-gray-400" />
                        )}
                        <div>
                          <div className="font-medium text-gray-900">Month {payment.month}</div>
                          <div className="text-sm text-gray-600">Due {payment.due}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-gray-900">${payment.amount}</div>
                        <div className={`text-xs font-medium ${
                          payment.status === 'paid' ? 'text-emerald-600' :
                          payment.status === 'pending' ? 'text-amber-600' :
                          'text-gray-500'
                        }`}>
                          {payment.status.charAt(0).toUpperCase() + payment.status.slice(1)}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <button className="w-full mt-6 py-3 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition-colors">
                View All Loan Details
              </button>
            </div>

            {/* Documents & Support */}
            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Documents & Support</h3>
              
              <div className="space-y-3">
                <button className="w-full flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="flex items-center space-x-3">
                    <FileText className="w-5 h-5 text-indigo-600" />
                    <span className="font-medium text-gray-900">Loan Agreement</span>
                  </div>
                  <ArrowLeft className="w-4 h-4 text-gray-400 rotate-180" />
                </button>

                <button className="w-full flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="flex items-center space-x-3">
                    <Shield className="w-5 h-5 text-emerald-600" />
                    <span className="font-medium text-gray-900">Privacy Policy</span>
                  </div>
                  <ArrowLeft className="w-4 h-4 text-gray-400 rotate-180" />
                </button>

                <button className="w-full flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="flex items-center space-x-3">
                    <TrendingUp className="w-5 h-5 text-cyan-600" />
                    <span className="font-medium text-gray-900">Improve Credit Score</span>
                  </div>
                  <ArrowLeft className="w-4 h-4 text-gray-400 rotate-180" />
                </button>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="text-center">
                  <div className="text-sm text-gray-600">Need Help?</div>
                  <button className="mt-2 text-cyan-600 font-medium hover:text-cyan-700">
                    Contact Support
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}