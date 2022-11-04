import { Module } from '@nestjs/common';
import { ReaderResolver } from './graphql';

@Module({
  providers: [ReaderResolver],
})
export class ReaderModule {}
