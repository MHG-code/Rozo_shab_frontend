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
      {/* .......................... nav element .................... */}

      <Nav />

      {/* .......................... body .................... */}

      <div className='child_view'>
        <h1>نماز</h1>

        <p>لَّقَدْ كَانَ لَكُمْ فِي رَسُولِ اللَّهِ أُسْوَةٌ حَسَنَةٌ لِّمَن كَانَ يَرْجُو اللَّهَ وَالْيَوْمَ الْآخِرَ وَذَكَرَ اللَّهَ كَثِيرًا <br/><span>(33:21)</span> </p>

        <div className='table_view'>
          <form>
            <table>
              <thead>
                <tr>
                  <th>غفلت</th>
                  <th>قضاۂ</th>
                  <th>انفرادی</th>
                  <th>اجتماعی</th>
                  <th><b>نمازیں</b></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <input type="radio" id="a table_radio_input" name="fajar" />
                    <label for="a table_radio_input"><span></span></label>
                  </td>
                  <td>
                    <input type="radio" id="a2 table_radio_input" name="fajar" />
                    <label for="a2 table_radio_input"><span></span></label>
                  </td>
                  <td>
                    <input type="radio" id="a3 table_radio_input" name="fajar" />
                    <label for="a3 table_radio_input"><span></span></label>
                  </td>
                  <td>
                    <input type="radio" id="a4 table_radio_input" name="fajar" />
                    <label for="a4 table_radio_input"><span></span></label>
                  </td>
                  <th>فجر</th>
                </tr>

                <tr>
                  <td>
                    <input type="radio" id="b1 table_radio_input" name="zuhar" />
                    <label for="b1 table_radio_input"><span></span></label>
                  </td>
                  <td>
                    <input type="radio" id="b2 table_radio_input" name="zuhar" />
                    <label for="b2 table_radio_input"><span></span></label>
                  </td>
                  <td>
                    <input type="radio" id="b3 table_radio_input" name="zuhar" />
                    <label for="b3 table_radio_input"><span></span></label>
                  </td>
                  <td>
                    <input type="radio" id="b4 table_radio_input" name="zuhar" />
                    <label for="b4 table_radio_input"><span></span></label>
                  </td>
                  <th>ظہر</th>
                </tr>

                <tr>
                  <td>
                    <input type="radio" id="c1 table_radio_input" name="assar" />
                    <label for="c1 table_radio_input"><span></span></label>
                  </td>
                  <td>
                    <input type="radio" id="c2 table_radio_input" name="assar" />
                    <label for="c2 table_radio_input"><span></span></label>
                  </td>
                  <td>
                    <input type="radio" id="c3 table_radio_input" name="assar" />
                    <label for="c3 table_radio_input"><span></span></label>
                  </td>
                  <td>
                    <input type="radio" id="c4 table_radio_input" name="assar" />
                    <label for="c4 table_radio_input"><span></span></label>
                  </td>
                  <th>عصر</th>
                </tr>

                <tr>
                  <td>
                    <input type="radio" id="d1 table_radio_input" name="magrib" />
                    <label for="d1 table_radio_input"><span></span></label>
                  </td>
                  <td>
                    <input type="radio" id="d2 table_radio_input" name="magrib" />
                    <label for="d2 table_radio_input"><span></span></label>
                  </td>
                  <td>
                    <input type="radio" id="d3 table_radio_input" name="magrib" />
                    <label for="d3 table_radio_input"><span></span></label>
                  </td>
                  <td>
                    <input type="radio" id="d4 table_radio_input" name="magrib" />
                    <label for="d4 table_radio_input"><span></span></label>
                  </td>
                  <th>مغرب</th>
                </tr>

                <tr>
                  <td>
                    <input type="radio" id="e1 table_radio_input" name="isha" />
                    <label for="e1 table_radio_input"><span></span></label>
                  </td>
                  <td>
                    <input type="radio" id="e2 table_radio_input" name="isha" />
                    <label for="e2 table_radio_input"><span></span></label>
                  </td>
                  <td>
                    <input type="radio" id="e3 table_radio_input" name="isha" />
                    <label for="e3 table_radio_input"><span></span></label>
                  </td>
                  <td>
                    <input type="radio" id="e4 table_radio_input" name="isha" />
                    <label for="e4 table_radio_input"><span></span></label>
                  </td>
                  <th>عشاء</th>
                </tr>

              </tbody>
            </table>
            <button>Submit</button>
          </form>
        </div>
      </div>

      {/* .......................... routes .................... */}
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