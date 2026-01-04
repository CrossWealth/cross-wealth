'use client';

import {
  Users,
  UserPlus,
  Filter,
  Search,
  Download,
  Eye,
  Edit,
  Shield,
  CheckCircle,
  AlertCircle,
  ArrowUpRight,
  Clock,
  Globe,
  Smartphone,
  TrendingUp,
  MoreVertical,
  Mail,
  Phone,
  MapPin
} from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';

const userTypes = [
  { id: 'all', name: 'All Users' },
  { id: 'worker', name: 'Migrant Workers' },
  { id: 'saver', name: 'Local Savers' },
  { id: 'business', name: 'Small Businesses' },
  { id: 'inactive', name: 'Inactive Users' },
];

const statusFilters = [
  { id: 'all', name: 'All Status' },
  { id: 'active', name: 'Active' },
  { id: 'pending', name: 'Pending KYC' },
  { id: 'suspended', name: 'Suspended' },
];

const users = [
  {
    id: 'USR-001',
    name: 'Maria Rodriguez',
    email: 'maria@example.com',
    phone: '+1 (555) 123-4567',
    type: 'Migrant Worker',
    status: 'active',
    region: 'East Africa',
    savings: 8500,
    creditScore: 745,
    lastActive: '2 hours ago',
    kycStatus: 'verified',
    avatarColor: 'bg-gradient-to-r from-cyan-500 to-blue-500'
  },
  {
    id: 'USR-002',
    name: 'James Okafor',
    email: 'james@example.com',
    phone: '+234 801 234 5678',
    type: 'Local Saver',
    status: 'active',
    region: 'West Africa',
    savings: 3200,
    creditScore: 680,
    lastActive: '1 day ago',
    kycStatus: 'verified',
    avatarColor: 'bg-gradient-to-r from-emerald-500 to-green-500'
  },
  {
    id: 'USR-003',
    name: 'Fatima Hassan',
    email: 'fatima@example.com',
    phone: '+254 712 345 678',
    type: 'Small Business',
    status: 'pending',
    region: 'East Africa',
    savings: 12500,
    creditScore: 710,
    lastActive: '3 days ago',
    kycStatus: 'pending',
    avatarColor: 'bg-gradient-to-r from-purple-500 to-pink-500'
  },
  {
    id: 'USR-004',
    name: 'Chen Wei',
    email: 'chen@example.com',
    phone: '+86 138 0013 8000',
    type: 'Migrant Worker',
    status: 'active',
    region: 'Asia Pacific',
    savings: 5200,
    creditScore: 780,
    lastActive: '1 week ago',
    kycStatus: 'verified',
    avatarColor: 'bg-gradient-to-r from-amber-500 to-orange-500'
  },
  {
    id: 'USR-005',
    name: 'Amina Diallo',
    email: 'amina@example.com',
    phone: '+221 77 123 4567',
    type: 'Local Saver',
    status: 'suspended',
    region: 'West Africa',
    savings: 800,
    creditScore: 620,
    lastActive: '2 weeks ago',
    kycStatus: 'expired',
    avatarColor: 'bg-gradient-to-r from-red-500 to-rose-500'
  },
];

