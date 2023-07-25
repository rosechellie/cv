import { useRef, forwardRef } from "react";
import { Row, Col, Container } from "react-bootstrap";
import Slider from "react-slick";
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'
import { FaCircleChevronRight, FaCircleChevronLeft } from 'react-icons/fa6';

import '../assets/css/Projects.css';
// import "~slick-carousel/slick/slick.css"; 
// import "~slick-carousel/slick/slick-theme.css";


const Projects_old = forwardRef((props, ref) => {
  // return <h1>Hello Maro</h1>

  const expRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  const nextPage = () => {

  };

  const scroll = (scrollOffset) => {
    expRef.current.scrollLeft += scrollOffset;
  };

  return (
    <Container ref={ref} name="project" className="py-5">

      <p className="font-header-1">
        Experience
      </p>
      <div className="x-scroll-container" ref={expRef}>
        <ul className="hs full">
          <li className="item">
            <p >
              <b>Project Management System</b><br />
              A webapp that you can use to find projects/jobs. A webapp that you can use to find projects/jobs.<br /><br />
              <b>【Responsibilities】</b><br />
              ・Programming<br />
              ・Unit Testing<br />
              <b>【Language, Tools, etc】</b><br />
              ・ReactJS<br />
              ・Kotlin<br />
              ・Bootstrap<br />
              ・Playwright<br />
              ・Spring Boot Framework<br />
              ・MySQL<br />
              ・AWS (CodeCommit, S3)<br />
            </p>
          </li>
          <li className="item">
            <p>
              <b>Path Management System </b><br />
              A webapp that you can use to find projects/jobs.<br /><br />
              <b>【Responsibilities】</b><br />
              ・Programming<br />
              ・Unit Testing<br />
              <b>【Language, Tools, etc】</b><br />
              ・Java<br />
              ・MSSQL<br />
              ・Postman<br />
              ・Gitlab<br />
              ・Spring Boot Framework<br />
              ・MongoDB<br />
            </p>
          </li>
          <li className="item">
            <p>
              <b>Power Management System</b><br />
              A webapp that you can use to find projects/jobs.<br /><br />
              <b>【Responsibilities】</b><br />
              ・Programming<br />
              ・Unit Testing<br />
              <b>【Language, Tools, etc】</b><br />
              ・ReactJS<br />
              ・Kotlin<br />
              ・Bootstrap<br />
              ・Playwright<br />
              ・Spring Boot Framework<br />
              ・MySQL<br />
              ・AWS (CodeCommit, S3)<br />
            </p>
          </li>
          <li className="item">
            <p>
              <b>Power Management System</b><br />
              A webapp that you can use to find projects/jobs.<br /><br />
              <b>【Responsibilities】</b><br />
              ・Programming<br />
              ・Unit Testing<br />
              <b>【Language, Tools, etc】</b><br />
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
        <Button onClick={() => scroll(-580)}> <FaCircleChevronLeft color="white" size={30} /> </Button>
        <Button onClick={() => scroll(580)}> <FaCircleChevronRight color="white" size={30} /> </Button>
      </div>
      {/* <Carousel animation="slide">
        <Paper className="p-2 row"
          style={{ backgroundColor: "black", color: "white" }}>
            <Col md={6}>
          <p>
            <b>Project Management System</b><br />
            A webapp that you can use to find projects/jobs.<br /><br />
            <b>【Responsibilities】</b><br />
            ・Programming<br />
            ・Unit Testing<br />
            <b>【Language, Tools, etc】</b><br />
            ・ReactJS<br />
            ・Kotlin<br />
            ・Bootstrap<br />
            ・Playwright<br />
            ・Spring Boot Framework<br />
            ・MySQL<br />
            ・AWS (CodeCommit, S3)<br />
          </p>
          </Col>
            <Col md={6}>
          <p>
            <b>Project Management System</b><br />
            A webapp that you can use to find projects/jobs.<br /><br />
            <b>【Responsibilities】</b><br />
            ・Programming<br />
            ・Unit Testing<br />
            <b>【Language, Tools, etc】</b><br />
            ・ReactJS<br />
            ・Kotlin<br />
            ・Bootstrap<br />
            ・Playwright<br />
            ・Spring Boot Framework<br />
            ・MySQL<br />
            ・AWS (CodeCommit, S3)<br />
          </p>
          </Col>
        </Paper>
        <Paper className="p-2 row"
          style={{ backgroundColor: "black", color: "white" }}>
          <p>
            <b>Path Management System</b><br />
            A webapp that you can use to find projects/jobs.<br /><br />
            <b>【Responsibilities】</b><br />
            ・Programming<br />
            ・Unit Testing<br />
            <b>【Language, Tools, etc】</b><br />
            ・ReactJS<br />
            ・Kotlin<br />
            ・Bootstrap<br />
            ・Playwright<br />
            ・Spring Boot Framework<br />
            ・MySQL<br />
            ・AWS (CodeCommit, S3)<br />
          </p>
        </Paper>
      </Carousel> */}
      {/* <Row className="my-3">
        <Col className="my-3" md={6}>
          <p >
            <b>Project Management System</b><br />
            A webapp that you can use to find projects/jobs.<br /><br />
            <b>【Responsibilities】</b><br />
            ・Programming<br />
            ・Unit Testing<br />
            <b>【Language, Tools, etc】</b><br />
            ・ReactJS<br />
            ・Kotlin<br />
            ・Bootstrap<br />
            ・Playwright<br />
            ・Spring Boot Framework<br />
            ・MySQL<br />
            ・AWS (CodeCommit, S3)<br />
          </p>
        </Col>
        <Col className="my-3" md={6}>
          <p>
            <b>Path Management System </b><br />
            A webapp that you can use to find projects/jobs.<br /><br />
            <b>【Responsibilities】</b><br />
            ・Programming<br />
            ・Unit Testing<br />
            <b>【Language, Tools, etc】</b><br />
            ・Java<br />
            ・MSSQL<br />
            ・Postman<br />
            ・Gitlab<br />
            ・Spring Boot Framework<br />
            ・MongoDB<br />
          </p>
        </Col>
      </Row> */}
      {/* <Row className="my-3">
        <Col className="my-3" md={6}>
          <p >
            <b>Power Management System</b><br />
            A webapp that you can use to find projects/jobs.<br /><br />
            <b>【Responsibilities】</b><br />
            ・Programming<br />
            ・Unit Testing<br />
              <b>【Language, Tools, etc】</b><br />
            ・ReactJS<br />
            ・Kotlin<br />
            ・Bootstrap<br />
            ・Playwright<br />
            ・Spring Boot Framework<br />
            ・MySQL<br />
            ・AWS (CodeCommit, S3)<br />
          </p>
        </Col>
      </Row> */}

      <p className="font-header-1 mt-5">
        Personal Projects
      </p>
      <p >
        <b>eKai</b><br />
        A webapp that you can use to find projects/jobs.<br /><br />
      </p>
      <p>
        <b>MEALTHY</b><br />
        <Row>
          <Col>
            Mealthy is a local meal planner for patients experiencing micro-nutrient deficiency using Genetic Algorithm with Rule-Based Reasoning<br /><br />
          </Col>
          <Col>
            Mealthy is a local meal planner for patients experiencing micro-nutrient deficiency using Genetic Algorithm with Rule-Based Reasoning<br /><br />
          </Col>
        </Row>
      </p>
    </Container>
  )
});

export default Projects_old;