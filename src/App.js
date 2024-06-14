import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import SiteFooter from './components/Common/SiteFooter';
import SiteNav from './components/Common/SiteNav';
import HomePage from './components/Common/home/HomePage';

import LoginPage from './components/auth/LoginPage';
import RegisterPage from './components/auth/RegisterPage';
import Contacts from './components/contacts/Contact';


// function App() {
//   return (
//     <div>
//       <SiteNav />
//       <HomePage/>
//       <SiteFooter />
     
//     </div>
//   );
// }

function App() {
  return (
    <Router>
      <div>
        <SiteNav />
        <Routes>
          <Route path='*' element={<HomePage />} />
          <Route path='/' exact={true} element={<HomePage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/contacts' element={<Contacts />} />
        </Routes>
        <SiteFooter />
      </div>
    </Router>
  );
}

export default App;
