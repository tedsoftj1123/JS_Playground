class User {
    constructor(accountId, name, age, country, password) {
        this.accountId = accountId;
        this.name = name;
        this.age = age;
        this.country = country;
        this.password = password + '!@@!#$#^'
    }

    static checkUser(user) {
        return user instanceof User;
    }

    getAccountId() {
        return this.accountId;
    }

    setAccountId(value) {
        this.accountId = value;
        console.log('user info changed');
    }
}

const user = new User('tedsoftj1123', '이하성', 10, 'Korea', 'dlgktjd');
console.log(User.checkUser(user));
console.log(user.getAccountId());
user.setAccountId('ted');
console.log(user.getAccountId());

//class는 prototype 기반이기에 메소드를 클래스 내에 직접 선언 않고 user프로토 타입에 추가해서 사용할 수 있다.
User.prototype.hello = function () {
    console.log('hello');
}
const protoUser = new User('tedsoftj1123', '이하성', 1, "d", "asdf");
protoUser.hello();

console.log(typeof User); // class는 함수와 프로토타입을 이용한 Syntatic Sugar(편의문버)이다.
console.log(User === User.prototype.constructor); // true