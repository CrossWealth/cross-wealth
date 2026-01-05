import { 
    Users, 
    TrendingUp, 
    DollarSign, 
    CheckCircle, 
    Clock, 
    MapPin,
    Smartphone,
    Shield,
    Zap
  } from 'lucide-react';
  import Link from 'next/link';
  
  export default function AgentPage() {
    const stats = [
      { icon: Users, label: 'Clients Onboarded', value: '247', change: '+12%' },
      { icon: DollarSign, label: 'Total Volume', value: '$124,580', change: '+8%' },
      { icon: CheckCircle, label: 'Completed TXs', value: '1,248', change: '+15%' },
      { icon: TrendingUp, label: 'Commission Earned', value: '$3,450', change: '+22%' },
    ];
  
    const pendingActions = [
      { id: 1, client: 'Maria Rodriguez', action: 'KYC Verification', time: '15 min ago', priority: 'high' },
      { id: 2, client: 'James Okafor', action: 'Loan Application', time: '2 hours ago', priority: 'medium' },
      { id: 3, client: 'Fatima Hassan', action: 'Savings Setup', time: '1 day ago', priority: 'low' },
    ];
  
    return (
      <div className="min-h-screen bg-linear-to-b from-gray-50 to-blue-50">
        {/* Agent Header */}
        <header className="bg-white border-b border-gray-200">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-linear-to-r from-emerald-500 to-green-600 rounded-xl">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-gray-900">Agent Portal</h1>
                  <p className="text-sm text-gray-600">Welcome back, Agent Samuel!</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="hidden md:flex items-center space-x-2 px-4 py-2 bg-blue-50 rounded-full">
                  <MapPin className="w-4 h-4 text-blue-600" />
                  <span className="text-sm font-medium text-blue-700">Nairobi Hub</span>
                </div>
                <Link
                  href="/worker"
                  className="px-4 py-2 text-cyan-600 font-medium hover:text-cyan-700 transition-colors"
                >
                  Switch to Worker
                </Link>
              </div>
            </div>
          </div>
        </header>
  
        <main className="container mx-auto px-4 py-6">
          {/* Stats Overview */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-lg ${
                    stat.label.includes('Commission') 
                      ? 'bg-linear-to-r from-amber-100 to-orange-100' 
                      : 'bg-linear-to-r from-blue-50 to-cyan-50'
                  }`}>
                    <stat.icon className={`w-6 h-6 ${
                      stat.label.includes('Commission') 
                        ? 'text-amber-600' 
                        : 'text-cyan-600'
                    }`} />
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
            {/* Left Column */}
            <div className="lg:col-span-2 space-y-8">
              {/* Quick Actions */}
              <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
                <h2 className="text-xl font-bold text-gray-900 mb-6">Quick Actions</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { icon: Users, label: 'Onboard Client', color: 'from-blue-500 to-cyan-500' },
                    { icon: Smartphone, label: 'USSD Code', color: 'from-emerald-500 to-green-500' },
                    { icon: Shield, label: 'Verify KYC', color: 'from-purple-500 to-pink-500' },
                    { icon: Zap, label: 'Process Loan', color: 'from-amber-500 to-orange-500' },
                  ].map((action) => (
                    <button
                      key={action.label}
                      className="flex flex-col items-center p-4 rounded-xl border border-gray-200 hover:border-cyan-300 hover:shadow-md transition-all duration-200"
                    >
                      <div className={`p-3 rounded-lg bg-linear-to-r ${action.color} mb-3`}>
                        <action.icon className="w-5 h-5 text-white" />
                      </div>
                      <span className="font-medium text-gray-900 text-center">{action.label}</span>
                    </button>
                  ))}
                </div>
              </div>
  
              {/* Pending Actions */}
              <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold text-gray-900">Pending Actions</h2>
                  <span className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-sm font-medium">
                    3 urgent
                  </span>
                </div>
                
                <div className="space-y-4">
                  {pendingActions.map((action) => (
                    <div
                      key={action.id}
                      className="flex items-center justify-between p-4 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors"
                    >
                      <div className="flex items-center space-x-4">
                        <div className={`p-2 rounded-lg ${
                          action.priority === 'high' ? 'bg-red-100' :
                          action.priority === 'medium' ? 'bg-amber-100' : 'bg-blue-100'
                        }`}>
                          <Clock className={`w-5 h-5 ${
                            action.priority === 'high' ? 'text-red-600' :
                            action.priority === 'medium' ? 'text-amber-600' : 'text-blue-600'
                          }`} />
                        </div>
                        <div>
                          <div className="font-medium text-gray-900">{action.client}</div>
                          <div className="text-sm text-gray-600">{action.action}</div>
                        </div>
                      </div>
                      
                      <div className="text-right">
                        <div className="text-sm text-gray-500">{action.time}</div>
                        <button className="mt-2 px-4 py-2 bg-cyan-600 text-white rounded-lg text-sm font-medium hover:bg-cyan-700 transition-colors">
                          Process
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
  
            {/* Right Column */}
            <div className="space-y-8">
              {/* Agent Profile */}
              <div className="bg-linear-to-br from-emerald-500 to-green-600 rounded-2xl p-6 text-white">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                    <Users className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Agent Level: Gold</h3>
                    <p className="text-emerald-100">Top 10% performer</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Progress to Platinum</span>
                      <span>85%</span>
                    </div>
                    <div className="h-2 bg-white/30 rounded-full overflow-hidden">
                      <div className="h-full bg-white rounded-full" style={{ width: '85%' }} />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 pt-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold">4.9</div>
                      <div className="text-sm text-emerald-100">Rating</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold">98%</div>
                      <div className="text-sm text-emerald-100">Satisfaction</div>
                    </div>
                  </div>
                </div>
                
                <button className="w-full mt-6 py-3 bg-white text-emerald-700 rounded-xl font-semibold hover:bg-gray-100 transition-colors">
                  View Performance Details
                </button>
              </div>
  
              {/* Training & Resources */}
              <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Training & Resources</h3>
                <div className="space-y-3">
                  {[
                    { title: 'KYC Best Practices', progress: 100 },
                    { title: 'Loan Processing Guide', progress: 75 },
                    { title: 'USSD Masterclass', progress: 30 },
                    { title: 'Fraud Prevention', progress: 50 },
                  ].map((resource) => (
                    <div key={resource.title} className="space-y-2">
                      <div className="flex justify-between">
                        <span className="font-medium text-gray-900">{resource.title}</span>
                        <span className="text-sm text-gray-600">{resource.progress}%</span>
                      </div>
                      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-linear-to-r from-cyan-500 to-blue-600 rounded-full"
                          style={{ width: `${resource.progress}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
                
                <button className="w-full mt-6 py-3 bg-gray-100 text-gray-700 rounded-xl font-medium hover:bg-gray-200 transition-colors">
                  Access Training Portal
                </button>
              </div>
            </div>
          </div>
        </main>
  
        {/* Bottom Navigation */}
        <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 md:hidden">
          <div className="flex justify-around py-3">
            {[
              { icon: '📊', label: 'Dashboard' },
              { icon: '👥', label: 'Clients' },
              { icon: '💸', label: 'Transactions' },
              { icon: '🎓', label: 'Training' },
              { icon: '⚙️', label: 'Settings' },
            ].map((item) => (
              <button
                key={item.label}
                className="flex flex-col items-center space-y-1 p-2 rounded-xl text-gray-600 hover:text-cyan-600 transition-colors"
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