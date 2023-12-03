import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { AlbumPhoto } from "./pages/Photos/AlbumPhoto"
import { Album } from './pages/Albums/Album'
import { Album2 } from './pages/Albums/Album2'
import { Album3 } from './pages/Albums/Album3'
import { Album4 } from './pages/Albums/Album4'
import { Album5 } from './pages/Albums/Album5'
import ErrorPage from "./pages/error/ErrorPage"
import { Photo } from './pages/Photo/Photo'
import Camera from "./assets/camera-_svg.svg"
import "./index.css"

const router = createBrowserRouter([
  
          {
              path:"/",
              element: <App/>,
              errorElement:<ErrorPage/>
          },
          {
              path:"/album",
              element: <Album/>
          },
          {
            path:"/album2",
            element: <Album2/>
          },
          {
            path:"/album3",
            element: <Album3/>
          },
          {
            path:"/album4",
            element: <Album4/>
          },
          {
            path:"/album5",
            element: <Album5/>
          },
          {
              path:`/album/:id`,
              element: <AlbumPhoto/>
          },
          {
            path:`/photos/:id`,
            element: <Photo/>
          }
        
  
  

])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
 
  <React.StrictMode> 
    <div className='header'>
        <h1 >Galeria de fotos</h1>
        <img src={Camera} alt="Imagem de uma câmera" width="300px" height="200px"/>
    </div>
      <RouterProvider router={router}/>
  </React.StrictMode>,
)
