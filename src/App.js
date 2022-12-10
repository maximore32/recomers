import React from 'react'
import NavMenu from './components/Navbar/Navbar';
import ItemlistContainer from './components/ItemlistContainer/ItemlistContainer';
import Contador from './components/Contador/Contador';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';





let log='recomers'
let saludo='Bienvenidos a este sitio Web!'


function App() {
  return (
    <div className="App">
      <NavMenu logo={log}/>
      <ItemlistContainer greeting={saludo}/>
      <Contador />
    </div>
  );
}

export default App;
