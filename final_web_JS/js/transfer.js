const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'e65da03b5bmsh17fef234819a948p15c174jsnd0f8c32a3add',
		'X-RapidAPI-Host': 'transfermarket.p.rapidapi.com'
	}
};

fetch('https://transfermarket.p.rapidapi.com/transfers/list-by-club?id=631&seasonID=2020', options)
	.then(response => response.json())
	.then(response => {
        let transferData = response.currentSeason.transferArrivals;
        console.log(transferData);
        showData(transferData);
    })
	
    let allTransfer = document.querySelector('#allTransfer')
    // show transfers cards functiion
    function showData(data){
        for (let i = 0; i < data.length; i++) {
            
         allTransfer.innerHTML += `
         <div class="container d-flex text-warning justify-content-around align-items-baseline ">
         <p>Player</p><p>Name</p><p>Club</p><p>Move To</p>
         </div>
         <div class="container d-flex mb-3 border-start  border-4 border-warning  justify-content-around align-items-center " style="height:120px ;" >
       <img class="img-fluid  rounded-circle  " src="${data[i].playerImage}" alt="" style="height:80px ;" >
       <p class="text-warning">${data[i].playerName}</p>
       <p class="text-warning">${data[i].clubName}</p>
       <img class="img-fluid rounded mt-2" src="${data[i].clubImage}" alt="" style="height:80px ;" >

</div>`
}        
}
