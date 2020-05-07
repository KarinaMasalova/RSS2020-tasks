const keyOMDb = '9514f3e9';

async function loadMovieData(query, page = 1) {
  const encoded = encodeURIComponent(query || 'dream');
  const url = `http://www.omdbapi.com/?s=${encoded}&page=${page}&apikey=${keyOMDb}`;
  const res = await fetch(url);
  const data = await res.json();
  return data;
}

export { loadMovieData };