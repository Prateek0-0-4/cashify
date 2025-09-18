import React from 'react'
import { useState } from 'react';
import { BsGeoAlt } from 'react-icons/bs';
import Carousel from 'react-bootstrap/Carousel';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Dropdown from 'react-bootstrap/Dropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { BsBorderStyle } from 'react-icons/bs';


function Hover(){
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [show4, setShow4] = useState(false);
  const [show5, setShow5] = useState(false);
  const [show6, setShow6] = useState(false);
  const [show7, setShow7] = useState(false);
  const [show8, setShow8] = useState(false);
  return (
    <>
    <div className='w-100'>
   <div style={{borderBottom:'1px solid grey',position:'sticky', marginBottom:'0px', top:'0', zIndex:'1020',backgroundColor: 'white'}}>
    <Navbar expand="lg" >
      <Container fluid>
        <Navbar.Brand href="#"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASEAAACeCAMAAABKKEw9AAABFFBMVEX///8ApZoBpJoApJwTmUkApZgAppYTmUcApZ4Bo54TmEsApKEQm0cEo5gWl0sEopwAp5QamZDw+Pjf8/Lt9fAAqJq53t0EoaEAqJDn8+wwtql+xcJQv7zA6OcblEuOy8hXsatQwbjP7uoamY4Tl1MArJDG5OQJnqMel5Ss29k6pJwrilWKxKDU6+oNm08/p2+V2dU1p5o+qmknsatDpm9Oo3Cw5N1wy8hjx79Un3ak19Zlu7lpyMdStbJFvq8rq6+F0819wsax1MA+lWOo2Ltht4ZoyrzM6NiSzK1nuY+n0M1TsbGLy71ZsaIxj4oam4Y4mlp+xZddyLdkp6KRwL5AoJ9qsYZEwqpQtnlht7us0L2Nv6S5IDt9AAAP50lEQVR4nO2dD1vbRhKHvbvsemUhS5ERcmSwMSEQ3NghKAeuSaiPAkmb9Hrt9XJp8/2/x83s6r/thoYGWnt/z9NAJVuWXs/OzsyORK1mZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGR0U/n7k87ZzmDwADUY7Jz1Nlv3fU5/HfmHL2PLsmzblpIQninoHxlKiGeLuZZUYgwBkVzCO5/4932G96vhmLnMdV2mRClAESK1IfjVCyx7PLzvs7w/7b+ywtCyLZepsYUGBFA8kcjzOJG2pM6rFWU0POdU2uB/3BKhorgdShh5ko1XcKz5pxqC4zCWjzJKSmKWBRulbVM2ue8TvmudRGAxMI48MB3KMkLaTTPmKAE7tC4KI41a8UrNa/4pcKDJ0EIiCSFgBkNL/T8Sgj00eQlgJCtkRq2YlQdTZkJoUzy1IdyVTGv6deP7PvG70r7lVvxNhgqjIotpx13x2gL2x6vhsA8l+N9FhCCuBudMxBzBfvebVXBGh4hhASGqBhv+k2zgBSHBg2+WPzQ6tKyFhDh/9HzwHCd5l1I19VcI0TC0l92KNl0bwmimp/VS+BOfnuwmbqa1fTSOkyykbEqEyvh+L+BLayhdF7MMfek0DRGdV4czPrg1ecUoGBym+0EQpHZE6dF9nPhdyZfJvJ7N8ATm9ni6YIoajsOD0HK51xZ6aiOWFQT9uz3nu9U5TZRHiYT0fmcK9/95YDPRTgmBH+JimYfZVJCEEMv0qZy0tUVElu0TFSfczcneh3a9GULx9qffdhRgJqLjJRcQRV/+TO9LEVxomVD/RjFyKxKQ5CsxK7SmX/g07089TlJACaGb5ll+PyEEjt22ljYg8nGuToNlBei0tH/j4unX334F+vb9x4uqbY0Tt+559PDuTvmONdZVjZxQCdDlh2ajqdRF7V1dlN89cQR3iHjcXl5ALc4gc6dUBX4UUvjiELvcq4PWtDSm0XGZUesagsbo+uHdnvVdqkNgHioQKkQ1r4/X6wUBpEa3C6Q+VHD4S1378B2C1WhdV0RCub9901hfXy8TWmsoWxpd/M4Rl01TosusiVjuTr7rrs0SUpQao73X93jKd6zYVU46JZTnVlfdxto8OsBn1Hh6j2d8x9oPbYhlsuVUko2xq4YiMpdQc4UA1V6GFnNw8QfLGIT30u1v6jDAMkJrJd3Agoa9nQFop7Nf2eHvKFVdu394prpLBme9tFb5Pbzs7c5G/pp3P/wAm+CXfz368cdHv8C3iz8fFDT0dYvKTuHIm2rLo82bI6lIhhaFDLQNOWhAaZCe+WvlgvJRBraj6QCsT1vQSWzjshEWmmRcrhr19IJbZf3oSDK9fgkxPY30OzqcWTYvxOnnHlg6ZscP4HwFfJebuFAeZB6U0d3arqN8Rv6ZWNZxOLn+LDiobRVM80AtIUo2Tbcfg68BN5Q4asDVxFm+2YDfux8/ccxWX61puwzrIoHXjgoVbF/qyykXSl4GgjA7PIART+F0hHpHR1q2TQuE+o4DxJEQZklIiJLAQ/MH4w+4HTJ4W0dVQIPsbS9dW3Iv+PxwZApRtFqVR0JWllldNkejZjOxI7Cc9ToQqgOhtbXupyxoGMB1SD0/QjbSbns0t5gJ04RosXTQs4VHIPUNVS8Ars3heXSwbalIaAu/TEUIj4+EmFTHVzUYHoYuEPKxSMyyCWebsdAm4hbxfj+tN2M/h/U23fxvJNRt1NePr67AmBraZwOzsg+a9820PLhaXXeU9kEo2nDcV9neOAkrSKEe2WISLpCyOI654ERST42JmxICRkiJ2zYSqm0LB0ar0OPM9wQBSzz7fEA1ma9mCC5T1JcAZw0I7WFg6D/tNnHE1XGUlSxo49mcqCiCb5SAGUzxC9381fE4zZcb960krCCFwBQiMiJ4vIufdTgmUorWzQkJ73o67b1710Opz7kW2LLi6WOA6wLjvEXIP8yWv5RXTY/0oolAGs0kcv4NfBBmr41GyUlvvOj+NHPEKbZied7P6aE2pWXtZntfuQ7kcGp9O0+Px+BdHZbOov401vZ1U0L50ZMDeAIOSPEg+zBZ8Nt1pxymhJgNTjJ1nxvgkcFFN56lL7ts1hWhMqBnzcaoekCYOijMND/nW1px7gRaFhLa7iOh7OuovcJeEquTH0NTuRkhLqqEavtgN+CKjmp+hFULunVzHrPqZYQODqzsa71AQutFl3OJCVkF0DG4pvVqRj8JJbq0olkXfj8F8ydRbRv7bmQ2I59yAfZrV79pmMssyRcRopqQZHyGUK0jKIOTaE3BhzNb3qqwd1YgxPhJsvWpmsXWGm/yF14210YVQABxfb2awb4MbXDSCxbOfBvXK6fgr4GQnU34hw4McssO42npWpAQrRAKAj3bg4kgITxxOkvIj7AVVUQw3AWVt1vF28kIhRZvp5/1dQMJrTeuCq+8HI3mAFqvTv1xGFIhFnjGIxiAHEfXFMIeKdMw149hNFkSZrkfn7/LY6eOxIBhenQ06U2+/34yOYqxkhnUdDykCKk4MYoGg+fPnw8G/8neuo2xJdaU4QXnn0cm1SAjJJlopxf2rSJUb+4Vx9BlGdC61vvKAVkYQsC34NNi7ELC+pyvKrdZDLANhMDnQOwLoyKLwZEQh4AT3gNHDW2L4dBRMTXOhooQzlSSqp4dygb5J117RLc5k+CWxfMnWSMDnM2jdOtXSAhnr2cLCocbL/YamtA/KnvU2S4gdMIYBEcqUTtDQm528ruRtAGCy9BnkyQG7+jWN/AlWJ/BxmUYO2pN7lFKKIBMSTXEw7sPwv/mHwU+WhPi0z8OpaScEKUk+w6QUF3VXI/nIto43ltEiAQQKi4gdM6Y5+l9+wz7SAr18Elsh5CnMBdnu7ZC1MHWt4Dr/iSC7FQ1vVYlFCLc8KBEqLbtaEK3XgbOCcFnlghpI2rMQ7TxbG9vb20+IZXg0bl+aChwmCRjKCYEsozi61rTPtiKawMm5zluUIQ4ZHjYQqAyFVy2RE9dJCRtiSmgG4ZWkRCMUaVbNzUVCbGyDdUVodEsIrSgvWZ9PqE+5klsbhrUQUJicqK0ReHLDysTvL+5haPJdR3M2tQo40eHm4lOIkhu7RIhzAPsrZdnnbOzTqfzS+lYCtDt+ysLhFhupeCp6yqChky1XkUEPmhvpAKmeZ562n782GPzbNsXAnv8MMNAx+K6oeUkw7FgStu6B2Va01k6Kc72fUxuLfjlAUkJQUYvZ2d7JUXodP6+P6CCH2Lhk3Tr+5xQo15BpC1IV0bmzPYtgTbEiuWYJMp55zkQbnMmKeY3lmWFMOZUhn8YF8psp2rZF6+so+rn8wnBuFPxEIxCawEhtRT8ZxCiKSAYyul3+XSUV1zh3yIiiKQbTdzebWJZpD6z5oExaHFR0u9LnbgGXDlb5TckTj8240JlYJHlnmZmNA3A31gpIcsqEQKfbONZW4QqQhbn1iJCcxaPP0eDnBCEG6lbuxit1VNCoMKMhqmGhtfUhGa8VCuEA8F3HZ3gRQ9PAyFl5GPgrHv5paYj0VTgY1tYKcQc4Vpf6G4gONU1wg5zXDssEiLgj6UihM1NSIgR5n5ZQjsZIWyWTh2sP1pTNWplQ43CpL/xrFCtxur18ewhJ1JicMIDGQ8ghsHeUe8co0X4lGA71ylHRqdYLuFEYrTc73T6PAiwbK4qaNRxKoSYnsuegO2kNkTJAkLqsm5P6KxIyMmOd1W0oWY26WM2n/PBl8yrN04RkE3UDUXqDhkCYdsu9t+UTthHQjzw/QjLZ5Cq6BvYRADxkK6gQRBklQhhHxfGQ08kD1SdGn7yRYRUGer2hHpFQiSbgi6wmpiv1TebXayVPXyx122ulTQ3oJxAFqzubIB4Bhv4sDA3BjuxnFIGcAYjjkOS659itVkgT4qdo177f2p/BxhbdokQBMqYlz2REJcqQhAQzcntlQLU7Wf7zZwQzDEs85fPMhLdbrOBXR+jZx/24EezhOhq/lGHbx3hEMixLA7h0RkctQUmZdvlQs3QsW2u4u/WuN3mjoDXY3NtO5kIOwHYjLxvQq3CXEZJ3gF0ka6QNRQhGFw43LrdRiNdFVJFyIX9HvtjyR+3pU2ia3WJPRcr7ZVAMg5tIVw1028c9WXbs0KXR6cpkw6HuMkqE9JZx9s4iiKINvfxZ7QgbMZd0fQzmFQkC4QoySvuHzDtyGwICakJbC1bN4Of67M12IJa2yeH+6lR+kqVV1Q2tnb394f+wt0LDvLFtcV01qqWzVg+zB5i+UP3eaCvThZf8/HVhMzseKl7YlJNUkL6v2m24xIJNdL5DAHp1cWcUHc12j9aSeVDJ8+E5GbxFGLnZh5Zp4QSSkBoVVqI4gIhvdab6mkytc8ltNZcFUC1CUnvBFKVXVbwLW+6qtQ4l9AKNaH5FULFCOJitIjQ8Wr4IK2xvgExISRLQcvGVX0eocZPKzGLpRriHRmMJoSssHzD6usrnXY0daaq/NJ3S9wYPFe/HmCTVXK7grTtym3Pr3867maCNP/NLB9/uLT3KygND0JJCoTcmXXuh799fP816P3HiznmM+wzy7ZfLjOkl5APBulNQfiooT+U73Ug48QsnS/xgxt8SXJCBLtbbo7IP1cPu1AtWkuMaKLWv/XjK9QjB8jWDSerVoyFQq6WMDyxxAOtj8t1ujU/WQVeVFMoazvgWN/Gx6ZQKrzbV/T+smphLypO+iRoP8bGNsmCGzSVTL3HbWKDm4efgtrLfBdn7cTTt94R8RgJUUmJd/4JM9qPuUBCFAk99mhoe3dzsvej60DfHoQVY93EDSOn8zuOZXjmUHW3A9GNtGLZCYErwhYZ9RAGABQkGi8oAm9vpQ/+wlsdsF4fUMmW+okE6p4A12W8JEKcQW9msA2nMfrnlFDSQg6GdDLvuMsjP/Ict/LkmMRO+tOT3ZaPTaq7J9O+zB5sVSJE2rfsh/vryz/3HFYSTe4PVgjcJ0+8tsAEQ+IDVCgtE+Ii2vj0Z/zN5fcFZRVlJBzHou02T5/2NUsoWuJ4MdeYWAWpccSS58IyQvKHeuWDLCO0Ig9Cq50E6INl8rhcyiGSTH8nalUdQ274qXfpNSQF6KZpyt9fuxGwUExsbNbF5wvRxB3ph58mk1yQRJZSsj+nx+JvpB4uBuOT8+DaMRLkpacup4wgim7jnU643E+C5X1cw1wNI0/YqsGbJw9cniUUCHXjm7rpUvZXwkeXBN7I1k+nTNfRZgjphzHjCptc4rLQ7+goEqoyRhcQUgGQctunK+OiqzocCMFc/cSUeYRwccTzxqs3wAraHaublefbEPhoGlyvNB+lzU7oJPlZ9qi9hBLpr/pfEkg1PBpHZEbmr1GU5Q8Pe+qvmgzMXzQxMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIy+mL6P0dZUAURoswJAAAAAElFTkSuQmCC" alt=""
        className='d-block w-100 me-4'
        style={{height: "50px" , objectFit:"cover", marginLeft:'20px'}} /></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
          
            
          </Nav>
          <Form className="d-flex me-auto" style={{marginLeft:'20px'}}>
            <Form.Control
              type="search"
              placeholder="🔍Search for mobiles, accessories and more"
              className="me-2 bg-body-tertiary"
              style={{width:'900px'}}
              aria-label="Search"
            />
          <BsGeoAlt style={{marginTop:'14px'}}/>
            <h5 style={{padding:'9px', paddingLeft:'10px'}}> Gurgaon</h5>
            <Button variant="outline-success" className='me-5' style={{borderColor:'blue' , width:'8%',height:'5%',marginTop:'5px', marginLeft:'9px'}}>Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
        
    <div style={{display:'flex', borderBottomColor:'blue'}}>
        
  <Dropdown className='ms-5 '
        onMouseEnter={() => setShow1(true)}
        onMouseLeave={() => setShow1(false)}
        show={show1}
  >
      <Dropdown.Toggle 
      variant="success"
       id="dropdown-basic"
       className='custom-dropdown-toggle'
       style={{backgroundColor:'white', color:'black', borderStyle:'none'}}>
     
      All
      </Dropdown.Toggle>
      
      <Dropdown.Menu >
        <Dropdown.Item href="#/action-1" className="custom-dropdown-item">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2" className="custom-dropdown-item">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3" className="custom-dropdown-item">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    

 <Dropdown className='ms-5'
        onMouseEnter={() => setShow2(true)}
        onMouseLeave={() => setShow2(false)}
        show={show2}
 >
  <Dropdown.Toggle
    variant="success"
    id="dropdown-basic"
    className="custom-dropdown-toggle"
  >
    Sell Phone
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="#/action-1" className="custom-dropdown-item">Action</Dropdown.Item>
    <Dropdown.Item href="#/action-2" className="custom-dropdown-item">Another action</Dropdown.Item>
    <Dropdown.Item href="#/action-3" className="custom-dropdown-item">Something else</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>


    <Dropdown className='ms-5'
    onMouseEnter={() => setShow3(true)}
    onMouseLeave={() => setShow3(false)}
    show ={show3}
    >
      <Dropdown.Toggle 
      variant="success" 
      id="dropdown-basic"
      className='custom-dropdown-toggle'
      style={{backgroundColor:'white', color:'black', borderStyle:'none'}}>
        Sell Gadgets
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1" className="custom-dropdown-item">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2" className="custom-dropdown-item">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3" className="custom-dropdown-item">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>

    <Dropdown className='ms-5'
    onMouseEnter={() => setShow4(true)}
    onMouseLeave={() => setShow4(false)}
    show = {show4}
    >
      <Dropdown.Toggle 
      variant="success" 
      id="dropdown-basic"
      className='custom-dropdown-toggle'
      style={{backgroundColor:'white', color:'black', borderStyle:'none'}}>
        Buy Phone
      </Dropdown.Toggle>

      <Dropdown.Menu className='ms-5'>
        <Dropdown.Item href="#/action-1" className="custom-dropdown-item">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2" className="custom-dropdown-item">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3" className="custom-dropdown-item">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>

    <Dropdown className='ms-5'
    onMouseEnter={() => setShow5(true)}
    onMouseLeave={() => setShow5(false)}
    show={show5}
    >
      <Dropdown.Toggle 
      variant="success" 
      id="dropdown-basic"
      className='custom-dropdown-toggle'
      style={{backgroundColor:'white', color:'black', borderStyle:'none'}}>
        Find New Gadgets
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1" className="custom-dropdown-item">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2" className="custom-dropdown-item">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3" className="custom-dropdown-item">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>

    <Dropdown className='ms-5'
    onMouseEnter={() => setShow6(true)}
    onMouseLeave={() => setShow6(false)}
    show={show6}
    >
      <Dropdown.Toggle 
      variant="success" 
      id="dropdown-basic"
      className='custom-dropdown-toggle'
      style={{backgroundColor:'white', color:'black', borderStyle:'none'}}>
        Buy Laptop
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1" className="custom-dropdown-item">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2" className="custom-dropdown-item">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3" className="custom-dropdown-item">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>

    <Dropdown className='ms-5'
    onMouseEnter={() => setShow7(true)}
    onMouseLeave={() => setShow7(false)}
    show={show7}
    >
      <Dropdown.Toggle 
      variant="success" 
      id="dropdown-basic"
      className='custom-dropdown-toggle'
      style={{backgroundColor:'white', color:'black', borderStyle:'none'}}>
        Cashify Store
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1" className="custom-dropdown-item">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2" className="custom-dropdown-item">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3" className="custom-dropdown-item">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>

    <Dropdown className='ms-5'
    onMouseEnter={() => setShow8(true)}
    onMouseLeave={() => setShow8(false)}
    show={show8}
    >
      <Dropdown.Toggle 
      variant="success" 
      id="dropdown-basic"
      className='custom-dropdown-toggle'
      style={{backgroundColor:'white', color:'black', borderStyle:'none'}}>
        More
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1" className="custom-dropdown-item">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2" className="custom-dropdown-item">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3" className="custom-dropdown-item">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>

    </div>
   <hr className='ms mt-1'/>
   
   <Carousel
    data-bs-theme="dark" 
    className='custom-carousel'
    style={{height:'360px', width:'80rem', marginLeft:'2rem'}}>                                                                                                            
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{height: "360px" , objectFit:"cover", borderRadius:"10px"}}
          src="https://cdn.storifyme.xyz/accounts/cashify-in-0561312/assets/f-ids-carousel_06-77871665652326040.png?t=1665675618000"
          alt="First slide"
        />
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src='https://pbs.twimg.com/media/FCipJnXXsAQJNqY.jpg'
          className="d-block w-100"
           style={{height: "360px" , objectFit:"cover", borderRadius:"10px"}}
        />
        <Carousel.Caption>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{height: "360px" , objectFit:"cover", borderRadius:"10px"}}
          src="https://i.ytimg.com/vi/qvTDlsgqwYU/maxresdefault.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    <div>
      <h3 className='mt-5 ms-10'>Our Services</h3>
    </div>

