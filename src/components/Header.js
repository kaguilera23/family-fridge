import React from 'react';
import "./styles/Header.css"

function Header({currentPage, handlePageChange}) {
  return (
    <div id="main-header"> 

      <nav class="navbar navbar-expand-lg">

        <div>
          <ul class="navbar-nav">

            <li class="nav-item active" className="nav-links">
              <a class="nav-link" href="#AboutMe" id="header-text" onClick={() => handlePageChange("AboutMe")} className={currentPage === "AboutMe" ? 'nav-link active' : 'nav-link'}>About Me</a>
            </li> 

            <li class="nav-item" className="nav-links">
              <a class="nav-link" href="#Portfolio" id="header-text" onClick={() => handlePageChange("Portfolio")} className={currentPage === "Portfolio" ? 'nav-link active' : 'nav-link'}>Portfolio</a>
            </li>

            <li class="nav-item" className="nav-links">
              <a class="nav-link" href="#ContactMe" id="header-text" onClick={() => handlePageChange("ContactMe")} className={currentPage === "ContactMe" ? 'nav-link active' : 'nav-link'}>Contact Me</a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="#Resume" id="header-text" onClick={() => handlePageChange("Resume")} className={currentPage === "Resume" ? 'nav-link active' : 'nav-link'}>Resume</a>
            </li>

          </ul>
        </div>
      </nav>

    </div>
  );
}

export default Header;