import { useState, useEffect, useRef } from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import toast, { Toaster } from 'react-hot-toast';
import { FaBars, FaTimes, FaCode, FaChevronDown, FaSignOutAlt } from 'react-icons/fa';
import { removeToken } from '../../slices/problemSlice';

const pages = ['Home', 'Problems', 'Docs', 'Sheets', 'Rapid Fire'];

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);

  const profileMenuRef = useRef(null);

  const token = localStorage.getItem("token")
  const { user } = useSelector((state) => state.user);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileMenuRef.current && !profileMenuRef.current.contains(event.target)) {
        setIsProfileMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLogoutClick = () => {
    toast.success("Logged out successfully");
    dispatch(removeToken());
    navigate('/login');

    setIsProfileMenuOpen(false);
    setIsMobileMenuOpen(false);
  };


  const getLinkClass = ({ isActive }) => {
    const baseClass = "text-sm font-medium transition-colors duration-200 px-3 py-2 rounded-md";
    return isActive
      ? `${baseClass} text-white bg-indigo-600`
      : `${baseClass} text-gray-300 hover:text-white hover:bg-slate-800`;
  };

  return (
    <nav className="sticky top-0 z-50 bg-slate-900 border-b border-slate-800 shadow-lg">
      <Toaster />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* ================= LEFT: LOGO ================= */}
          <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer" onClick={() => navigate('/')}>
            {/* Logo Icon */}
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white">
              <FaCode size={20} />
            </div>
            <span className="font-mono font-bold text-xl tracking-widest text-white hidden md:block">
              CODEMATE
            </span>
            <span className="font-mono font-bold text-xl tracking-widest text-white md:hidden">
              CM
            </span>
          </div>

          {/* ================= CENTER: DESKTOP NAV LINKS ================= */}
          <div className="hidden md:flex items-center space-x-4">
            {pages.map((page) => (
              <NavLink
                key={page}
                to={`/${page === 'Home' ? '' : page.toLowerCase().replace(/\s+/g, '').trim()}`}
                className={getLinkClass}
              >
                {page === 'Problems' ? 'My Problems' : page}
              </NavLink>
            ))}
          </div>

          {/* ================= RIGHT: AUTH & PROFILE ================= */}
          <div className="flex items-center gap-4">

            {token ? (
              // LOGGED IN VIEW
              <div className="relative" ref={profileMenuRef}>
                {/* Profile Button */}
                <button
                  onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
                  className="flex items-center gap-2 text-gray-300 hover:text-white focus:outline-none p-1 rounded-full border border-transparent hover:border-slate-700 transition-all"
                >
                  <div className="w-8 h-8 rounded-full bg-indigo-500 flex items-center justify-center text-white font-bold text-sm shadow-sm ring-2 ring-slate-800">
                    {user?.username?.charAt(0).toUpperCase() || "U"}
                  </div>
                  <span className="hidden sm:block text-sm font-semibold max-w-[100px] truncate">
                    {user?.username}
                  </span>
                  <FaChevronDown size={12} className={`transition-transform duration-200 ${isProfileMenuOpen ? 'rotate-180' : ''}`} />
                </button>

                {/* Dropdown Menu */}
                {isProfileMenuOpen && (
                  <div className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-2xl py-2 ring-1 ring-black ring-opacity-5 origin-top-right transform transition-all z-50">
                    <div className="px-4 py-3 border-b border-gray-100 bg-slate-50/50">
                      <p className="text-xs text-gray-500 uppercase tracking-wider font-bold">Signed in as</p>
                      <p className="text-sm font-bold text-gray-900 truncate">{user?.username}</p>
                    </div>

                    <div className="py-1">

                      <button
                        onClick={handleLogoutClick}
                        className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 flex items-center gap-2"
                      >
                        <FaSignOutAlt />
                        Sign out
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              // LOGGED OUT VIEW (Desktop)
              <div className="hidden md:flex items-center gap-3">
                <Link
                  to="/login"
                  className="text-gray-300 hover:text-white font-medium text-sm px-4 py-2 transition-colors"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="bg-white text-slate-900 hover:bg-indigo-50 font-bold text-sm px-4 py-2 rounded-lg shadow-sm transition-colors"
                >
                  Sign Up
                </Link>
              </div>
            )}

            {/* ================= MOBILE MENU TOGGLE ================= */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-300 hover:text-white p-2 rounded-md focus:outline-none"
              >
                {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ================= MOBILE MENU DROPDOWN ================= */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-slate-800 border-t border-slate-700 pb-4 shadow-xl">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {pages.map((page) => (
              <NavLink
                key={page}
                to={`/${page === 'Home' ? '' : page.toLowerCase().replace(/\s+/g, '').trim()}`}
                onClick={() => setIsMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-md text-base font-medium ${isActive
                    ? 'bg-indigo-600 text-white'
                    : 'text-gray-300 hover:bg-slate-700 hover:text-white'
                  }`
                }
              >
                {page === 'Problems' ? 'My Problems' : page}
              </NavLink>
            ))}

            {/* Mobile Auth Buttons */}
            {!token && (
              <div className="mt-4 pt-4 border-t border-slate-700 flex flex-col gap-2 px-3">
                <Link
                  to="/login"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-center w-full px-4 py-2 border border-slate-600 text-gray-300 rounded-lg hover:bg-slate-700 hover:text-white transition-colors"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-center w-full px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors font-semibold"
                >
                  Sign Up
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
