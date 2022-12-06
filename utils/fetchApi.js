import axios from "axios";

const baseUrl='https://bayut.p.rapidapi.com'
// headers: {
//     'X-RapidAPI-Key': '79114d0e2bmshfadaa4f8280be44p17f9bcjsnef4a89a93412',
//     'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
//   }

export const fetchApi=async (url)=>{
    const response=await axios.get((url),{
        
    })
}