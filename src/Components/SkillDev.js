import skill from "../img/skill.svg";
import React from "react";
import { SkillContainer } from "../styles";

const SkillDev = () => {
  return (
    <SkillContainer>
      <div className="desc">
        <h1>Skill development Courses</h1>
      </div>
      <div className="skill-con">
        <div className="skill-left">
          <p>
            We believe in skills rather than mere knowledge. We dream of Skill
            India; thus, this initiative helps in overall skill development of
            an individual. Our skill development programs include 100+
            Technical, Non-Technical, Management, Sports and Activities courses.
          </p>
        </div>
        <div className="skill-right">
          <img className="skill" src={skill} alt="" />
        </div>
      </div>
    </SkillContainer>
  );
};

export default SkillDev;
