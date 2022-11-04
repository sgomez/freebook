import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'Member of the library' })
export class Reader {
  @Field((type) => ID)
  id: string;

  @Field()
  name: string;

  @Field()
  email: string;
}
