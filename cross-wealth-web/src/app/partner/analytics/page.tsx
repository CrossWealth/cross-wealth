'use client';

import {
  BarChart3,
  TrendingUp,
  Users,
  Globe,
  Filter,
  Download,
  Calendar,
  DollarSign,
  Target,
  PieChart,
  ArrowUpRight,
  Eye,
  Share2,
  Activity,
  TrendingDown
} from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';

const timeRanges = [
  { id: '7d', name: 'Last 7 Days' },
  { id: '30d', name: 'Last 30 Days' },
  { id: '90d', name: 'Last Quarter' },
  { id: '1y', name: 'Last Year' },
];

const regions = [
  { name: 'East Africa', users: 18500, growth: 15, savings: 4200000, loans: 2450000, color: 'bg-emerald-500' },
  { name: 'South Asia', users: 12500, growth: 22, savings: 3100000, loans: 1850000, color: 'bg-cyan-500' },
  { name: 'Latin America', users: 9800, growth: 8, savings: 2450000, loans: 1520000, color: 'bg-amber-500' },
  { name: 'Middle East', users: 5100, growth: 18, savings: 1850000, loans: 980000, color: 'bg-purple-500' },
];

const kpis = [
  { name: 'Financial Inclusion Rate', current: 68, target: 70, trend: 'up' },
  { name: 'Avg. Savings Growth', current: 8.2, target: 10, trend: 'up' },
  { name: 'Loan Default Rate', current: 3.5, target: 5, trend: 'down' },
  { name: 'User Retention', current: 92, target: 90, trend: 'up' },
];

