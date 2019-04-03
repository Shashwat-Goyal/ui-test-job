import React from 'react';
import {
    Navbar,
    Row,
    Col,
    InputGroup,
    FormControl
} from 'react-bootstrap';
import Profile from '../Profile.png';

export default class Header extends React.Component {
    render() {
        return (
            <Navbar bg="dark" variant="dark">
            <Col xs={4} className="text-left logo">
              <Navbar.Brand>
                {' KOGNETICS'}
                <span className="logo-info">INTELLIGENCE. INSIGHTS</span>
              </Navbar.Brand>
            </Col>
            <Col xs={4} className="text-center">
              <InputGroup className="mb-3">
                <InputGroup.Prepend>
                   <InputGroup.Text className="theme-bg noborder" id="basic-addon1"><i className="ft-white fa fa-search"></i></InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                  className="theme-bg noborder"
                  placeholder="Search for companies, people & investors"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </InputGroup>
            </Col>
            <Col xs={4} className="text-right">
              <img src={Profile} className="image-circle" alt="profile"/>
              <span className="ft-white user-name">Mrinalini Saha</span>
            </Col>
          </Navbar>
        )
    }
}