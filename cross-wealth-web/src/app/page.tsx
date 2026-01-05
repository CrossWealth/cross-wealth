import { ArrowRight, Shield, Globe, Zap, Users, Lock, Sparkles } from 'lucide-react';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-linear-to-b from-blue-50 via-white to-cyan-50">
      {/* Navigation */}
      <nav className="glass-effect sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="p-2 bg-linear-to-r from-cyan-500 to-blue-600 rounded-xl">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold gradient-text">CrossWealth</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="font-medium text-gray-700 hover:text-cyan-600 transition-colors">
                Features
              </a>
              <a href="#how-it-works" className="font-medium text-gray-700 hover:text-cyan-600 transition-colors">
                How It Works
              </a>
              <a href="#partners" className="font-medium text-gray-700 hover:text-cyan-600 transition-colors">
                Partners
              </a>
            </div>
            
            <div className="flex items-center space-x-4">
              <Link
                href="/agent"
                className="hidden md:inline px-4 py-2 text-gray-700 hover:text-cyan-600 font-medium transition-colors"
              >
                For Agents
              </Link>
              <Link
                href="/partner"
                className="hidden md:inline px-4 py-2 text-gray-700 hover:text-cyan-600 font-medium transition-colors"
              >
                For Partners
              </Link>
              <Link
                href="/worker"
                className="px-6 py-3 bg-linear-to-r from-cyan-600 to-blue-700 text-white rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center gap-2"
              >
                Get Started
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center px-4 py-2 bg-linear-to-r from-cyan-100 to-blue-100 rounded-full mb-6">
              <Shield className="w-4 h-4 text-cyan-600 mr-2" />
              <span className="text-sm font-medium text-cyan-800">Zero Gas Fees • Privacy-First</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Transform{' '}
              <span className="gradient-text">Remittances</span>
              {' '}into Wealth
            </h1>
            
            <p className="text-xl text-gray-600 mb-8">
              Cross-border micro-savings and AI-powered lending for the unbanked. 
              Built on Stellar blockchain with privacy-preserving credit scoring.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/worker"
                className="px-8 py-4 bg-linear-to-r from-cyan-600 to-blue-700 text-white rounded-xl font-semibold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3"
              >
                Start Saving Today
                <Sparkles className="w-5 h-5" />
              </Link>
              <Link
                href="#how-it-works"
                className="px-8 py-4 bg-white border-2 border-cyan-200 text-cyan-700 rounded-xl font-semibold text-lg hover:bg-cyan-50 transition-colors flex items-center justify-center gap-3"
              >
                <Globe className="w-5 h-5" />
                See How It Works
              </Link>
            </div>
            
            <div className="mt-12 grid grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">$0</div>
                <div className="text-sm text-gray-600">Transaction Fees</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">70%</div>
                <div className="text-sm text-gray-600">Access Credit in 6 Months</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">169M+</div>
                <div className="text-sm text-gray-600">Unbanked Served</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-linear-to-br from-cyan-500 to-blue-600 rounded-3xl p-8 shadow-2xl">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <div className="text-white text-sm opacity-90">CrossWealth Dashboard</div>
                    <div className="text-2xl font-bold text-white">Welcome, Samuel!</div>
                  </div>
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                </div>
                
                <div className="space-y-4">
                  {[
                    { label: 'Cross-Border Savings', value: '$8,500', color: 'bg-cyan-400' },
                    { label: 'AI Credit Score', value: '745', color: 'bg-emerald-400' },
                    { label: 'Active Goals', value: '3', color: 'bg-purple-400' },
                    { label: 'Monthly Growth', value: '+8%', color: 'bg-amber-400' },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center justify-between p-3 bg-white/10 rounded-xl">
                      <span className="text-white">{item.label}</span>
                      <div className="flex items-center gap-2">
                        <div className={`w-3 h-3 rounded-full ${item.color}`} />
                        <span className="text-white font-bold">{item.value}</span>
                      </div>
                    </div>
                  ))}
                </div>
                
                <button className="w-full mt-6 py-3 bg-white text-cyan-700 rounded-xl font-semibold hover:bg-gray-100 transition-colors">
                  View Full Dashboard →
                </button>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-linear-to-r from-purple-500 to-pink-500 rounded-2xl rotate-12 opacity-20 animate-pulse" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-linear-to-r from-amber-500 to-orange-500 rounded-3xl -rotate-12 opacity-20 animate-pulse delay-1000" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Built for <span className="gradient-text">Financial Inclusion</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Combining blockchain technology with AI to create accessible financial tools
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: Shield,
              title: 'Privacy-Preserving AI',
              description: 'Federated learning ensures your data never leaves your device while building credit scores',
              color: 'from-cyan-500 to-blue-500'
            },
            {
              icon: Zap,
              title: 'Zero Gas Fees',
              description: 'Built on Stellar for micro-transactions that are impossible on other chains',
              color: 'from-emerald-500 to-green-500'
            },
            {
              icon: Globe,
              title: 'Cross-Border Savings',
              description: 'Automatically save with every remittance across multiple corridors',
              color: 'from-purple-500 to-pink-500'
            },
            {
              icon: Users,
              title: 'Community Pools',
              description: 'Join savings circles with others from your community for better rates',
              color: 'from-amber-500 to-orange-500'
            },
            {
              icon: Lock,
              title: 'Non-Custodial KYC',
              description: 'Verify identity without giving up control of your funds',
              color: 'from-red-500 to-rose-500'
            },
            {
              icon: Sparkles,
              title: 'AI Financial Coach',
              description: 'Personalized savings and investment recommendations',
              color: 'from-indigo-500 to-purple-500'
            }
          ].map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-cyan-300 hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <div className={`inline-flex p-3 rounded-xl bg-linear-to-r ${feature.color} mb-4`}>
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-linear-to-r from-cyan-600 to-blue-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Financial Future?
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Join thousands of migrant workers already building wealth across borders
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/worker"
              className="px-8 py-4 bg-white text-cyan-700 rounded-xl font-semibold text-lg hover:bg-gray-100 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3"
            >
              Start as Worker
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/agent"
              className="px-8 py-4 bg-cyan-800 text-white rounded-xl font-semibold text-lg hover:bg-cyan-900 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3"
            >
              Become an Agent
              <Users className="w-5 h-5" />
            </Link>
            <Link
              href="/partner"
              className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-xl font-semibold text-lg hover:bg-white/10 transition-colors flex items-center justify-center gap-3"
            >
              Partner With Us
              <Globe className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="p-2 bg-linear-to-r from-cyan-500 to-blue-600 rounded-xl">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <span className="text-xl font-bold">CrossWealth</span>
              </div>
              <p className="text-gray-400">
                Transforming remittances into wealth-building tools for the global south.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Products</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/worker" className="hover:text-white transition-colors">Worker Dashboard</Link></li>
                <li><Link href="/agent" className="hover:text-white transition-colors">Agent Portal</Link></li>
                <li><Link href="/partner" className="hover:text-white transition-colors">Partner Dashboard</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Resources</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API Reference</a></li>
                <li><a href="#" className="hover:text-white transition-colors">SDG Impact Report</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>support@crosswealth.org</li>
                <li>+1 (555) 123-4567</li>
                <li>Global Support Network</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500 text-sm">
            <p>© 2024 CrossWealth. Built on Stellar. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}