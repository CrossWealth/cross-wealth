import { WalletConnect } from '@/components/onchain/WalletConnect';
import { CreditScoreDisplay } from '@/components/lending/CreditScoreDisplay';
import { GoalVisualizer } from '@/components/savings/GoalVisualizer';
import { QuickActions } from '@/components/dashboard/QuickActions';
import { FinancialHealth } from '@/components/dashboard/FinancialHealth';
import { TransactionFeed } from '@/components/dashboard/TransactionFeed';
import { SavingsProgress } from '@/components/dashboard/SavingsProgress';
import { 
  Wallet,
  TrendingUp, 
  Shield,
  Globe,
  Zap,
  Target,
  Users,
  Sparkles
} from 'lucide-react';

export default function WorkerDashboard() {
  return (
    <div className="min-h-screen bg-linear-to-b from-blue-50 to-gray-50 pb-20">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="p-2 bg-linear-to-r from-cyan-500 to-blue-600 rounded-xl">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-xl font-bold bg-linear-to-r from-cyan-600 to-blue-700 bg-clip-text text-transparent">
                CrossWealth
              </h1>
            </div>
            
            <div className="flex items-center space-x-3">
              <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                <Globe className="w-5 h-5 text-gray-600" />
              </button>
              <WalletConnect />
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6">
        {/* Welcome Section */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Welcome back, Samuel! 👋</h2>
              <p className="text-gray-600">Your financial journey across borders</p>
            </div>
            <div className="hidden md:flex items-center space-x-2 px-4 py-2 bg-linear-to-r from-green-50 to-emerald-50 rounded-full">
              <Shield className="w-4 h-4 text-emerald-600" />
              <span className="text-sm font-medium text-emerald-700">Privacy Protected</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Main Cards */}
          <div className="lg:col-span-2 space-y-6">
            {/* Financial Health Card */}
            <div className="bg-white rounded-2xl shadow-lg p-5 border border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-cyan-600" />
                  Financial Health
                </h3>
                <span className="px-3 py-1 bg-linear-to-r from-green-100 to-emerald-100 text-emerald-700 rounded-full text-sm font-medium">
                  Improving
                </span>
              </div>
              <FinancialHealth />
            </div>

            {/* Savings Progress Card */}
            <div className="bg-linear-to-br from-cyan-500 to-blue-600 rounded-2xl shadow-xl p-5 text-white">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-xl font-bold flex items-center gap-2">
                    <Target className="w-6 h-6" />
                    Cross-Border Savings
                  </h3>
                  <p className="text-cyan-100">Automatically grow wealth with every transfer</p>
                </div>
                <div className="bg-white/20 p-3 rounded-xl">
                  <Wallet className="w-6 h-6" />
                </div>
              </div>
              <SavingsProgress />
              <GoalVisualizer />
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-2xl shadow-lg p-5 border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <Zap className="w-5 h-5 text-amber-500" />
                Quick Actions
              </h3>
              <QuickActions />
            </div>
          </div>

          {/* Right Column - Side Cards */}
          <div className="space-y-6">
            {/* Credit Score Card */}
            <div className="bg-white rounded-2xl shadow-lg p-5 border border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-purple-600" />
                  AI Credit Score
                </h3>
                <button className="text-sm text-blue-600 font-medium hover:text-blue-700">
                  Learn more
                </button>
              </div>
              <CreditScoreDisplay />
            </div>

            {/* Community Card */}
            <div className="bg-linear-to-br from-purple-500 to-pink-600 rounded-2xl shadow-xl p-5 text-white">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-white/20 p-2 rounded-lg">
                  <Users className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold">Community Pool</h3>
                  <p className="text-purple-100 text-sm">Join 15K+ members saving together</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-purple-100">Total Pool</span>
                  <span className="font-bold">$2.4M</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-purple-100">Your Share</span>
                  <span className="font-bold">$450</span>
                </div>
                <button className="w-full bg-white text-purple-600 font-semibold py-3 rounded-xl hover:bg-gray-100 transition-colors mt-4">
                  View Pool Details
                </button>
              </div>
            </div>

            {/* Recent Transactions */}
            <div className="bg-white rounded-2xl shadow-lg p-5 border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
              <TransactionFeed />
            </div>

            {/* AI Coach Suggestion */}
            <div className="bg-linear-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-2xl p-4">
              <div className="flex items-start gap-3">
                <div className="bg-amber-100 p-2 rounded-lg">
                  <Sparkles className="w-5 h-5 text-amber-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">AI Coach Tip</h4>
                  <p className="text-sm text-gray-600 mt-1">
                    Round up your next transfer by $5 to reach your savings goal 3 days faster!
                  </p>
                  <button className="text-sm text-amber-700 font-medium mt-2 hover:text-amber-800">
                    Enable Round-up →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Bottom Navigation for Mobile */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 md:hidden">
        <div className="flex justify-around py-3">
          {[
            { icon: '🏠', label: 'Home', active: true },
            { icon: '💰', label: 'Save' },
            { icon: '📤', label: 'Send' },
            { icon: '📊', label: 'Stats' },
            { icon: '👤', label: 'Profile' }
          ].map((item) => (
            <button
              key={item.label}
              className={`flex flex-col items-center space-y-1 p-2 rounded-xl transition-colors ${
                item.active ? 'text-blue-600 bg-blue-50' : 'text-gray-600'
              }`}
            >
              <span className="text-xl">{item.icon}</span>
              <span className="text-xs font-medium">{item.label}</span>
            </button>
          ))}
        </div>
      </nav>
    </div>
  );
}