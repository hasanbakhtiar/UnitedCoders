interface productType{
    img:string,
    title:string,
    price:number,
    color:string,
    stock:boolean,
}

// import { productType } from "../config";


const products:Array<productType>= [
    {
        img:"https://rukminim1.flixcart.com/image/416/416/k3ahbww0/coffee-table/g/e/q/particle-board-111119167-cardinalred-2-lakdi-the-furniture-co-original-imafmgcghhfnnbus.jpeg?q=70",
        title:"Table",
        price:70,
        color:"red",
        stock:true,
        
    },
    {
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCvnIdMnlI-eCE7fNov5kQVmPDoCD3lgrbumcQH6eWXw&s",
        title:"Sofa",
        price:420,
        color:"green",
        stock:false,
        
    },
    {
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQF_WjA1CKzEO7ASYNd0Qvn8FzQ8AjEoNtIf7oYypBM&s",
        title:"bed",
        price:120,
        color:"black",
        stock:true,
        
    },
    {
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWvMu5DhqnwuOjnAboaIxglBfyamXYkeC0YCxl7n8&s",
        title:"chair",
        price:20,
        color:"yellow",
        stock:false,
        
    },
    {
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMZtWobu4iQCLfQrGnfxFbPsyRq8xAL602vnXADjo8TA&s",
        title:"tv stand",
        price:100,
        color:"brown",
        stock:true,
        
    }
]

export default products;