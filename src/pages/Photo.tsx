import { api } from "../api"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"

export const Photo = () => {

    type Props = {
        title: string
        url: string
    }

    const {id} = useParams()
    const [photo, setPhoto] = useState("")
    const [title, setTitle] = useState("")

    useEffect(() => {
        api.getPhotoAlbum(id)
        .then((res: Props) => {
            setPhoto(res.url)
            setTitle(res.title)
        })
    },[])
    return (
        <>
            <div>
                <p>{title}</p>
            </div>
            <div>
                <img src={photo} alt="" width="600px" height="600px"/>
            </div>
        </>
    )
}