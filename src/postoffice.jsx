import React,{useEffect,useState} from 'react'

const Post=()=>{
    const [data,setData]=useState(null)
    const GetPostData=()=>{
        fetch('https://api.postalpincode.in/pincode/301001')
        .then((res)=>res.json())
        .then((res)=>setData(res))

    }
    useEffect(()=>{
        GetPostData();
    },[]);
    return(
        <div>
            {Array.isArray(data) && data[0]?.PostOffice?.map((items,i)=>(
                <div>
                    <p>{items.Name}</p>
            
        </div>
            ))}
            </div>
    )}
export default Post;