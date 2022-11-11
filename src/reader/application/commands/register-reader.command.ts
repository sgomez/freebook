import { ICommand } from '@nestjs/cqrs';

export class RegisterReaderCommand implements ICommand {
  constructor(
    public readonly id: string,
    public readonly name: string,
    public readonly email: string,
  ) {}
}
