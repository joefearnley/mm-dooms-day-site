import { Routes, Route, Link } from 'react-router';
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Info from './pages/Info'
import './App.css'

function App() {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="info" element={<Info />} />
            </Route>
        </Routes>
    )
}

export default App
