import { Route, Routes } from "react-router-dom"
import NavBar from "./components/Nav"
import HomeScreen from "./components/Home"
import TestPage from "./components/Test"

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomeScreen />} /> 
        <Route path="/test" element={<TestPage />} />
      </Routes>
    </div>
  )
}

export default App
