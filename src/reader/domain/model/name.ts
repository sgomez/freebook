import { DomainError, ValueObject } from '@aulasoftwarelibre/nestjs-eventstore';

interface Props {
  value: string;
}

export class Name extends ValueObject<Props> {
  public static with(value: string): Name {
    if (value.length === 0) {
      throw DomainError.because('Name cannot be empty');
    }

    return new Name({ value });
  }

  get value(): string {
    return this.props.value;
  }
}
