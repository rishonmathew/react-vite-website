// src/App.jsx
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import Layout from "./assets/components/Layout.jsx";
import ProtectedRoute from "./assets/components/ProtectedRoute.jsx";

import Home from "./pages/Home.jsx";
import Services from "./pages/Services.jsx";
import Calculator from "./pages/Calculator.jsx";
import Booking from "./pages/Booking.jsx";
import Contact from "./pages/Contact.jsx";
import Admin from "./pages/admin.jsx";
import Login from "./pages/Login.jsx";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -15 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
      >
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="/login" element={<Login />} />

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
  );
}

function App() {
  return (
    <Router>
      <Layout>
        <AnimatedRoutes />
      </Layout>
    </Router>
  );
}

export default App;
