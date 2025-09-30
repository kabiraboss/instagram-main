import React from 'react';
import { 
  Home, 
  User, 
  BarChart3, 
  Calendar, 
  Search, 
  Settings, 
  Phone,
  Mail
} from 'lucide-react';

const Sidebar = () => {
  return (
    <div className="sidebar">
      
      <div className="sidebar-nav">
        <button className="sidebar-button">
          <Home size={20} color="#9ca3af" />
        </button>
        <button className="sidebar-button active">
          <User size={20} color="#ffffff" />
        </button>
        <button className="sidebar-button">
          <BarChart3 size={20} color="#9ca3af" />
        </button>
        <button className="sidebar-button">
          <Calendar size={20} color="#9ca3af" />
        </button>
        <button className="sidebar-button">
          <Search size={20} color="#9ca3af" />
        </button>
      </div>
      
     
      <div className="sidebar-bottom">
        <button className="sidebar-button">
          <Phone size={20} color="#10b981" />
        </button>
        <button className="sidebar-button">
          <Mail size={20} color="#3b82f6" />
        </button>
        <button className="sidebar-button">
          <Settings size={20} color="#9ca3af" />
        </button>
      </div>
    </div>
  );
};

export default Sidebar;