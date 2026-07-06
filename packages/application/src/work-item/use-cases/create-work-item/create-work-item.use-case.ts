import { UseCase } from "../../../shared/index.js";

import {
    WorkItem,
    WorkItemId,
    WorkItemTitle
} from "@your-harness/domain";

import { WorkItemRepository } from "../../ports/index.js";

import {
    CreateWorkItemInput
} from "./create-work-item.input.js";

import {
    CreateWorkItemOutput
} from "./create-work-item.output.js";

export class CreateWorkItemUseCase
implements UseCase<
    CreateWorkItemInput,
    CreateWorkItemOutput
> {

    constructor(
        private readonly repository: WorkItemRepository
    ) {}

    async execute(
        input: CreateWorkItemInput
    ): Promise<CreateWorkItemOutput> {

        const workItem = new WorkItem(
            new WorkItemId(input.id),
            new WorkItemTitle(input.title)
        );

        await this.repository.save(workItem);

        return {
            id: workItem.id.value
        };
    }

}
