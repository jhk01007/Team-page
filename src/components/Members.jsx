import React from "react";
import OverflowWrapper from 'react-overflow-wrapper';
import Member from "./Member";
import { useNavigate } from 'react-router-dom';
/**
 * 이름
깃허브 링크
역할
이메일
기술스택
사진

 */




function Members() {
    const members = [
        {
            name: "나종명",
            git: "https://github.com/JM-Na",
            role: "Product Manager / Infra",
            intro: '"실패를 두려워하지 않고, \n모든 도전을 기회로 바라볼 것입니다."',
            email: "myung0484@gachon.ac.kr",
            skills: ["/images/skills/java.png", "/images/skills/python.png"],
            profile_face: "/images/profile/jongmyung_face.jpg",
            profile_body: "/images/profile/jongmyung_body.jpg"  
        },
        {
            name: "김태우",
            git: "https://github.com/Vertitaserum",
            role: "Front End",
            intro: '"팀원들과의 원활한 소통과 협력을 통해 \n최고의 결과물을 만들어낼 것입니다."',
            email: "ktw505734@gachon.ac.kr",
            skills: ["/images/skills/react.png", "/images/skills/springboot.png"],
            profile_face: "/images/profile/taewoo_face.jpg",
            profile_body: "/images/profile/taewoo_body.jpg"
        },
        {
            name: "조윤상",
            git: "https://github.com/YoonYn9915",
            role: "Front End",
            intro: "\"작은 성공에 만족하지 않고,\n 항상 더 나은 해결책을 찾기 위해 노력할 것입니다.\"",
            email: "jsy440720@gmail.com",
            skills: ["/images/skills/react.png", "/images/skills/springboot.png"],
            profile_face: "/images/profile/yoonsang_face.jpg",
            profile_body: "/images/profile/yoonsang_body.jpg"
        },
        {
            name: "김재희",
            git: "https://github.com/jhk01007",
            role: "Back End",
            intro: "\"시간 관리와 업무 효율성을 최우선으로 하여, \n프로젝트 목표 달성에 전념할 것입니다.\"",
            email: "jhk01007@gachon.ac.kr",
            skills: ["/images/skills/springboot.png", "/images/skills/nodejs.png"],
            profile_face: "/images/profile/jaehee_face.jpg",
            profile_body: "/images/profile/jaehee_body.jpg"
        },
        {
            name: "민기",
            git: "https://github.com/GiMin0123",
            role: "Back End",
            intro: `\"지속적인 학습과 성장을 통해, \n개발자로서의 나의 역량을 확장할 것입니다.\"`,
            email: "minby017@gachon.ac.kr",
            skills: ["/images/skills/java.png", "/images/skills/springboot.png"],
            profile_face: "/images/profile/mingi_face.jpg",
            profile_body: "/images/profile/mingi_body.jpg"
        },
    ]
    const movePage = useNavigate();
    function goMember (index) {
        movePage(`/members/${index}`,
            {
                state: {
                    member: members[index]
                }
            }
        )
    }
    return (
        <div class="container">
            <h1 class="section-title">Members</h1>
            <OverflowWrapper iconSize="60" className="scrollbar">

                {members.map((member, index) => {
                    return (
                        <div class="team-item" onClick={ () => goMember(index)}>

                            <img src={member.profile_face} class="team-img" alt="pic" />
                            <h3>{member.name}</h3>
                            <div class="team-info"><p>{member.role}</p></div>

                                <a href={member.git} class="git" onClick={(e) => {e.stopPropagation()}}>
                                    <i class="fa fa-github"></i>
                                </a>

                        </div>
                    )
                })}
            </OverflowWrapper>
        </div>
    )
}

export default Members;