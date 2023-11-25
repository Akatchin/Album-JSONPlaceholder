import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { api } from "../../api";
import { NavButton } from "../../button/NavButton";
import styled from "../../styles/Album.module.css";
import { Footer } from "../footer/Footer";

export const Album2 = () => {

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


