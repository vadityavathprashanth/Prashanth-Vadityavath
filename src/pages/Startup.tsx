import { Rocket, Trophy, Users } from 'lucide-react';

export default function Startup() {
  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-12 text-center">Startup Experience</h1>
        
        <div className="space-y-12">
          {/* Startup 1 */}
          <div className="bg-white rounded-xl shadow-sm p-8">
            <div className="flex items-center mb-6">
              <Rocket className="text-indigo-600 mr-4" size={32} />
              <div>
                <h3 className="text-2xl font-bold text-gray-900">TechStartup Inc.</h3>
                <p className="text-gray-600">Co-founder & CTO | 2022 - Present</p>
              </div>
            </div>
            <p className="text-gray-700 mb-6">
              Led the technical development of an AI-powered analytics platform, growing the user base to 50,000+ active users.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center">
                <Trophy className="text-indigo-600 mr-2" size={20} />
                <span className="text-gray-700">Series A Funding Secured</span>
              </div>
              <div className="flex items-center">
                <Users className="text-indigo-600 mr-2" size={20} />
                <span className="text-gray-700">Team of 20+ Engineers</span>
              </div>
            </div>
          </div>

          {/* Startup 2 */}
          <div className="bg-white rounded-xl shadow-sm p-8">
            <div className="flex items-center mb-6">
              <Rocket className="text-indigo-600 mr-4" size={32} />
              <div>
                <h3 className="text-2xl font-bold text-gray-900">InnovateLabs</h3>
                <p className="text-gray-600">Technical Lead | 2020 - 2022</p>
              </div>
            </div>
            <p className="text-gray-700 mb-6">
              Developed a revolutionary fintech solution that processed over $10M in transactions within the first year.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center">
                <Trophy className="text-indigo-600 mr-2" size={20} />
                <span className="text-gray-700">Best FinTech Startup 2021</span>
              </div>
              <div className="flex items-center">
                <Users className="text-indigo-600 mr-2" size={20} />
                <span className="text-gray-700">Scaled to 100k+ Users</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}