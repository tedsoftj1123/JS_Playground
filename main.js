function a() {
    console.log("hello ");
    b();
}

function b() {
    const name = "tedsoftj";
    const value = `my name is ${name}`;
    const obj = {
        name : "name",
        password : "password"
    }
    console.log("world!");
    console.log(value);
    console.log(obj.name);
    const response = `the answer is ${addFun(10, 21)}`;
    console.log(response);
    const what = objFun("이하성", "비밀번호");
    console.log(what);
    wtf.how();
    wtf.notYet();
    const result = wtf.whatthe(10, 20);
    console.log(result);
}

const wtf = {
    how() {
        console.log("js suck");
    },
    notYet,
    whatthe(a, b) {
        return a+b;
    }
}

const addFun = (a, b) => (a+b);

const objFun = (name, password) => ({name, password})

const arrowFun = () => {
    console.log("this is arrow function");
}

function notYet() {
    console.log("no yet");
}

a();

