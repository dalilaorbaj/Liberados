import '../global.css';
import React from 'react';
import {MDBContainer,MDBNavbar,MDBNavbarBrand,MDBNavbarNav,MDBNavbarItem,MDBNavbarLink} from 'mdb-react-ui-kit';

const Navbar = () => {
  return (
    <MDBNavbar expand='lg' light bgColor='#0054D2' className="navbarColor">
      <MDBContainer fluid>
        <MDBNavbarBrand href='/'>  <img src={require('../logo.png')} alt="Icon" style={{height: "30%", width: '30%', marginRight: "100%"}} /></MDBNavbarBrand>


        <div className='right'>
          <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
            <MDBNavbarItem>
              <MDBNavbarLink active aria-current='page' href='/' style={{color: "white", fontSize: "30px"}}>Inicio</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href='/jugar' style={{color: "white", fontSize: "30px", marginLeft: "20px"}}>Jugar</MDBNavbarLink>
            </MDBNavbarItem>              

          </MDBNavbarNav>
        </div>

      </MDBContainer>
    </MDBNavbar>
  );
}

export default Navbar;