console.log("first");
setTimeout(() => {
     console.log("second in async");
}, 1000)
console.log("third");

const promise = (n) => new Promise((resolve, reject) => {
     setTimeout(() => {
          if(n%2 === 0) {
               const error = new Error();
               error.name = "asdf";
               reject(error)
          }
          resolve();
     }, 1000)
});

promise(4)
     .then(() => console.log("success"))
     .catch(console.error);