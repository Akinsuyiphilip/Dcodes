import React from 'react';
import Homepage from './pages/Homepage';
import { BrowserRouter as Router, Switch,Route,} from "react-router-dom";
import Service from './pages/Service'
import Navbar from './Components/Navbar';
import Team from './pages/Team';
import Testimonial from './pages/Testimonial';

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
      <Route path='/Team'>
        <Team />
      </Route>
      <Route path='/Testimonial' exact>
        <Testimonial />
      </Route>
    </Switch>
  </div>

</Router>
);
}

export default App;