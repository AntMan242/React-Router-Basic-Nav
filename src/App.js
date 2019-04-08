import React from 'react';
import './App.css';
import { Home, About, Contact, Navigation } from './components';
import {Route} from 'react-router-dom';

const App = () => (
<div className='App'>
  <div>
    <Navigation />
  </div>

<Route exact path='/' compponent={Home} />
<Route path='/about' component={About} />
<Route path='contact' component={Contact} />

</div>
);



export default App;
