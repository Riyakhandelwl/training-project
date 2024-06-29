import React, { useEffect, useState } from "react";
const Phone=()=>{
    const [data,setState]=useState(null)
    const GetHomeData=()=>{
        fetch('https://api.restful-api.dev/objects')
        .then((res)=>res.json())
        .then((res)=>setState(res));

    
     useEffect(()=>{
        GetHomeData();
    },[]);
    

    const[name,setName]=useState("")
    const[color,setColor]=useState("")
    const[price,setPrice]=useState("0")

    const AddData=(id)=>{
        fetch("https://api.restful-api.dev/objects/,{
            method:"POST",
            
            <body:JSON className="stringify"></body:JSON>
        }
        ")
    }

    // console.log(data);
    return(
        <div style={{display:"flex",gap:"20px"}}>
            {data?.map((item,i)=>(
                <>
                <div style={{border:"1px solid black"}}>
                    <img src={item.url} width={"200px"} height={"200px"}/>
                    <h2>{item.name}</h2>

                </div>
                </>
            ))}
            
        </div>

    
        )
}
export default Phone;