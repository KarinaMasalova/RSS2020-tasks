const keyOMDb = '9514f3e9';
const yandexKey = 'trnsl.1.1.20200510T193539Z.bff37935debe481e.344c10072c40211dd1d8a5c7619e7466866eeadf';

async function loadMovieRating(imdbID) {
  const url = `https://www.omdbapi.com/?i=${imdbID}&apikey=${keyOMDb}`;
  const result = await fetch(url);
  const resJson = await result.json();
  return resJson.imdbRating;
}

const getLang = async (text) => {
  const url = `https://translate.yandex.net/api/v1.5/tr.json/detect?key=${yandexKey}&text=${text}`;
  const result = await fetch(url);
  const json = await result.json();
  console.log(json.lang);
  return json.lang;
};

const getTranslation = async (text) => {
  const lang = await getLang(text);
  const url = `https://translate.yandex.net/api/v1.5/tr.json/translate?key=${yandexKey}&text=${text}&lang=${lang}-en`;
  const result = await fetch(url);
  const json = await result.json();
  console.log(json);
  return json.text[0];
};

const addRating = async (obj) => {
  const rate = await loadMovieRating(obj.imdbID);
  Object.assign(obj, { Rating: rate });
  return obj;
};

async function loadMovieData(query, page = 1) {
  const encoded = encodeURIComponent(query || 'dream');
  // сonst lang = await getLang(encoded);
  getTranslation(encoded);
  // if (lang === 'en')
  const url = `https://www.omdbapi.com/?s=${encoded}&page=${page}&apikey=${keyOMDb}`;
  const res = await fetch(url);
  const data = await res.json();

  if (data.Response === 'True') {
    await Promise.all(data.Search.map((obj) => addRating(obj)));
    return data;
  }

  return data;
}

export default loadMovieData;
