import { Link, NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useAuth } from './auth';

const NavBar = () => {
  const [change, setChange] = useState(true);
  let navigate = useNavigate();
  const auth = useAuth();

  const setActiveStyle = ({ isActive }) => {
    return {
      fontWeight: isActive ? 'bold' : 'normal',
      textDecoration: isActive ? 'none' : 'underline',
    };
  };

  // const onClick = () => {
  //   let path = !change ? '/about' : '/';
  //   setChange(!change);
  //   navigate(path);
  // };
  return (
    <>
      {/* {!change ? (
        <button onClick={onClick}>Click About</button>
      ) : (
        <button onClick={onClick}>Click Home</button>
      )} */}
      <nav className="primary-nav">
        {/* <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link> */}
        <NavLink style={setActiveStyle} to="/">
          Home
        </NavLink>
        <NavLink style={setActiveStyle} to="/about">
          About
        </NavLink>
        <NavLink style={setActiveStyle} to="/contact">
          Contact
        </NavLink>
        {/* <NavLink style={setActiveStyle} to="/order-summary">
          Order Summary
        </NavLink> */}
        <NavLink style={setActiveStyle} to="/products">
          Products
        </NavLink>
        <NavLink style={setActiveStyle} to="/users">
          Users
        </NavLink>
        <NavLink style={setActiveStyle} to="/profile">
          Profile
        </NavLink>
        {!auth.user && (
          <NavLink style={setActiveStyle} to="/login">
            Login
          </NavLink>
        )}
      </nav>
    </>
  );
};

export default NavBar;
