
// const uid = "tedsoftj1123";
// const pw = "asdf";

// const promiseChain = new Promise((resolve, reject) =>  {
//     setTimeout(resolve, 1000);
// });

// const login = new Promise((resolve, reject) => {
//     if(uid === "tedsoftj1123") {
//         if(pw === "asdf") {
//             resolve({
//                 authority : "ADMIN",
//                 status : "SUCCCESS"
//             });
//         }
//         reject(new Error("password missmatch"));
//     }
//     reject("no such user");
// });

// login
//     .then(user => {
//         promiseChain()
//         .then(console.log(`status is ${user.status} you have ${user.authority} authoirty`))
//         .catch(console.log)
//     })
//     .catch(console.log)


const test = new Promise((resolve, reject) => {
    resolve("success");
});

test.then(console.log);
console.log("next");