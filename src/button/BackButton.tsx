import { useNavigate } from "react-router-dom"
import backbutton from "../assets/back-button-svgrepo-com.svg"
import styles from "../styles/Button.module.css"
import { IoChevronBack } from "react-icons/io5";

export const BackButton = () => {
    const navigate = useNavigate()
    const backButton = () => {
        navigate(-1)
    }
    return (
        <button className={styles.backButton} onClick={backButton}><IoChevronBack/></button>
    )
}