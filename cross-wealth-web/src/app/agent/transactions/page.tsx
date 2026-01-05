'use client';

import {
  DollarSign,
  Filter,
  Search,
  Download,
  Eye,
  CheckCircle,
  Clock,
  AlertCircle,
  ArrowUpRight,
  ArrowDownLeft,
  Users,
  BarChart3,
  Calendar,
  TrendingUp
} from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';

const transactionTypes = [
  { id: 'all', name: 'All Transactions' },
  { id: 'deposit', name: 'Deposits' },
  { id: 'withdrawal', name: 'Withdrawals' },
  { id: 'transfer', name: 'Transfers' },
  { id: 'loan', name: 'Loan Payments' },
];

const statusFilters = [
  { id: 'all', name: 'All Status', color: 'bg-gray-200' },
  { id: 'completed', name: 'Completed', color: 'bg-emerald-500' },
  { id: 'pending', name: 'Pending', color: 'bg-amber-500' },
  { id: 'failed', name: 'Failed', color: 'bg-red-500' },
];

const transactions = [
  {
    id: 'TX-789012',
    client: 'Maria Rodriguez',
    type: 'deposit',
    amount: 250,
    currency: 'USD',
    status: 'completed',
    time: '2 hours ago',
    method: 'Mobile Money',
    agentFee: 2.5,
    icon: ArrowDownLeft,
    iconColor: 'text-emerald-600',
    bgColor: 'bg-emerald-50'
  },
  {
    id: 'TX-789013',
    client: 'James Okafor',
    type: 'transfer',
    amount: 150,
    currency: 'USD',
    status: 'pending',
    time: '4 hours ago',
    method: 'Bank Transfer',
    agentFee: 1.5,
    icon: ArrowUpRight,
    iconColor: 'text-amber-600',
    bgColor: 'bg-amber-50'
  },
  {
    id: 'TX-789014',
    client: 'Fatima Hassan',
    type: 'withdrawal',
    amount: 100,
    currency: 'EUR',
    status: 'completed',
    time: '1 day ago',
    method: 'Cash',
    agentFee: 2.0,
    icon: ArrowUpRight,
    iconColor: 'text-blue-600',
    bgColor: 'bg-blue-50'
  },
  {
    id: 'TX-789015',
    client: 'Chen Wei',
    type: 'loan',
    amount: 50,
    currency: 'USD',
    status: 'completed',
    time: '2 days ago',
    method: 'Auto-debit',
    agentFee: 0.5,
    icon: ArrowDownLeft,
    iconColor: 'text-purple-600',
    bgColor: 'bg-purple-50'
  },
  {
    id: 'TX-789016',
    client: 'Amina Diallo',
    type: 'deposit',
    amount: 300,
    currency: 'USD',
    status: 'failed',
    time: '3 days ago',
    method: 'Mobile Money',
    agentFee: 0,
    icon: ArrowDownLeft,
    iconColor: 'text-red-600',
    bgColor: 'bg-red-50'
  },
];

