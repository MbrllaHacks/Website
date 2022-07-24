import './style.css';
import loadingScreen from "./Assets/loading.gif"


function Loading() {
    return (
        <div style={{ backgroundColor: "black", height: "100%", width: "100%", margin: "0"}} className="loading-screen">
            <img src={loadingScreen} class="loading-gif"/>
        </div>  
    );
}

export default Loading;