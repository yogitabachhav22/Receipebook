import logo from './logo.svg';
import './App.css';
import Navigation from './components/navigation';
import Viewall from './components/viewall';
import Addnew from './components/addnew';
import Receipedetails from './components/receipedetails';
import Updatereceipe from './components/updatereceipe';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <div className="App">
     
          <Navigation />

          <Routes>
            <Route path="/" element={<Viewall />} />
            <Route path="/addnew" element={<Addnew />} />
            <Route path="/receipedetail/:id" element={<Receipedetails />} />
            <Route path="/updatereceipe/:id" element={<Updatereceipe />}  />
          
          </Routes>
       
      </div>
    </>
  );
}

export default App;