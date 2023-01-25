const uid = "tedsoftj1123";
const pw = "asdf";


const login = new Promise((resolve, reject) => {
    if(uid === "tedsoftj1123") {
        if(pw === "asdf") {
            resolve({
                authority : "ADMIN",
                status : "SUCCCESS"
            });
        }
        reject(new Error("password missmatch"));
    }
    reject("no such user");
});

login
.then(user => {
    console.log(`status is ${user.status} you have ${user.authority} authoirty`);
})
.catch(console.log)


