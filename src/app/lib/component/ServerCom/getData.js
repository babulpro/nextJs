import React from 'react';

const getData = async(pageName)=>{
    try{
        let res= await fetch(`http://localhost:3000/api/getData/${pageName}`, { method: "GET" } ,{cache: 'force-cache' })
        const data = await res.json()
        return data.data

    }
    catch(e){
        return []
    }
}
export default getData;