import { forwardRef } from "react";
import { Row, Col, Container, Card } from "react-bootstrap";
import maro from "../assets/img/maro_nobg.png";
import { SiSpring } from 'react-icons/si';


const Greet = forwardRef((props, ref) => {
  // return <h1>Hello Maro</h1>
  return (
    <Container  ref={ref} name="main" className="py-5">
      <Row className="my-3">
        <Col className="my-3 col-md-6" style={{ display: "flex" }}>
          <img src={maro} style={{ width: "350px", borderRadius: "50%", margin: "auto" }} />
        </Col>
        <Col className="order-lg-first my-auto">
          <p className="font-main-header ">
            Hi there! <br />
            I'm Rosechelle.
          </p>
          <p className="py-2 px-1">
            <b>EMAIL</b><br />
            puse.rosechelle@gmail.com
          </p>
        </Col>
      </Row>
      <p className="pt-5">
        I am a software engineer with 5 years of experience. Knowledgable in several programming languages including Java, Kotlin, ReactJS, etc.
        I am a software engineer with 5 years of experience. Knowledgable in several programming languages including Java, Kotlin, ReactJS, etc.
      </p>
      <h1 className="font-header-1 pt-5">
        More about me
      </h1>
      <p className="py-2">
        <b>Bachelor of Science in Computer Science, 2017</b><br />
        Polytechnic University Of the philippines
      </p>

      <div>
        <SiSpring/>
      </div>
    </Container>
  )
});

export default Greet;