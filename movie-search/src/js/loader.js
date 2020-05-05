const keyOMDb = '9514f3e9';

async function getMovieTitle(query, page = 1) {
  const url = `http://www.omdbapi.com/?s=${query}&page=${page}&apikey=${keyOMDb}`;
  const res = await fetch(url);
  const data = await res.json(); 
  console.log(data);
  return data;
}

export { getMovieTitle };