import { Injectable } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { RegisterReaderCommand } from '../application';
import { RegisterReaderInput } from '../dto';
import { Reader } from './graphql';

@Injectable()
export class ReaderService {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {}

  async registerReader(input: RegisterReaderInput): Promise<Reader> {
    await this.commandBus.execute(
      new RegisterReaderCommand(input.id, input.name, input.email),
    );

    return { id: input.id, name: input.name, email: input.email };
  }
}
