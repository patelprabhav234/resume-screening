import './Sidebar.css';
import { NavLink, useNavigate } from 'react-router-dom';

const Sidebar = ({ username }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('userData');
    navigate('/login');
  };
  
  return (
    <aside className="sidebar">
      <div className="brand">ResumeScreen</div>

      <nav>
        <ul>
          <li>
            <NavLink to="/dashboard" className={({ isActive }) => (isActive ? 'active' : '')}>
              Overview
            </NavLink>
          </li>
          <li>
            <NavLink to="/profile" className={({ isActive }) => (isActive ? 'active' : '')}>
              Profile
            </NavLink>
          </li>
          <li>
            <NavLink to="/settings" className={({ isActive }) => (isActive ? 'active' : '')}>
              Settings
            </NavLink>
          </li>
          <li>
            <button className="link-button" onClick={handleLogout}>
              Logout
            </button>
          </li>
        </ul>
      </nav>

      <div className="sidebar-footer">Signed in as <strong>{username || 'Guest'}</strong></div>
    </aside>
  );
};

export default Sidebar;