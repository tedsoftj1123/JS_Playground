

function getUserById(userId, callback) {
     const user = UserService.getUserById(userId);

     if(user === undefined) {
          callback(new Error('User not found');
     } else {
          callback(null);
     }
}

getUserById(10, (err) => {
     if(err) {
          //에러처리
     } else {
          //등등
     }
})