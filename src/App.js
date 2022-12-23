import { Routes,Route, Navigate } from 'react-router-dom'
import NavMenu from './components/Navbar/Navbar';
import ItemlistContainer from './components/itemListContain/itemListContainer';
import ItemDetailContainer from './components/itemDetailContainer/itemDetailContainer';
import CartContainer from './components/CartContainer/CartContainer';

import Footer from './components/Footer/Footer';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

let log='recomers'
let saludo='Bienvenidos a este sitio Web!'


function App() {
  return (
    
        <div className="App">
           <NavMenu logo={log}/>
      
         <Routes>
           <Route path='/' element={<ItemlistContainer  greeting={saludo}/>} />
           <Route path='/categoria/:categid' element={<ItemlistContainer  greeting={saludo}/>} />
           <Route path='/detail/:prodid' element={<ItemDetailContainer />} />
           <Route path='/cart' element={<CartContainer />} />
           <Route path='*' element={<Navigate to="/" />} />

          </Routes>      
          <Footer logo={log} />      
        </div>
    
    
  );
}

export default App;
