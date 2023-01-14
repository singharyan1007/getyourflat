import axios from "axios";

export const baseUrl='https://bayut.p.rapidapi.com'


export const fetchApi=async (url)=>{
    const {data}=await axios.get(url,{
        headers: {
                'X-RapidAPI-Key': '79114d0e2bmshfadaa4f8280be44p17f9bcjsnef4a89a93412',
                'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
              }

    })
    return data;
}




// 