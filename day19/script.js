const array = [
   {
      id: 1,
      productName: "Phone",
      description: "loremloremlorem",
      price: 1000,
      currency: "USD",
      address: {
         city: "Washington",
         postalCode: 2000,
      },
      discountPercent: 20,
      rating: 3,
   },
   {
      id: 2,
      productName: "Phone2",
      description: "loremloremlorem",
      price: 10000,
      currency: "MXN",
      address: {
         city: "Mexico",
         postalCode: 3000,
      },
      discountPercent: 30,
      rating: 4,
   },
   {
      id: 3,
      productName: "Phone3",
      description: "loremloremlorem",
      price: 15000,
      currency: "NPR",
      address: {
         city: "Kathmandu",
         postalCode: 44600,
      },
      discountPercent: 70,
      rating: 1,
   },
   {
      id: 4,
      productName: "Phone4",
      description: "loremloremlorem",
      price: 1000,
      currency: "MXN",
      address: {
         city: "Mexico",
         postalCode: 1000,
      },
      discountPercent: 20,
      rating: 2,
   },
   {
      id: 5,
      productName: "Phone5",
      description: "loremloremlorem",
      price: 50000,
      currency: "NPR",
      address: {
         city: "Pokhara",
         postalCode: 10000,
      },
      discountPercent: 245,
      rating: 4,
   },
   {
      id: 6,
      productName: "Phone6",
      description: "loremloremlorem",
      price: 1000,
      currency: "USD",
      address: {
         city: "Washington",
         postalCode: 1000,
      },
      discountPercent: 65,
      rating: 4.6,
   },
];

// Delete -> backend api call -> database delete - filter method

// console.log(array)


const deleteProduct = (id) => {
   const filteredProducts = array.filter(function (item) {
      return item.id !== id;
   })

   console.log('filteredProducts', filteredProducts)
}


// deleteProduct(1);
// console.log('1')

// setTimeout(() => {
//    console.log('2')
// }, 2)

// setTimeout(() => {
//    console.log('2')
// }, 1)
// console.log('3')
// console.log('4')

// Syncronous Programming/ Async Programming
// callback functions

const addition = (a, b, callback) => {
   setTimeout(() => {
      callback(a + b, nextCallback);
   }, 2000)
}
const logger = (value, callback) => {
   console.log(`Added value is following:`, value);
   callback();
}
const nextCallback = () => {
   console.log('running callback');
}

addition(1, 2, logger)
// callback hell

// promises
let error = true;
const returnProducts = () => {
   return new Promise((resolve, reject) => {
      if (!error) {
         resolve(array)
      } else {
         reject('Failed to fetch data from backend')
      }
   })
}

// returnProducts().then((value) => {
//    console.log(value)
// })

console.log('I am here')


//HTTP METHODS
fetch('https://dummyjson.com/products').then((val) => {
   return val.json()
}).then((val) => {
   console.log(val.products)
   console.log(val.limit)
})
