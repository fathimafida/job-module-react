
import { Route, Routes } from 'react-router-dom'
import './App.css'
import AuthPage from './components/AuthPage'
import JobHome from './pages/JobHome'

function App() {
  

  return (
    <>
      <div className="bg-slate-900 h-screen">
      
        
        <Routes>
          <Route>
            <Route path="/" element={<AuthPage />} />
            <Route path="/jobHome" element={<JobHome/>} />
          </Route>
        </Routes>
      </div>
    </>
  )
}

export default App
