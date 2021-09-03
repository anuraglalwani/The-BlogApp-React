import { useEffect,useState } from "react";

const useFetch = (url) => {

    const [data,setdata]=useState(null);
    const[isPending,setIsPending]=useState(true);
    const[error,setError]=useState(null);

    useEffect(()=>{
        const abortCtrl= new AbortController();
        console.log("useffect ran");
        fetch(url,{signal:abortCtrl.signal})
        .then(res=>{
             if(!res.ok){
                console.log(res);
                 throw Error("could not fetch the data for that resource")
                
             }
            
            return res.json()
        })
        .then(data=>{
            setdata(data);
            setIsPending(false);
            setError(null);
         })
         .catch(err=>{
             if(err==="AbortError"){
                console.log(err)
             }
             else{
                setError(err.message)
                setIsPending(false)
             }
         
         })
         
         return ()=>abortCtrl.abort();

    },[url])



    return {data,isPending,error};
}
 
export default useFetch;