import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AddMembers, CreateGroup, ExpenseMain } from "./components";
import "./App.scss";
import 'bootstrap/dist/css/bootstrap.min.css';
import { RecoilRoot } from "recoil";

function App() {
  return (
    <Router>

        <Routes>
          <Route path="" element={<CreateGroup />} />
          <Route path="/members" element={<AddMembers />} />
          <Route path="/expense" element={<ExpenseMain />} />
        </Routes>

    </Router>
  );
}

export default App;
