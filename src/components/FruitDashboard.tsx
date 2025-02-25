
import { motion } from 'framer-motion';
import { Farm, Fruit } from '@/pages/Index';
import { ArrowLeft, Droplet, Leaf, AlertTriangle } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface FruitDashboardProps {
  farm: Farm;
  fruit: Fruit;
  onBack: () => void;
}

const FruitDashboard = ({ farm, fruit, onBack }: FruitDashboardProps) => {
  // Sample data for the chart
  const data = [
    { name: 'Week 1', ripeness: 20 },
    { name: 'Week 2', ripeness: 35 },
    { name: 'Week 3', ripeness: 50 },
    { name: 'Week 4', ripeness: 65 },
    { name: 'Week 5', ripeness: fruit.ripeness },
  ];

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-8"
      >
        <div className="flex items-center">
          <button
            onClick={onBack}
            className="p-2 hover:bg-black/5 rounded-full transition-colors"
          >
            <ArrowLeft size={24} />
          </button>
          <div className="ml-4">
            <h2 className="text-sm text-gray-600">{farm.name}</h2>
            <h1 className="text-2xl font-semibold text-gray-900">{fruit.name}</h1>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl overflow-hidden shadow-sm">
              <img
                src={fruit.image}
                alt={fruit.name}
                className="w-full h-64 object-cover"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-gray-600 mb-2">Current Production</h3>
                <p className="text-3xl font-semibold">{fruit.production}kg</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-gray-600 mb-2">Ripeness</h3>
                <p className="text-3xl font-semibold">{fruit.ripeness}%</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm space-y-4">
              <h3 className="text-xl font-semibold">Status Indicators</h3>
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-4">
                  <Leaf className="mx-auto mb-2 text-green-500" size={24} />
                  <p className="text-sm text-gray-600">Plant Health</p>
                  <p className="font-semibold text-green-500">Good</p>
                </div>
                <div className="text-center p-4">
                  <Droplet className="mx-auto mb-2 text-blue-500" size={24} />
                  <p className="text-sm text-gray-600">Irrigation</p>
                  <p className="font-semibold text-blue-500">Optimal</p>
                </div>
                <div className="text-center p-4">
                  <AlertTriangle className="mx-auto mb-2 text-yellow-500" size={24} />
                  <p className="text-sm text-gray-600">Diseases</p>
                  <p className="font-semibold text-yellow-500">None</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-6">Ripeness Progression</h3>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Line
                      type="monotone"
                      dataKey="ripeness"
                      stroke="#22C55E"
                      strokeWidth={2}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-4">AI Recommendations</h3>
              <div className="space-y-4">
                <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                  <p className="text-green-800">
                    Optimal harvest time approaching. Plan harvesting within the next 5-7 days.
                  </p>
                </div>
                <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <p className="text-blue-800">
                    Soil moisture levels are optimal. Maintain current irrigation schedule.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default FruitDashboard;
