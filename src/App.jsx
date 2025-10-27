import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/Layout'
import SplashScreen from './components/SplashScreen'
import Home from './pages/Home'
import Learn from './pages/Learn'
import Practice from './pages/Practice'
import Leaderboard from './pages/Leaderboard'
import Missions from './pages/Missions'
import Store from './pages/Store'
import Lesson from './pages/Lesson'
import Stories from './pages/Stories'
import StoryPlayer from './pages/StoryPlayer'
import Login from './pages/Login'
import { UserProvider, useUser } from './context/UserContext'

// Protected route wrapper
function ProtectedRoute({ children }) {
  const { user } = useUser()
  return user.isLoggedIn ? children : <Navigate to="/login" replace />
}

function AppRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<ProtectedRoute><Layout /></ProtectedRoute>}>
        <Route index element={<Home />} />
        <Route path="learn" element={<Learn />} />
        <Route path="stories" element={<Stories />} />
        <Route path="practice" element={<Practice />} />
        <Route path="leaderboard" element={<Leaderboard />} />
        <Route path="missions" element={<Missions />} />
        <Route path="store" element={<Store />} />
        <Route path="lesson/:lessonId" element={<Lesson />} />
        <Route path="story/:storyId" element={<StoryPlayer />} />
      </Route>
    </Routes>
  )
}

function App() {
  const [showSplash, setShowSplash] = useState(true)

  if (showSplash) {
    return <SplashScreen onComplete={() => setShowSplash(false)} />
  }

  return (
    <UserProvider>
      <Router>
        <AppRoutes />
      </Router>
    </UserProvider>
  )
}

export default App
