import { useNavigate } from "react-router-dom"
import backbutton from "../assets/back-button-svgrepo-com.svg"

export const BackButton = () => {
    const navigate = useNavigate()
    const backButton = () => {
        navigate(-1)
    }
    return (
        <button className="button" onClick={backButton}><img src={backbutton} width="20px" height="20px" alt="" /></button>
    )
}