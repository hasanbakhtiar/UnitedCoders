import { langData } from "../data/lang.js";
const langBtn = document.querySelector('#lang-btn');
const navItem = document.querySelectorAll('.nav-link');
const heroHeader = document.querySelector('.display-5')
const heroText = document.querySelector('.lead');

if (localStorage.getItem('langKey') === null) {
    localStorage.setItem('langKey','en')
    
}else{
    if (localStorage.getItem('langKey') === "en") {

        for(let index in langData.en){
            navItem[index].innerHTML = langData.en[index];
        }
    
        langBtn.innerHTML = 'AZ';
        heroHeader.innerHTML = langData.heroHeaderEn;
        heroText.innerHTML = langData.heroTextEn;
    
        
        
    }else{
        for(let index in langData.az){
            navItem[index].innerHTML = langData.az[index];
        }
        langBtn.innerHTML = 'EN';
        heroHeader.innerHTML = langData.heroHeaderAz;
        heroText.innerHTML = langData.heroTextAz;
        
        
    }
    
}

    const changeLang = ()=>{
        if (langBtn.innerHTML === 'AZ') {
            for(let index in langData.az){
                navItem[index].innerHTML = langData.az[index];
            }
        
            localStorage.setItem('langKey',"az");

            langBtn.innerHTML = 'EN';
            heroHeader.innerHTML = langData.heroHeaderAz;
            heroText.innerHTML = langData.heroTextAz;
        }else{
            for(let index in langData.en){
                navItem[index].innerHTML = langData.en[index];
            }
            localStorage.setItem('langKey',"en");

            
            langBtn.innerHTML = 'AZ';
            heroHeader.innerHTML = langData.heroHeaderEn;
            heroText.innerHTML = langData.heroTextEn; 
    
        }
    }
    
    langBtn.onclick=changeLang;






const modeBtn = document.querySelector('#mode-btn');
const nav = document.querySelector('nav');
const allmode = document.querySelector('#allmode');


const mode =()=>{
        if (nav.className === 'navbar navbar-expand-lg bg-dark navbar-dark') {
            nav.className = 'navbar navbar-expand-lg bg-light navbar-light';
            modeBtn.className = 'btn btn-dark ms-3';
            allmode.className = 'light';
            modeBtn.innerHTML = "🌙";

        }else{
            nav.className = 'navbar navbar-expand-lg bg-dark navbar-dark';
            modeBtn.className = 'btn btn-light ms-3';
            allmode.className = 'dark';

            modeBtn.innerHTML = "🌞";

            
        }
}

modeBtn.onclick = mode;