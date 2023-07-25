// import Container from 'react-bootstrap/Container';
// import Navbar from 'react-bootstrap/Navbar';
// import Nav from 'react-bootstrap/Nav';
import { useState, useRef, useEffect } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { FaGithub, FaLinkedin, FaLinkedinIn } from 'react-icons/fa';
import { MdDarkMode } from 'react-icons/md';
import { IoMdSunny } from 'react-icons/io';
import '../assets/css/Common.css';

const Navi = ({ resultRef, meRef, theme, toggleTheme }) => {
  //  const myRef = useRef(null)
  //  const themeRef = useRef(theme)

  //  const executeScroll = () => myRef.current.scrollIntoView()    
  const executeScroll = (e, ref) => {
    e.preventDefault();
    if (ref == "projects") {
      resultRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (ref == "me") {
      meRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  // const [theme, setTheme] = useState('dark');

  // const toggleTheme = () => {
  //   if (theme === 'light') {
  //     setTheme('dark');
  //   } else {
  //     setTheme('light');
  //   }
  // };

  // useEffect(() => {
  //   document.body.className = theme;
  // }, [themeRef]);

  return (
    //  <div 
    //  className="header"
    //  >
    //    <Navbar bg="dark" data-bs-theme="dark">
    //     <Container>
    //       <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    //       <Nav className="me-auto">
    //         <Nav.Link href="#home">About me</Nav.Link>
    //         <Nav.Link href="#features">Projects</Nav.Link>
    //         <Nav.Link href="#pricing"> <FaGithub className='icon-md' /></Nav.Link>
    //         <Nav.Link href="#pricing"> <FaLinkedin className='icon-md' /></Nav.Link>
    //       </Nav>
    //     </Container>
    //   </Navbar> 
    <Navbar
      className={`navi ${theme}`} 
      data-bs-theme={`${theme}`}
    // bg="dark" data-bs-theme="dark"
    >
      <Container>
        <Navbar.Brand href="#home"><b>{'< maro />'}</b></Navbar.Brand>
        {/* <Nav className="me-auto"> */}
        <Nav className=''>
          <Nav.Link /*href="#home"*/ onClick={(e) => executeScroll(e, "me")}><b>About me</b></Nav.Link>
          <Nav.Link /*href="#projects"*/ onClick={(e) => executeScroll(e, "projects")}><b>Projects</b></Nav.Link>
          <Nav.Link href="https://github.com/rosechellie" target="_blank"> <FaGithub size={30} /></Nav.Link>
          <Nav.Link href="https://www.linkedin.com/in/mary-rosechelle-puse-b6ab23199" target="_blank"> <FaLinkedin size={30} /></Nav.Link>
          <Nav.Link onClick={toggleTheme}>
            {
              theme === 'light' &&
              <MdDarkMode size={30} />
            }
            {
              theme === 'dark' &&
              <IoMdSunny size={30} />
            }
          </Nav.Link>

          {/* <button>
            <MdDarkMode size={30}  />
          </button> */}
        </Nav>
      </Container>
    </Navbar>
    //  </div> 
  );
}

export default Navi;