import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase/firebase';
import { motion } from 'framer-motion';

const Home = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    if (auth.currentUser) {
      navigate('/voice-assistant');
    } else {
      navigate('/signin');
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-r from-black via-gray-900 to-gray-800 text-white px-6">
      
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center justify-center w-full py-16">
        {/* Left Side Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="max-w-xl text-center md:text-left"
        >
          <h1 className="text-5xl font-bold mb-6 text-purple-400">Welcome to Dyslu</h1>
          <p className="text-lg text-gray-300 mb-6">
            Your intelligent AI voice assistant, ready to assist you anytime.
          </p>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleGetStarted}
            className="bg-purple-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-purple-700 transition-all duration-300"
          >
            Get Started
          </motion.button>
        </motion.div>

        {/* Right Side AI Chatbot Animation */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="hidden md:block"
        >
          <img 
            src="https://csc.edu.vn/template/frontend/images/chatbot-animation.gif?v=1.1" 
            alt="AI Chatbot Animation" 
            className="w-96"
          />
        </motion.div>
      </div>

      {/* Pricing Section */}
      <div className="w-full py-16 text-center">
        <h2 className="text-4xl font-bold text-purple-400 mb-8">Pricing Plans</h2>
        
        <div className="flex flex-col md:flex-row justify-center gap-8">
          {/* Free Plan */}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="bg-gray-900 rounded-lg shadow-lg p-8 max-w-sm"
          >
            <h3 className="text-2xl font-bold text-white mb-4">Free</h3>
            <p className="text-gray-400">Basic features with limited access.</p>
            <p className="text-3xl font-bold text-white mt-4">$0/month</p>
            <button className="mt-6 bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-all">
              Get Started
            </button>
          </motion.div>

          {/* Pro Plan */}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="bg-gray-800 rounded-lg shadow-lg p-8 max-w-sm border-2 border-purple-500"
          >
            <h3 className="text-2xl font-bold text-white mb-4">Pro</h3>
            <p className="text-gray-400">Advanced features with premium support.</p>
            <p className="text-3xl font-bold text-white mt-4">$9.99/month</p>
            <button className="mt-6 bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-all">
              Choose Plan
            </button>
          </motion.div>

          {/* Premium Plan */}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="bg-gray-900 rounded-lg shadow-lg p-8 max-w-sm"
          >
            <h3 className="text-2xl font-bold text-white mb-4">Premium</h3>
            <p className="text-gray-400">Unlimited access to all features.</p>
            <p className="text-3xl font-bold text-white mt-4">$19.99/month</p>
            <button className="mt-6 bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-all">
              Choose Plan
            </button>
          </motion.div>
        </div>
      </div>

    </div>
  );
};

export default Home;
