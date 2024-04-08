import { useContext } from "react";
import { CalcContext } from "../Helpers/context";

 export const UserInp = () =>{
    const {input} = useContext(CalcContext)

    return(
        <div className="user-inp">
            <span>
               <input type='text' value={input} disabled/>
            </span>
        </div>
    );
 }