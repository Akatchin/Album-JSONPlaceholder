import { api } from "../../api"
import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import styled from "../../styles/Photos.module.css"
import { BackButton } from "../../button/BackButton"
import { Footer } from "../footer/Footer"


export const AlbumPhoto = () => {

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
            <Footer/>
        </div>
    )
}