import { Event } from '@aulasoftwarelibre/nestjs-eventstore';
import { RegisterReaderInput } from 'src/reader/dto';

export class ReaderWasRegistered extends Event<RegisterReaderInput> {
  constructor(
    public readonly id: string,
    public readonly name: string,
    public readonly email: string,
  ) {
    super(id, { id: id, name, email });
  }
}
