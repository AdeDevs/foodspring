import { Route, Routes } from "react-router-dom"
import NavBar from "./components/Nav"
import HomeScreen from "./components/Home"

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomeScreen />} /> 
      </Routes>
    </div>
  )
}

export default App
