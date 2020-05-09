const keyOMDb = '9514f3e9';

async function loadMovieRating(imdbID) {
  const url = `https://www.omdbapi.com/?i=${imdbID}&apikey=${keyOMDb}`;
  const result = await fetch(url);
  const resJson = await result.json();
  return resJson.imdbRating;
}

async function loadMovieData(query, page = 1) {
  const encoded = encodeURIComponent(query || 'dream');
  const url = `https://www.omdbapi.com/?s=${encoded}&page=${page}&apikey=${keyOMDb}`;
  const res = await fetch(url);
  const data = await res.json();

  const addRating = async (obj) => {
    const rate = await loadMovieRating(obj.imdbID);
    Object.assign(obj, { Rating: rate });
    return obj;
  };

  if (data.Response === 'True') {
    await Promise.all(data.Search.map((obj) => addRating(obj)));
    return data;
  }

  return data;
}

export default loadMovieData;
