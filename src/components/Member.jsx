import React, {useState} from 'react';
import '../member.css';
import { useLocation } from 'react-router-dom'; 

function Member(props) {
    const location = useLocation();
    const [member, setMember] = useState(
        location.state?.member
      );
    return (

        <div className="content-sections-v-17">
            <div className="container"></div>
            <div className="div">Technologies Used</div>
            <img className="profile" src= {member.profile_body}/>
            <img className="skill1" src={member.skills[0]} />
            <img className="skill2" src={member.skills[1]} />
            <div className="group-39741">
                <div className="name">{member.name}</div>
                <div className="role">{member.role}</div>
                <div className ="intro">{member.intro}</div>
                <img
                    className="email-icon"
                    src="/images/email.png"
                />
                <div className="email">{member.email}</div>
            </div>
            <a href={member.git} target='_blank'><img className="github-icon" src= "/images/github.png" /></a>
        </div>


    );
}


export default Member;