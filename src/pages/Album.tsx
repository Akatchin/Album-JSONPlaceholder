import { api } from "../api"
import { useState, useEffect } from "react"
import styles from "../styles/Album.module.css"
import { Link } from "react-router-dom"

export const Album = () => {
  type Props = {
    id: string
    title: string
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
    <div className={styles.album}>
        {albumItem.map((obj: Props) => {
            return (
              <div className={styles.albums}>
                <Link to={`/album/${obj.id}`} className={styles.link}  >
                  <div key={obj.id}>
                        {obj.title}
                  </div>
                </Link>
              </div>
            )
        })}
    </div>
)
}

