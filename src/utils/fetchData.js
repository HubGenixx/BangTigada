export const exerciseOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
      'X-RapidAPI-Key': '9c5ae4db47msh3e4f28a5110f642p181394jsn70dfe08c497f',
    },
  };
  
  export const youtubeOptions = {
    method: 'GET',
    headers: {
    'X-RapidAPI-Key': '9c5ae4db47msh3e4f28a5110f642p181394jsn70dfe08c497f',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };
  
  export const fetchData = async (url, options) => {
    const res = await fetch(url, options);
    const data = await res.json();
  
    return data;
  };

// We are aware that API key is public this project is meant for WeMakeDev hackathon only 
