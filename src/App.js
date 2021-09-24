import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';

/* To launch website:
npm start

To push + deploy to GitHub:
git add .
git commit -m "Your commit summary here"
npm run deploy
*/

function App() {
  return <div ClassName="App">
    <Route exact path="/" component={Home} />
    <Route path="/projects" component={Projects} />
    <Route path="/about" component={About} />
  </div>;
}

export default App;