<div className='w-100'>
<div style={{display:'flex'}}>
  <Card style={{ width: '9rem',height:'6.89rem', marginLeft:'39px', marginTop:'18px', borderRadius:'8px' }}>
      <Card.Img variant="top" src="https://cms-assets.bajajfinserv.in/is/image/bajajfinance/iphone-phone-generic?scl=1&fmt=png-alpha" style={{borderRadius:'8px'}}/>
      <Card.Body>
        <Card.Title></Card.Title>
        <Card.Text>
          
        </Card.Text>
        
      </Card.Body>
    </Card>
    <h4 style={{marginTop:'9rem', marginLeft:'-6.5rem', fontSize:'small'}}>Sell Phone</h4>

    <Card style={{ width: '9rem',height:'6.89rem', marginLeft:'59px', marginTop:'18px', borderRadius:'8px' }}>
      <Card.Img variant="top" src='https://m.media-amazon.com/images/I/71uuDYxn3XL._UF894,1000_QL80_.jpg' style={{height:'6.8rem', borderRadius:'8px'}} />
      <Card.Body>
        <Card.Title></Card.Title>
        <Card.Text>
          
        </Card.Text>
        
      </Card.Body>
    </Card>
    <h4 style={{marginTop:'9rem', marginLeft:'-6.5rem', fontSize:'small'}}>Buy Phone</h4>


    <Card style={{ width: '9rem',height:'6.89rem', marginLeft:'59px', marginTop:'18px', borderRadius:'8px' }}>
      <Card.Img variant="top" src="https://www.jbhifi.com.au/cdn/shop/files/791312-Product-0-I-638742350436388490.jpg?v=1738638322" style={{height:'6.8rem', borderRadius:'8px'}}/>
      <Card.Body>
        <Card.Title></Card.Title>
        <Card.Text>
          
        </Card.Text>
        
      </Card.Body>
    </Card>
    <h4 style={{marginTop:'9rem', marginLeft:'-6.5rem', fontSize:'small'}}>Buy Laptops</h4>


    <Card style={{ width: '9rem',height:'6.89rem', marginLeft:'49px', marginTop:'18px', borderRadius:'8px' }}>
      <Card.Img variant="top" src="https://thumbs.dreamstime.com/b/mobile-cell-phone-repair-service-logo-mobile-cell-phone-repair-service-icon-logo-sign-symbol-simple-vector-isolated-transparent-340461130.jpg" style={{height:'6.8rem', borderRadius:'8px'}}/>
      <Card.Body>
        <Card.Title></Card.Title>
        <Card.Text>
          
        </Card.Text>
        
      </Card.Body>
    </Card>
    <h4 style={{marginTop:'9rem', marginLeft:'-6.5rem', fontSize:'small'}}>Repair Phones</h4>


    <Card style={{ width: '9rem',height:'6.89rem', marginLeft:'39px', marginTop:'18px', borderRadius:'8px' }}>
      <Card.Img variant="top" src="https://img.freepik.com/premium-photo/computer-repair-laptop-concept-3d_441797-7358.jpg" style={{height:'6rem', borderRadius:'8px'}}/>
      <Card.Body>
        <Card.Title></Card.Title>
        <Card.Text>
          
        </Card.Text>
        
      </Card.Body>
    </Card>
    <h4 style={{marginTop:'9rem', marginLeft:'-6.5rem', fontSize:'small'}}>Repaire Laptops</h4>


    <Card style={{ width: '9rem',height:'6.89rem', marginLeft:'29px', marginTop:'18px', borderRadius:'8px' }}>
      <Card.Img variant="top" src="https://play-lh.googleusercontent.com/bnQVzdwXm2wziBIJDqnyKxphJsu95zGQJXhEFkUBHC6gffqdfWBo9nUmF8Qz2nfskXg" style={{ height:'6.8rem',borderRadius:'8px'}}/>
      <Card.Body>
        <Card.Title></Card.Title>
        <Card.Text>
          
        </Card.Text>
        
      </Card.Body>
    </Card>
    <h4 style={{marginTop:'9rem', marginLeft:'-6.5rem', fontSize:'small'}}>Find New Phones</h4>


    <Card style={{ width: '9rem',height:'6.89rem', marginLeft:'19px', marginTop:'18px', borderRadius:'8px' }}>
      <Card.Img variant="top" src="https://media.istockphoto.com/id/909410828/vector/store-or-shop-facade-vector-illustration-flat-cartoon-design-small-retail-shop-building-front.jpg?s=612x612&w=0&k=20&c=Yn575EJb8RBA1Ux4fntEnzYXWK4oc91akhEjM_iv53g=" style={{height:'6rem', borderRadius:'8px'}}/>
      <Card.Body>
        <Card.Title></Card.Title>
        <Card.Text>
          
        </Card.Text>
        
      </Card.Body>
    </Card>
    <h4 style={{marginTop:'9rem', marginLeft:'-6.5rem', fontSize:'small'}}>Nearby Stores</h4>

    <Card style={{ width: '9rem',height:'6.89rem', marginLeft:'39px', marginTop:'18px', borderRadius:'8px' }}>
      <Card.Img variant="top" src="https://www.gonoise.com/cdn/shop/files/1_c95e5561-4f66-413d-b143-42d31821e554.webp?v=1721392308"  style={{height:'6rem'}}/>
      <Card.Body>
        <Card.Title></Card.Title>
        <Card.Text>
          
        </Card.Text>
        
      </Card.Body>
    </Card>
    <h4 style={{marginTop:'9rem', marginLeft:'-6.5rem', fontSize:'small'}}>Buy Smartwatches</h4>    
    </div>

    <div style={{display:'flex', marginTop:'10px'}}>
      <Card style={{ width: '9rem',height:'6.89rem', marginLeft:'39px', marginTop:'12px', borderRadius:'8px' }}>
      <Card.Img variant="top" src="https://cdn.jsdelivr.net/npm/@etchteam/recycling-locator@1.61.0/dist/images/general-tip.svg" style={{height:'6rem'}} />
      <Card.Body>
        <Card.Title></Card.Title>
        <Card.Text>
          
        </Card.Text>
        
      </Card.Body>
    </Card>
    <h4 style={{marginTop:'8.9rem', marginLeft:'-6.5rem', fontSize:'small'}}>Recycle</h4>
    </div>
