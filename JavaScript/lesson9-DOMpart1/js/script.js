// Selectors
// document.getElementsByTagName('h1')[0].innerHTML = "<i>Bye One</i>";
// document.getElementsByTagName('h1')[0].innerText = "<i>Bye Two</i>";

// document.getElementById('test').innerHTML = "Bye";

// for(let i = 0; i<3;i++){
//     document.getElementsByClassName('text')[i].innerHTML = `${i+1} new text`;
// }

// QuerySelectors
// document.querySelector('.text').innerHTML = "changed";
// for(let i = 0; i<3;i++){
// document.querySelectorAll('.text')[i].innerHTML = "changed";
// }

// const countryName = document.querySelector('h1');
// const btn = document.querySelector('button');

// const capital =()=>{
//     if (countryName.innerHTML === "England") {
//         countryName.innerHTML = "London";
//         btn.innerHTML = "Country";
//     }else{
//         countryName.innerHTML = "England";
//         btn.innerHTML = "Capital";

//     }
// }

// btn.addEventListener('click',capital);
// document.body.style.backgroundColor = '#757575';
// import { product } from "../data/productsdata.js";
// const row = document.querySelector(".row");

// let card = "";
// product.map((item) => {
//   return (card += `
//  <div class="col-12 col-sm-6 col-md-4">
//  <div class="card h-100" >
//  <img  src="${item.image}" class="card-img-top" alt="...">
//  <div class="card-body">
//    <h5 class="card-title">${item.title.substring(0,10)}</h5>
//    <p class="card-text">${item.description.substring(0,30)}...</p>
//  </div>
// </div>`
//  </div>
//    `);
// });
// row.innerHTML = card;
