import { SignUpRequest } from '../presentation/dto/signup.request';

export class SignUpUseCase {
  execute(request: SignUpRequest): string {
    return `welcome! ${request.accountId}`;
  }
}