</div>



    <h3 className='ms-10 mt-4'>Sell Your Old Device Now</h3>
<div style={{display:'flex'}}>
    <Card style={{ width: '9rem',height:'6.89rem', marginLeft:'39px', marginTop:'18px', borderRadius:'8px' }}>
      <Card.Img variant="top" src="https://cms-assets.bajajfinserv.in/is/image/bajajfinance/iphone-phone-generic?scl=1&fmt=png-alpha" style={{borderRadius:'8px'}}/>
      <Card.Body>
        <Card.Title></Card.Title>
        <Card.Text>
          
        </Card.Text>
        
      </Card.Body>
    </Card>
    <h4 style={{marginTop:'9rem', marginLeft:'-6.5rem', fontSize:'small'}}>Sell Phone</h4>

    <Card style={{ width: '9rem',height:'6.89rem', marginLeft:'59px', marginTop:'18px', borderRadius:'8px' }}>
      <Card.Img variant="top" src="https://cms-assets.bajajfinserv.in/is/image/bajajfinance/iphone-phone-generic?scl=1&fmt=png-alpha" style={{borderRadius:'8px'}}/>
      <Card.Body>
        <Card.Title></Card.Title>
        <Card.Text>
          
        </Card.Text>
        
      </Card.Body>
    </Card>
    <h4 style={{marginTop:'9rem', marginLeft:'-7rem', fontSize:'small'}}>Sell Laptops</h4>


    <Card style={{ width: '9rem',height:'6.89rem', marginLeft:'59px', marginTop:'18px', borderRadius:'8px' }}>
      <Card.Img variant="top" src="https://cms-assets.bajajfinserv.in/is/image/bajajfinance/iphone-phone-generic?scl=1&fmt=png-alpha" style={{borderRadius:'8px'}}/>
      <Card.Body>
        <Card.Title></Card.Title>
        <Card.Text>
          
        </Card.Text>
        
      </Card.Body>
    </Card>
