import { ArrowUpRight, ArrowDownLeft, CheckCircle, Clock, Zap } from 'lucide-react';

const transactions = [
  {
    id: 1,
    type: 'send',
    amount: 250,
    currency: 'USD',
    to: 'Family Support',
    status: 'completed',
    time: '2 hours ago',
    icon: ArrowUpRight,
    color: 'text-red-500',
    bgColor: 'bg-red-50'
  },
  {
    id: 2,
    type: 'save',
    amount: 45.80,
    currency: 'USD',
    to: 'Round-up Savings',
    status: 'completed',
    time: '5 hours ago',
    icon: ArrowDownLeft,
    color: 'text-emerald-500',
    bgColor: 'bg-emerald-50'
  },
  {
    id: 3,
    type: 'loan',
    amount: 1000,
    currency: 'USD',
    to: 'Emergency Loan',
    status: 'pending',
    time: '1 day ago',
    icon: Zap,
    color: 'text-amber-500',
    bgColor: 'bg-amber-50'
  },
  {
    id: 4,
    type: 'receive',
    amount: 1200,
    currency: 'EUR',
    to: 'Salary',
    status: 'completed',
    time: '2 days ago',
    icon: ArrowDownLeft,
    color: 'text-blue-500',
    bgColor: 'bg-blue-50'
  }
];

export function TransactionFeed() {
  return (
    <div className="space-y-3">
      {transactions.map((tx) => {
        const Icon = tx.icon;
        const StatusIcon = tx.status === 'completed' ? CheckCircle : Clock;
        
        return (
          <div
            key={tx.id}
            className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-xl transition-colors group"
          >
            <div className="flex items-center space-x-3">
              <div className={`p-2 rounded-lg ${tx.bgColor}`}>
                <Icon className={`w-4 h-4 ${tx.color}`} />
              </div>
              <div>
                <div className="font-medium text-gray-900">{tx.to}</div>
                <div className="flex items-center text-sm text-gray-500">
                  <StatusIcon className="w-3 h-3 mr-1" />
                  <span className="capitalize">{tx.status}</span>
                  <span className="mx-2">•</span>
                  <span>{tx.time}</span>
                </div>
              </div>
            </div>
            <div className="text-right">
              <div className={`font-bold ${tx.type === 'send' ? 'text-red-600' : 'text-emerald-600'}`}>
                {tx.type === 'send' ? '-' : '+'}{tx.amount} {tx.currency}
              </div>
              <div className="text-xs text-gray-500 capitalize">
                {tx.type === 'save' ? 'Auto-save' : tx.type}
              </div>
            </div>
          </div>
        );
      })}

      <button className="w-full py-3 text-center text-cyan-600 font-semibold hover:text-cyan-700 hover:bg-cyan-50 rounded-xl transition-colors">
        View All Transactions →
      </button>
    </div>
  );
}