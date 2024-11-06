import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import Home from '../pages/Home'
import AboutMe from '../pages/AboutMe'
import Projects from '../pages/Projects'
import Contact from '../pages/Contact'
import Skills from '../pages/Skills'

/**
 * A router that defines the routes for the app
 */
export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {path: "", element: <Home />},
            {path: "aboutme", element: <AboutMe />},
            {path: "projects", element: <Projects />},
            {path: "contact", element: <Contact />},
            {path: "skills", element: <Skills />},
        ],
    },
]);