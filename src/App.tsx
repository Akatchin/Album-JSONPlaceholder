import "./App.css"
import { Album } from "./pages/Albums/Album"
import { Outlet } from "react-router-dom"
import { Footer } from "./pages/footer/Footer"

function App () {

    return (    
       <div className="body">
            <div className="flex-container"> 
                <Album/>
                <Outlet/>
            </div>
            <Footer/>
        </div>
    )
}

export default App