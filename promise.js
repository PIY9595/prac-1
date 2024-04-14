// // let honey = new Promise(function (resolve, reject) {
// //   alert("hello");
// //   resolve(56);
// // });

// // console.log("hello world");
// // setTimeout(() => {
// //   console.log("hello world 2");
// // }, 1000);

// // console.log("my name is " + "piyush");

// // console.log(honey);

// // let p = new Promise((resolve, reject) => {
// //   console.log("promise is pending");
// //   // resolve(true); doubt//
// //   setTimeout(() => {
// //     // console.log("i am a promise i am a fullfiled");
// //     resolve(true);
// //   }, 5000);
// // });

// // let p2 = new Promise((resolve, reject) => {
// //   console.log("promise is pending");
// //   setTimeout(() => {
// //     // console.log("i am a promise i am a rejected");
// //     reject(new Error("i am an error"));
// //   }, 5000);
// // });

// // p.then((value) => {
// //   console.log(value);
// // });

// // p2.catch((Error) => {
// //   // console.log(Error);
// //   console.log("some error occured in p2");
// // });

// // p2.then(
// //   (value) => {
// //     console.log(value);
// //   },
// //   (error) => {
// //     console.log(error);
// //   }
// // );

// // console.log(p, p2);

// // let promise = new Promise((resolve, reject) => {
// //   setInterval(() => resolve("done"), 1000);
// // });

// // promise.then(alert);

// // let p1 = new Promise((resolve, reject) => {
// //   setTimeout(() => {
// //     console.log("resolve after 2 second");
// //     resolve(56);
// //   });
// // });

// // p1.then((value) => {
// //   console.log(value);
// //   let p2 = new Promise((resolve, reject) => {
// //     setTimeout(() => {
// //       resolve(58);
// //     }, 2000);
// //   });
// //   return p2;
// // }).then((value) => {
// //   console.log("we are done");
// // });

// // function simpleinterest(priciple, rate, time) {
// //   let p = priciple;
// //   let r = rate;
// //   let t = time;
// //   return (p * r * t) / 100;
// // }

// // simpleinterest(100, 10, 3);

// var x = 7;
// function getname() {
//   console.log("namaste javacript");
// }
// getname();
// console.log(x);
// console.log(getname);
