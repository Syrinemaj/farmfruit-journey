
import { Bell, Settings } from 'lucide-react';

const Header = () => {
  return (
    <header className="h-16 bg-white/70 backdrop-blur-sm border-b border-soil-200 fixed top-0 right-0 left-0 z-20">
      <div className="flex items-center justify-between h-full px-6 max-w-6xl mx-auto">
        <h1 className="text-xl font-semibold text-soil-800">Dashboard</h1>
        
        <div className="flex items-center space-x-4">
          <button className="p-2 text-soil-600 hover:text-soil-800 transition-colors">
            <Bell className="w-5 h-5" />
          </button>
          <button className="p-2 text-soil-600 hover:text-soil-800 transition-colors">
            <Settings className="w-5 h-5" />
          </button>
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-full bg-soil-600 text-white flex items-center justify-center">
              <span className="text-sm font-medium">JD</span>
            </div>
            <div className="text-sm">
              <p className="font-medium text-soil-800">John Doe</p>
              <p className="text-soil-600">Farm Manager</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
