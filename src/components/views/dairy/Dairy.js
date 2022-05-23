import React from 'react';

import Nav from './Nav';
import Namaz from './elements/Namaz';
import Quran from './elements/Quran';
import Hadees from './elements/Hadees';
import Letrature from './elements/Letrature';
import Meetings from './elements/Meetings';

import { Route, Routes} from 'react-router-dom';


const Dairy = props => {
  return (
      <>
        <Nav />
        <Routes>
            <Route exact path="Namaz" element={<Namaz/>} />
            <Route exact path="Quran" element={<Quran/>} />
            <Route exact path="Hadees" element={<Hadees/>} />
            <Route exact path="letrature" element={<Letrature/>} />
            <Route exact path="meetings" element={<Meetings/>} />
        </Routes>
        
    </>
  );
};

export default Dairy;