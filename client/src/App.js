import Single from './pages/Single/Single' 
import TopBar from "./components/topbar/TopBar"
import Home from "./pages/Home/Home"
import Write from './pages/Write/Write';
import Settings from './pages/Settings/Settings';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import { useContext } from 'react';
import { Context } from './context/Context';

function App() {
  const {user} = useContext(Context);
  return (
    <BrowserRouter>
    <TopBar/>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path='/register' element={user ? <Home/> : <Register/>}/>
        <Route path='/login' element={user ? <Home/> : <Login/>}/>
        <Route path='/write' element={user ? <Write/> : <Register/>}/>
        <Route path='/settings' element={user ? <Settings/> : <Register/>}/>
        <Route path='/post/:postId' element={<Single/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
