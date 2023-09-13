import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Components/Login';
import MainContainer from './Components/MainContainer';
import Welcome from './Components/Welcome';
import ChatArea from './Components/ChatArea';
import CreateGroups from './Components/CreateGroups';
import Groups from './Components/Groups';
import Users from './Components/Users';
import Signup from './Components/Signup';


function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='app' element={<MainContainer />}>
          <Route path='welcome' element={<Welcome />} />
          <Route path='chat' element={<ChatArea />} />
          <Route path='users' element={<Users />} />
          <Route path='groups' element={<Groups />} />
          <Route path='create-group' element={<CreateGroups />} />
        </Route>
      </Routes>
      {/* <Login /> */}
    </div>
  );
}

export default App;
