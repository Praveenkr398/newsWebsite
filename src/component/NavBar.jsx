import React from "react";

function NavBar({setCategory}) {
  return (
    <nav className="navbar  d-flex  navbar-expand-lg w-full navbar-dark bg-primary">
      <div className="  d-flex align-items-start fs-2">
        <a className="navbar-brand" href="#">
          <span className="badge fs-2  text-white flex-grow-1">Meera News</span>
        </a>

        <div className="collapse flex-grow-1 navbar-collapse" id="navbarSupportedContent">
          <ul className="nav  nav-tabs ">
            <li className="nav-item ">
              <a className="nav-link text-white" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
            <a
            href="#"
                className="dropdown-item active"
                onClick={()=> setCategory("business")}
              >
                Business
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" aria-current="page" href="#">
                Service
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" aria-current="page" href="#">
                Contact
              </a>
            </li>
           
          </ul>
          <div className="d-flex flex-grow-1 align-item-end">
          <a
                className="nav-link bg-danger text-white"
                target="_blank"
                href="https://documenter.getpostman.com/view/3479169/Szf7zncp?version=latest"
              >
                Api Key
              </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
