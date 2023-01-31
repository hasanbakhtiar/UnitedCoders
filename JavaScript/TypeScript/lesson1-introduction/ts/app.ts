var ol:any = document.querySelector<HTMLOListElement>('ol');
var input:any = document.querySelector<HTMLInputElement>('input');
var text:string = "Hello";
// ol.innerHTML = text;

type productType={
    title:string,
    price:number
}


var product:productType[] = [
    {
        title:'pen',
        price:20
    },
    {
        title:'book',
        price:200
    },
    {
        title:'ruler',
        price:50
    }
]


var fetchProduct = ():void=>{
    let li:string="";
    product.map((item:any,i:number):void=>{
        li+=`<li>${item.title}</li>`
    })
    ol.innerHTML = li;

}
fetchProduct();




