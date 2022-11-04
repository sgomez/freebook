import { AggregateRoot } from '@aulasoftwarelibre/nestjs-eventstore';
import { ReaderWasRegistered } from '../event';
import { ReaderId } from './reader-id';
import { Name } from './name';
import { Email } from './email';

export class User extends AggregateRoot {
  private _readerId: ReaderId;
  private _name: Name;
  private _email: Email;

  public static add(ReaderId: ReaderId, name: Name, email: Email): User {
    const user = new User();

    user.apply(
      new ReaderWasRegistered(ReaderId.value, name.value, email.value),
    );

    return user;
  }

  public aggregateId(): string {
    return this.id.value;
  }

  get id(): ReaderId {
    return this._readerId;
  }

  get username(): Name {
    return this._name;
  }

  private onUserWasCreated(event: ReaderWasRegistered) {
    this._readerId = ReaderId.with(event.id);
    this._name = Name.with(event.name);
    this._email = Email.with(event.email);
  }
}
