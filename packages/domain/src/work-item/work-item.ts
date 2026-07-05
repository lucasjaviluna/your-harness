import { AggregateRoot } from "@your-harness/shared";

import { IntentId } from "../intent/index.js";

import { WorkItemId } from "./work-item-id.js";
import { WorkItemStatus } from "./work-item-status.js";
import { WorkItemTitle } from "./work-item-title.js";

/**
 * Represents an executable engineering work item.
 *
 * Every Work Item belongs to exactly one Intent.
 */
export class WorkItem extends AggregateRoot<WorkItemId> {
  readonly #intentId: IntentId;
  readonly #title: WorkItemTitle;
  readonly #status: WorkItemStatus;

  constructor(
    id: WorkItemId,
    intentId: IntentId,
    title: WorkItemTitle,
    status: WorkItemStatus = WorkItemStatus.Todo
  ) {
    super(id);

    this.#intentId = intentId;
    this.#title = title;
    this.#status = status;
  }

  get intentId(): IntentId {
    return this.#intentId;
  }

  get title(): WorkItemTitle {
    return this.#title;
  }

  get status(): WorkItemStatus {
    return this.#status;
  }

  rename(title: WorkItemTitle): WorkItem {
    return new WorkItem(
      this.id,
      this.intentId,
      title,
      this.status
    );
  }

  start(): WorkItem {
    if (this.status !== WorkItemStatus.Todo) {
      throw new Error("Only todo work items can be started.");
    }

    return new WorkItem(
      this.id,
      this.intentId,
      this.title,
      WorkItemStatus.InProgress
    );
  }

  block(): WorkItem {
    if (this.status !== WorkItemStatus.InProgress) {
      throw new Error("Only in-progress work items can be blocked.");
    }

    return new WorkItem(
      this.id,
      this.intentId,
      this.title,
      WorkItemStatus.Blocked
    );
  }

  resume(): WorkItem {
    if (this.status !== WorkItemStatus.Blocked) {
      throw new Error("Only blocked work items can be resumed.");
    }

    return new WorkItem(
      this.id,
      this.intentId,
      this.title,
      WorkItemStatus.InProgress
    );
  }

  complete(): WorkItem {
    if (this.status !== WorkItemStatus.InProgress) {
      throw new Error("Only in-progress work items can be completed.");
    }

    return new WorkItem(
      this.id,
      this.intentId,
      this.title,
      WorkItemStatus.Done
    );
  }

  cancel(): WorkItem {
    if (this.status === WorkItemStatus.Done) {
      throw new Error("Completed work items cannot be cancelled.");
    }

    return new WorkItem(
      this.id,
      this.intentId,
      this.title,
      WorkItemStatus.Cancelled
    );
  }
}
