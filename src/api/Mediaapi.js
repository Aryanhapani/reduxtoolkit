import axios from 'axios'

const UNSPLASH_KEY=import.meta.env.VITE_UNSPLASH_KEY
const PEXELS_KEY=import.meta.env.VITE_PEXELS_KEY 
const GIF_KEY=import.meta.env.VITE_GIF_KEY




 export async function fetchphoto(query,page=1,per_page=20){
  const res= await  axios.get('https://api.unsplash.com/search/photos',{
    params:{query,page,per_page},
    headers:{Authorization:`Client-ID ${UNSPLASH_KEY}`}
  })

  // console.log(res.data);


return res.data
  
}

export async function fetchvideo(query,per_page=15){
  const res= await axios.get('https://api.pexels.com/videos/search',{
    params:{query,per_page},
    headers:{Authorization:PEXELS_KEY}
  })

  return res.data
}


export async function fecthgif(query,limit=15) {
  const res=await axios.get(`https://api.giphy.com/v1/gifs/search?api_key=${GIF_KEY}&q=${query}&limit=${limit}&rating=g`)

  
  // console.log(res.data.data);
  

  return res.data.data
  


}



