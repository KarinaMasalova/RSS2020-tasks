function saveInputValue() {
  let res;
  const val = document.getElementById('search-bar').value;
  if (val !== '') res = val;
  else return false;
  console.log(res);
  return res;
}

export default saveInputValue;
