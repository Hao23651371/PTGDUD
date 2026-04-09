import { NavLink, Outlet } from 'react-router-dom'

export default function DashboardLayout() {
  return (
    <div>
      <h2>Dashboard</h2>
      <nav className="sub-menu">
        <NavLink to="profile">Profile</NavLink>
        <NavLink to="orders">Orders</NavLink>
        <NavLink to="settings">Settings</NavLink>
      </nav>
      <div className="page-section">
        <Outlet />
      </div>
    </div>
  )
}
