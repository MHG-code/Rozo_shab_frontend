// import logo from './logo.svg';
import './styles/navbar.css';
import './styles/sub_navbar.css';
import './styles/main.css';
import './styles/section.css';
import './styles/signup.css';

import Navbar from './components/navbar';

import Home from './components/views/Home';
import Profile from './components/views/Profile';
import Dairy from './components/views/dairy/Dairy';
import Team from './components/views/Team';

import SignUp from './components/auth/SignUp';
import Login from './components/auth/Login';

import Check_auth from './components/auth/Check_auth';




// dairy elements
import Namaz from './components/views/dairy/elements/Namaz';

import {Route, Routes} from 'react-router-dom';

function App() {
  return (

// react fragment <> </>
    <>
      <Navbar name="Muhammad Hamza"/>

      <Routes >
        
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/Home" element={<Home/>} />

        <Route element={<Check_auth/>}>
            
          <Route exact path="/profile" element={<Profile/>} />
          <Route exact path="/team" element={<Team/>} />
          <Route exact path="/dairy/*" element={<Dairy/>} />

        </Route>
        
        <Route exact path="/signup" element={<SignUp/>} />
        <Route exact path="/login" element={<Login/>} />

        

        {/* dairy Routes */}

        {/* <Route exact path="dairy/Namaz" element={<Namaz/>} /> */}
        
      </Routes >
    </>
  );
}

export default App;
