

import './App.css';
import Adduser from './component/Adduser';
import Userliste from './component/Userliste';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes , Route } from 'react-router-dom';
import Profile from './component/profile';
import { useSelector } from 'react-redux';
function App() {
  const user=useSelector(state=>state.user)
  console.log(user)
  return (
    <div className="App">
      <Adduser/>
      <Routes>
       <Route path='/' element={<Userliste/>}/>
       {(user.name)?<Route path='/profile' element={<Profile/>}/>:
       <Route path='/profile' element={<h1>you are not authorized</h1>}/>
       }
      </Routes>
      
    </div>
  );
}

export default App;
