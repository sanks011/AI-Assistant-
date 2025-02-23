// src/components/Navbar.jsx
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../firebase/firebase';
import { useNavigate } from 'react-router-dom';
import { Brain } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await auth.signOut();
      navigate('/');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <nav className="bg-gradient-to-r from-black via-gray-900 to-gray-800 shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 ">
          {/* Logo */}
          <Link 
  to="/" 
  className="flex items-center space-x-2 text-2xl font-bold text-white hover:text-purple-400 transition-colors duration-300"
>
  <Brain className="h-8 w-8" /> {/* Logo icon */}
  <span>Dyslu</span>
</Link>


          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            {!auth.currentUser ? (
              <>
                <Link
                  to="/signin"
                  className="text-gray-300 hover:text-white px-4 py-2 hover:bg-gray-800 rounded-lg transition-all duration-300"
                >
                  Sign In
                </Link>
                <Link
                  to="/signup"
                  className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transform hover:scale-105 transition-all duration-300"
                >
                  Sign Up
                </Link>
              </>
            ) : (
              <button
                onClick={handleSignOut}
                className="text-gray-300 bg-red-600 hover:text-white px-4 py-2 hover:bg-red-800 rounded-lg transition-all duration-300"
              >
                Sign Out
              </button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white p-2 rounded-lg focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isOpen
              ? 'opacity-100 max-h-48'
              : 'opacity-0 max-h-0 pointer-events-none'
          }`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 bg-black">
            {!auth.currentUser ? (
              <>
                <Link
                  to="/signin"
                  className="block px-3 py-2 rounded-lg text-gray-300 hover:text-white hover:bg-gray-800 transition-colors duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  Sign In
                </Link>
                <Link
                  to="/signup"
                  className="block px-3 py-2 rounded-lg text-white bg-purple-600 hover:bg-purple-700 transition-colors duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  Sign Up
                </Link>
              </>
            ) : (
              <button
                onClick={() => {
                  handleSignOut();
                  setIsOpen(false);
                }}
                className="block w-full text-left px-3 py-2 rounded-lg text-gray-300 hover:text-white hover:bg-red-600 transition-colors duration-300"
              >
                Sign Out
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;