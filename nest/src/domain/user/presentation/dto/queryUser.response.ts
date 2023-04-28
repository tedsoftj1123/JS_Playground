export class QueryUserResponse {
  id: number;

  accountId: string;

  name: string;

  age: number;


  constructor(id: number, accountId: string, name: string, age: number) {
    this.id = id;
    this.accountId = accountId;
    this.name = name;
    this.age = age;
  }
}
