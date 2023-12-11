import { useRoutes, BrowserRouter } from 'react-router-dom'

import Home from '../Home'
import Late from '../Late'

import './App.css'

const AppRoutes = () => {
    let routes = useRoutes([
        { path: '/', element: <Home /> },
        { path: '/late', element: <Late/> },

    ])
    return routes
}

const App = () => {
    return (
            <BrowserRouter>
                <AppRoutes />
            </BrowserRouter>
    )
}

export default App


