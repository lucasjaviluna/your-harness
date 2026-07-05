/**
 * Represents the root of an aggregate.
 *
 * Aggregate roots are responsible for protecting the consistency
 * of their aggregate boundaries.
 */
export abstract class AggregateRoot<TId> {
  protected constructor(private readonly _id: TId) {}

  get id(): TId {
    return this._id;
  }

  equals(other: AggregateRoot<TId>): boolean {
    return this._id === other.id;
  }
}
