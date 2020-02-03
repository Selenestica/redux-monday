import React from 'react';
import './index.css'
import './App.css';
import Counter from './components/Counter'
import FancyCounter from './components/FancyCounter'
import Login from './components/Login'
import Menu from './components/Menu'


function App() {
  return (
<>

<Menu />
<Login />
<Counter></Counter>
<FancyCounter></FancyCounter>

</>
  );
}

export default App;
