import React from 'react';
import "./styles/Header.css"

const styles = {
  name: {
    fontSize: "20px"
  }
}

function Header({currentPage, handlePageChange}) {
  return (
    <div id="main-header"> 
      <nav class="navbar navbar-expand-lg">
        <p id="header-text" style={styles.name}>Kayla Aguilera</p>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <a class="nav-link" href="#AboutMe" id="header-text" onClick={() => handlePageChange("AboutMe")} className={currentPage === "AboutMe" ? 'nav-link active' : 'nav-link'}>About Me</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#Portfolio" id="header-text" onClick={() => handlePageChange("Portfolio")} className={currentPage === "Portfolio" ? 'nav-link active' : 'nav-link'}>Portfolio</a>
            </li>
            <li class="nav-item">
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