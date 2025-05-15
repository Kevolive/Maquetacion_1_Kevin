import { NavLink, Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import '../styles/Sidebar.css';

function Sidebar() {
    const { logout } = useAuth();

    return (
        <div className="container">
            <aside className="sidebar">
                
                <h2><NavLink to="/home" className='sidebar-title'>Home</NavLink></h2>
                <NavLink to="/services" className="nav-link">Servicios</NavLink>
                <NavLink to="/contact" className="nav-link">Contacto</NavLink>
                <NavLink to="/about" className="nav-link">Acerca de</NavLink>
                <button onClick={logout} className="nav-link logout-button">Cerrar sesión</button>
            </aside>
            <main className="main-content">
                <Outlet />
            </main>
        </div>
    );
}

export default Sidebar;

