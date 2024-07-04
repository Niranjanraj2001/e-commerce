
import './App.css';
import Navigation from './Components/Navigation';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Home from './Components/Home';
import Product from './Components/Product';
import 'semantic-ui-css/semantic.min.css'
import {
  BrowserRouter ,
  Routes ,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div>
      <header>
        <BrowserRouter>

          <Routes>

          <Route path="/" element={<Navigation/>} >
          <Route index element={<Home/>} />
          <Route path="/Product" element={<Product/>} />
         
          </Route>
          </Routes>

          </BrowserRouter>


      </header>
    </div>
  );
}

export default App;
