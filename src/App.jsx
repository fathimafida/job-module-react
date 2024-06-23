
import { Route, Routes } from 'react-router-dom'
import './App.css'
import AuthPage from './components/AuthPage'
import JobHome from './pages/JobHome'
import AddJobPoastPage from './pages/addJobPost/AddJobPoastPage'

function App() {
  

  return (
    <>
      <div className="bg-slate-900 min-h-screen flex flex-col">
      
        
        <Routes>
          <Route>
            <Route path="/" element={<AuthPage />} />
            <Route path="/jobHome" element={<JobHome />} />
            <Route path="*" element={< AddJobPoastPage/>} />
          </Route>
        </Routes>
      </div>
    </>
  )
}

export default App
