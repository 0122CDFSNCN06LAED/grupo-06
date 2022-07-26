import React from "react";
import { NavLink } from "react-router-dom";

import logo from "../assets/logo-white.png";

function SideBar() {
  return (
    <ul
      className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion"
      id="accordionSidebar"
    >
      {/* <!-- Sidebar - Brand --> */}
      {
        <NavLink
          className="sidebar-brand d-flex align-items-center justify-content-center"
          to="/"
        >
          <div className="sidebar-brand-icon">
            <img className="w-100" src={logo} alt="Digital House" />
          </div>
        </NavLink>
      }

      {/* <!-- Divider --> */}
      <hr className="sidebar-divider my-0" />

      {/* <!-- Nav Item - Dashboard --> */}
      <li className="nav-item ">
        <NavLink className="nav-link" to="/" exact activeClassName="active">
          <i className="fas fa-fw fa-tachometer-alt"></i>
          <span>Dashboard</span>
        </NavLink>
      </li>

      {/* <!-- Divider --> */}
      <hr className="sidebar-divider" />

      {/* <!-- Heading --> */}
      <div className="sidebar-heading">Navegación</div>

      {/* <!-- Nav Item - Pages --> */}
      <li className="nav-item">
        <NavLink className="nav-link" to="/users" activeClassName="active">
          <i className="fas fa-fw fa-user"></i>
          <span>Usuarios</span>
        </NavLink>
      </li>

      {/* <!-- Nav Item - Charts --> */}
      <li className="nav-item">
        <NavLink className="nav-link" to="/oficios" activeClassName="active">
          <i className="fas fa-fw fa-briefcase"></i>
          <span>Oficios</span>
        </NavLink>
      </li>

      {/* <!-- Nav Item - Tables --> */}
      <li className="nav-item">
        <NavLink className="nav-link" to="/movies" activeClassName="active">
          <i className="fas fa-fw fa-table"></i>
          <span>Helpers</span>
        </NavLink>
      </li>

      {/* <!-- Divider --> */}
      <hr className="sidebar-divider d-none d-md-block" />
    </ul>
  );
}

export default SideBar;
