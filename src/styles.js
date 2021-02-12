import styled from "styled-components";

//Entrance Section

export const Entrance = styled.div`
  font-family: "Poppins", sans-serif;
  h1 {
    font-size: 2.25rem;
    color: #4e5de1;
    padding-top: 6rem;
    letter-spacing: 4px;
  }
  P {
    color: #6f6e6d;
    font-size: 1.25rem;
    padding: 4rem 0rem 2.5rem 0rem;
    letter-spacing: 3px;
  }
  text-align: center;
  align-items: center;
  .girl {
    padding-top: 11rem;
    align-self: center;
    border-radius: 10px;
  }

  @media (max-width: 900px) {
    .girl {
      width: 40%;
    }
    p {
      letter-spacing: 1px;
    }
  }

  @media (max-width: 800px) {
    p {
      padding: 0rem 2rem;
    }
    .girl {
      padding-top: 6rem;
      width: 40%;
    }
  }
`;

//Previous Year Papers
export const PypContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding-bottom: 4rem;
  background: #a1aaf6;
  h1 {
    font-size: 2.25rem;
    color: #4e5de1;
    padding-top: 6rem;
    letter-spacing: 4px;
  }
  P {
    color: #e7e8ec;
    font-size: 1.25rem;
    padding: 2rem 0rem 1rem 0rem;
    letter-spacing: 3px;
  }
  img {
    padding: 0rem 8rem;
    .girl1 {
      border-radius: 5px;
    }
  }
  .description {
    padding: 3rem 10rem;
  }
  @media (max-width: 414px) {
    .description {
      padding: 0rem;
    }
    .girl1,
    .books {
      padding-top: 6rem;
      width: 40%;
    }
  }

  @media (max-width: 900px) {
    text-align: center;
    align-items: center;
    padding: 0rem;
    .img {
      padding: 0rem 1rem;
    }
    h1,
    p {
      letter-spacing: 3px;
    }
    .description {
      padding: 0rem;
    }
    h1 {
      letter-spacing: 4px;
      padding-top: 4rem;
    }
    p {
      padding: 1rem 4rem;
      letter-spacing: 2px;
    }
    .girl1,
    .books {
      padding-top: 6rem;
      width: 100%;
    }
    .books {
      padding-top: 4rem;
    }
  }
  @media (max-width: 1122px) {
    h1 {
      letter-spacing: 4px;
    }

    p {
      letter-spacing: 2px;
    }
  }
  @media (max-width: 1200px) {
    display: block;
    P {
      padding: 2rem 6rem;
    }
  }
`;

// Skill Section

export const SkillContainer = styled.div`
  width: 100%;
  text-align: center;
  h1 {
    font-size: 2.25rem;
    color: #4e5de1;
    padding-top: 6rem;
    letter-spacing: 4px;
  }
  P {
    color: #6f6e6d;
    font-size: 1.25rem;
    padding: 4rem 0rem 2.5rem 0rem;
    letter-spacing: 3px;
  }
  .desc {
    align-items: center;
  }
  .skill-con {
    display: flex;
    justify-content: center;
    text-align: left;
    align-items: center;
  }
  .skill-left {
    margin: 0rem 8rem;
  }
  .skill-right {
    text-align: center;
    margin: 0rem 10rem;
  }
  @media (max-width: 414px) {
    .skill-left {
      padding: 1rem 0rem;
      margin: 0rem;
    }
    .skill-right {
      margin: 0rem;
    }
  }

  @media (max-width: 900px) {
    .skill {
      width: 100%;
    }
  }

  @media (max-width: 1200px) {
    .skill-right {
      margin: 0rem;
    }
    .skill-left {
      margin: 0rem;
    }

    h1,
    p {
      letter-spacing: 2px;
    }
    .skill-con {
      display: block;
      p {
        text-align: center;
      }
    }
  }

  @media (max-width: 1740px) {
    .skill-left {
      margin: 0rem 4rem;
    }
    .skill-right {
      text-align: center;
      margin: 0rem 5rem;
    }
  }
`;

//Virtual tuition Section

export const VtcMain = styled(Entrance)`
  width: 100%;
  text-align: center;
  background: #a1aaf6;

  h1 {
    font-size: 2.25rem;
    color: #4e5de1;
    padding-top: 6rem;
    letter-spacing: 4px;
  }
  P {
    color: #e7e8ec;
    font-size: 1.25rem;
    padding: 2rem;
    letter-spacing: 3px;
  }
  .desc {
    align-items: center;
  }
  .vtc-con {
    display: flex;
    justify-content: center;
    text-align: left;
    align-items: center;
  }
  .desc {
    margin-bottom: 6rem;
  }
  .vtc-left {
    margin: 0rem 10rem;
  }
  .vtc-right {
    margin: 0rem 4rem;
  }

  @media (max-width: 600px) {
    .vtc-left img {
      width: 100%;
    }
    p {
      margin: 0;
      padding: 0;
      font-size: 1rem;
    }
  }

  @media (max-width: 1244px) {
    .vtc-left {
      margin: 0rem;
    }
    .vtc-right {
      margin: 0rem;
    }
    .vtc-con {
      display: block;
      p {
        text-align: center;
        padding-top: 2rem;
      }
    }
  }

  @media (max-width: 1424px) {
    .vtc-left {
      margin: 0rem;
      padding: 0rem;
    }
    .vtc-right {
      margin: 0rem;
      padding: 0rem;
    }
    p {
      padding: 0rem;
    }
  }

  @media (max-width: 1600px) {
    .vtc-left {
      margin: 0rem 5rem;
      text-align: center;
    }
    .vtc-right {
      margin: 0rem 2rem;
      padding: 0rem 0rem;
    }
  }
