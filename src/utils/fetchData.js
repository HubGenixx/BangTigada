export const exerciseOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
      'X-RapidAPI-Key': '682c864e0emsh1f7efcfdca4b713p127475jsnb02fbdda933b',
    },
  };
  
  export const youtubeOptions = {
    method: 'GET',
    headers: {
    'X-RapidAPI-Key': '682c864e0emsh1f7efcfdca4b713p127475jsnb02fbdda933b',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };
  
  export const fetchData = async (url, options) => {
    const res = await fetch(url, options);
    const data = await res.json();
  
    return data;
  };
