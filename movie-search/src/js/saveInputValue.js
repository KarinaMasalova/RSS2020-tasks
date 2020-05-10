function saveInputValue() {
  let res;
  const val = document.getElementById('search-bar').value;
  if (val !== '') res = val;
  else return false;
  return res;
}

export default saveInputValue;
