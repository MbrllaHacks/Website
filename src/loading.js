import loadingScreen from "./Assets/loading.gif"
import './style.css';


function Loading() {
    return (
        <div className="loading-screen">
            <img src={loadingScreen} class="loading-gif"/>
        </div>  
    );
}

export default Loading;