import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { AlbumPhoto } from "./pages/AlbumPhoto"
import { Album } from "./pages/Album"
import ErrorPage from "./pages/ErrorPage"
import { Photo } from './pages/Photo'

const router = createBrowserRouter([
  {
      path:"/",
      element: <App/>,
      errorElement:<ErrorPage/>,
      children: [
          {
              path:"/",
              element: <Album/>
          },
          {
              path:`/album/:id`,
              element: <AlbumPhoto/>
          },
          {
            path:`/photos/:id`,
            element: <Photo/>
          }
      ]
  },
  

])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
      <RouterProvider router={router}/>
  </React.StrictMode>,
)
