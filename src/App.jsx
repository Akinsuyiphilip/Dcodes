import React from 'react';
import { BrowserRouter as Router, Switch, Route , Routes} from "react-router-dom";
import Navbar from './Components/Navbar';
import Routest from './Route';



function App() {
return (
<Router>
  <div className='App'>
    <Navbar />
  </div>
  <div className="content">


    <Routes>
    {Routest.map((ro, i) => (
            <Route
              exact
              key={i}
              path={ro.path}
              element={(<>{ro.component}</>)}
            />
          ))}
    </Routes>
  </div>

</Router>
);
}

export default App;