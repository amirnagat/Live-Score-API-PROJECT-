let allNews = document.querySelector("#allNews");

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "e65da03b5bmsh17fef234819a948p15c174jsnd0f8c32a3add",
    "X-RapidAPI-Host": "sport-news-live.p.rapidapi.com",
  },
};

fetch("https://sport-news-live.p.rapidapi.com/news/theguardian", options)
  .then((response) => response.json())
  .then((response) => {
    console.log(response);
    showData(response);
  });
function showData(news) {
  for (let i = 0; i < 12; i++) {
    allNews.innerHTML += `
        <div class="card bg-black text-center d-flex justify-content-center ailgn-item-baseline " style="width: 18rem;">
        <img class="w-50 align-self-center" src="./image/video/צילום_מסך_2022-07-06_164139-removebg-preview.png" class="card-img-top"  alt="">

  <div class="card-body ms-4 text-center me-5  ">
    <h5 class="card-title  text-warning">${news[i].source}</h5>
    <p class="card-text text-warning">${news[i].title}</p>
    <a href="${news[i].url}" class="btn btn-warning">Go somewhere</a>
  </div>
</div>


`;
  }
}
