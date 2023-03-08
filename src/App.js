import './App.css';
import Home from './Home';
import Post from './post';
import Get from './Get';
import Put from './Put';
import Delete from './delete';
import { Route,Routes } from 'react-router-dom';
import Deletion from './delete';
function App() {
  return (
    <>
    <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route path="post" element={<Post/>}/>
      <Route path="/get" element={<Get/>}/>
      <Route path="/put" element={<Put/>}/>
      <Route path="/del" element={<Deletion/>}/>
    </Routes>
    </>
  );
}

export default App;