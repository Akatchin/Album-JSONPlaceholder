import { api } from "../../api"
import { useState, useEffect } from "react"
import styled from "../../styles/Album.module.css";
import { Link } from "react-router-dom"
import { NavButton } from "../../button/NavButton";
import { Footer } from "../footer/Footer";
import loading from "../../assets/loading.gif";

export const Album = () => {
  type Props = {
    id: number;
    title: string;
}

const [albumItem, setAlbumItem] = useState([])
const [finishedTimeOut, setFinishedTimeOut] = useState(false)

useEffect(() => {
    api.getAlbum()
        .then((res) => {
            res.forEach((val: [])=> {
                 return val
            })
            setAlbumItem(res)
        }  
    )
}, [])

useEffect(() => {
  const id: ReturnType<typeof setTimeout> = setTimeout(() => {
    setFinishedTimeOut(true)
  }, 3000)
  return () => clearTimeout(id)
}, [])

 if(!finishedTimeOut){
  return(
    <div className={styled.loadingDiv}>
      <img width="100px" height="100px"className={styled.loading} src={loading} alt="" />
      <p>Carregando...</p>
    </div>
  )
 } else {
  return(<>
    <div className={styled.flex_container}> 
          <div className={styled.album}>
          {albumItem.map((obj: Props) => { 
                if(obj.id >= 1 && obj.id <=20) {
                  return (
                    <div className={styled.albums}  key={obj.id}>
                      <Link to={`/album/${obj.id}`} className={styled.link}>
                        <div >
                              {obj.title}
                        </div>
                      </Link>
                    </div>
                  )}      
            })}
                 
          </div>
          <NavButton/>
          
      </div>
      <Footer/>
  </>)
 }
}

