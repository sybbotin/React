import React from 'react'
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom';
import '../App.css';

const Header = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand><Link to={'/'} id='wh'>A&B</Link></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link>
              <Link to={'/'} id='wh'>Главная</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to={'/favorites'} id='wh'>Избранное</Link>        
            </Nav.Link>
            <Nav.Link>
              <Link to={'/cart'} id='wh'>Корзина</Link> 
            </Nav.Link>
          <Nav.Link>
              <Link to={'/description'} id='wh'>Описание</Link>
          </Nav.Link>
          </Nav>
          <Nav>
            <Button variant='primary'>
              Войти
            </Button>
          </Nav>
        </Container>
      </Navbar>

    </div>
  )
}

export default Header