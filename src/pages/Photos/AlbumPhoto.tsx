import { api } from "../../api"
import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import styled from "../../styles/Photos.module.css"
import { BackButton } from "../../button/BackButton"
import { Footer } from "../footer/Footer"
import loading from "../../assets/loading.gif";

export const AlbumPhoto = () => {

    const [finishedTimeOut, setFinishedTimeOut] = useState(false)

    type Props = {
        id: string
        thumbnailUrl: string
        title: string
    }

    const [imgUrl, setImgUrl] = useState([])

    const { id } = useParams()

    useEffect(() => {
        api.getPhoto(id)
            .then((res) => {
                console.log(res)
                return setImgUrl(res)
            })
    }, [id])

    useEffect(() => {
        const id: ReturnType<typeof setTimeout> = setTimeout(() => {
          setFinishedTimeOut(true)
        }, 3000)
        return () => clearTimeout(id)
      }, [])
      
      if(!finishedTimeOut) {
        return(
            <div className={styled.loadingDiv}>
              <img width="100px" height="100px"className={styled.loading} src={loading} alt="" />
              <p>Carregando...</p>
            </div>
          )
      } else {
          return (
              <div>
                  <div className={styled.backButton}>
                      <BackButton />
                  </div>
                  <div className={styled.container}>
                      {imgUrl.map((obj: Props) => {
                          Object.keys(obj)
                          return (
                              <div className={styled.album}>
                                  <div className={styled.title}>
                                      <p className={styled.titleText}>{obj.title}</p>
                                  </div>
                                  <div className={styled.photo} >
                                      <Link to={`/photos/${id}`}><img className={styled.img} src={obj.thumbnailUrl} alt="" width="200px" height="200px" /></Link>
                                  </div>
                              </div>
                          )
                      })}
                  </div>
                  <Footer />
              </div>
          )
      }
}