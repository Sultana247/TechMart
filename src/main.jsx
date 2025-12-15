import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Home from './component/Home.jsx';
 

const router = createBrowserRouter([
  {
    path:'/',
    loader:()=>fetch('navbar.json'),
    element:<Home></Home>,
    children:[
      {
        path:'',
        element:<div>Hello this is middle which will be change</div>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
