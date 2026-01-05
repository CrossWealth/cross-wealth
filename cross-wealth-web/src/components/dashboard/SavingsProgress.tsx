import { TrendingUp, Globe, PiggyBank, Zap } from 'lucide-react';

export function SavingsProgress() {
  const corridors = [
    { country: 'USA', amount: 4500, currency: 'USD', color: 'bg-blue-500' },
    { country: 'Germany', amount: 2800, currency: 'EUR', color: 'bg-amber-500' },
    { country: 'UAE', amount: 5200, currency: 'AED', color: 'bg-emerald-500' },
    { country: 'UK', amount: 3100, currency: 'GBP', color: 'bg-red-500' },
  ];

  const total = corridors.reduce((sum, c) => sum + c.amount, 0);

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <div className="text-3xl font-bold text-white">${total.toLocaleString()}</div>
          <p className="text-cyan-100">Total cross-border savings</p>
        </div>
        <div className="text-right">
          <div className="inline-flex items-center px-3 py-1 bg-white/20 rounded-full">
            <TrendingUp className="w-4 h-4 text-white mr-1" />
            <span className="text-sm font-medium text-white">+8% this month</span>
          </div>
        </div>
      </div>

      {/* Corridor Distribution */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Globe className="w-4 h-4 text-cyan-200" />
            <span className="text-sm font-medium text-white">Saved across corridors</span>
          </div>
          <Zap className="w-4 h-4 text-amber-300" />
        </div>

        <div className="space-y-2">
          {corridors.map((corridor) => {
            const percentage = Math.round((corridor.amount / total) * 100);
            
            return (
              <div key={corridor.country} className="space-y-1">
                <div className="flex justify-between text-sm">
                  <div className="flex items-center gap-2">
                    <div className={`w-3 h-3 rounded-full ${corridor.color}`} />
                    <span className="text-white font-medium">{corridor.country}</span>
                    <span className="text-cyan-200">{corridor.currency}</span>
                  </div>
                  <div className="text-white">
                    ${corridor.amount.toLocaleString()} ({percentage}%)
                  </div>
                </div>
                <div className="h-2 bg-white/20 rounded-full overflow-hidden">
                  <div
                    className={`h-full ${corridor.color} rounded-full transition-all duration-700`}
                    style={{ width: `${percentage}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Auto-Saving Features */}
      <div className="grid grid-cols-2 gap-3 pt-4">
        <div className="bg-white/10 rounded-lg p-3">
          <div className="flex items-center gap-2 mb-2">
            <PiggyBank className="w-4 h-4 text-cyan-300" />
            <span className="text-sm font-medium text-white">Round-ups</span>
          </div>
          <div className="text-lg font-bold text-white">$45.80</div>
          <div className="text-xs text-cyan-200">Saved this month</div>
        </div>
        <div className="bg-white/10 rounded-lg p-3">
          <div className="flex items-center gap-2 mb-2">
            <Zap className="w-4 h-4 text-amber-300" />
            <span className="text-sm font-medium text-white">AI Optimizer</span>
          </div>
          <div className="text-lg font-bold text-white">+12%</div>
          <div className="text-xs text-cyan-200">Efficiency gain</div>
        </div>
      </div>
    </div>
  );
}