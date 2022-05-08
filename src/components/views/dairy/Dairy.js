import React from 'react';

import Nav from './Nav';
import Namaz from './elements/Namaz';

import { Route, Routes} from 'react-router-dom';


const Dairy = props => {
   
  return (
      <>
        <Nav />
        {/* <Routes>
            <Route exact path="/dairy/Namaz" element={<Namaz/>} />
        </Routes> */}
        
    </>
  );
};

export default Dairy;