<h4 style={{marginTop:'9rem', marginLeft:'-6.5rem', fontSize:'small'}}>Sell TV</h4>


    <Card style={{ width: '9rem',height:'6.89rem', marginLeft:'79px', marginTop:'18px', borderRadius:'8px' }}>
      <Card.Img variant="top" src="https://cms-assets.bajajfinserv.in/is/image/bajajfinance/iphone-phone-generic?scl=1&fmt=png-alpha" style={{borderRadius:'8px'}}/>
      <Card.Body>
        <Card.Title></Card.Title>
        <Card.Text>
          
        </Card.Text>
        
      </Card.Body>
    </Card>
    <h4 style={{marginTop:'9rem', marginLeft:'-6.5rem', fontSize:'small'}}>Sell Tablets</h4>


    <Card style={{ width: '9rem',height:'6.89rem', marginLeft:'59px', marginTop:'18px', borderRadius:'8px' }}>
      <Card.Img variant="top" src="https://cms-assets.bajajfinserv.in/is/image/bajajfinance/iphone-phone-generic?scl=1&fmt=png-alpha" style={{borderRadius:'8px'}}/>
      <Card.Body>
        <Card.Title></Card.Title>
        <Card.Text>
          
        </Card.Text>
        
      </Card.Body>
    </Card>
     <h4 style={{marginTop:'9rem', marginLeft:'-8.2rem', fontSize:'small'}}>Sell Gaming Console</h4>


    <Card style={{ width: '9rem',height:'6.89rem', marginLeft:'29px', marginTop:'18px', borderRadius:'8px' }}>
      <Card.Img variant="top" src="https://cms-assets.bajajfinserv.in/is/image/bajajfinance/iphone-phone-generic?scl=1&fmt=png-alpha" style={{borderRadius:'8px'}}/>
      <Card.Body>
        <Card.Title></Card.Title>
        <Card.Text>
          
        </Card.Text>
        
      </Card.Body>
    </Card>
    <h4 style={{marginTop:'9rem', marginLeft:'-7.8rem', fontSize:'small'}}>Sell Smartwatchs</h4>


    <Card style={{ width: '9rem',height:'6.89rem', marginLeft:'49px', marginTop:'18px', borderRadius:'8px' }}>
      <Card.Img variant="top" src="https://cms-assets.bajajfinserv.in/is/image/bajajfinance/iphone-phone-generic?scl=1&fmt=png-alpha" style={{borderRadius:'8px'}}/>
      <Card.Body>
        <Card.Title></Card.Title>
        <Card.Text>
          
        </Card.Text>
        
      </Card.Body>
    </Card>
    <h4 style={{marginTop:'9rem', marginLeft:'-8rem', fontSize:'small'}}>Sell Smart Speakers</h4>


    <Card style={{ width: '9rem',height:'6.89rem', marginLeft:'29px', marginTop:'18px', borderRadius:'8px' }}>
      <Card.Img variant="top" src="https://cms-assets.bajajfinserv.in/is/image/bajajfinance/iphone-phone-generic?scl=1&fmt=png-alpha" style={{borderRadius:'8px'}}/>
      <Card.Body>
        <Card.Title></Card.Title>
        <Card.Text>
          
        </Card.Text>
        
      </Card.Body>
    </Card>
    <h4 style={{marginTop:'9rem', marginLeft:'-6.5rem', fontSize:'small'}}>Sell More</h4>

    </div>

     <div>
      <h3 className='mt-5 ms-15'>Buy Refurbished Devices</h3>
    </div>


