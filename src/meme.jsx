import React,{useEffect,useState} from 'react'

const Home=()=>{
    const [data,setState]=useState(null)
    const GetHomeData=()=>{
        fetch('https://api.imgflip.com/get_memes')
        .then((res)=>res.json())
        .then((res)=>setState(res.data))

    }
    useEffect(()=>{
        GetHomeData();
    },[]);
    return(
        <div style={{display:"flex",gap:"20px"}}>
            {data?.memes?.map((item,i)=>(
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
export default Home