export default function UserManagementPage() {
  const [selectedType, setSelectedType] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedUser, setSelectedUser] = useState<string | null>(null);

  const filteredUsers = users.filter(user => {
    const matchesType = selectedType === 'all' || user.type.toLowerCase().includes(selectedType);
    const matchesStatus = selectedStatus === 'all' || user.status === selectedStatus;
    const matchesSearch = searchQuery === '' || 
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.id.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesType && matchesStatus && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-indigo-50">
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
                <div className="p-2 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-gray-900">User Management</h1>
                  <p className="text-sm text-gray-600">Manage partner users and access controls</p>
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors flex items-center gap-2">
                <Filter className="w-4 h-4" />
                Advanced Filters
              </button>
              <button className="px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-lg font-medium hover:opacity-90 transition-opacity flex items-center gap-2">
                <UserPlus className="w-4 h-4" />
                Add User
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
              icon: Users,
              label: 'Total Users',
              value: '45,892',
              change: '+12%',
              color: 'from-indigo-500 to-purple-500'
            },
            {
              icon: Shield,
              label: 'Verified KYC',
              value: '38,450',
              change: '+8%',
              color: 'from-emerald-500 to-green-500'
            },
            {
              icon: TrendingUp,
              label: 'Active Users',
              value: '32,180',
              change: '+15%',
              color: 'from-cyan-500 to-blue-500'
            },
            {
              icon: Globe,
              label: 'Regions Covered',
              value: '28',
              change: '+3',
              color: 'from-amber-500 to-orange-500'
            },
          ].map((stat) => (
            <div key={stat.label} className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-lg bg-gradient-to-r ${stat.color}`}>
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
          {/* Left Column - User List */}
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
                      placeholder="Search by name, email, or user ID..."
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <select
                    value={selectedStatus}
                    onChange={(e) => setSelectedStatus(e.target.value)}
                    className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-colors"
                  >
                    {statusFilters.map((filter) => (
                      <option key={filter.id} value={filter.id}>
                        {filter.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* User Type Filters */}
              <div className="flex flex-wrap gap-2">
                {userTypes.map((type) => (
                  <button
                    key={type.id}
                    onClick={() => setSelectedType(type.id)}
                    className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                      selectedType === type.id
                        ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {type.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Users List */}
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-gray-900">User Directory</h3>
                  <div className="text-sm text-gray-600">
                    {filteredUsers.length} of {users.length} users
                  </div>
                </div>
              </div>

              <div className="divide-y divide-gray-200">
                {filteredUsers.length > 0 ? (
                  filteredUsers.map((user) => (
                    <div
                      key={user.id}
                      className="p-6 hover:bg-gray-50 transition-colors"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className={`w-12 h-12 rounded-full ${user.avatarColor} flex items-center justify-center text-white font-bold`}>
                            {user.name.charAt(0)}
                          </div>
                          
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-1">
                              <div className="font-medium text-gray-900">{user.name}</div>
                              <div className={`inline-flex items-center px-2 py-1 rounded text-xs font-medium ${
                                user.status === 'active' ? 'bg-emerald-100 text-emerald-700' :
                                user.status === 'pending' ? 'bg-amber-100 text-amber-700' :
                                'bg-red-100 text-red-700'
                              }`}>
                                {user.status === 'active' ? (
                                  <CheckCircle className="w-3 h-3 mr-1" />
                                ) : user.status === 'pending' ? (
                                  <Clock className="w-3 h-3 mr-1" />
                                ) : (
                                  <AlertCircle className="w-3 h-3 mr-1" />
                                )}
                                {user.status.charAt(0).toUpperCase() + user.status.slice(1)}
                              </div>
                              <div className="inline-flex items-center px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs font-medium">
                                <Globe className="w-3 h-3 mr-1" />
                                {user.region}
                              </div>
                            </div>
                            
                            <div className="text-sm text-gray-600 space-y-1">
                              <div className="flex items-center space-x-4">
                                <span className="flex items-center">
                                  <Mail className="w-3 h-3 mr-1" />
                                  {user.email}
                                </span>
                                <span className="flex items-center">
                                  <Phone className="w-3 h-3 mr-1" />
                                  {user.phone}
                                </span>
                              </div>
                              <div className="flex items-center space-x-4">
                                <span>{user.type}</span>
                                <span>•</span>
                                <span className="flex items-center">
                                  <Shield className={`w-3 h-3 mr-1 ${
                                    user.kycStatus === 'verified' ? 'text-emerald-600' :
                                    user.kycStatus === 'pending' ? 'text-amber-600' :
                                    'text-red-600'
                                  }`} />
                                  KYC: {user.kycStatus}
                                </span>
                                <span>•</span>
                                <span>Last active: {user.lastActive}</span>
                              </div>
                            </div>

                            <div className="flex items-center space-x-6 mt-3">
                              <div>
                                <div className="text-xs text-gray-500">Savings</div>
                                <div className="font-bold text-gray-900">${user.savings.toLocaleString()}</div>
                              </div>
                              <div>
                                <div className="text-xs text-gray-500">Credit Score</div>
                                <div className="font-bold text-gray-900">{user.creditScore}</div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center space-x-2">
                          <button
                            onClick={() => setSelectedUser(user.id)}
                            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                            title="View Details"
                          >
                            <Eye className="w-4 h-4 text-gray-600" />
                          </button>
                          <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors" title="Edit">
                            <Edit className="w-4 h-4 text-gray-600" />
                          </button>
                          <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors" title="More">
                            <MoreVertical className="w-4 h-4 text-gray-600" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="p-12 text-center">
                    <Users className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                    <h4 className="text-lg font-medium text-gray-900 mb-2">No users found</h4>
                    <p className="text-gray-600">Try adjusting your filters or search criteria</p>
                  </div>
                )}
              </div>

              {filteredUsers.length > 0 && (
                <div className="p-6 border-t border-gray-200">
                  <button className="w-full py-3 text-center text-indigo-600 font-semibold hover:text-indigo-700 hover:bg-indigo-50 rounded-lg transition-colors">
                    Load More Users →
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Right Column - User Details & Actions */}
          <div className="space-y-8">
            {/* Selected User Details */}
            {selectedUser ? (
              <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-bold text-gray-900">User Details</h3>
                  <button
                    onClick={() => setSelectedUser(null)}
                    className="text-sm text-gray-600 hover:text-gray-900"
                  >
                    Close
                  </button>
                </div>

                {(() => {
                  const user = users.find(u => u.id === selectedUser);
                  if (!user) return null;

                  return (
                    <div className="space-y-6">
                      <div className="flex items-center space-x-4">
                        <div className={`w-16 h-16 rounded-full ${user.avatarColor} flex items-center justify-center text-white text-xl font-bold`}>
                          {user.name.charAt(0)}
                        </div>
                        <div>
                          <h4 className="text-xl font-bold text-gray-900">{user.name}</h4>
                          <p className="text-gray-600">{user.type} • {user.region}</p>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Contact</label>
                          <div className="space-y-2">
                            <div className="flex items-center">
                              <Mail className="w-4 h-4 text-gray-400 mr-2" />
                              <span className="text-gray-900">{user.email}</span>
                            </div>
                            <div className="flex items-center">
                              <Phone className="w-4 h-4 text-gray-400 mr-2" />
                              <span className="text-gray-900">{user.phone}</span>
                            </div>
                            <div className="flex items-center">
                              <MapPin className="w-4 h-4 text-gray-400 mr-2" />
                              <span className="text-gray-900">{user.region}</span>
                            </div>
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div className="bg-gray-50 p-4 rounded-lg">
                            <div className="text-sm text-gray-600">Savings Balance</div>
                            <div className="text-xl font-bold text-gray-900">${user.savings.toLocaleString()}</div>
                          </div>
                          <div className="bg-gray-50 p-4 rounded-lg">
                            <div className="text-sm text-gray-600">Credit Score</div>
                            <div className="text-xl font-bold text-gray-900">{user.creditScore}</div>
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
                          <div className="flex items-center space-x-4">
                            <div className={`px-3 py-1 rounded-full text-sm font-medium ${
                              user.status === 'active' ? 'bg-emerald-100 text-emerald-700' :
                              user.status === 'pending' ? 'bg-amber-100 text-amber-700' :
                              'bg-red-100 text-red-700'
                            }`}>
                              {user.status.charAt(0).toUpperCase() + user.status.slice(1)}
                            </div>
                            <div className={`px-3 py-1 rounded-full text-sm font-medium ${
                              user.kycStatus === 'verified' ? 'bg-emerald-100 text-emerald-700' :
                              user.kycStatus === 'pending' ? 'bg-amber-100 text-amber-700' :
                              'bg-red-100 text-red-700'
                            }`}>
                              KYC: {user.kycStatus}
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="pt-6 border-t border-gray-200">
                        <div className="flex space-x-3">
                          <button className="flex-1 px-4 py-2 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition-colors">
                            Edit Profile
                          </button>
                          <button className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                            View Activity
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })()}
              </div>
            ) : (
              <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
                <div className="text-center py-8">
                  <Users className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Select a User</h3>
                  <p className="text-gray-600">Click on any user to view detailed information and management options</p>
                </div>
              </div>
            )}

            {/* Bulk Actions */}
            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Bulk Actions</h3>
              <div className="space-y-3">
                <button className="w-full flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-indigo-600" />
                    <span className="font-medium text-gray-900">Send Bulk Email</span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-gray-400" />
                </button>

                <button className="w-full flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="flex items-center space-x-3">
                    <Download className="w-5 h-5 text-emerald-600" />
                    <span className="font-medium text-gray-900">Export User Data</span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-gray-400" />
                </button>

                <button className="w-full flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="flex items-center space-x-3">
                    <Shield className="w-5 h-5 text-amber-600" />
                    <span className="font-medium text-gray-900">KYC Review Batch</span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-gray-400" />
                </button>
              </div>
            </div>

            {/* User Segments */}
            <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl p-6 text-white">
              <h3 className="text-lg font-bold mb-6">User Segments</h3>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-white/10 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <Globe className="w-5 h-5" />
                    <div>
                      <div className="font-medium">Migrant Workers</div>
                      <div className="text-sm opacity-90">Cross-border users</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold">29,829</div>
                    <div className="text-sm opacity-90">65% of total</div>
                  </div>
                </div>

                <div className="flex items-center justify-between p-3 bg-white/10 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <Smartphone className="w-5 h-5" />
                    <div>
                      <div className="font-medium">Local Savers</div>
                      <div className="text-sm opacity-90">Mobile money users</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold">9,178</div>
                    <div className="text-sm opacity-90">20% of total</div>
                  </div>
                </div>

                <div className="flex items-center justify-between p-3 bg-white/10 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <TrendingUp className="w-5 h-5" />
                    <div>
                      <div className="font-medium">Small Businesses</div>
                      <div className="text-sm opacity-90">Micro-enterprises</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold">4,589</div>
                    <div className="text-sm opacity-90">10% of total</div>
                  </div>
                </div>
              </div>

              <button className="w-full mt-6 py-3 bg-white text-indigo-700 rounded-xl font-semibold hover:bg-gray-100 transition-colors">
                Segment Analytics →
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}