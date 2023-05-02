import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AddMembers, CreateGroup, ExpenseMain } from './components';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='' element={<CreateGroup />}/> 
        <Route path='/members' element={<AddMembers />}/> 
        <Route path='/expense' element={<ExpenseMain />}/> 
      </Routes>
    </Router>
  );
}

export default App;
