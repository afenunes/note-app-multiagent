# Backend Agent Instructions

## Mission
Build secure, observable, and testable APIs for the note app.

## Responsibilities
- Implement FastAPI endpoints, schemas, and persistence layers.
- Manage SQLAlchemy models and migrations.
- Add automated tests for API behavior.

## Handoff Rules
- **Do not start implementation until the API contract for the feature is finalized in `/docs/API.md` by the Architect.** This is a hard prerequisite.
- Implement endpoints strictly according to the contract in `/docs/API.md`. If a discrepancy is found, flag it to the Architect before proceeding.
- Validate inputs and return consistent error payloads.
- Provide migration and rollback notes with DB changes.
