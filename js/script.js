// Changing quantity values


 $(document).ready(function () {

     GetTotal();
     GetQuantity();
  });
  
var pluses = document.getElementsByClassName('fa-plus-square');
for (plus of pluses) {
    const itemPrice = plus.closest('span').nextElementSibling.innerText;
    var currentQantity = Number(plus.previousElementSibling.value);
    plus.addEventListener('click', function () {
		var x = Number(event.target.previousElementSibling.value);
        currentQantity = x + 1;
        this.previousElementSibling.value = currentQantity;
        this.closest('span').nextElementSibling.innerText = Number(currentQantity * itemPrice);

       GetTotal();
    })
}

var minuses = document.getElementsByClassName('fa-minus-square');
for (minus of minuses) {
    const itemPrice = minus.closest('span').nextElementSibling.innerText;
    var currentQantity = Number(minus.nextElementSibling.value);
    minus.addEventListener('click', function () {
        currentQantity = currentQantity - 1;
        this.nextElementSibling.value = currentQantity;
        this.closest('span').nextElementSibling.innerText = Number(currentQantity * itemPrice);
        if (this.nextElementSibling.value < 1) {
            this.closest('div').parentElement.remove();
        }
		 GetTotal();
         GetQuantity() ;
    });
}


 function GetTotal() {
	   var Total = document.getElementById('totalPrice');
        var itemPrices = document.getElementsByClassName('item-price');       
        var sum = 0;     
        for (var i = 0; i < itemPrices.length; i++) {
          
            sum = sum + Number(itemPrices[i].innerText);
            Total.innerText = 'Total : ' + sum + ' TND';
        }

        var Item = document.getElementsByClassName('item') ;
        if (Item.length == 0) {
            Total.innerText = 'No Product Selected!'
            document.getElementById('empty-cart').style.display = "block";
            document.getElementById('headerQty').style.display = "none" ;
            document.getElementById('headerPrice').style.display = "none" ;
        }
 };

 function GetQuantity() {
    var ItemQ = document.getElementsByClassName('item').length ;
    document.getElementById('product-quantity').innerText = ItemQ ;

 }
// Delete element

var trashs = document.getElementsByClassName("fa-trash-alt");


for (trash of trashs) {
    trash.addEventListener('click', function (e) {
        this.parentElement.parentElement.remove();
        var deletedElement = (event.target.previousElementSibling)
        var sum = sum - Number(deletedElement.innerText) ;
        GetTotal() ;
        GetQuantity();
    })
}

// Add to favorite

var hearts = document.getElementsByClassName('fa-heart');

for (heart of hearts) {
    heart.addEventListener('click', function (e) {
        this.classList.toggle('activated');
    });
};