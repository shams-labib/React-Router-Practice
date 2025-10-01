import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path:'/',
    element:<App></App>,
    children:[
      {
        path:'/home',
        element:<Home></Home>,
      },
      {
        path:'/about',
        element:<About></About>
      },
      {
        path:'contact',
        element:<Contact></Contact>
      }
    ]
  }
])





createRoot(document.getElementById('root')).render(
  <StrictMode>
       <RouterProvider router={router}>
        
       </RouterProvider>
  </StrictMode>,
)
