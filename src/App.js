import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Homepage from './Component/Homepage';

function App() {
  return (
<>
<BrowserRouter>
<Routes>
  <Route path='/' element={<Homepage/>}/>
</Routes>
</BrowserRouter>
</>
  );
}

export default App;
