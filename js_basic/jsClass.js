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

const promise = new Promise()