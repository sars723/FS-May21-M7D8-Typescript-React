import {useState,useEffect} from 'react'
interface FunctionalComponentProps{
    title:string,
    subTitle?:string
}

interface Book{
title:string,
description:string,
price:string,
id:number,
imageUrl:string,
}
interface Jobs{
    title:string
}

/* const FunctionalComponent=(props:FunctionalComponentProps)=>{ */
    
    const FunctionalComponent=({title,subTitle}:FunctionalComponentProps)=>{
        const [data,setData]=useState<Jobs[]>([])

        useEffect(()=>{
            const fetchData=async()=>{
                let response=await fetch('https://strive-jobs-api.herokuapp.com/jobs?limit=20')
                let jobs=await response.json()
                setData(jobs.data)
            }
            fetchData()
        },[])
    return(
        <div>
            <h1>Functional Component</h1>
           {/*  <h2>{props.title}</h2> */}
          {/*  {console.log(data[0].title)} */}
           <h2>{title}</h2>
           <h4>{subTitle}</h4>
           <ul>
               {data&&data.map(job=>
                  <>
                   <li>{job.title}</li>
                   {/* <li>{job.description}</li> */}
                  </>
               )}
           </ul>
           {/* <h6 onClick={()=>setName("stefano")}>{name}</h6> */}
        </div>
    )
}
export default FunctionalComponent