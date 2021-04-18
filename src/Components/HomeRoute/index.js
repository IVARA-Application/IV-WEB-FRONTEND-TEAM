import React from "react";
import { withRouter } from "react-router-dom";

import Home from "./Home";
import GlobalStyle from "./GlobalStyle";
import EntranceExamCourse from "./EntranceExam";
import PreviousYearSection from "./PreviousYearSection";
import SkillDev from "./SkillDev";
import VirtualTuitionCourses from "./VirtualTuitionCourses";
import StudyAboardCourse from "./StudyAboardCourse";
import IntroductionSection from "./IntroductionSection";
import AboutSection from "./AboutSection";
import Middle from "./Middle";
import Form from "./Form";
import { Copyright } from "./Contact";
import Footer from "../footer/footer";

function HomeComp({ history }) {
  return (
    <>
      <Home />
      <GlobalStyle />
      <EntranceExamCourse />
      <PreviousYearSection />
      <SkillDev />
      <VirtualTuitionCourses />
      <StudyAboardCourse />
      <IntroductionSection />
      <AboutSection history={history} />
      <Middle />
      <Form />
      <Footer />
    </>
  );
}

export default withRouter(HomeComp);
