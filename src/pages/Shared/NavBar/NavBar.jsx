import { useContext } from 'react';
import logo from '../../../assets/logo.svg';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context-api/AuthContextAPI';

const NavBar = () => {
  const {user, logOut} = useContext(AuthContext);

  const handleLogout = ()=>{
     logOut()
     .then(()=>{})
     .then((err) => console.log(err))
  }

  const navMenues = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
       <Link to="/services">Services</Link>
      </li>
      {
        user?.email ? 
        <>
        <li> <Link to="/bookings">My Bookings</Link></li>
        <li>  <Link to="/" onClick={handleLogout}>Log Out</Link> </li> 
        </>
        : <li>  <Link to="/login">Login</Link> </li>
      }
    </>
  );
    return (
      <div className="navbar">
        {/* =========Small Devices NavBar Menu Start============= */}
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navMenues}
            </ul>
          </div>
          <Link to="/">
            <img className='w-[5rem] hidden lg:flex' src={logo} alt="Logo" />
          </Link>
        </div>

        {/* Large Devices NavBar Menu Start =============== */}
        <div className="navbar-start hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navMenues}
          </ul>
        </div>
        {/* Larg Devices NavBar Menu End ===============  */}

        <div className="navbar-end">
          <Link to="/login" className="btn border-red-400 capitalize">appointment</Link>
        </div>
      </div>
    );
};

export default NavBar;