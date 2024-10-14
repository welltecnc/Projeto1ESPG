import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import App from './App.jsx'
import Error from './routes/Error/Error.jsx'
import Home from './routes/Home/Home.jsx'
import './index.css'

//criando a função do createBrowserRouter
const router =createBrowserRouter([{

  //Elementos PAI
  path:'/',element:<App/>,
  errorElement:<Error/>,

  //Elemento Filho
  children:[
    {path:'/',element:<Home/>},
  ]

}])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
