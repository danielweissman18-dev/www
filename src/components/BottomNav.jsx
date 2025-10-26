import { NavLink } from 'react-router-dom'
import './BottomNav.css'

function BottomNav() {
  return (
    <nav className="bottom-nav">
      <NavLink to="/" className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}>
        <span className="nav-icon">📚</span>
        <span className="nav-label">ללמוד</span>
      </NavLink>
      
      <NavLink to="/practice" className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}>
        <span className="nav-icon">💪</span>
        <span className="nav-label">לתרגל</span>
      </NavLink>
      
      <NavLink to="/leaderboard" className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}>
        <span className="nav-icon">🏆</span>
        <span className="nav-label">דירוג</span>
      </NavLink>
      
      <NavLink to="/missions" className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}>
        <span className="nav-icon">🎯</span>
        <span className="nav-label">משימות</span>
      </NavLink>
      
      <NavLink to="/store" className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}>
        <span className="nav-icon">🛒</span>
        <span className="nav-label">חנות</span>
      </NavLink>
    </nav>
  )
}

export default BottomNav
