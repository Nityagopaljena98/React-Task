import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

// import Landing page 
import Login from './components/Landing/Login';
import Signup from './components/Landing/Signup';

// import All pages 
import Home from './components/Pages/Home';
import Service from './components/Pages/Service';
import About from './components/Pages/About';
import Contact from './components/Pages/Contact';

// import EditProfile component 
import EditProfile from './components/EditProfile/EditProfile';
import ChangePassword from './components/EditProfile/ChangePassword';


const Layout = ({ children }) => {
  const location = useLocation();

  if (location.pathname === '/' || location.pathname === '/signup') {
    return children;
  }

  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

const App = () => {
  return (
    <>
      <Router>
        <Layout>
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/home' element={<Home />} />
            <Route path='/service' element={<Service />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/edit-profile' element={<EditProfile />} />
            <Route path='/edit-profile-password' element={<ChangePassword />} />
          </Routes>
        </Layout>
      </Router>
    </>
  );
};

export default App;
