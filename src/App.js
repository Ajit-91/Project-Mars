import 'bootstrap/dist/css/bootstrap.min.css';
import './css/App.css';
import NavBar from './Components/Navbar/Navbar';
import Footer from "./Components/Footer/Footer"
import Home from "./Pages/Home"
import Weather from './Pages/Weather';
import Media from "./Pages/Media"
import { Switch } from 'react-router-dom';
import { Redirect, Route } from 'react-router';
function App()
{
  return (
    <>
      <NavBar />
      <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/weather" component={Weather} />
          <Route exact path="/media" component={Media} />
          <Redirect from="*" to={Home} />
      </Switch>
      <Footer/>
    </>
  )
}

export default App;
