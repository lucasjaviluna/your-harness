import { AggregateRoot } from "@your-harness/shared";

import { IntentId } from "./intent-id.js";
import { IntentStatus } from "./intent-status.js";
import { IntentTitle } from "./intent-title.js";

/**
 * Represents an engineering intent.
 *
 * An Intent expresses the desired engineering outcome.
 * It is the starting point of every engineering initiative.
 */
export class Intent extends AggregateRoot<IntentId> {
  readonly #title: IntentTitle;
  readonly #status: IntentStatus;

  constructor(
    id: IntentId,
    title: IntentTitle,
    status: IntentStatus = IntentStatus.Draft
  ) {
    super(id);

    this.#title = title;
    this.#status = status;
  }

  get title(): IntentTitle {
    return this.#title;
  }

  get status(): IntentStatus {
    return this.#status;
  }

  rename(title: IntentTitle): Intent {
    return new Intent(this.id, title, this.status);
  }

  approve(): Intent {
    if (this.status !== IntentStatus.Draft) {
      throw new Error(
        "Only draft intents can be approved."
      );
    }

    return new Intent(
      this.id,
      this.title,
      IntentStatus.Approved
    );
  }

  start(): Intent {
    if (this.status !== IntentStatus.Approved) {
      throw new Error(
        "Only approved intents can be started."
      );
    }

    return new Intent(
      this.id,
      this.title,
      IntentStatus.InProgress
    );
  }

  complete(): Intent {
    if (this.status !== IntentStatus.InProgress) {
      throw new Error(
        "Only in-progress intents can be completed."
      );
    }

    return new Intent(
      this.id,
      this.title,
      IntentStatus.Completed
    );
  }

  cancel(): Intent {
    if (this.status === IntentStatus.Completed) {
      throw new Error(
        "Completed intents cannot be cancelled."
      );
    }

    return new Intent(
      this.id,
      this.title,
      IntentStatus.Cancelled
    );
  }
}
