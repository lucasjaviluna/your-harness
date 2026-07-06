import { WorkItemId } from "@your-harness/domain";

import { UseCase } from "../../../shared/index.js";
import { WorkItemRepository } from "../../ports/index.js";

import { StartWorkItemInput } from "./start-work-item.input.js";
import { StartWorkItemOutput } from "./start-work-item.output.js";

export class StartWorkItemUseCase
  implements
    UseCase<
      StartWorkItemInput,
      StartWorkItemOutput
    >
{
  constructor(
    private readonly repository: WorkItemRepository
  ) {}

  async execute(
    input: StartWorkItemInput
  ): Promise<StartWorkItemOutput> {

    const workItem =
      await this.repository.findById(
        new WorkItemId(input.id)
      );

    if (!workItem) {
      throw new Error("Work Item not found.");
    }

    const updated =
      workItem.start();

    await this.repository.save(updated);

    return {
      id: updated.id.value
    };
  }
}
