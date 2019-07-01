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

function Person(name, surname, massages) {
  let _massages = massages;
  const self = this;
  this.getMassage = () => console.log(_massages);
  this.setMassage = (a) => _massages.push(a);
  this.obj = {
    a: 5,
    b: function () {
      return "this.arms";
    }
  };
  this.legs = 2;
  this.arms = 2;
  this.name = name;
  this.surname = surname;
  this.fullname = () => this.name + ' ' + this.surname;
  
}
let Person1 = new Person("Anton", "Mishkin", []);
Person1.setMassage("klkl");
Person1.setMassage("lplplp");

// Person1.getMassage();
// Person1.obj.b();
let getB = Person1.obj.b;
getB.bind()
console.log(getB());
// Person1.obj.b();

// function Cars(brand, model, value, price) {
//   let _price = price;
//   this.getPrice = () => console.log(_price);
//   this.setPrice = (a) => _price = a;
//   this.value = value;
//   this.brand = brand;
//   this.model = model;
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









