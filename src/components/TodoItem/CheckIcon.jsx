import { BiCheck } from "react-icons/bi";
import {BiHeart} from "react-icons/bi";
import './CheckIcon.css'
const CheckIcon = ({isFinished})=>{
    return (
        isFinished ? <div className="biCheck"><BiCheck/></div> : <div className="beHeart"><BiHeart/></div>
        
)}
export default CheckIcon;