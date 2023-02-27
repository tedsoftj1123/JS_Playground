import { IsNotEmpty, IsNumber, IsString, MaxLength } from 'class-validator';

export class SignUpRequest {
  @IsString()
  @IsNotEmpty()
  @MaxLength(20)
  readonly accountId: string;

  @IsString()
  @IsNotEmpty()
  readonly password: string;

  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @IsNumber()
  readonly age: number;
}
