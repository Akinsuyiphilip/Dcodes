import React from 'react';
import Homepage from './pages/Homepage';
import { BrowserRouter as Router, Switch,Route,} from "react-router-dom";
import Service from './pages/Service'
import Navbar from './Components/Navbar';
import Team from './pages/Team';
import Testimonial from './pages/Testimonial';
import Routest from './Route';



function App() {
return (
<Router>
  <div className='App'>
    <Navbar />
  </div>
  <div className="content">


    <Switch>
      {Routest.map((b, index) => {
      <Route path={b.path} exact>{b.component} </Route>

      })}
      <Route path='/' exact>
        <Homepage />
      </Route>

    </Switch>
  </div>

</Router>
);
}

export default App;