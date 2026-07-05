/**
 * Represents an engineering project managed by Your Harness.
 *
 * A Project is the root aggregate of the engineering domain.
 * Every engineering artifact belongs to exactly one Project.
 */
export class Project {
  readonly #id: string;
  readonly #name: string;

  constructor(id: string, name: string) {
    this.#validateId(id);
    this.#validateName(name);

    this.#id = id;
    this.#name = name;
  }

  get id(): string {
    return this.#id;
  }

  get name(): string {
    return this.#name;
  }

  rename(name: string): Project {
    this.#validateName(name);

    return new Project(this.#id, name);
  }

  #validateId(id: string): void {
    if (id.trim().length === 0) {
      throw new Error("Project id cannot be empty.");
    }
  }

  #validateName(name: string): void {
    if (name.trim().length === 0) {
      throw new Error("Project name cannot be empty.");
    }

    if (name.length > 100) {
      throw new Error("Project name cannot exceed 100 characters.");
    }
  }
}
