import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Form,
  FormGroup,
  Input,
  Button
} from 'reactstrap';
import './header.scss';

const Header = ({ history }) => {
  const [searchData, setSearchData] = useState({
    placeholder: 'Search...',
    query: ''
  });
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const onChange = e => setSearchData({ ...searchData, query: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    history.push(`/search/${searchData.query}`);
  };
  return (
    <div className='homepage'>
      <Navbar className='bg-nav' light expand='md' fixed='top'>
        <NavbarBrand href='/'>Just Movies</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className='mr-auto' navbar>
            <NavItem>
              <NavLink href='/popular'>popular</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='/about'>about</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='/'>contact</NavLink>
            </NavItem>
          </Nav>
          <Form inline onSubmit={e => onSubmit(e)}>
            <FormGroup>
              <Input
                type='search'
                name='search'
                id='search'
                placeholder={searchData.placeholder}
                value={searchData.query}
                onChange={e => onChange(e)}
              />
              <Button className='btn-search' type='submit'>
                Search
              </Button>
            </FormGroup>
          </Form>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default withRouter(Header);
