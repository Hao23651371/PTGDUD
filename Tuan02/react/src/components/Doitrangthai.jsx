import {useState} from "react";
function Doitrangthai ({trangthai}){
    const [mauhientai,doimau] = useState(trangthai);

    const trangthaidk =() =>{
        if(mauhientai == "online"){
            return {background: "green", color:"red"}}
         if(mauhientai == "offline"){
            return {background: "red",color: "blue"}
    }
};
    const loaidk =()=>{
        if(mauhientai=="online"){
            doimau("busy");
        }
        if(mauhientai=="busy"){
            doimau("offline")
        }
    };

    return (
        <div>
            <span style={{...trangthaidk(), padding: "10px", borderRadius: "10px" }}>
                {mauhientai}

            </span>
            <button onClick={loaidk} >
                dôi màu

            </button>
              

        </div>

    );


    

}
export default Doitrangthai ;