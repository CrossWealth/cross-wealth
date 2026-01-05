'use client';

import {
  UserPlus,
  Scan,
  Camera,
  FileText,
  CheckCircle,
  Clock,
  AlertCircle,
  Smartphone,
  Globe,
  Shield,
  ArrowLeft,
  Download,
  Share2
} from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';

const steps = [
  { id: 1, name: 'Basic Info', icon: UserPlus, status: 'completed' },
  { id: 2, name: 'ID Verification', icon: Scan, status: 'current' },
  { id: 3, name: 'Photo Capture', icon: Camera, status: 'upcoming' },
  { id: 4, name: 'Documents', icon: FileText, status: 'upcoming' },
  { id: 5, name: 'Review', icon: CheckCircle, status: 'upcoming' },
];

const clientTypes = [
  { id: 'worker', name: 'Migrant Worker', icon: Globe, description: 'Cross-border remittance user' },
  { id: 'local', name: 'Local Saver', icon: Smartphone, description: 'Mobile money user' },
  { id: 'business', name: 'Small Business', icon: Shield, description: 'Micro-enterprise' },
];

const recentOnboardings = [
  { id: 1, name: 'Maria Rodriguez', type: 'Migrant Worker', status: 'completed', time: '2 hours ago' },
  { id: 2, name: 'James Okafor', type: 'Local Saver', status: 'pending', time: '4 hours ago' },
  { id: 3, name: 'Fatima Hassan', type: 'Small Business', status: 'in_progress', time: '1 day ago' },
  { id: 4, name: 'Chen Wei', type: 'Migrant Worker', status: 'completed', time: '2 days ago' },
];

