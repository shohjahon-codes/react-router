import './App.css'

import Navigation from "./components/Navigation"
import HomePage from "./pages/HomePage"
import AboutPage from "./pages/AboutPage"
import ProjectsPage from "./pages/ProjectsPage"
import NotFoundPage from "./pages/NotFoundPage"
import ProjectDetailsPage from './pages/ProjectDetailsPage'

import { Route, Routes } from 'react-router-dom'


const App = () => {

  return (
    <div className="App">

      <Navigation />

      <Routes>

        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/datas' element={<ProjectsPage />} />
        <Route path='/proyectos/:project_id' element={<ProjectDetailsPage />} />

        <Route path='*' element={<NotFoundPage />} />

      </Routes>

    </div>
  )
}

export default App
