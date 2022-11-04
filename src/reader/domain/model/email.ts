import { DomainError, ValueObject } from '@aulasoftwarelibre/nestjs-eventstore';

interface Props {
  value: string;
}

export class Email extends ValueObject<Props> {
  public static with(value: string): Email {
    if (value.length === 0) {
      throw DomainError.because('Email cannot be empty');
    }

    return new Email({ value });
  }

  get value(): string {
    return this.props.value;
  }
}
