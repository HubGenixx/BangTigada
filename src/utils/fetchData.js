export const exerciseOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
      'X-RapidAPI-Key': '0c67da6e2cmshf0f5c8ae512fd8fp17221fjsn091c538b9dfa',
    },
  };
  
  export const youtubeOptions = {
    method: 'GET',
    headers: {
    'X-RapidAPI-Key': '0c67da6e2cmshf0f5c8ae512fd8fp17221fjsn091c538b9dfa',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };
  
  export const fetchData = async (url, options) => {
    const res = await fetch(url, options);
    const data = await res.json();
  
    return data;
  };
  