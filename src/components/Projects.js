import { useRef, forwardRef } from "react";
import { Row, Col, Container } from "react-bootstrap";
import Slider from "react-slick";
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'
import { FaCircleChevronRight, FaCircleChevronLeft } from 'react-icons/fa6';
import MEALTHY from "../assets/img/Mealthy-1.jpg";

import '../assets/css/Projects.css';
// import "~slick-carousel/slick/slick.css"; 
// import "~slick-carousel/slick/slick-theme.css";


const Projects = forwardRef((props, ref) => {
  // return <h1>Hello Maro</h1>

  const expRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  const scroll = (scrollOffset) => {
    console.log(props)
    expRef.current.scrollLeft += scrollOffset;
  };

  return (
    <Container ref={ref} name="project" className="py-5">

      <p className="font-header-1">
        Experience
      </p>
      <div className="x-scroll-container" ref={expRef}>
        <ul className="hs full">
          <li className={`item ${props.theme}`}>
            <p>
              <b className="font-header-2">Project Management System</b><br />
              A webapp that you can use to find projects/jobs. <br /><br />
              <b>Responsibilities</b><br />
              ・Programming<br />
              ・Unit Testing<br />
              <b>Language, Tools, etc</b><br />
              ・ReactJS<br />
              ・Kotlin<br />
              ・Bootstrap<br />
              ・Playwright<br />
              ・Spring Boot Framework<br />
              ・MySQL<br />
              ・AWS (CodeCommit, S3)<br />
            </p>
          </li>
          <li className={`item ${props.theme}`}>
            <p>
              <b className="font-header-2">Path Management System </b><br />
              A webapp that you can use to find projects/jobs.<br /><br />
              <b>Responsibilities</b><br />
              ・Programming<br />
              ・Unit Testing<br />
              <b>Language, Tools, etc</b><br />
              ・Java<br />
              ・MSSQL<br />
              ・Postman<br />
              ・Gitlab<br />
              ・Spring Boot Framework<br />
              ・MongoDB<br />
            </p>
          </li>
          <li className={`item ${props.theme}`}>
            <p>
              <b className="font-header-2">Power Management System</b><br />
              A webapp that you can use to find projects/jobs.<br /><br />
              <b>Responsibilities</b><br />
              ・Programming<br />
              ・Unit Testing<br />
              <b>Language, Tools, etc</b><br />
              ・ReactJS<br />
              ・Kotlin<br />
              ・Bootstrap<br />
              ・Playwright<br />
              ・Spring Boot Framework<br />
              ・MySQL<br />
              ・AWS (CodeCommit, S3)<br />
            </p>
          </li>
          <li className={`item ${props.theme}`}>
            <p>
              <b className="font-header-2">Power Management System</b><br />
              A webapp that you can use to find projects/jobs.<br /><br />
              <b>Responsibilities</b><br />
              ・Programming<br />
              ・Unit Testing<br />
              <b>Language, Tools, etc</b><br />
              ・ReactJS<br />
              ・Kotlin<br />
              ・Bootstrap<br />
              ・Playwright<br />
              ・Spring Boot Framework<br />
              ・MySQL<br />
              ・AWS (CodeCommit, S3)<br />
            </p>
          </li>
        </ul>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Button onClick={() => scroll(-580)}>
          <FaCircleChevronLeft 
          color={props.theme === 'light' ? "black" : "white"} size={30} 
          />
        </Button>
        <Button onClick={() => scroll(580)}>
          <FaCircleChevronRight color={props.theme === 'light' ? "black" : "white"} size={30} />
        </Button>
      </div>
      <p className="font-header-1 mt-5">
        Personal Projects
      </p>
      <p className="font-header-2 my-2">eKai</p>
      <p >
        A webapp that you can use to find projects/jobs.<br /><br />
      </p>
      <p className="font-header-2 my-2">Mealthy</p>
      <Row>
        <Col md={6}>
          <div style={{ display: "flex", height: "100%" }}>
            <img src={MEALTHY} style={{ margin: "auto", maxWidth: "100%" }} alt="" />
          </div>
        </Col>
        <Col md={6}>
          <p>
            Mealthy is a local meal planner for patients experiencing micro-nutrient deficiency using Genetic Algorithm with Rule-Based Reasoning<br /><br />
          </p>
        </Col>
      </Row>
    </Container>
  )
});

export default Projects;