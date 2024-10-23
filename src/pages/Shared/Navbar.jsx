import { NavLink, Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 bg-gray-800 text-white">
      {/* Left Part: Logo */}
      <div className="text-2xl font-bold">
        <Link to="/">AutoMec</Link>
      </div>

      {/* Middle Part: Links */}
      <div className="hidden md:flex space-x-4">
        <NavLink to="/" exact className="hover:text-gray-400" activeClassName="text-gray-300">
          Home
        </NavLink>
        <NavLink to="/services" className="hover:text-gray-400" activeClassName="text-gray-300">
          Services
        </NavLink>
        <NavLink to="/about" className="hover:text-gray-400" activeClassName="text-gray-300">
          About
        </NavLink>
        <NavLink to="/blog" className="hover:text-gray-400" activeClassName="text-gray-300">
          Blog
        </NavLink>
        <NavLink to="/contact" className="hover:text-gray-400" activeClassName="text-gray-300">
          Contact
        </NavLink>
      </div>

      {/* Right Part: Button */}
      <div>
        <Link to="/sign-up" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500">
          Sign Up
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