{/* Card For Refubished Items */}

<div style={{display:'flex'}}>
    <Card style={{ width: '15rem' ,height:'19rem', marginLeft:'2.5rem', marginTop:'2rem', cursor:'pointer' }}>
      <Card.Img variant="top" src="https://m.media-amazon.com/images/I/71jG+e7roXL._UF1000,1000_QL80_.jpg" style={{height:'12rem'}}/>
      <Card.Body>
        <Card.Title style={{font:'small-caption', fontWeight:'bold'}}><span style={{backgroundColor:'orange'}}>&#8377;71,000 OFF</span></Card.Title>
        <Card.Text>
          
        </Card.Text>
        <Button variant="primary"></Button>
      </Card.Body>
    </Card>
    

    <Card style={{ width: '15rem' ,height:'19rem', marginLeft:'1rem', marginTop:'2rem', cursor:'pointer' }}>
      <Card.Img variant="top" src="https://m.media-amazon.com/images/I/71jG+e7roXL._UF1000,1000_QL80_.jpg" style={{height:'12rem'}}/>
      <Card.Body>
        <Card.Title style={{font:'small-caption', fontWeight:'bold'}}><span style={{backgroundColor:'orange'}}>&#8377;22,801 OFF</span></Card.Title>
        <Card.Text>
          
        </Card.Text>
        <Button variant="primary"></Button>
      </Card.Body>
    </Card>


    <Card style={{ width: '15rem' ,height:'19rem', marginLeft:'1rem', marginTop:'2rem',cursor:'pointer' }}>
      <Card.Img variant="top" src="https://m.media-amazon.com/images/I/71jG+e7roXL._UF1000,1000_QL80_.jpg" style={{height:'12rem'}}/>
      <Card.Body>
        <Card.Title style={{font:'small-caption', fontWeight:'bold'}}><span style={{backgroundColor:'orange'}}>&#8377;22,801 OFF</span></Card.Title>
        <Card.Text>
          
        </Card.Text>
        <Button variant="primary"></Button>
      </Card.Body>
    </Card>


    <Card style={{ width: '15rem' ,height:'19rem', marginLeft:'1rem', marginTop:'2rem', cursor:'pointer' }}>
      <Card.Img variant="top" src="https://m.media-amazon.com/images/I/71jG+e7roXL._UF1000,1000_QL80_.jpg" style={{height:'12rem'}}/>
      <Card.Body>
        <Card.Title style={{font:'small-caption', fontWeight:'bold'}}><span style={{backgroundColor:'orange'}}>&#8377;31,500 OFF</span></Card.Title>
        <Card.Text>
          
        </Card.Text>
        <Button variant="primary"></Button>
      </Card.Body>
    </Card>


    <Card style={{ width: '15rem' ,height:'19rem', marginLeft:'1rem', marginTop:'2rem', cursor:'pointer' }}>
      <Card.Img variant="top" src="https://m.media-amazon.com/images/I/71jG+e7roXL._UF1000,1000_QL80_.jpg" style={{height:'12rem'}}/>
      <Card.Body>
        <Card.Title style={{font:'small-caption', fontWeight:'bold'}}><span style={{backgroundColor:'orange'}}>&#8377;21,600 OFF</span></Card.Title>
        <Card.Text>
          
        </Card.Text>
        <Button variant="primary"></Button>
      </Card.Body>
    </Card>
    </div>
    </div>
  </>
  )
}

export default Hover