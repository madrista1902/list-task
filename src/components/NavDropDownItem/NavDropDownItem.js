import React from 'react'
import NavDropdown from 'react-bootstrap/NavDropdown';

const NavDropDownItem = () => {
  return (
  
       <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
    
  )
}

export default NavDropDownItem
