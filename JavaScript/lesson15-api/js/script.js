// const ol = document.querySelector('ol');
const row = document.querySelector('.row');
 

const fetchApi = ()=>{
    fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
    .then(data=>{
        let card="";
        data.map((fd,i)=>{
            // return li+=`<li>${fd.title}</li>`
            return card+=`
            <div class="col-12 col-sm-6 col-md-4">
            <div class="card" >
            <img height="300" src="${fd.image}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${fd.title.substring(0,10)}...</h5>
              <p class="card-text">${fd.description.substring(0,30)}...</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
          </div>
          
          `
        })
        row.innerHTML = card;
    })
    .catch(err=>console.log(err))
}

fetchApi();