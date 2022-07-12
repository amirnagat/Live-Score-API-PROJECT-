let backto = document.querySelector('#backto');

// function checkUser(){
// if (localStorage["userName"] && localStorage["lastName"]) {
//     let userNameInput = document.querySelector('#userNameInput').value;
//     document.querySelector('h4').innerHTML =`welcome ${localStorage["userName"]} ${localStorage["lastName"]}`;
//     backto.innerHTML = `<a href="index.html">Back to site  ${localStorage["userName"]} >>>></a>`;

// }
// }
// let saveButton = document.querySelector('#saveButton');
//     saveButton.addEventListener('click',function(){
//         let userNameInput = document.querySelector('#userNameInput').value;
//         let lastNameInput = document.querySelector('#lastNameInput').value;
//          localStorage.setItem("userName",userNameInput,);
//          localStorage.setItem("lastName",lastNameInput);
//          checkUser();

//     })
// function showLocal(){
  

//     let userzibi = localStorage.getItem("userName")
//     if (userzibi !== null) {
//         let x = localStorage.getItem("userName");
//         document.querySelector('h5').innerHTML = `wlecome ${x}`;

//     }else{
//        console.log("ara");
//     }

// }
// showLocal();





let userNameInput = document.querySelector("#userNameInput");
let userPasswordInput = document.querySelector("#userPasswordInput");
let btn = document.querySelector("#btn");

function store(){
    btn.addEventListener("click", function () {
        let userNameVal = userNameInput.value;
        let userPasswordVal = userPasswordInput.value;
        let user = {
            userName:userNameVal,
            password:userPasswordVal 
        };
        localStorage.setItem(userNameVal, JSON.stringify(user));
        showLocal();
      });
}
store();

function showLocal(){
 let x =   JSON.parse(localStorage.getItem(userNameInput.value));
 console.log(x);
let wlecomeUser = document.querySelector('#wlecomeUser');
wlecomeUser.append(x.userName);
wlecomeUser.style.color = "black";
// wlecomeUser.innerHTML = `wellcome ${x.userName} <button class="bg-transparent border-0 "></bu`;
}
