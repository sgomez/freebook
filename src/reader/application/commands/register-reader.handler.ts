import {
  AggregateRepository,
  IdAlreadyRegisteredError,
  InjectAggregateRepository,
} from '@aulasoftwarelibre/nestjs-eventstore';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { RegisterReaderCommand } from './register-reader.command';

// Arrange

// Almacen de readers

// Act

// enviar el command al handler
// instanciar un reader
// guardar en el almacen

// Assert

// Espiar si se llamo al save del almacen con el agregado
// Espiar si se emitio el evento ReaderWasRegistered

@CommandHandler(RegisterReaderCommand)
export class RegisterReaderHandler
  implements ICommandHandler<RegisterReaderCommand>
{
  //   constructor(
  //     @InjectAggregateRepository(Account)
  //     private readonly accounts: AggregateRepository<Account, AccountId>,
  //   ) {}

  async execute(command: RegisterReaderCommand) {
    // const accountId = AccountId.with(command.id);
    // const title = Title.with(command.title);
    // if ((await this.accounts.find(accountId)) instanceof Account) {
    //   throw IdAlreadyRegisteredError.withId(accountId);
    // }
    // const account = Account.add(accountId, title);
    // this.accounts.save(account);
  }
}
