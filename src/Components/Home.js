import React from "react";
import Header from "./Header";
import { makeStyles } from '@material-ui/core/styles';

import svg1 from "./images/mobileBoy.svg";
import svg2 from "./images/bird.svg";

import { red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';
import yellow from '@material-ui/core/colors/purple';


const theme = createMuiTheme({
  palette: {
    primary: {
      main: yellow.A400,
    },
    secondary: {
      main: '#f44336',
    },
  },
});

const useStyles = makeStyles((theme)=>({
  root2: {
    flexGrow: 1,
    minwidth: 500,
    marginBottom:50,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    minwidth:500,
    padding: "10px",
    fontSize: 20,
  },
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  root3: {
    maxWidth: 345,
    marginBottom:30,
  },
  largeIcon:{
     
      '& svg': {
        fontSize: 60,
        justifyContent: "center"
      }
    
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

const Home = () => {
  const classes = useStyles();
  
  return (
    <div>
      <Header />
      <section className="banner-area relative" id="home">
        <div className="container">
          <div className="overlay overlay-bg"></div>
          <div className="row fullscreen d-flex align-items-center justify-content-start">
            <div className="banner-content col-lg-6 col-md-8">
              <h2 className="text-uppercase">
                Ivara <img src={svg2} style={{marginBottom:"40px" }} /> </h2>
                <br></br>
                <h3>IVentors Augmented Reality Arena, is a “One Platform for Complete School Ecosystem” through AR Technology for Schools. IVARA Classes, the future of education, makes learning innovative and easy to understand. It makes the strenuous concepts simple and boring lectures interesting.  

                </h3>
              <br></br><br></br>
              <div className="row justify-content-between"> 
              <button
                  className="form-btn"
                  style={{borderRadius: "10px",height: "45px",lineHeight: "40px", backgroundColor:"#105af6" , marginTop:"10px", marginLeft:"10px"}}>
                  Explore More
                </button></div>
             <div className="row justify-content-between"></div>
            </div>
            <div className="col-lg-6 d-none d-sm-block" style={{overflow:"none"}}>
              <img src={svg1}  style={{height:"95%",width:"95%",marginLeft:"280px"}} />       </div>
          </div>
          </div>
      </section>

    </div>
  );
};

export default Home;







