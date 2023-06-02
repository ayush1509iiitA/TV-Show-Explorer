import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ShowList from './ShowList';
import ShowDetails from './ShowDetails';

const App = () => {
  const [selectedShow, setSelectedShow] = useState(null);

  const handleSelectShow = (show) => {
    setSelectedShow(show);
  };

  const handleClearSelection = () => {
    setSelectedShow(null);
  };

  return (
    <Router>
      <div>
        { <nav>
          <ul className="ul-style"  >   
            <li >
              <center>
              <Link to="/" className="nav-link">
                <div className='nav-btn'>Home</div>
              </Link>
              </center>
            </li>
           
            
          </ul>
        </nav> }


        <Routes>
          <Route path="/" element={<ShowList onSelectShow={handleSelectShow} />} />
          <Route
            path="/show-details"
            element={<ShowDetails show={selectedShow} onClearSelection={handleClearSelection} />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
