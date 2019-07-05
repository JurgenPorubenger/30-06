




let expanded = false;
let firstForm = document.querySelector(".sell").addEventListener('click', function() {
  let sel = document.querySelector("#checkboxes");
  if (!expanded) {
    sel.style.display = "block";
    expanded = true;
  } else {
    sel.style.display = "none";
    expanded = false;
  }
});
let expanded2 = false;
let secondForm = document.querySelector(".buy").addEventListener('click', function() {
  let sel2 = document.querySelector("#checkboxes2");
  if (!expanded2) {
    sel2.style.display = "block";
    expanded2 = true;
  } else {
    sel2.style.display = "none";
    expanded2 = false;
  }
});




let checkboxOne = document.querySelector("#one");
let checkboxTwo = document.querySelector("#two");
let checkboxThree = document.querySelector("#three");
let checkboxFour = document.querySelector("#four");

let spanEggs = document.querySelector("#dispEggs");
let spanMilk = document.querySelector("#dispMilk");
let spanBread = document.querySelector("#dispBread");
let spanSaus = document.querySelector("#dispSaus");
let storeName = document.querySelector("#storeName");


let egg = {price:20, quantity:1};
let mil = {price:11, quantity:1,};
let bre = {price:5, quantity:1,};
let saus = {price:28, quantity:1,};


function Store(storeTitle,eggs,milk,bread,sausage) {
  let selfThis = this;
  let buttonSellListen = document.querySelector("#butSell").addEventListener('click', function(e) {
        e.preventDefault();
        selfThis.getChecked();
        selfThis.displayConclusion();
    });
  let buttonBuyListen = document.querySelector("#butBuy").addEventListener('click', function(e) {
        e.preventDefault();
        selfThis.getCheckedBuy();
        selfThis.displayConclusion();
    });

  this.getChecked=function () {
      checkboxOne.checked?this.addProduct(eggs,0):console.log("not checked1");
      checkboxTwo.checked?this.addProduct(milk,1):console.log("not checked2");
      checkboxThree.checked?this.addProduct(bread,2):console.log("not checked3");
      checkboxFour.checked?this.addProduct(sausage,3):console.log("not checked4");
  };

  this.getCheckedBuy=function () {
      checkboxOne.checked?this.subtractProduct(eggs,0):console.log(this);
      checkboxTwo.checked?this.subtractProduct(milk,1):console.log("not checked2");
      checkboxThree.checked?this.subtractProduct(bread,2):console.log("not checked3");
      checkboxFour.checked?this.subtractProduct(sausage,3):console.log("not checked4");
  };

  this.addProduct=function (product, index) {
      this.stock[index].price+=product.price;
      this.stock[index].quantity+=product.quantity;
  };

  this.subtractProduct=function (product, index) {
    if (this.stock[index].price>=product.price&&this.stock[index].price){
      this.stock[index].price-=product.price;
      this.stock[index].quantity-=product.quantity;
    } else {
      alert("Закажите товар!");
      console.log("Закажите товар!");
    }
  };

  this.displayConclusion= function () {
      storeName.innerHTML=" "+this.storeTitle;
      spanEggs.innerHTML=this.stock[0].quantity+"шт. = "+this.stock[0].price;
      spanMilk.innerHTML=this.stock[1].quantity+"л. = "+this.stock[1].price;
      spanBread.innerHTML=this.stock[2].quantity+"бух. = "+this.stock[2].price;
      spanSaus.innerHTML=this.stock[3].quantity+"кг. = "+this.stock[3].price;
  };
    this.isMoreThanNull=function (product, index) {
        this.stock[index].price-=product.price;
        this.stock[index].quantity-=product.quantity;
    };

  this.stock=[{price:0,quantity:0},{price:0,quantity:0},{price:0,quantity:0},{price:0,quantity:0}];
  this.storeTitle = storeTitle;
  this.eggs=eggs;
  this.milk=milk;
  this.bread=bread;
  this.sausage=sausage;

}

let Tamara = new Store("Тамара", egg, mil, bre, saus);












