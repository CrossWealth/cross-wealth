import { Target, Trophy, Calendar, TrendingUp } from 'lucide-react';

const savingsGoals = [
  {
    id: 1,
    name: "Family Home",
    target: 15000,
    current: 8500,
    color: "from-purple-500 to-pink-500",
    icon: "🏠",
    deadline: "Dec 2025"
  },
  {
    id: 2,
    name: "Education Fund",
    target: 5000,
    current: 3200,
    color: "from-blue-500 to-cyan-500",
    icon: "🎓",
    deadline: "Aug 2025"
  },
  {
    id: 3,
    name: "Emergency Fund",
    target: 3000,
    current: 1800,
    color: "from-emerald-500 to-green-500",
    icon: "🛡️",
    deadline: "Jun 2025"
  }
];

export function GoalVisualizer() {
  return (
    <div className="mt-6">
      <div className="flex items-center justify-between mb-4">
        <h4 className="text-lg font-bold text-white flex items-center gap-2">
          <Target className="w-5 h-5" />
          Active Goals
        </h4>
        <button className="px-4 py-2 bg-white/20 text-white rounded-xl text-sm font-medium hover:bg-white/30 transition-colors">
          + New Goal
        </button>
      </div>

      <div className="space-y-4">
        {savingsGoals.map((goal) => {
          const percentage = Math.min((goal.current / goal.target) * 100, 100);
          
          return (
            <div key={goal.id} className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-3">
                  <div className="text-2xl">{goal.icon}</div>
                  <div>
                    <h5 className="font-semibold text-white">{goal.name}</h5>
                    <div className="flex items-center text-sm text-cyan-100">
                      <Calendar className="w-3 h-3 mr-1" />
                      {goal.deadline}
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-xl font-bold text-white">
                    ${goal.current.toLocaleString()}
                  </div>
                  <div className="text-sm text-cyan-100">
                    of ${goal.target.toLocaleString()}
                  </div>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="mb-3">
                <div className="flex justify-between text-sm text-cyan-100 mb-1">
                  <span>{percentage.toFixed(1)}% complete</span>
                  <span>${(goal.target - goal.current).toLocaleString()} to go</span>
                </div>
                <div className="h-3 bg-white/20 rounded-full overflow-hidden">
                  <div
                    className={`h-full bg-linear-to-r ${goal.color} rounded-full transition-all duration-1000`}
                    style={{ width: `${percentage}%` }}
                  />
                </div>
              </div>

              {/* Status & Action */}
              <div className="flex items-center justify-between">
                <div className="flex items-center text-sm">
                  <TrendingUp className="w-4 h-4 text-emerald-300 mr-1" />
                  <span className="text-emerald-300">
                    ${((goal.target - goal.current) / 6).toFixed(0)}/mo needed
                  </span>
                </div>
                <button className="px-4 py-2 bg-white text-cyan-700 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-sm">
                  Boost Savings
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Achievement Badge */}
      <div className="mt-6 pt-4 border-t border-white/20">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-linear-to-r from-amber-500 to-orange-500 rounded-xl">
              <Trophy className="w-5 h-5 text-white" />
            </div>
            <div>
              <h5 className="font-semibold text-white">Consistency King</h5>
              <p className="text-sm text-cyan-100">12 weeks of regular savings</p>
            </div>
          </div>
          <div className="text-amber-300 text-2xl">🏆</div>
        </div>
      </div>
    </div>
  );
}