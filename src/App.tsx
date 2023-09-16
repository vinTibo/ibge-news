import { Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<h1>IBGE</h1>} />
        <Route path="/news/:id" element={<h1>Page not found</h1>} />
      </Route>
    </Routes>
  )
}

export default App
