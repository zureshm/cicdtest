
import './App.css';
import Dashboard from './components/Dashboard';
import {Routes, Route} from 'react-router-dom'
import Login from './components/Login';
import Main from './components/Main';
import Nav from './components/Nav';
import UserList from './components/UserList';

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route element={<Main />}>
      
        <Route path='/' element={<Login />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/userlist' element={<UserList />} />

        </Route>
      
      </Routes>
    </div>
  );
}

export default App;
