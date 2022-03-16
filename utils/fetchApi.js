import axios from 'axios';


export const baseURL = 'https://bayut.p.rapidapi.com';



export const fetchApi = async (url) => {
    
    const {data} = await axios.get((url),{
        
        headers: {
            'x-rapidapi-host': 'bayut.p.rapidapi.com',
            'x-rapidapi-key': '047b9a9238mshbb63d79c8b4e70bp1eaec4jsn1f8362ad1533'
          },
          
         
    })
    
    return data;
}