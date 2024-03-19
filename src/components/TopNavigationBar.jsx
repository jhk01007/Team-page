import React from 'react';
import { useNavigate } from "react-router-dom";


function TopNavigationBar() {
  const movePage = useNavigate();
  function goHome(){
    movePage('');
  }
  function goMembers(){
    movePage('/members');
  }
  
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <div className="container-fluid">
        <a className="navbar-brand" href="" onClick={goHome}><img src='/images/team-logo.png' className='navbar-logo'/></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link navbar-content" aria-current="page" href="" onClick={goHome}>Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link navbar-content" href="" onClick={goMembers}>Members</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default TopNavigationBar;
