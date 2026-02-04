import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'

import Layout from './assets/components/Layout'
import ProtectedRoute from './assets/components/ProtectedRoute'
import ScrollToTop from './assets/components/ScrollToTop'

import Home from './pages/Home'
import Services from './pages/Services'
import Calculator from './pages/Calculator'
import Booking from './pages/Booking'
import Contact from './pages/Contact'
import Admin from './pages/Admin'
import Login from './pages/Login'
import Review from './pages/Review'

function AnimatedRoutes() {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ 
          duration: 0.3,
          ease: [0.22, 1, 0.36, 1]
        }}
      >
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/review" element={<Review />} />
          <Route
            path="/admin"
            element={
              <ProtectedRoute>
                <Admin />
              </ProtectedRoute>
            }
          />
        </Routes>
      </motion.div>
    </AnimatePresence>
  )
}

export default function App() {
  return (
    <Layout>
      <ScrollToTop />
      <AnimatedRoutes />
    </Layout>
  )
}