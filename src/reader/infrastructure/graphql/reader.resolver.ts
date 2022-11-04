import { Mutation, Query, Resolver } from '@nestjs/graphql';
import { Reader } from './models/reader.model';

@Resolver((of) => Reader)
export class ReaderResolver {
  @Query((returns) => [Reader])
  async readers(): Promise<Reader[]> {
    return [];
  }

  @Mutation((returns) => Reader)
  async registerReader(): Promise<Reader> {
    return new Reader();
  }
}
