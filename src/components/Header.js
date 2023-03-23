import React from 'react';
import "./styles/Header.css"

function Header({currentPage, handlePageChange}) {
  return (
    <div id="main-header"> 

      <nav class="navbar navbar-expand-lg">

        <div>
          <ul class="navbar-nav">

            <li className="nav-item nav-links">
              <a href="#AboutMe" id="header-text" onClick={() => handlePageChange("AboutMe")} className={currentPage === "AboutMe" ? 'nav-link nav-item nav-links activated' : 'nav-link nav-item nav-links'}>About Me</a>
            </li> 

            <li className="nav-item nav-links">
              <a href="#Portfolio" id="header-text" onClick={() => handlePageChange("Portfolio")} className={currentPage === "Portfolio" ? 'nav-link nav-item nav-links activated' : 'nav-link nav-item nav-links'}>Portfolio</a>
            </li>

            <li className="nav-item nav-links">
              <a href="#ContactMe" id="header-text" onClick={() => handlePageChange("ContactMe")} className={currentPage === "ContactMe" ? 'nav-link nav-item nav-links activated' : 'nav-link nav-item nav-links'}>Contact Me</a>
            </li>

            <li class="nav-item">
              <a href="#FunFacts" id="header-text" onClick={() => handlePageChange("FunFacts")} className={currentPage === "FunFacts" ? 'nav-link nav-item activated' : 'nav-link nav-item'}>Fun Facts</a>
            </li>

          </ul>
        </div>
      </nav>

    </div>
  );
}

export default Header;