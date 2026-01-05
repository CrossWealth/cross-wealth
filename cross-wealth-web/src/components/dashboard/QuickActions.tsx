import { Send, PlusCircle, TrendingUp, Download } from 'lucide-react';
import Link from 'next/link';

const actions = [
  {
    icon: Send,
    label: 'Send Money',
    description: 'Cross-border transfer',
    color: 'from-blue-500 to-cyan-500',
    href: '/send'
  },
  {
    icon: PlusCircle,
    label: 'Add Savings',
    description: 'Boost your goal',
    color: 'from-emerald-500 to-green-500',
    href: '/save'
  },
  {
    icon: TrendingUp,
    label: 'Get Loan',
    description: 'Instant credit',
    color: 'from-purple-500 to-pink-500',
    href: '/borrow'
  },
  {
    icon: Download,
    label: 'Withdraw',
    description: 'To local bank',
    color: 'from-amber-500 to-orange-500',
    href: '/save'
  }
];

export function QuickActions() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
      {actions.map((action) => (
        <Link
          key={action.label}
          href={action.href}
          className="group bg-white border border-gray-200 rounded-xl p-4 hover:shadow-lg hover:border-transparent transition-all duration-200 hover:scale-[1.02]"
        >
          <div className={`inline-flex p-3 rounded-lg bg-linear-to-r ${action.color} mb-3`}>
            <action.icon className="w-6 h-6 text-white" />
          </div>
          <h4 className="font-semibold text-gray-900 group-hover:text-gray-950">
            {action.label}
          </h4>
          <p className="text-sm text-gray-600 mt-1">{action.description}</p>
        </Link>
      ))}
    </div>
  );
}