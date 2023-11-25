import { api } from "../api"
import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import styles from "../styles/Photo.module.css"
import { BackButton } from "../button/BackButton"


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
            <BackButton />
            <div className={styles.container}>
                {imgUrl.map((obj: Props) => {
                    Object.keys(obj)
                    return (
                        <>
                            <div className={styles.album}>
                                <div className={styles.title}>
                                    <p>{obj.title}</p>
                                </div>
                                <div className={styles.photo} >
                                    <Link to={`/photos/${id}`}><img className={styles.img} src={obj.thumbnailUrl} alt="" width="200px" height="200px" /></Link>
                                </div>
                            </div>
                        </>
                    )
                })}
            </div>
        </div>
    )
}