export default function TransactionsPage() {
  const [selectedType, setSelectedType] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredTransactions = transactions.filter(tx => {
    const matchesType = selectedType === 'all' || tx.type === selectedType;
    const matchesStatus = selectedStatus === 'all' || tx.status === selectedStatus;
    const matchesSearch = searchQuery === '' || 
      tx.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tx.id.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesType && matchesStatus && matchesSearch;
  });

  const stats = {
    totalVolume: transactions.reduce((sum, tx) => sum + tx.amount, 0),
    totalTransactions: transactions.length,
    totalFees: transactions.reduce((sum, tx) => sum + tx.agentFee, 0),
    successRate: Math.round((transactions.filter(tx => tx.status === 'completed').length / transactions.length) * 100)
  };

  return (
    <div className="min-h-screen bg-linear-to-b from-gray-50 to-blue-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link
                href="/agent"
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <ArrowUpRight className="w-5 h-5 text-gray-600 rotate-180" />
              </Link>
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-linear-to-r from-cyan-500 to-blue-600 rounded-xl">
                  <DollarSign className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-gray-900">Transactions</h1>
                  <p className="text-sm text-gray-600">Manage and monitor all client transactions</p>
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                Last 7 Days
              </button>
              <button className="px-4 py-2 bg-linear-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-medium hover:opacity-90 transition-opacity flex items-center gap-2">
                <Download className="w-4 h-4" />
                Export
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {[
            {
              icon: DollarSign,
              label: 'Total Volume',
              value: `$${stats.totalVolume.toLocaleString()}`,
              change: '+12%',
              color: 'from-cyan-500 to-blue-500'
            },
            {
              icon: BarChart3,
              label: 'Total Transactions',
              value: stats.totalTransactions.toString(),
              change: '+8%',
              color: 'from-emerald-500 to-green-500'
            },
            {
              icon: TrendingUp,
              label: 'Total Fees',
              value: `$${stats.totalFees.toFixed(2)}`,
              change: '+15%',
              color: 'from-amber-500 to-orange-500'
            },
            {
              icon: CheckCircle,
              label: 'Success Rate',
              value: `${stats.successRate}%`,
              change: '+3%',
              color: 'from-purple-500 to-pink-500'
            },
          ].map((stat) => (
            <div key={stat.label} className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-lg bg-linear-to-r ${stat.color}`}>
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium">
                  {stat.change}
                </span>
              </div>
              <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
              <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Filters & List */}
          <div className="lg:col-span-2 space-y-8">
            {/* Filters & Search */}
            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search by client name or transaction ID..."
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Filter className="w-5 h-5 text-gray-600" />
                  <select
                    value={selectedStatus}
                    onChange={(e) => setSelectedStatus(e.target.value)}
                    className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none transition-colors"
                  >
                    {statusFilters.map((filter) => (
                      <option key={filter.id} value={filter.id}>
                        {filter.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Transaction Type Filters */}
              <div className="flex flex-wrap gap-2">
                {transactionTypes.map((type) => (
                  <button
                    key={type.id}
                    onClick={() => setSelectedType(type.id)}
                    className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                      selectedType === type.id
                        ? 'bg-linear-to-r from-cyan-500 to-blue-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {type.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Transactions List */}
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
              <div className="p-6 border-b border-gray-200">
                <h3 className="text-lg font-bold text-gray-900">Recent Transactions</h3>
              </div>

              <div className="divide-y divide-gray-200">
                {filteredTransactions.length > 0 ? (
                  filteredTransactions.map((tx) => {
                    const TxIcon = tx.icon;
                    const StatusIcon = tx.status === 'completed' ? CheckCircle :
                                      tx.status === 'pending' ? Clock : AlertCircle;
                    
                    return (
                      <div
                        key={tx.id}
                        className="p-6 hover:bg-gray-50 transition-colors"
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4">
                            <div className={`p-3 rounded-lg ${tx.bgColor}`}>
                              <TxIcon className={`w-5 h-5 ${tx.iconColor}`} />
                            </div>
                            
                            <div>
                              <div className="flex items-center space-x-2">
                                <div className="font-medium text-gray-900">{tx.client}</div>
                                <div className={`inline-flex items-center px-2 py-1 rounded text-xs font-medium ${
                                  tx.status === 'completed' ? 'bg-emerald-100 text-emerald-700' :
                                  tx.status === 'pending' ? 'bg-amber-100 text-amber-700' :
                                  'bg-red-100 text-red-700'
                                }`}>
                                  <StatusIcon className="w-3 h-3 mr-1" />
                                  {tx.status.charAt(0).toUpperCase() + tx.status.slice(1)}
                                </div>
                              </div>
                              <div className="text-sm text-gray-600 mt-1">
                                {tx.id} • {tx.method} • {tx.time}
                              </div>
                            </div>
                          </div>

                          <div className="text-right">
                            <div className={`text-lg font-bold ${
                              tx.type === 'withdrawal' || tx.type === 'transfer' 
                                ? 'text-red-600' 
                                : 'text-emerald-600'
                            }`}>
                              {tx.type === 'withdrawal' || tx.type === 'transfer' ? '-' : '+'}
                              {tx.amount} {tx.currency}
                            </div>
                            <div className="text-sm text-gray-600 mt-1">
                              Agent Fee: ${tx.agentFee}
                            </div>
                            <button className="mt-2 text-sm text-cyan-600 hover:text-cyan-700 font-medium flex items-center gap-1">
                              <Eye className="w-4 h-4" />
                              View Details
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })
                ) : (
                  <div className="p-12 text-center">
                    <DollarSign className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                    <h4 className="text-lg font-medium text-gray-900 mb-2">No transactions found</h4>
                    <p className="text-gray-600">Try adjusting your filters or search criteria</p>
                  </div>
                )}
              </div>

              {filteredTransactions.length > 0 && (
                <div className="p-6 border-t border-gray-200">
                  <button className="w-full py-3 text-center text-cyan-600 font-semibold hover:text-cyan-700 hover:bg-cyan-50 rounded-lg transition-colors">
                    Load More Transactions →
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Right Column - Insights & Actions */}
          <div className="space-y-8">
            {/* Transaction Insights */}
            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-6">Transaction Insights</h3>
              
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-700">Volume by Type</span>
                    <span className="font-medium">100%</span>
                  </div>
                  <div className="space-y-2">
                    {[
                      { type: 'Deposits', percentage: 45, color: 'bg-emerald-500' },
                      { type: 'Transfers', percentage: 30, color: 'bg-cyan-500' },
                      { type: 'Withdrawals', percentage: 20, color: 'bg-amber-500' },
                      { type: 'Loans', percentage: 5, color: 'bg-purple-500' },
                    ].map((item) => (
                      <div key={item.type} className="space-y-1">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-700">{item.type}</span>
                          <span className="font-medium">{item.percentage}%</span>
                        </div>
                        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div
                            className={`h-full ${item.color} rounded-full`}
                            style={{ width: `${item.percentage}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-200">
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-medium text-gray-900">Peak Hours</span>
                    <Users className="w-5 h-5 text-gray-400" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-3 bg-cyan-50 rounded-lg">
                      <div className="text-lg font-bold text-cyan-700">10 AM</div>
                      <div className="text-sm text-cyan-600">Morning Peak</div>
                    </div>
                    <div className="text-center p-3 bg-purple-50 rounded-lg">
                      <div className="text-lg font-bold text-purple-700">3 PM</div>
                      <div className="text-sm text-purple-600">Afternoon Peak</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-linear-to-br from-cyan-500 to-blue-600 rounded-2xl p-6 text-white">
              <h3 className="text-lg font-bold mb-6">Quick Actions</h3>
              
              <div className="space-y-4">
                <button className="w-full flex items-center justify-between p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
                  <div className="flex items-center space-x-3">
                    <DollarSign className="w-5 h-5" />
                    <span className="font-medium">Process Deposit</span>
                  </div>
                  <ArrowDownLeft className="w-4 h-4" />
                </button>

                <button className="w-full flex items-center justify-between p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
                  <div className="flex items-center space-x-3">
                    <ArrowUpRight className="w-5 h-5" />
                    <span className="font-medium">Process Withdrawal</span>
                  </div>
                  <ArrowUpRight className="w-4 h-4" />
                </button>

                <button className="w-full flex items-center justify-between p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
                  <div className="flex items-center space-x-3">
                    <AlertCircle className="w-5 h-5" />
                    <span className="font-medium">Resolve Failed TX</span>
                  </div>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>

              <div className="mt-8 pt-6 border-t border-white/20">
                <div className="text-center">
                  <div className="text-2xl font-bold">98.2%</div>
                  <div className="text-cyan-100">Success Rate Today</div>
                </div>
              </div>
            </div>

            {/* Need Help? */}
            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Need Help?</h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="p-1 bg-cyan-100 rounded">
                    <AlertCircle className="w-4 h-4 text-cyan-600" />
                  </div>
                  <p className="text-sm text-gray-600">Failed transactions are automatically flagged for review</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="p-1 bg-cyan-100 rounded">
                    <AlertCircle className="w-4 h-4 text-cyan-600" />
                  </div>
                  <p className="text-sm text-gray-600">Contact support for transactions pending over 24 hours</p>
                </div>
              </div>
              <button className="w-full mt-4 py-3 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition-colors">
                Contact Support
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}