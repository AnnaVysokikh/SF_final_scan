import React from 'react'
import './BurgerMenu.css'
import { useNavigate } from "react-router-dom"
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Offcanvas from 'react-bootstrap/Offcanvas'
import burger from './burgerMenu.svg'

function LoginButton() {
  function handleClick() {
    navigate("/login")
  }
  const navigate = useNavigate()

  return (
    <button variant="outline-success" className='button' onClick={handleClick}>
      Войти
    </button>
  )
}
function ReturnMain() {
  function handleClick(e) {
    navigate("/")
  }
  const navigate = useNavigate();

  return (
    <Nav.Link href="/" onClick={handleClick}>Главная</Nav.Link>
  )
}

function BurgerMenu() {
  const expand = false
  return (
      <Navbar key={expand}  expand={expand} className="mb-3 BurgerMenu">
          <Container fluid  >
            <Navbar.Toggle  bg="*"  aria-controls={`offcanvasNavbar-expand-${expand}`} className='own BurgerMenu border-0 shadow-none'>
              <img src={burger} alt='burger' />
            </Navbar.Toggle>
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end">
              <Offcanvas.Header closeButton className='burgerMenu__header closeButton d-flex'>
                <div className='logo'></div>
              </Offcanvas.Header>
              <Offcanvas.Body className='burgerMenu__body'>
                
                <Nav className="text-center nav">
                  <ReturnMain />
                  <Nav.Link href="#" style={{pointerEvents: 'none'}}>Тарифы</Nav.Link>
                  <Nav.Link href="#" style={{pointerEvents: 'none'}}>FAQ</Nav.Link>
                </Nav>
                <a className='burgerMenu__link' href='#' >Зарегистрироваться</a>
                <LoginButton />
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
      </Navbar>
  )}
export default BurgerMenu