`;
//Study Aboard Section

export const SacMain = styled(Entrance)`
  h1 {
    margin-bottom: 4rem;
  }
  p {
    margin: 0rem 16rem;
  }
  @media (max-width: 900px) {
    p {
      letter-spacing: 0px;
      padding: 0rem 2rem;
      margin: 0rem;
    }
  }
  @media (max-width: 600px) {
    img {
      width: 75%;
    }
  }
`;

//Introduciton Section

export const Intro = styled.div`
  width: 100%;
  display: flex;
  background: #a1aaf6;
`;

export const Cards = styled.div`
  width: 100%;
  font-family: "Roboto", sans-serif;
  display: flex;
  flex-wrap: wrap;
  background: white;
  margin-top: 10rem;
  padding: 0rem 2rem;
  justify-content: center;
  color: #4e5de1;
  letter-spacing: 5px;
  -webkit-letter-spacing: 5px;
  font-weight: 400;
  background: #a1aaf6;
  .arrow {
    margin: 3rem 0rem;
  }
  .card-desc {
    padding: 1rem 0rem;
    margin: 2rem 0rem;
    font-size: 2rem;
  }
  .short-desc {
    font-size: 1.2rem;
    color: #e7e8ec;
  }
  .icon img {
    border-radius: 12px;
    box-shadow: -5px 15px 30px 0px rgba(0, 0, 0, 0.25);
    animation: anime 1s infinite linear alternate 0.2s;
    @keyframes anime {
      from {
        transform: translateY(0px);
      }
      to {
        transform: translateY(-10px);
      }
    }
  }
  .second {
    animation: anime 1s infinite linear alternate 0.4s;
  }
  .third {
    animation: anime 1s infinite linear alternate 0.6s;
  }
  @media (max-width: 900px) {
    h1 {
      letter-spacing: 2px;
    }
    p {
      letter-spacing: 1px;
    }
  }
`;

export const ArlCard = styled.div`
  padding: 0rem 2rem;
  margin: 0 1rem;
  text-align: center;
`;
export const EepCard = styled.div`
  padding: 0rem 2rem;
  margin: 0 1rem;
  text-align: center;
`;
export const DoubtsCard = styled.div`
  padding: 0rem 2rem;
  margin: 0 1rem;
  text-align: center;
`;

//About Section

export const Container = styled.div`
  font-family: "Poppins", sans-serif;
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 1280px) {
    display: block;
  }
`;

export const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex: 0.5;
  h1 {
    color: #4e5de1;
    font-weight: 500;
    font-size: 2.8rem;
    letter-spacing: 6px;
  }
  p {
    padding: 4rem 0rem;
    color: #6f6e6d;
    font-size: 1.5rem;
    letter-spacing: 5px;
  }
  button {
    font-size: 1.2rem;
    background-blend-mode: pass-through;
    letter-spacing: 6px;
  }

  @media (max-width: 414px) {
    h1 {
      font-size: 1rem;
      padding-top: 0.6rem;
    }
    p {
      font-size: 0.8rem;
    }
    h1,
    p {
      letter-spacing: 0px;
    }
  }
  @media (max-width: 900px) {
    h1 {
      letter-spacing: 4px;
      font-size: 2.2rem;
      padding-top: 1rem;
    }
    p {
      letter-spacing: 3px;
      font-size: 1.2rem;
    }
  }
`;

export const RightSide = styled.div`
  position: relative;
  flex: 0.5;
  .circle {
    position: absolute;
    z-index: -2;
    top: 20%;
    left: 21%;
    transform: translate(-50%, -50%);
    transform-origin: center;
    animation: circleAnime 10s infinite linear;
    @keyframes circleAnime {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }
  }
  @media (max-width: 1424px) {
    .circle {
      top: 15%;
      left: 15%;
      scale: 0.9;
    }
  }
  @media (max-width: 1280px) {
    .circle {
      top: 10%;
      left: 30%;
    }
  }

  @media (max-width: 960px) {
    .circle {
      display: none;
    }
  }
`;

export const AboutCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  letter-spacing: 4px;
  justify-content: center;
  margin: 6rem 0rem;
  padding-top: 5rem;
  text-align: center;
  p {
    margin: 0rem 0rem 2rem 0rem;
    font-size: 1.5rem;
    text-shadow: 0px 10px 15px rgba(78, 93, 225, 0.47);
  }
  span {
    color: #4e5de1;
  }
  @media (max-width: 414px) {
    h1,
    p {
      letter-spacing: 0px;
    }
  }
`;

export const Card = styled.div`
  flex-basis: 20rem;
  .icon {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media (max-width: 1280px) {
    flex-basis: 30rem;
  }
`;
