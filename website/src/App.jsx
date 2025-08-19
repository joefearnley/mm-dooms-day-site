import { Routes, Route } from 'react-router';
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Info from './pages/Info'
import Level from './pages/Level'
import './App.css'

function App() {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="info" element={<Info />} />
                <Route path="/level/:levelId" element={<Level />} />
            </Route>
        </Routes>
    )
}

export default App
