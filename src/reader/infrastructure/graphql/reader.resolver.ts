import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { RegisterReaderInput } from 'src/reader/dto';
import { ReaderService } from '../reader.services';
import { Reader } from './models/reader.model';

@Resolver((of) => Reader)
export class ReaderResolver {
  constructor(private readonly readerService: ReaderService) {}

  @Query((returns) => [Reader])
  async readers(): Promise<Reader[]> {
    return [];
  }

  @Mutation((returns) => Reader)
  async registerReader(
    @Args('registerReaderData') registerReaderData: RegisterReaderInput,
  ): Promise<Reader> {
    return await this.readerService.registerReader(registerReaderData);
  }
}
