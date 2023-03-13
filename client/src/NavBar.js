import { Outlet, Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
    <div id="container">
      <nav id="header">
        <h1>Ad Me Now</h1>
        <h2>
          <li>
            <Link to="/">Logout</Link>
          </li>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/mypage">Profile</Link>
          </li>
        </h2>
      </nav>

      <Outlet />
      </div>
    </>
  );
};

export default NavBar;