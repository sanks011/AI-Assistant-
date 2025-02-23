import { useState } from 'react';
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { auth } from '../firebase/firebase';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const googleProvider = new GoogleAuthProvider();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/voice-assistant');
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      navigate('/voice-assistant');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-black via-gray-900 to-gray-800">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="w-full max-w-md bg-gray-900 bg-opacity-60 backdrop-blur-lg p-8 rounded-xl shadow-lg"
      >
        <h2 className="text-3xl font-bold text-center text-white mb-6">Sign In</h2>

        {error && (
          <motion.div className="bg-red-600 text-white px-4 py-3 rounded-md mb-4 text-center">
            {error}
          </motion.div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full px-4 py-2 bg-gray-800 text-white border border-gray-600 rounded-md focus:ring-2 focus:ring-purple-500 transition-all" required />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full px-4 py-2 bg-gray-800 text-white border border-gray-600 rounded-md focus:ring-2 focus:ring-purple-500 transition-all" required />
          <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} type="submit" className="w-full bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition-all">Sign In</motion.button>
        </form>

        <motion.button onClick={handleGoogleSignIn} className="w-full bg-white text-black py-2 px-4 rounded-lg flex items-center justify-center space-x-2 mt-4 hover:bg-gray-200 transition-all">
          <img src="https://logos-world.net/wp-content/uploads/2020/09/Google-Symbol.png" alt="Google" className="w-6 h-6" />
          <span>Sign in with Google</span>
        </motion.button>
      </motion.div>
    </div>
  );
};

export default SignIn;
