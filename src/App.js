import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './Component/Homepage';
import Buynow from './Component/Buynow';
import Datalist from './Component/Datalist';
import ScrollToTop from './Component/ScrollToTop';

function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/buynow' element={<Buynow />} />
          <Route path='/passdata' element={<Datalist />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App