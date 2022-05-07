import './App.css';
import Header from './MyComponents/Header';
import Footer from './MyComponents/Footer';
import Calculator from './MyComponents/Calculator';
import Currency from "./MyComponents/Currency"
import Weather from './MyComponents/Weather';
import Blog from './MyComponents/Blog';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
    <Router>
      <Header title="MY nAV"/>
      <Routes>
        <Route path='/calc' element={<div className='container'><Calculator></Calculator></div>}></Route>
        <Route path='/currency' element={<div className='container'><Currency></Currency></div>}></Route>
        <Route path='/weather' element={<div className='container'><Weather /></div>}></Route>
        <Route path='/blog' element={<div className='container'><Blog /></div>} />
      </Routes>
      <Footer/>
    </Router>
    </>
  );
}

export default App;
