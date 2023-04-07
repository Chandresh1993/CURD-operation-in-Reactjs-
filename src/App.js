import './App.css';
import Create from './CURD1/Create';
import { Route, Routes } from 'react-router-dom';
import Read from './CURD1/Read';
import Edit from './CURD1/Edit';


function App() {
  return (
    <div className="container">
      <Routes>
        <Route exact path='/' element={<Read />}></Route>
        <Route exact path='/create' element={<Create />}></Route>
        <Route exact path='/edit' element={<Edit/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
