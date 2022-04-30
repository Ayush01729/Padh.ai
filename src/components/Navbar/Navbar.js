// import React from "react";
// import { useNavigate } from "react-router-dom";

// import "./navbar.css";
// import Navbar from "react-bootstrap/Navbar";
// import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";
// import NavDropdown from "react-bootstrap/NavDropdown";
// import Button from "react-bootstrap/Button";

// const NavbarHome = () => {
//   const navigate = useNavigate();

//   return (
//     <Navbar bg="light" expand="lg">
//       <Container>
//         <Navbar.Brand href="/">Padh.ai</Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="me-auto">
//             <Nav.Link href="aboutus">About Us</Nav.Link>
//             <Nav.Link href="vision">Our Vision</Nav.Link>
//             <NavDropdown title="More ..." id="basic-nav-dropdown">
//               <NavDropdown.Item href="aboutus">About Us</NavDropdown.Item>
//               <NavDropdown.Item href="vision">Our Vision</NavDropdown.Item>
//               <NavDropdown.Item href="goals">
//                 Future Endeavours
//               </NavDropdown.Item>
//               <NavDropdown.Divider />
//               <NavDropdown.Item href="contactus">Contact Us</NavDropdown.Item>
//             </NavDropdown>
//           </Nav>

//           <Button variant="outline-success" onClick={() => navigate("/login")}>
//             Login
//           </Button>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// };

// export default NavbarHome;

import React, { useState } from "react";
import "./navbar.css";
import { useNavigate } from "react-router-dom";

function NavbarHome() {
  const navigate = useNavigate();
  const [nav, setNav] = useState(false);

  const changebackground = () => {
    if (window.scrollY >= 50) {
      setNav(true);
    } else {
      setNav(false);
    }
  };

  window.addEventListener("scroll", changebackground);

  return (
    <nav className={nav ? "nav-active" : "nav"}>
      <a href="#" className="logo">
        <img src="https://media.istockphoto.com/photos/row-of-books-on-a-shelf-multicolored-book-spines-stack-in-the-picture-id1222550815?b=1&k=20&m=1222550815&s=170667a&w=0&h=MTxBeBrrrYtdlpzhMpD1edwLYQf3OPgkNeDEgIzYJww="></img>
      </a>
      <input type="checkbox" className="menu-btn" id="menu-btn" />
      <label className="menu-icon" for="menu-btn">
        <span className="nav-icon"></span>
      </label>
      <ul className="menu">
        <li>
          <a href="/" className="active">
            Home
          </a>
        </li>
        <li>
          <a href="#" onClick={() => navigate("/login")}>
            Login
          </a>
        </li>
        <li>
          <a
            href="#"
            onClick={() => navigate("/user/6264e43e30889d1cdf215c99")}
          >
            My Profile
          </a>
        </li>
        <li>
          <a href="#">Sign Up</a>
        </li>
      </ul>
    </nav>
  );
}

export default NavbarHome;
