import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
import Navigation from './components/navigation';
import Registeruser from './components/registeruser';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import {faArrowCircleLeft, faTrash} from '@fortawesome/free-solid-svg-icons'
import Viewall from './components/viewall';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Addnew from './components/addnew'; 
import Receipedetails from './components/receipedetails';
import Updatereceipe from './components/updatereceipe';


function App() {
  return (
    <>
    <div className="App">
      <Navigation/>

      <Routes>
        <Route path="/" component={Viewall}> </Route>   
        <Route path="/addnew" Component={Addnew}/>
        <Route path="/receipedetail/:id" Component={Receipedetails}></Route>
        <Route path="/updatereceipe/:id" Component={Updatereceipe}></Route>
        </Routes>
    

     
    
           {/* <Registeruser/> */}

      {/* <FontAwesomeIcon icon={faArrowCircleLeft}/>
      <FontAwesomeIcon icon={faTrash}/> */}
      {/* <Button variant="primary">
        Primary button
      </Button>
      <Button variant="info" >
        Button
      </Button> */}

  <br/><br/>
       <Viewall/>

    </div>
     </>
  );
}

export default App;