export default function AnalyticsPage() {
  const [selectedRange, setSelectedRange] = useState('30d');
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-linear-to-b from-gray-50 to-indigo-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link
                href="/partner"
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <ArrowUpRight className="w-5 h-5 text-gray-600 rotate-180" />
              </Link>
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-linear-to-r from-indigo-500 to-purple-600 rounded-xl">
                  <BarChart3 className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-gray-900">Advanced Analytics</h1>
                  <p className="text-sm text-gray-600">Deep insights and impact metrics</p>
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <select
                  value={selectedRange}
                  onChange={(e) => setSelectedRange(e.target.value)}
                  className="bg-transparent outline-none"
                >
                  {timeRanges.map((range) => (
                    <option key={range.id} value={range.id}>{range.name}</option>
                  ))}
                </select>
              </button>
              <button className="px-4 py-2 bg-linear-to-r from-indigo-500 to-purple-600 text-white rounded-lg font-medium hover:opacity-90 transition-opacity flex items-center gap-2">
                <Download className="w-4 h-4" />
                Export Report
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6">
        {/* KPI Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {[
            {
              icon: Users,
              label: 'Total Users',
              value: '45,892',
              change: '+12%',
              color: 'from-blue-500 to-cyan-500',
              detail: 'Active across all regions'
            },
            {
              icon: DollarSign,
              label: 'Total Savings',
              value: '$11.6M',
              change: '+8%',
              color: 'from-emerald-500 to-green-500',
              detail: 'Cross-border savings'
            },
            {
              icon: TrendingUp,
              label: 'Loans Disbursed',
              value: '$6.8M',
              change: '+15%',
              color: 'from-purple-500 to-pink-500',
              detail: 'AI-powered lending'
            },
            {
              icon: Target,
              label: 'SDG Impact Score',
              value: '87/100',
              change: '+5%',
              color: 'from-amber-500 to-orange-500',
              detail: 'UN Goals alignment'
            },
          ].map((kpi) => (
            <div key={kpi.label} className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-lg bg-linear-to-r ${kpi.color}`}>
                  <kpi.icon className="w-6 h-6 text-white" />
                </div>
                <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium">
                  {kpi.change}
                </span>
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">{kpi.value}</div>
              <div className="text-sm font-medium text-gray-900 mb-1">{kpi.label}</div>
              <div className="text-xs text-gray-500">{kpi.detail}</div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Charts & Regional Data */}
          <div className="lg:col-span-2 space-y-8">
            {/* Regional Performance */}
            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-xl font-bold text-gray-900">Regional Performance</h2>
                  <p className="text-gray-600">Breakdown by geographic region</p>
                </div>
                <div className="flex items-center space-x-3">
                  <Filter className="w-5 h-5 text-gray-600" />
                  <select
                    value={selectedRegion || 'all'}
                    onChange={(e) => setSelectedRegion(e.target.value === 'all' ? null : e.target.value)}
                    className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-colors"
                  >
                    <option value="all">All Regions</option>
                    {regions.map((region) => (
                      <option key={region.name} value={region.name}>{region.name}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="space-y-6">
                {regions
                  .filter(r => !selectedRegion || r.name === selectedRegion)
                  .map((region) => (
                    <div key={region.name} className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className={`w-4 h-4 rounded-full ${region.color}`} />
                          <div>
                            <div className="font-medium text-gray-900">{region.name}</div>
                            <div className="text-sm text-gray-600">{region.users.toLocaleString()} users</div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="flex items-center text-emerald-600 font-medium">
                            <TrendingUp className="w-4 h-4 mr-1" />
                            +{region.growth}% growth
                          </div>
                          <div className="text-sm text-gray-600">Monthly</div>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-linear-to-r from-emerald-50 to-green-50 p-4 rounded-xl">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-sm font-medium text-gray-700">Total Savings</span>
                            <DollarSign className="w-4 h-4 text-emerald-600" />
                          </div>
                          <div className="text-xl font-bold text-gray-900">
                            ${(region.savings / 1000000).toFixed(1)}M
                          </div>
                          <div className="text-xs text-gray-500">Accumulated savings</div>
                        </div>

                        <div className="bg-linear-to-r from-purple-50 to-pink-50 p-4 rounded-xl">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-sm font-medium text-gray-700">Loans Disbursed</span>
                            <TrendingUp className="w-4 h-4 text-purple-600" />
                          </div>
                          <div className="text-xl font-bold text-gray-900">
                            ${(region.loans / 1000000).toFixed(1)}M
                          </div>
                          <div className="text-xs text-gray-500">Total loan volume</div>
                        </div>
                      </div>

                      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div className="h-full flex">
                          <div
                            className="bg-emerald-500"
                            style={{ width: `${(region.savings / 4200000) * 100}%` }}
                          />
                          <div
                            className="bg-purple-500"
                            style={{ width: `${(region.loans / 2450000) * 100}%` }}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>

            {/* KPI Targets */}
            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
              <h2 className="text-xl font-bold text-gray-900 mb-6">KPI Progress vs Targets</h2>
              
              <div className="space-y-6">
                {kpis.map((kpi) => (
                  <div key={kpi.name} className="space-y-3">
                    <div className="flex justify-between items-center">
                      <div className="font-medium text-gray-900">{kpi.name}</div>
                      <div className="flex items-center space-x-2">
                        <span className="text-lg font-bold text-gray-900">{kpi.current.toFixed(1)}%</span>
                        <span className="text-sm text-gray-500">/ {kpi.target}% target</span>
                        {kpi.trend === 'up' ? (
                          <div className="flex items-center text-emerald-600">
                            <TrendingUp className="w-4 h-4" />
                          </div>
                        ) : (
                          <div className="flex items-center text-red-600">
                            <TrendingDown className="w-4 h-4" />
                          </div>
                        )}
                      </div>
                    </div>
                    
                    <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full transition-all duration-1000 ${
                          kpi.current >= kpi.target 
                            ? 'bg-linear-to-r from-emerald-500 to-green-500'
                            : kpi.current >= kpi.target * 0.8
                            ? 'bg-linear-to-r from-amber-500 to-orange-500'
                            : 'bg-linear-to-r from-red-500 to-pink-500'
                        }`}
                        style={{ width: `${(kpi.current / kpi.target) * 100}%` }}
                      />
                    </div>
                    
                    <div className="flex justify-between text-sm text-gray-500">
                      <span>Current: {kpi.current.toFixed(1)}%</span>
                      <span>Target: {kpi.target}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Insights & Distribution */}
          <div className="space-y-8">
            {/* User Distribution */}
            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold text-gray-900">User Distribution</h3>
                <PieChart className="w-5 h-5 text-indigo-600" />
              </div>
              
              <div className="space-y-4">
                {[
                  { segment: 'Migrant Workers', percentage: 65, color: 'bg-indigo-500' },
                  { segment: 'Local Savers', percentage: 20, color: 'bg-cyan-500' },
                  { segment: 'Small Businesses', percentage: 10, color: 'bg-emerald-500' },
                  { segment: 'Women-led Households', percentage: 5, color: 'bg-purple-500' },
                ].map((item) => (
                  <div key={item.segment} className="space-y-2">
                    <div className="flex justify-between">
                      <span className="font-medium text-gray-900">{item.segment}</span>
                      <span className="text-gray-700">{item.percentage}%</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className={`h-full ${item.color} rounded-full transition-all duration-700`}
                        style={{ width: `${item.percentage}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">28,450</div>
                  <div className="text-sm text-gray-600">Active Regular Savers</div>
                </div>
              </div>
            </div>

            {/* Growth Insights */}
            <div className="bg-linear-to-br from-indigo-500 to-purple-600 rounded-2xl p-6 text-white">
              <h3 className="text-lg font-bold mb-6">Growth Insights</h3>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-white/10 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <Activity className="w-5 h-5" />
                    <div>
                      <div className="font-medium">New Users This Month</div>
                      <div className="text-sm opacity-90">+2,450 signups</div>
                    </div>
                  </div>
                  <div className="text-lg font-bold">+15%</div>
                </div>

                <div className="flex items-center justify-between p-3 bg-white/10 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <DollarSign className="w-5 h-5" />
                    <div>
                      <div className="font-medium">Avg. Savings Increase</div>
                      <div className="text-sm opacity-90">Per active user</div>
                    </div>
                  </div>
                  <div className="text-lg font-bold">+8.2%</div>
                </div>

                <div className="flex items-center justify-between p-3 bg-white/10 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <Target className="w-5 h-5" />
                    <div>
                      <div className="font-medium">Financial Inclusion</div>
                      <div className="text-sm opacity-90">Goal progress</div>
                    </div>
                  </div>
                  <div className="text-lg font-bold">68%</div>
                </div>
              </div>

              <button className="w-full mt-6 py-3 bg-white text-indigo-700 rounded-xl font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center gap-2">
                <Share2 className="w-4 h-4" />
                Share Insights
              </button>
            </div>

            {/* Quick Export */}
            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Export</h3>
              <p className="text-gray-600 text-sm mb-6">
                Download specific data sets for reporting and analysis
              </p>
              
              <div className="space-y-3">
                {[
                  { title: 'User Demographics', format: 'CSV', size: '2.4 MB' },
                  { title: 'Transaction History', format: 'Excel', size: '8.7 MB' },
                  { title: 'Impact Metrics', format: 'PDF', size: '1.2 MB' },
                  { title: 'Regional Breakdown', format: 'CSV', size: '3.1 MB' },
                ].map((report) => (
                  <div
                    key={report.title}
                    className="flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <div>
                      <div className="font-medium text-gray-900">{report.title}</div>
                      <div className="text-sm text-gray-600">{report.format} • {report.size}</div>
                    </div>
                    <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                      <Download className="w-4 h-4 text-gray-600" />
                    </button>
                  </div>
                ))}
              </div>
              
              <button className="w-full mt-4 py-3 bg-indigo-50 text-indigo-700 rounded-lg font-medium hover:bg-indigo-100 transition-colors flex items-center justify-center gap-2">
                <Eye className="w-4 h-4" />
                View All Reports
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}