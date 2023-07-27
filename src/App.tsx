import { Outlet } from "react-router-dom"
import styles from "./styles/Album.module.css"

function App () {
    return (
       <div>
            <h1 className={styles.title}>Galeria de fotos</h1>
            <Outlet/>
       </div>
    )
}

export default App