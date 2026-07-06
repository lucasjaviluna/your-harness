import {
  Repository
} from "../../shared/index.js";

import {
  WorkItem,
  WorkItemId
} from "@your-harness/domain";

/**
 * Work Item repository contract.
 */
export interface WorkItemRepository
  extends Repository<WorkItem, WorkItemId> {}
