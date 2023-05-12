export class UserService{
     getUsers() {
          console.log("getUsers");
     }

     getUsersById(id) {
          console.log(id);
          throw new Error("의도한 에러");
     }
}