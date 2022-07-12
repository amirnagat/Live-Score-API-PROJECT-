// create
let allGames = document.querySelector("#allGames");
let input = document.querySelector("#input");
let data = [];

// const options = {
//   method: "GET",
//   headers: {
//     "X-RapidAPI-Key": "e65da03b5bmsh17fef234819a948p15c174jsnd0f8c32a3add",
//     "X-RapidAPI-Host": "sports-live-scores.p.rapidapi.com",
//   },
// };

// fetch("https://sports-live-scores.p.rapidapi.com/football/live", options)
//   .then((response) => response.json())
//   .then((data) => {
//     let allMatches = data.matches;
//     console.log(allMatches);
//     showData(allMatches)
//   })
//   .catch((err) => console.error(err));
// const options = {
//   method: "GET",
//   headers: {
//     "X-RapidAPI-Key": "5de0722db1msh3b14a48dea3e7a1p15c8bajsn2288cf021295",
//     "X-RapidAPI-Host": "sports-live-scores.p.rapidapi.com",
//   },
// };

// fetch("https://sports-live-scores.p.rapidapi.com/football/live", options)
//   .then((response) => response.json())
//   .then((response) => {
//     let data = response.matches;
//     console.log(data);
//     showData(data);
//     input.addEventListener("keyup", function () {
//       filterIt(data);
//     });
//   });
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '68f13ec9f7msh30e1352979398b4p1c83f5jsnceb75e9f8b37',
		'X-RapidAPI-Host': 'sports-live-scores.p.rapidapi.com'
	}
};

fetch('https://sports-live-scores.p.rapidapi.com/football/live', options)
	.then(response => response.json())
	.then(response => {
    let data = response.matches;
    console.log(data);
    showData(data);

    input.addEventListener("keyup", function () {
            filterIt(data);
          });
  })


// showData function
function showData(match) {
  for (let i = 0; i < match.length; i++) {
    allGames.innerHTML += `<h5 class="text-center text-white ">${match[i].League}</h5>
    <p class="text-warning text-center">${match[i].Status}</p>
        <div class="w-75 text-center mb-3 m-auto rounded-5 border-bottom border-2 border-start border-warning d-flex justify-content-evenly align-items-center m-">
        <p class = "text-white col-4 ">${match[i]["Away Team"]}</p>
        <p class = "text-white col-1">${match[i]["Away Score"]}</p>
        <p class = text-white col-2>:</p>
        <p class = "text-white col-1">${match[i]["Home Score"]}</p>
        <p class = "text-white col-4">${match[i]["Home Team"]}</p>
        </div>
        `;
  }
}
// filter function
function filterIt(userInput) {
  allGames.innerHTML = "";
  let inputValue = input.value.toLowerCase();
  let filterMatch = userInput.filter(function (match) {
    return match["Home Team"].toLowerCase().startsWith(inputValue);
  });
  console.log(filterMatch);
  showData(filterMatch);
}

