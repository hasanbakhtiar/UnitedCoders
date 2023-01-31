import { langData } from "../data/lang.js";
const langBtn = document.querySelector('#lang-btn');
const navItem = document.querySelectorAll('.nav-link');



const changeLang = ()=>{
    if (langBtn.innerHTML === 'AZ') {
        for(let index in langData.az){
            navItem[index].innerHTML = langData.az[index];
        }
        langBtn.innerHTML = 'EN';
    }else{
        for(let index in langData.en){
            navItem[index].innerHTML = langData.en[index];
        }

        langBtn.innerHTML = 'AZ';

    }
}

langBtn.onclick=changeLang;


const modeBtn = document.querySelector('#mode-btn');
const nav = document.querySelector('nav');

const mode =()=>{
        if (nav.className === 'navbar navbar-expand-lg bg-dark navbar-dark') {
            nav.className = 'navbar navbar-expand-lg bg-light navbar-light';
            modeBtn.className = 'btn btn-dark ms-3';
            modeBtn.innerHTML = "🌙";

        }else{
            nav.className = 'navbar navbar-expand-lg bg-dark navbar-dark';
            modeBtn.className = 'btn btn-light ms-3';
            modeBtn.innerHTML = "🌞";

            
        }
}

modeBtn.onclick = mode;