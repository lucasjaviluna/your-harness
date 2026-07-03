# Repository State

**Project:** Your Harness  
**Repository Version:** v0.1.0 Foundation  
**Status:** Active

---

# Purpose

This document provides a consolidated view of the repository.

It describes the current structure, maturity level and engineering status of the project, serving as the primary operational reference for repository maintenance.

Unlike PROJECT_STATE, which focuses on engineering progress, this document focuses on the repository itself.

---

# Repository Status

| Property       | Value              |
| -------------- | ------------------ |
| Repository     | Your Harness       |
| Version        | v0.1.0 Foundation  |
| State          | Bootstrap Complete |
| Documentation  | Complete           |
| Templates      | Complete           |
| Implementation | Not Started        |

---

# Repository Structure

```text
/
├── README.md
├── FOUNDATION.md
├── CONTRIBUTING.md
├── LICENSE
├── .gitignore
│
├── docs/
│   ├── 00-foundation/
│   │   ├── Vision.md
│   │   ├── Engineering-Charter.md
│   │   └── Governance.md
│   │
│   ├── 01-domain/
│   │   └── YDL.md
│   │
│   ├── standards/
│   │   ├── YDS.md
│   │   └── YGov.md
│   │
│   ├── adr/
│   │   ├── ADR-000.md
│   │   └── ADR-001.md
│   │
│   └── rfc/
│       └── RFC-001.md
│
├── templates/
│   ├── ADR.md
│   ├── RFC.md
│   ├── Specification.md
│   └── WorkItem.md
│
├── PROJECT_STATE.md
├── INDEX.md
├── CHANGELOG.md
├── DECISION_LOG.md
├── SESSION_CHECKPOINT.md
└── REPOSITORY_STATE.md
```

---

# Repository Maturity

| Area               | Status |
| ------------------ | :----: |
| Foundation         |   ✅   |
| Documentation      |   ✅   |
| Standards          |   ✅   |
| Governance         |   ✅   |
| Domain Language    |   ✅   |
| ADRs               |   ✅   |
| RFCs               |   ✅   |
| Templates          |   ✅   |
| Project Management |   ✅   |
| Source Code        |   ⏳   |

---

# Engineering Baseline

The repository currently provides:

- Project vision.
- Engineering principles.
- Governance model.
- Documentation standards.
- Domain language.
- Architecture decisions.
- Engineering workflow.
- Reusable templates.
- Project management artifacts.

This baseline constitutes the official starting point for implementation.

---

# Repository Rules

The following rules apply to all future work:

- Every significant engineering effort begins with a Work Item.
- Specifications precede implementation.
- Architecture changes require an ADR.
- Engineering proposals require an RFC when applicable.
- Documentation evolves together with implementation.
- All artifacts remain version-controlled.

---

# Current Milestone

**EP-001 — Bootstrap Repository**

Status: **Completed**

The repository is ready for implementation activities.

---

# Next Milestone

The next milestone is to begin development of the Your Harness engineering platform using the engineering process established during the Foundation release.

Future work shall build upon the artifacts already present in the repository.

---

# Maintenance

This document should be updated whenever:

- Repository structure changes.
- New top-level directories are introduced.
- Engineering maturity significantly evolves.
- A new release is published.

---

# Closing Statement

The repository is the single source of truth for the Your Harness project.

Its structure, documentation and engineering artifacts provide the foundation upon which all future implementation will be built.
