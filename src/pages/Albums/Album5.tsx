import { api } from "../../api"
import { useState, useEffect } from "react"
import styled from "../../styles/Album.module.css";
import { Link } from "react-router-dom"
import { NavButton } from "../../button/NavButton";
import { Footer } from "../footer/Footer";

export const Album5 = () => {
  type Props = {
    id: number;
    title: string;
}

const [albumItem, setAlbumItem] = useState([])

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

return(
  <>
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
  </>
  )
}

