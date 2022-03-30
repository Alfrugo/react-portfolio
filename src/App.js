import logo from './logo.svg';
import './App.css';
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
// import Nav from "./components/Nav";
import Project from "./components/Project";
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom"



function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" render={()=> {return(<Redirect to="/Project"/>)}}/>
          <Route exact path="/About" component={About}/>
          <Route exact path="/Project" component={Project}/>
          <Route exact path="/Contact" component={Contact}/>
          
        </Switch>
        <Footer />
      </Router>  


    </div>
  );
}

export default App;
