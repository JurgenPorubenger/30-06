// // Setup
// var collection = {
//     "2548": {
//       "album": "Slippery When Wet",
//       "artist": "Bon Jovi",
//       "tracks": [ 
//         "Let It Rock", 
//         "You Give Love a Bad Name" 
//       ]
//     },
//     "2468": {
//       "album": "1999",
//       "artist": "Prince",
//       "tracks": [ 
//         "1999", 
//         "Little Red Corvette" 
//       ]
//     },
//     "1245": {
//       "artist": "Robert Palmer",
//       "tracks": [ ]
//     },
//     "5439": {
//       "album": "ABBA Gold"
//     }
// };
// var collectionCopy = JSON.parse(JSON.stringify(collection));
// function updateRecords(id, prop, value) {
//     for (let key in collection) {
//         if(key==id) {
//           for (let key2 in collection[key]) {
//                 if (key2=="tracks"&&prop=="tracks"&&value!="") {
//                   collection[key][key2].push(value);
//                   console.log(collection[key]);
//                 } else if (key2=="tracks"&&prop=="tracks"&&value=="") {
//                   delete collection[key][key2];
//                   console.log(collection[key]);
//                 } else if (key2=="album"&&prop=="album"){
//                 collection[key]["album"]=value;
//                 console.log(collection[key]);
//               } else if (key2=="artist"&&prop=="artist"){
//                 collection[key]["artist"]=value;
//                 console.log(collection[key]);
//               } else if (!collection[key]["tracks"]) {
//                   let track = [];
//                   track.push(value);
//                   collection[key]["tracks"]=track;
//                   console.log(collection[key]);
//               }
//         }
//       }
//     }
//   }
// //   return collection;


// updateRecords(2548, "artist", "");





// let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
// let arr2 = [];
// for (let i=0; i<arr.length; i++) {
//   if (isPrime(arr[i])) {
//     arr2.push(arr[i]);
//   }
//  }
//  console.log(arraySum(arr2));

//  function isPrime(num) {
//   if(num < 2) return false;
//   for (let i=2; i<num; i++) {
//       if(num%i==0)
//           return false;
//   }
//   return num;
// }

// function arraySum(N) {
//   let total = 0;
//     for(let i = 0; i < N.length; i++) {
//       total += N[i];
//     }
//     return total;
// }
//=========================REDUSER=====================//
// const reducer = (accumulator, currentValue) => accumulator + currentValue;
// console.log(arr2.reduce(reducer));
//=========================REDUSER=====================//

// function Person(name, surname, massages) {
//   let _massages = massages;
//   const self = this;
//   this.getMassage = () => console.log(_massages);
//   this.setMassage = (a) => _massages.push(a);
//   this.obj = {
//     a: 5,
//     b: function () {
//       return "this.arms";
//     }
//   };
//   this.legs = 2;
//   this.arms = 2;
//   this.name = name;
//   this.surname = surname;
//   this.fullname = () => this.name + ' ' + this.surname;
  
// }
// let Person1 = new Person("Anton", "Mishkin", []);
// Person1.setMassage("klkl");


// // Person1.getMassage();
// // Person1.obj.b();
// let getB = Person1.obj.b;
// getB.bind()
// console.log(getB());
// // Person1.obj.b();






// function Cars(brand, model, value, price) {
//   let _price = price;
//   this.getPrice = () => console.log(_price);
//   this.setPrice = (a) => _price = a;
//   this.brand = brand;
//   this.model = model;
//   this.value = value;
//   this.fullcar = () => this.brand + ' ' + this.model + ' value ' + this.value ;
// }

// let Mersedes = new Cars("Mersedes", "s500", 60000);
// Mersedes.setPrice('2000$');
// Mersedes.getPrice();
// // console.log(Mersedes.fullcar());

// let Audi = new Cars("Audi", "A6", 20000);
// Audi.setPrice('5000$');
// Audi.getPrice();
// console.log(Audi.fullcar());


// function bind(func, context) {
//   return function() {
//     return func.apply(context, arguments);
//   };
// }

// var user = {
//   firstName: "Вася",
//   sayHi: function() {
//     alert( this.firstName );
//   }
// };

// setTimeout(bind(user.sayHi, user), 1000);

// let buy = document.querySelector('#first_number').value;
// let sell = document.querySelector('#second_number').value;
// let plus = document.querySelector('#plus');
// let minus = document.querySelector('#minus');
// let inStock = document.querySelector('#equal');
// let output = document.querySelector('#result');

// function pl () {
//   plus.addEventListener('click', function() {
//     console.log(this.kupit.value+this.prodat.value);
//     })
// }
// let pl2 = pl.bind(Store);



// function Store(storeTitle,kupit, prodat ,stock, outerMassage) {
  // let _massages = stock;
  // const self = this;
  // this.getMassage = () => console.log(_massages);
  // this.setMassage = (a) => plus.addEventListener('click',function(){_massages.push(a.value);});
//   this.storeTitle = storeTitle;
//   this.kupit = +kupit;
//   this.prodat = +prodat;
//   this.stock = stock;
//   this.addToStock = pl; 
//   this.outerMassage=outerMassage;
// }

// let Tamara = new Store("Tamara", buy, sell, [], output );
// Tamara.addToStock();

// Tamara.setMassage(buy);
// Tamara.getMassage();



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



let egg = {price:20, quantity:10}
let mil = {price:11, volume:12,}
let bre = {price:5, quantity:1,}
let saus = {price:28, weight:1,}

function Store(storeTitle,eggs,milk,bread,sausage) {
  this.storeTitle = storeTitle;
  this.eggs=eggs;
  this.milk=milk;
  this.bread=bread;
  this.sausage=sausage;
  this.addMilk=function (){
    console.log(this.milk.price+=this.milk.price);
    console.log(this.milk.volume+=this.milk.volume);
  }
}



let checkboxOne = document.querySelector("#one");
let checkboxTwo = document.querySelector("#two");
let checkboxThree = document.querySelector("#three");
let checkboxFour = document.querySelector("#four");
let label1 = document.querySelector("#labelOne");
let label2 = document.querySelector("#labelTwo");
let label3 = document.querySelector("#labelThree");
let label4 = document.querySelector("#labelFour");
let mass = [checkboxOne,checkboxTwo,checkboxThree,checkboxFour];


label1.addEventListener('change',function(e) {
    check(mass);
    if (e.type) {
        console.log("kmko");

    }
});
label2.addEventListener('change',function(e) {
    check(mass);
    console.log(label2);

});
label3.addEventListener('change',function(e) {
    check(mass);
    console.log(label3);

});
label4.addEventListener('change',function(e) {
    check(mass);
    console.log(label4);

});


function check (a) {
  for (let i = 0; i < a.length; i++) {
    if (a[i].checked) {
      if(a[i].id==="one") {
      }
      else if(a[i].id==="two") {
      }
      else if(a[i].id==="three") {
      }
      else if(a[i].id==="four") {
      }
    }
    else {
      console.log("not Changed")
    }
  }
}
 

let prodat = document.querySelector("#butSell").addEventListener('click', function(e) {
  e.preventDefault();
    // check(mass);
})

let Tamara = new Store("Tamara", egg, mil, bre, saus);
Tamara.addMilk();
// console.log(checkbox1.lastElementChild);


