import { TrendingUp, TrendingDown, Minus } from 'lucide-react';

export function FinancialHealth() {
  const metrics = [
    { label: 'Savings Rate', value: '18%', change: '+3%', positive: true },
    { label: 'Credit Usage', value: '35%', change: '-5%', positive: true },
    { label: 'On-time Payments', value: '100%', change: '0%', positive: null },
    { label: 'Wealth Growth', value: '$240', change: '+12%', positive: true }
  ];

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {metrics.map((metric) => (
          <div key={metric.label} className="text-center p-3 bg-gray-50 rounded-xl">
            <div className="text-2xl font-bold text-gray-900">{metric.value}</div>
            <div className="text-sm text-gray-600 mt-1">{metric.label}</div>
            <div className={`inline-flex items-center text-xs font-medium mt-2 ${
              metric.positive === true ? 'text-green-600' : 
              metric.positive === false ? 'text-red-600' : 'text-gray-500'
            }`}>
              {metric.positive === true ? (
                <TrendingUp className="w-3 h-3 mr-1" />
              ) : metric.positive === false ? (
                <TrendingDown className="w-3 h-3 mr-1" />
              ) : (
                <Minus className="w-3 h-3 mr-1" />
              )}
              {metric.change}
            </div>
          </div>
        ))}
      </div>
      
      <div className="pt-4 border-t border-gray-200">
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-600">Monthly Goal Progress</span>
          <span className="font-semibold text-gray-900">75%</span>
        </div>
        <div className="mt-2 h-2 bg-gray-200 rounded-full overflow-hidden">
          <div 
            className="h-full bg-linear-to-r from-cyan-500 to-blue-600 rounded-full transition-all duration-500"
            style={{ width: '75%' }}
          />
        </div>
      </div>
    </div>
  );
}