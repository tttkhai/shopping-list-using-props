import { React } from 'react'
import './App.css'
import Dashboard from './pages/Dashboard'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <div>welcome!</div>
        <Routes>
          <Route exact path='/dashboard' element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
