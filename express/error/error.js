export class CustomError extends Error{
     constructor(msg) {
          super(msg);
     }
}

export class NotFoundException extends CustomError {
     constructor(msg) {
          super(msg);
          this.statusCode = 404;
     }
}

export class BadRequestException extends CustomError {
     constructor(msg) {
          super(msg);
          this.statusCode = 400;
     }
}

export class ConflictException extends CustomError {
     constructor(msg) {
          super(msg);
          this.statusCode = 409;
     }
}