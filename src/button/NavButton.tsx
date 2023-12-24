import { useNavigate } from "react-router-dom"
import styles from "../styles/Button.module.css"
import { BackButton } from "./BackButton"


export const NavButton = () => {

  const navigate = useNavigate()

  return (
    <div className={styles.navButton}>
      <BackButton/>
      <button className={styles.button} onClick={(() => navigate("/album"))}>1</button> 
      <button className={styles.button} onClick={(() => navigate("/album2"))}>2</button> 
      <button className={styles.button} onClick={(() => navigate("/album3"))}>3</button> 
      <button className={styles.button} onClick={(() => navigate("/album4"))}>4</button> 
      <button className={styles.button} onClick={(() => navigate("/album5"))}>5</button> 
    </div>
  )  
}