
import './dashboard.css';
import { useNavigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';

const Dashboard = () => {
    const userData = JSON.parse(localStorage.getItem("userData")) || {};
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('userData');
        navigate('/login');
    }

    return (
        <div className="dashboard-layout">
            <Sidebar username={userData.username} />

            <div className="main-area">
                <header className="dash-header">
                    <h1>Dashboard</h1>
                    <div className="user-info">
                        <span className="user-name">{userData.username || 'Guest'}</span>
                    </div>
                </header>

                <main className="dash-content">
                    <h2>Welcome {userData.username || 'Guest'}</h2>
                    <p>Use the side navigation to access your profile and settings.</p>
                </main>
            </div>
        </div>
    );
 
}
export default Dashboard;