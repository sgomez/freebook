import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { commandHandlers } from '../application';
import { ReaderResolver } from './graphql';
import { ReaderService } from './reader.services';

@Module({
  imports: [CqrsModule],
  providers: [ReaderResolver, ReaderService, ...commandHandlers],
})
export class ReaderModule {}
