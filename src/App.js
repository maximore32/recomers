import React from 'react'
import './App.css';
import NavMenu from './components/Navbar/Navbar';
import ItemlistContainer from './components/ItemlistContainer/ItemlistContailer';
import 'bootstrap/dist/css/bootstrap.min.css';





let log='recomers'
let saludo='Bienvenidos a este sitio Web!'


function App() {
  return (
    <div className="App">
      <NavMenu logo={log}/>
      <ItemlistContainer greeting={saludo}/>
    </div>
  );
}

export default App;
