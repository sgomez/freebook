import { Field, InputType } from '@nestjs/graphql';
import { MaxLength, IsUUID, IsEmail } from 'class-validator';

@InputType()
export class RegisterReaderInput {
  @Field()
  @IsUUID()
  id: string;

  @Field()
  @MaxLength(64)
  name: string;

  @Field()
  @IsEmail()
  @MaxLength(64)
  email: string;
}
