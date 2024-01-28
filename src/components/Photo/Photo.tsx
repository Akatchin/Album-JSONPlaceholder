import { api } from "../../api"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import styled from "../styles/Photo.module.css"
import { Footer } from "../footer/Footer"
import { BackButton } from "../button/BackButton"
import loading from "../../assets/loading.gif";

export const Photo = () => {

    type Props = {
        title: string
        url: string
    }

    const {id} = useParams()
    const [photo, setPhoto] = useState("")
    const [title, setTitle] = useState("")
    const [finishedTimeOut, setFinishedTimeOut] = useState(false)

    useEffect(() => {
        api.getPhotoAlbum(id)
        .then((res: Props) => {
            setPhoto(res.url)
            setTitle(res.title)
        })
    },[])

    useEffect(() => {
        const id: ReturnType<typeof setTimeout> = setTimeout(() => {
          setFinishedTimeOut(true)
        }, 6000)
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
            <div className={styled.photo_Container}>
                <div className={styled.backButton}>
                <BackButton />
                </div>
                <div className={styled.title}>
                    <p>{title}</p>
                </div>
                <div className={styled.photo}>
                    <img className={styled.image} src={photo} alt="" width="400px" height="400px"/> 
                </div>
                <Footer/>
            </div>
        )
      }
}