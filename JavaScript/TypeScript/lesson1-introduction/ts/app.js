var ol = document.querySelector('ol');
var input = document.querySelector('input');
var text = "Hello";
var product = [
    {
        title: 'pen',
        price: 20
    },
    {
        title: 'book',
        price: 200
    },
    {
        title: 'ruler',
        price: 50
    }
];
var fetchProduct = function () {
    var li = "";
    product.map(function (item, i) {
        li += "<li>".concat(item.title, "</li>");
    });
    ol.innerHTML = li;
};
fetchProduct();
