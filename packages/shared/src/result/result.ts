/**
 * Represents the result of a domain operation.
 *
 * A Result is either successful or failed.
 */
export class Result<T> {
  readonly #success: boolean;
  readonly #value?: T;
  readonly #error?: Error;

  private constructor(
    success: boolean,
    value?: T,
    error?: Error
  ) {
    this.#success = success;
    this.#value = value;
    this.#error = error;
  }

  static success<T>(value: T): Result<T> {
    return new Result<T>(true, value);
  }

  static failure<T>(error: Error): Result<T> {
    return new Result<T>(false, undefined, error);
  }

  get isSuccess(): boolean {
    return this.#success;
  }

  get isFailure(): boolean {
    return !this.#success;
  }

  get value(): T {
    if (!this.#success) {
      throw new Error(
        "Cannot access the value of a failed Result."
      );
    }

    return this.#value as T;
  }

  get error(): Error {
    if (this.#success) {
      throw new Error(
        "Cannot access the error of a successful Result."
      );
    }

    return this.#error as Error;
  }
}
