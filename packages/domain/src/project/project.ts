import { AggregateRoot } from "@your-harness/shared";
import { ProjectId } from "./project-id.js";

/**
 * Represents an engineering project managed by Your Harness.
 *
 * A Project is the root aggregate of the engineering domain.
 * Every engineering artifact belongs to exactly one Project.
 */
export class Project extends AggregateRoot<ProjectId> {
  readonly #name: string;

  constructor(id: string, name: string) {
    Project.validateId(id);
    Project.validateName(name);

    super(id);

    this.#name = name;
  }

  get name(): string {
    return this.#name;
  }

  rename(name: string): Project {
    Project.validateName(name);

    return new Project(this.id, name);
  }

  private static validateId(id: string): void {
    if (id.trim().length === 0) {
      throw new Error("Project id cannot be empty.");
    }
  }

  private static validateName(name: string): void {
    if (name.trim().length === 0) {
      throw new Error("Project name cannot be empty.");
    }

    if (name.length > 100) {
      throw new Error("Project name cannot exceed 100 characters.");
    }
  }
}
