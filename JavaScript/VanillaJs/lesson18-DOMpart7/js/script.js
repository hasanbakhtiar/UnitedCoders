// const info = document.querySelector('p');
// const test = document.querySelector('ul');
// info.innerHTML = test.nodeName;
// info.innerHTML = test.nodeType;
// info.innerHTML = test.firstChild.nodeValue;

// info.innerHTML = test.lastChild.firstChild.nodeValue
// info.innerHTML = test.lastChild.parentNode.firstChild.firstChild.nodeValue;
// info.innerHTML = test.lastChild.parentNode.childNodes[1].firstChild.nodeValue;

// const h4 = document.createElement('h4');
// const text = document.createTextNode('hello node');
// h4.appendChild(text);
// document.body.appendChild(h4);


const input = document.querySelector('input');
const btn = document.querySelector('button');
const ol  = document.querySelector('ol');
btn.onclick=()=>{
    let li = document.createElement('li');
    li.innerHTML = input.value;
    ol.appendChild(li);
    input.value = "";
    li.onclick =()=>{
        li.style.textDecoration = 'line-through'
    }
   li.ondblclick=()=>{
    li.remove()
   }

}


