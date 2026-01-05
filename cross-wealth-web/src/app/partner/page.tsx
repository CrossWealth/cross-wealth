import {
    TrendingUp,
    Users,
    Globe,
    Shield,
    BarChart3,
    FileText,
    Target,
    Download,
    Filter,
    Eye
  } from 'lucide-react';
  import Link from 'next/link';
  
  export default function PartnerPage() {
    const impactMetrics = [
      { label: 'Total Users', value: '45,892', change: '+12%', color: 'text-blue-600' },
      { label: 'Active Savers', value: '28,450', change: '+8%', color: 'text-emerald-600' },
      { label: 'Loans Issued', value: '12,847', change: '+15%', color: 'text-purple-600' },
      { label: 'Avg. Savings', value: '$850', change: '+5%', color: 'text-amber-600' },
    ];
  
    const sdgGoals = [
      { goal: 'No Poverty', progress: 85, color: 'bg-red-500' },
      { goal: 'Decent Work & Economic Growth', progress: 78, color: 'bg-amber-500' },
      { goal: 'Reduced Inequalities', progress: 92, color: 'bg-purple-500' },
      { goal: 'Partnerships for Goals', progress: 65, color: 'bg-blue-500' },
    ];
  
    const regions = [
      { name: 'East Africa', users: 18500, growth: '+15%', color: 'bg-emerald-500' },
      { name: 'South Asia', users: 12500, growth: '+22%', color: 'bg-cyan-500' },
      { name: 'Latin America', users: 9800, growth: '+8%', color: 'bg-amber-500' },
      { name: 'Middle East', users: 5100, growth: '+18%', color: 'bg-purple-500' },
    ];
  
    return (
      <div className="min-h-screen bg-linear-to-b from-gray-50 to-indigo-50">
        {/* Partner Header */}
        <header className="bg-white border-b border-gray-200">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-linear-to-r from-indigo-500 to-purple-600 rounded-xl">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-gray-900">Partner Analytics</h1>
                  <p className="text-sm text-gray-600">UNHCR Partnership Dashboard</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="hidden md:flex items-center space-x-2 px-4 py-2 bg-indigo-50 rounded-full">
                  <Shield className="w-4 h-4 text-indigo-600" />
                  <span className="text-sm font-medium text-indigo-700">SDG Impact Partner</span>
                </div>
                <Link
                  href="/worker"
                  className="px-4 py-2 text-indigo-600 font-medium hover:text-indigo-700 transition-colors"
                >
                  Switch to Worker
                </Link>
              </div>
            </div>
          </div>
        </header>
  
        <main className="container mx-auto px-4 py-6">
          {/* Impact Overview */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {impactMetrics.map((metric) => (
              <div key={metric.label} className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-lg bg-linear-to-r from-indigo-50 to-purple-50">
                    <TrendingUp className="w-6 h-6 text-indigo-600" />
                  </div>
                  <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium">
                    {metric.change}
                  </span>
                </div>
                <div className={`text-2xl font-bold ${metric.color}`}>{metric.value}</div>
                <div className="text-sm text-gray-600 mt-1">{metric.label}</div>
              </div>
            ))}
          </div>
  
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Column */}
            <div className="lg:col-span-2 space-y-8">
              {/* SDG Impact */}
              <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h2 className="text-xl font-bold text-gray-900">SDG Impact Tracking</h2>
                    <p className="text-gray-600">UN Sustainable Development Goals alignment</p>
                  </div>
                  <button className="px-4 py-2 bg-indigo-50 text-indigo-700 rounded-lg font-medium hover:bg-indigo-100 transition-colors flex items-center gap-2">
                    <Download className="w-4 h-4" />
                    Export Report
                  </button>
                </div>
                
                <div className="space-y-6">
                  {sdgGoals.map((sdg) => (
                    <div key={sdg.goal} className="space-y-2">
                      <div className="flex justify-between">
                        <span className="font-medium text-gray-900">{sdg.goal}</span>
                        <span className="text-sm font-medium text-gray-700">{sdg.progress}%</span>
                      </div>
                      <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                        <div
                          className={`h-full ${sdg.color} rounded-full transition-all duration-1000`}
                          style={{ width: `${sdg.progress}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
  
              {/* Regional Distribution */}
              <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold text-gray-900">Regional Distribution</h2>
                  <button className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-gray-900 transition-colors">
                    <Filter className="w-4 h-4" />
                    Filter Regions
                  </button>
                </div>
                
                <div className="space-y-4">
                  {regions.map((region) => (
                    <div key={region.name} className="flex items-center justify-between p-4 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors">
                      <div className="flex items-center space-x-4">
                        <div className={`w-4 h-4 rounded-full ${region.color}`} />
                        <div>
                          <div className="font-medium text-gray-900">{region.name}</div>
                          <div className="text-sm text-gray-600">{region.users.toLocaleString()} users</div>
                        </div>
                      </div>
                      
                      <div className="text-right">
                        <div className="font-bold text-gray-900">{region.growth}</div>
                        <div className="text-sm text-gray-600">Monthly growth</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
  
            {/* Right Column */}
            <div className="space-y-8">
              {/* Key Metrics */}
              <div className="bg-linear-to-br from-indigo-500 to-purple-600 rounded-2xl p-6 text-white">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold">Key Performance Indicators</h3>
                  <Target className="w-6 h-6" />
                </div>
                
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Cost Reduction Target</span>
                      <span>90%</span>
                    </div>
                    <div className="h-2 bg-white/30 rounded-full overflow-hidden">
                      <div className="h-full bg-white rounded-full" style={{ width: '85%' }} />
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Financial Inclusion Rate</span>
                      <span>70%</span>
                    </div>
                    <div className="h-2 bg-white/30 rounded-full overflow-hidden">
                      <div className="h-full bg-white rounded-full" style={{ width: '65%' }} />
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>User Retention</span>
                      <span>95%</span>
                    </div>
                    <div className="h-2 bg-white/30 rounded-full overflow-hidden">
                      <div className="h-full bg-white rounded-full" style={{ width: '92%' }} />
                    </div>
                  </div>
                </div>
                
                <button className="w-full mt-6 py-3 bg-white text-indigo-700 rounded-xl font-semibold hover:bg-gray-100 transition-colors">
                  View Detailed Report
                </button>
              </div>
  
              {/* Reports & Analytics */}
              <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Reports & Analytics</h3>
                <div className="space-y-3">
                  {[
                    { icon: BarChart3, title: 'Monthly Impact Report', date: 'Nov 2024', status: 'Ready' },
                    { icon: FileText, title: 'Financial Inclusion Study', date: 'Oct 2024', status: 'Published' },
                    { icon: Users, title: 'User Demographics', date: 'Sep 2024', status: 'Updated' },
                    { icon: Shield, title: 'Compliance Audit', date: 'Aug 2024', status: 'Completed' },
                  ].map((report) => (
                    <div
                      key={report.title}
                      className="flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <div className="flex items-center space-x-3">
                        <report.icon className="w-5 h-5 text-indigo-600" />
                        <div>
                          <div className="font-medium text-gray-900">{report.title}</div>
                          <div className="text-sm text-gray-600">{report.date}</div>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <span className={`px-2 py-1 rounded text-xs font-medium ${
                          report.status === 'Ready' ? 'bg-emerald-100 text-emerald-700' :
                          report.status === 'Published' ? 'bg-blue-100 text-blue-700' :
                          'bg-gray-100 text-gray-700'
                        }`}>
                          {report.status}
                        </span>
                        <button className="p-1 hover:bg-gray-100 rounded">
                          <Eye className="w-4 h-4 text-gray-600" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
                
                <button className="w-full mt-6 py-3 bg-indigo-50 text-indigo-700 rounded-xl font-medium hover:bg-indigo-100 transition-colors">
                  View All Reports
                </button>
              </div>
            </div>
          </div>
        </main>
  
        {/* Bottom Navigation */}
        <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 md:hidden">
          <div className="flex justify-around py-3">
            {[
              { icon: '📊', label: 'Analytics' },
              { icon: '🎯', label: 'Impact' },
              { icon: '📈', label: 'Reports' },
              { icon: '🌍', label: 'Regions' },
              { icon: '⚙️', label: 'Settings' },
            ].map((item) => (
              <button
                key={item.label}
                className="flex flex-col items-center space-y-1 p-2 rounded-xl text-gray-600 hover:text-indigo-600 transition-colors"
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