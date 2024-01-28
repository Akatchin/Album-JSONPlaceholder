import { api } from "../../api"
import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import styled from "../styles/Photos.module.css"
import { BackButton } from "../button/BackButton"
import { Footer } from "../footer/Footer"
import loading from "../../assets/loading.gif";

export const AlbumPhoto = () => {

    const [finishedTimeOut, setFinishedTimeOut] = useState(false)

    type Props = {
        id: number
        thumbnailUrl: string
        title: string
    }

    const [imgUrl, setImgUrl] = useState([])

    const { id } = useParams()
    const items = document.querySelectorAll("#refImg")

    const maxItems = items.length  
    const [currentItem, setCurrentItem] = useState(1)

    useEffect(() => {
        api.getPhoto(id)
            .then((res) => {
                return setImgUrl(res)
            })
            
    }, [id])

    useEffect(() => {
        const id: ReturnType<typeof setTimeout> = setTimeout(() => {
          setFinishedTimeOut(true)
        }, 3000)
        return () => clearTimeout(id)
      }, [])    

      const controlButton = (value: number) => {

          if (currentItem > maxItems) {
              setCurrentItem(0)
          } else if (currentItem < 0) {
              setCurrentItem(maxItems - 1)
          }

            setTimeout(() => {
                if (value == 1) {
                    setCurrentItem((count) => count + 1)
                } else if (value == 0) {
                    setCurrentItem((count) => count - 1)
                }
              }, 1000)          
          items[currentItem].scrollIntoView({ inline: "center", behavior: "smooth" })
    }

      
    if (!finishedTimeOut) {
        return (
            <div className={styled.loadingDiv}>
                <img width="100px" height="100px" className={styled.loading} src={loading} alt="" />
                <p>Carregando...</p>
            </div>
        )
    } else {
        return (
            <>                        
                <div style={{ padding: "50px 0 0 200px" }}>
                    <BackButton />
                </div>
                <div className={styled.container}>
                    <button onClick={(()=> controlButton(0))} className={styled.arrow_left} aria-aria-label="Previous image">🠸</button>
                    <button onClick={()=> controlButton(1)} className={styled.arrow_right} aria-aria-label="Next image">🠺</button>
                    <div className={styled.gallery_wrapper}>
                        <div className={styled.gallery}>
                            {imgUrl.map((obj: Props) => {
                                return (
                                    <div>
                                        <Link to={`/photos/${id}`}><img id="refImg" className={styled.item} src={obj.thumbnailUrl} alt="" width="200px" height="200px" /></Link>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
                <Footer />
            </>
        )
    }
}