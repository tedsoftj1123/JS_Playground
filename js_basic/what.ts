
const printWord = (msg: string): void => {
     console.log(msg);
};

const hello = new Promise((resolve, reject) => {
     setTimeout(() => {
          printWord("hello");
          resolve();
     }, 3000);
});

printWord("what");