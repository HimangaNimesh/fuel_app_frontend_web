import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage } from './pages/home-page/Home';
import { UserLogin } from './pages/login/UserLogin';
import { Register } from './pages/register/Register';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<UserLogin />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<h1>Page not found</h1>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
