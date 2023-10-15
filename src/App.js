import logo from './logo.svg';
import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './screens/Home';
import Error from './screens/Error';
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
