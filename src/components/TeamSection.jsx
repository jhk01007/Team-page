import React from 'react';
import { useNavigate } from "react-router-dom";

function TeamSection() {
  const movePage = useNavigate();
  function goMembers(){
    movePage('/members');
  }
  return (
    <div className="team-section" >
      <div className="row">
        <div className="col-md-6">
          <img src='/images/team.png' alt="Team" className="img-fluid" style={{ marginRight: '30px' }}/>
        </div>
        <div className="col-md-6 d-flex flex-column justify-content-center align-items-start text-container">
          <h1>Sweat</h1>
          <p className="mb-4">"열정과 장인정신으로 땀 흘리다"</p>
          <div className="buttons">
            <button className="btn btn-primary mb-2" onClick={goMembers}>See Members</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeamSection;
