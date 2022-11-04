import { Id } from '@aulasoftwarelibre/nestjs-eventstore';

export class ReaderId extends Id {
  public static with(id: string): ReaderId {
    return new ReaderId(id);
  }
}
