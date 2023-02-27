import { IsNotEmpty, IsString} from 'class-validator';

export class TestRequest {
  @IsString()
  @IsNotEmpty()
  readonly accountId: string;

  @IsString()
  @IsNotEmpty()
  readonly password: string;
}
