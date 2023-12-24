import "./App.css"
import { Album } from "./pages/Albums/Album"
import { Outlet } from "react-router-dom"

function App () {

    return (    
       <div className="body">
            <div className="flex-container"> 
                <Album/>
                <Outlet/>
            </div>
        </div>
    )
}

export default App