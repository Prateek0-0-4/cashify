import { BrowserRouter, Routes, Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import  Navbar  from './assets/Navbar'
import Home from './assets/Home'
import Slider from './assets/Slider'
import A from './assets/A'
import Drop from './assets/Drop'

function App() {

  return (
    <>
  <BrowserRouter>
  {/* <Navbar/> */}
  {/* <A/> */}
  <Routes>
    <Route path="/" element={<Home/>}/>
  </Routes>
  </BrowserRouter>
  
    </>
  )
}

export default App
