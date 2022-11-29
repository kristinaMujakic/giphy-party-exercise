const form = document.querySelector('#searchForm');
const input = document.querySelector('.searchTerm');
const submitBtn = document.querySelector('.submitBtn');
const removeBtn = document.querySelector('.removeBtn');
const giphyContainer = document.querySelector('.giphyContainer');

async function getGiphyBySearch(term) {

  try {
    const res = await axios.get("http://api.giphy.com/v1/gifs/search", {
      params: {
        q: term,
        api_key: "TpakPWSkmsyQxA1d2ptPdeCWxJhlI7Hf"
      }
    });

    const img = document.createElement('img');
    let randomIdx = Math.floor(Math.random() * (res.data.data).length);
    img.src = res.data.data[randomIdx].images.original.url;

    giphyContainer.append(img);

  } catch (e) {
    console.log(e);
    alert('Giphy not found!');
  }
}

submitBtn.addEventListener('click', function (e) {
  e.preventDefault();
  getGiphyBySearch(input.value);
  input.value = '';
});


removeBtn.addEventListener('click', function (e) {
  e.preventDefault();
  giphyContainer.remove();
});