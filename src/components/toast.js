import { toast } from "react-toastify"

const notify = (text, type)=>{
    if(type === "SUCCESS"){
        toast.success(text)
    }else if(type === "ERROR"){
        toast.error(text)
    }
}
export {notify};