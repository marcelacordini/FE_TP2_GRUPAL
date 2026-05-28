import { NavLink } from 'react-router-dom';

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <h2>AppMinds<span className="accent">.</span></h2>
      </div>
      <nav className="sidebar-menu">
        <NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''}>
          ✦ Dashboard Home
        </NavLink>
        <NavLink to="/explorador" className={({ isActive }) => isActive ? 'active' : ''}>
          🔍 Explorador JSON
        </NavLink>
        <NavLink to="/api" className={({ isActive }) => isActive ? 'active' : ''}>
          🌐 API Externa
        </NavLink>
        <NavLink to="/galeria" className={({ isActive }) => isActive ? 'active' : ''}>
          🖼️ Galería Interactiva
        </NavLink>
        <NavLink to="/bitacora" className={({ isActive }) => isActive ? 'active' : ''}>
          📋 Bitácora
        </NavLink>
      </nav>
    </aside>
  );
}

export default Sidebar;