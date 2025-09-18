import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
// import './Home.css'; // Optional for custom styles

/*function Home() {
  return (
    <Container className="mt-5">
      <h1>Welcome to the Home Page</h1>
      
      <p>This is some introductory text about the site or app.</p>

      // Bootstrap spacing utility class //

      <Button variant="primary">Get Started</Button>
    </Container>
  );
}

export default Home;
*/


import { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import 'bootstrap/dist/css/bootstrap.min.css';

function HoverDropdown() {
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);

  return (
    <div style={{ display: 'flex' }}>
      {/* First Hover Dropdown */}
      <Dropdown
        className="ms-5"
        onMouseEnter={() => setShow1(true)}
        onMouseLeave={() => setShow1(false)}
        show={show1}
      >
        <Dropdown.Toggle
          variant="success"
          id="dropdown-basic-1"
          className="custom-dropdown-toggle"
        >
          Sell Phone
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">
            Action
          </Dropdown.Item>
          <Dropdown.Item href="#/action-2">
            Another action
          </Dropdown.Item>
          <Dropdown.Item href="#/action-3">
            Something else
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      {/* Second Hover Dropdown */}
      <Dropdown
        className="ms-5"
        onMouseEnter={() => setShow2(true)}
        onMouseLeave={() => setShow2(false)}
        show={show2}
      >
        <Dropdown.Toggle
          variant="success"
          id="dropdown-basic-2"
          className="custom-dropdown-toggle"
        >
          Buy Laptop
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-4" className="custom-dropdown-item">
            Gaming Laptops
          </Dropdown.Item>
          <Dropdown.Item href="#/action-5" className="custom-dropdown-item">
            Business Laptops
          </Dropdown.Item>
          <Dropdown.Item href="#/action-6" className="custom-dropdown-item">
            Budget Options
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}

export default HoverDropdown;

