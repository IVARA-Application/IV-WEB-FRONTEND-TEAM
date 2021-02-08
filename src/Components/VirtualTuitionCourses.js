import React from "react";
import vtc from "../img/VTC.png";
import { VtcMain } from "../styles";

const VirtualTuitionCourses = () => {
  return (
    <VtcMain>
      <div className="desc">
        <h1>Virtual Tuition Courses</h1>
      </div>
      <div className="vtc-con">
        <div className="vtc-left">
          <img className="vtc" src={vtc} alt="" />
        </div>
        <div className="vtc-right">
          <p>
            The new normal demands the safe education for students, and as well
            as for teachers. With IVARA virtual tuition doesn't only mean
            sitting in front of camera, but experiencing the 3D model in your
            own house. It includes the graphs, figures, diagrams and many more.
            No more back pain and eyes irritation. This will also make you
            education and fun learning-based teaching methods. The availability
            of tutors makes sure student's study goes smooth with less doubt.
          </p>
        </div>
      </div>
    </VtcMain>
  );
};

export default VirtualTuitionCourses;