export default function OnboardingPage() {
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [currentStep, setCurrentStep] = useState(2);
  const [idNumber, setIdNumber] = useState('');
  const [idType, setIdType] = useState('national_id');

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
                <ArrowLeft className="w-5 h-5 text-gray-600" />
              </Link>
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-linear-to-r from-emerald-500 to-green-600 rounded-xl">
                  <UserPlus className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-gray-900">Client Onboarding</h1>
                  <p className="text-sm text-gray-600">Guide new users through registration</p>
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors flex items-center gap-2">
                <Download className="w-4 h-4" />
                Template
              </button>
              <button className="px-4 py-2 bg-linear-to-r from-emerald-500 to-green-600 text-white rounded-lg font-medium hover:opacity-90 transition-opacity">
                Save & Continue
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Steps */}
          <div className="lg:col-span-2 space-y-8">
            {/* Progress Steps */}
            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
              <div className="mb-8">
                <h2 className="text-lg font-bold text-gray-900 mb-2">Onboarding Progress</h2>
                <p className="text-gray-600">Complete all steps to onboard new client</p>
              </div>

              <div className="relative">
                {/* Progress Line */}
                <div className="absolute top-5 left-0 right-0 h-0.5 bg-gray-200" />
                <div 
                  className="absolute top-5 left-0 h-0.5 bg-linear-to-r from-emerald-500 to-green-600 transition-all duration-500"
                  style={{ width: `${((currentStep - 1) / (steps.length - 1)) * 100}%` }}
                />

                {/* Steps */}
                <div className="relative flex justify-between">
                  {steps.map((step) => {
                    const StepIcon = step.icon;
                    const isCompleted = step.id < currentStep;
                    const isCurrent = step.id === currentStep;

                    return (
                      <div key={step.id} className="flex flex-col items-center">
                        <div className={`relative z-10 w-12 h-12 rounded-full flex items-center justify-center mb-3 transition-all duration-300 ${
                          isCompleted 
                            ? 'bg-linear-to-r from-emerald-500 to-green-600 text-white shadow-lg scale-110'
                            : isCurrent
                            ? 'bg-white border-2 border-emerald-500 text-emerald-600 shadow-md'
                            : 'bg-gray-100 text-gray-400'
                        }`}>
                          <StepIcon className="w-6 h-6" />
                          {isCompleted && (
                            <div className="absolute -top-1 -right-1 w-5 h-5 bg-emerald-500 rounded-full flex items-center justify-center">
                              <CheckCircle className="w-3 h-3 text-white" />
                            </div>
                          )}
                        </div>
                        <span className={`text-sm font-medium ${
                          isCompleted ? 'text-emerald-700' :
                          isCurrent ? 'text-gray-900' :
                          'text-gray-500'
                        }`}>
                          {step.name}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Current Step Content */}
            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-6">ID Verification</h3>
              
              {currentStep === 1 && (
                <div className="space-y-6">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-3">Select Client Type</h4>
                    <div className="grid md:grid-cols-3 gap-4">
                      {clientTypes.map((type) => {
                        const TypeIcon = type.icon;
                        return (
                          <button
                            key={type.id}
                            onClick={() => setSelectedType(type.id)}
                            className={`p-4 border-2 rounded-xl transition-all duration-200 ${
                              selectedType === type.id
                                ? 'border-emerald-500 bg-emerald-50 scale-105'
                                : 'border-gray-200 hover:border-emerald-300 hover:scale-102'
                            }`}
                          >
                            <div className="flex flex-col items-center text-center">
                              <div className={`p-3 rounded-lg mb-3 ${
                                selectedType === type.id
                                  ? 'bg-linear-to-r from-emerald-500 to-green-600'
                                  : 'bg-gray-100'
                              }`}>
                                <TypeIcon className={`w-6 h-6 ${
                                  selectedType === type.id ? 'text-white' : 'text-gray-600'
                                }`} />
                              </div>
                              <div className="font-semibold text-gray-900">{type.name}</div>
                              <div className="text-sm text-gray-600 mt-1">{type.description}</div>
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}

              {currentStep === 2 && (
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">
                      ID Type
                    </label>
                    <select
                      value={idType}
                      onChange={(e) => setIdType(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-colors"
                    >
                      <option value="national_id">National ID</option>
                      <option value="passport">Passport</option>
                      <option value="driver_license">Driver's License</option>
                      <option value="voter_id">Voter ID</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">
                      ID Number
                    </label>
                    <input
                      type="text"
                      value={idNumber}
                      onChange={(e) => setIdNumber(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-colors"
                      placeholder="Enter ID number"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-3">
                      Upload ID Document
                    </label>
                    <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-emerald-400 transition-colors">
                      <Scan className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                      <p className="text-gray-600 mb-2">Scan or take photo of ID document</p>
                      <p className="text-sm text-gray-500 mb-4">Supported: JPG, PNG, PDF (Max 5MB)</p>
                      <button className="px-6 py-2 bg-linear-to-r from-emerald-500 to-green-600 text-white rounded-lg font-medium hover:opacity-90 transition-opacity">
                        Capture Image
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center p-4 bg-amber-50 border border-amber-200 rounded-lg">
                    <AlertCircle className="w-5 h-5 text-amber-600 mr-3" />
                    <div>
                      <p className="text-sm text-amber-800">
                        Ensure ID is clearly visible, well-lit, and all corners are captured.
                        Blurry or obscured IDs will be rejected.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between mt-8 pt-6 border-t border-gray-200">
                <button
                  onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
                  className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors"
                >
                  Previous Step
                </button>
                <button
                  onClick={() => setCurrentStep(Math.min(steps.length, currentStep + 1))}
                  className="px-6 py-3 bg-linear-to-r from-emerald-500 to-green-600 text-white rounded-lg font-medium hover:opacity-90 transition-opacity flex items-center gap-2"
                >
                  Continue to Next Step
                  <ArrowLeft className="w-4 h-4 rotate-180" />
                </button>
              </div>
            </div>
          </div>

          {/* Right Column - Recent Onboardings & Tools */}
          <div className="space-y-8">
            {/* Recent Onboardings */}
            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold text-gray-900">Recent Onboardings</h3>
                <Link
                  href="/agent/transactions"
                  className="text-sm text-emerald-600 font-medium hover:text-emerald-700"
                >
                  View All
                </Link>
              </div>

              <div className="space-y-4">
                {recentOnboardings.map((client) => (
                  <div
                    key={client.id}
                    className="flex items-center justify-between p-3 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-center space-x-3">
                      <div className={`p-2 rounded-lg ${
                        client.status === 'completed' ? 'bg-emerald-100' :
                        client.status === 'pending' ? 'bg-amber-100' :
                        'bg-blue-100'
                      }`}>
                        {client.status === 'completed' ? (
                          <CheckCircle className="w-4 h-4 text-emerald-600" />
                        ) : client.status === 'pending' ? (
                          <Clock className="w-4 h-4 text-amber-600" />
                        ) : (
                          <AlertCircle className="w-4 h-4 text-blue-600" />
                        )}
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">{client.name}</div>
                        <div className="text-sm text-gray-600">{client.type}</div>
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <div className="text-sm text-gray-500">{client.time}</div>
                      <button className="mt-1 text-sm text-emerald-600 hover:text-emerald-700 font-medium">
                        View
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Tools */}
            <div className="bg-linear-to-br from-emerald-500 to-green-600 rounded-2xl p-6 text-white">
              <h3 className="text-lg font-bold mb-6">Quick Tools</h3>
              
              <div className="space-y-4">
                <button className="w-full flex items-center justify-between p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
                  <div className="flex items-center space-x-3">
                    <Smartphone className="w-5 h-5" />
                    <span className="font-medium">Generate USSD Code</span>
                  </div>
                  <Share2 className="w-4 h-4" />
                </button>

                <button className="w-full flex items-center justify-between p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
                  <div className="flex items-center space-x-3">
                    <Download className="w-5 h-5" />
                    <span className="font-medium">Download Forms</span>
                  </div>
                  <ArrowLeft className="w-4 h-4 rotate-180" />
                </button>

                <button className="w-full flex items-center justify-between p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
                  <div className="flex items-center space-x-3">
                    <Shield className="w-5 h-5" />
                    <span className="font-medium">KYC Guide</span>
                  </div>
                  <ArrowLeft className="w-4 h-4 rotate-180" />
                </button>
              </div>

              <div className="mt-8 pt-6 border-t border-white/20">
                <div className="text-center">
                  <div className="text-2xl font-bold">12</div>
                  <div className="text-emerald-100">Onboardings This Week</div>
                </div>
              </div>
            </div>

            {/* Tips & Guidance */}
            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Onboarding Tips</h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="p-1 bg-emerald-100 rounded">
                    <CheckCircle className="w-4 h-4 text-emerald-600" />
                  </div>
                  <p className="text-sm text-gray-600">Explain privacy features to build trust</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="p-1 bg-emerald-100 rounded">
                    <CheckCircle className="w-4 h-4 text-emerald-600" />
                  </div>
                  <p className="text-sm text-gray-600">Demonstrate USSD codes for feature phones</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="p-1 bg-emerald-100 rounded">
                    <CheckCircle className="w-4 h-4 text-emerald-600" />
                  </div>
                  <p className="text-sm text-gray-600">Set up automated savings during onboarding</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}