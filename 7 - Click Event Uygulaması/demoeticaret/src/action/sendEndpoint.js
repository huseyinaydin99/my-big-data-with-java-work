import axios from "axios"
export function sendPost({ deviceId,click,session }) {
    axios.post("http://localhost:8080/click",
    {
        deviceId, click,session
    }
    )    
}