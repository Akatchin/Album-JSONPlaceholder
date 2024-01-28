import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { AlbumPhoto } from "./components/Photos/AlbumPhoto"
import { Album } from './components/Albums/Album'
import ErrorPage from "./components/error/ErrorPage"
import { Photo } from './components/Photo/Photo'
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
        <div className="headerMenu">
        <div className="menuOption">
          <a href='/'>Quem sou eu?</a>
          <br/>
          <br/>
          <a href='/'>Minhas redes sociais</a>
        </div>
        <div className='imageDiv'>
        <img src={Camera} alt="Imagem de uma câmera" width="300px" height="200px"/>
        </div>
        <div className="menuOption"> 
          <a href='/'>Como funciona este projeto?</a>
          <br/>
          <br/>
          <a href='/'>Tecnologias utilizadas</a>
        </div>
        </div>
    </div>
      <RouterProvider router={router}/>
  </React.StrictMode>
)
