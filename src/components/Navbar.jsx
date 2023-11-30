import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import { Link } from 'react-router-dom';

export default function Navbar() {
  let navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(
    Cookies.get('isLoggedIn') === 'true'
  );

  const handleSignIn = async () => {
    await Cookies.remove('token');
    await Cookies.set('isLoggedIn', 'true', { sameSite: 'None', secure: true });
    setIsLoggedIn(true);
    navigate('/auth/signin');
  };

  const handleSignOutCookie = async () => {
    await Cookies.remove('token');
    await Cookies.remove('isLoggedIn', { sameSite: 'None', secure: true });
    setIsLoggedIn(false);
    navigate('/auth/signin');
  };

  useEffect(() => {
    if (Cookies.get('isLoggedIn')) {
      navigate('/');
    } else if (Cookies.get('isLoggedIn')) {
      navigate('/home');
    }
  }, [navigate]);

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/" className="flex items-center">
          <img
            src="./src/assets/images/sockenergy.png"
            alt="Logo"
            className="h-14 mr-3"
          />
        </Link>
        <div className="flex items-center md:order-2">
          <button
            type="button"
            data-dropdown-toggle="language-dropdown-menu"
            className="inline-flex items-center font-medium justify-center px-4 py-2 text-sm text-gray-900 dark:text-white rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            <svg
              className="w-5 h-5 mr-2 rounded-full"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 3900 3900"
            >
              {/* ... (SVG path data) */}
            </svg>
            Username
          </button>
          <div
            className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700"
            id="language-dropdown-menu"
          >
            <ul className="py-2 font-medium" role="none">
              <li key="profile">
                <Link
                  to="/profile"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                  role="menuitem"
                >
                  <div className="inline-flex items-center">
                    <svg
                      aria-hidden="true"
                      className="h-3.5 w-3.5 rounded-full mr-2"
                      xmlns="http://www.w3.org/2000/svg"
                      id="flag-icon-css-us"
                      viewBox="0 0 512 512"
                    >
                      {/* ... (SVG path data) */}
                    </svg>
                    Profile
                  </div>
                </Link>
              </li>
              {isLoggedIn == false ? (
                <li key="signin">
                  <button
                    onClick={handleSignIn}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                    role="menuitem"
                  >
                    <div className="inline-flex items-center">
                      <svg
                        className="h-3.5 w-3.5 rounded-full mr-2"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        id="flag-icon-css-de"
                        viewBox="0 0 512 512"
                      >
                        {/* ... (SVG path data) */}
                      </svg>
                      Sign In
                    </div>
                  </button>
                </li>
              ) : (
                <li key="signout">
                  <button
                    onClick={handleSignOutCookie}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                    role="menuitem"
                  >
                    <div className="inline-flex items-center">
                      <svg
                        className="h-3.5 w-3.5 rounded-full mr-2"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        id="flag-icon-css-de"
                        viewBox="0 0 512 512"
                      >
                        {/* ... (SVG path data) */}
                      </svg>
                      Sign Out
                    </div>
                  </button>
                </li>
              )}
            </ul>
          </div>
          <button
            data-collapse-toggle="navbar-language"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-language"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              {/* ... (SVG path data) */}
            </svg>
          </button>
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-language"
        >
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link
                to="/"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/products"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover-bg-gray-100 md:hover-bg-transparent md:hover-text-blue-700 md:p-0 dark-text-white md:dark-hover-text-blue-500 dark-hover-bg-gray-700 dark-hover-text-white md:dark-hover-bg-transparent dark-border-gray-700"
              >
                All Products
              </Link>
            </li>
            <li>
              <Link
                to="/categories"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover-bg-gray-100 md:hover-bg-transparent md:hover-text-blue-700 md:p-0 dark-text-white md:dark-hover-text-blue-500 dark-hover-bg-gray-700 dark-hover-text-white md:dark-hover-bg-transparent dark-border-gray-700"
              >
                Categories
              </Link>
            </li>
            <li>
              <Link
                to="/carts"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover-bg-gray-100 md:hover-bg-transparent md:hover-text-blue-700 md:p-0 dark-text-white md:dark-hover-text-blue-500 dark-hover-bg-gray-700 dark-hover-text-white md:dark-hover-bg-transparent dark-border-gray-700"
              >
                Carts
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover-bg-gray-100 md:hover-bg-transparent md:hover-text-blue-700 md:p-0 dark-text-white md:dark-hover-text-blue-500 dark-hover-bg-gray-700 dark-hover-text-white md:dark-hover-bg-transparent dark-border-gray-700"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover-bg-gray-100 md:hover-bg-transparent md:hover-text-blue-700 md:p-0 dark-text-white md:dark-hover-text-blue-500 dark-hover-bg-gray-700 dark-hover-text-white md:dark-hover-bg-transparent dark-border-gray-700"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

  );
}
