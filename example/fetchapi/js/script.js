const row = document.querySelector(".row");
const btn = document.querySelectorAll("button");
let countStart = 0;
let countEnd = 50;

const fetchApi = async () => {
  const comingData = await fetch("https://restcountries.com/v3.1/all");
  const countryData = await comingData.json();
  let card = "";
  for (let i = countStart; i < countEnd; i++) {
    card += `
        <div class="col-12 col-sm-6 col-md-4">
           <div class="card">
               <img height="300" src="${
                 countryData[i].flags.png
               }" class="card-img-top" alt="...">
               <div class="card-body">
                 <h5 class="card-title">${i + 1 }->${
                    countryData[i].name.common
                 }</h5>
                 <p class="card-text">${countryData[i].capital}</p>
               </div>
             </div>
        </div>
       `;
  }
  row.innerHTML = card;
};

btn[0].onclick = () => {
  countStart = 0;
  countEnd = 50;
  fetchApi();
};
btn[1].onclick = () => {
  countStart = 50;
  countEnd = 100;
  fetchApi();
};
btn[2].onclick = () => {
  countStart = 100;
  countEnd = 150;
  fetchApi();
};
btn[3].onclick = () => {
  countStart = 150;
  countEnd = 200;
  fetchApi();
};
btn[4].onclick = () => {
  countStart = 200;
  countEnd = 250;
  fetchApi();
};
fetchApi();
