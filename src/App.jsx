import React from 'react';
import Homepage from './pages/Homepage';
import {
BrowserRouter as Router,
Switch,
Route,
Link
} from "react-router-dom";
import Service from './pages/Service'
import Navbar from './Components/Navbar';

function App() {
return (
<Router>
  <div className='App'>
    <Navbar />
    
  </div>
  <div className="content">
    <Switch>
      <Route path='/' exact>
        <Homepage />
      </Route>
      <Route path='/Service' exact>
        <Service />
      </Route>
    </Switch>
  </div>

</Router>
);
}

export default App;