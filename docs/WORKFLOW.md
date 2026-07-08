# Multi-Agent Workflow Guide

## Purpose
This guide defines how work moves from idea to validated delivery in this repository.

## Workflow Overview

```
User → creates Epic → PM Agent → creates Planning + Architect issues
                                         ↓
                              Architect Agent → creates Backend / Frontend / QA / DevOps tasks
                                                         ↓
                                              Dev / QA / DevOps Agents → implement and validate
```

## Detailed Stages

### Stage 0 — Epic (User)
1. User creates an `epic` issue using the **Epic** template.
2. The epic should describe the desired product outcome in plain language — no technical detail required.
3. No other action is needed from the user. The PM Agent picks up from here.

### Stage 1 — PM Intake (PM Agent)
Triggered by: a new open `epic` issue with no linked `planning` issue.

1. PM reads the epic and produces a `planning` breakdown issue that includes:
   - scope and non-scope
   - measurable success criteria
   - risks and constraints
2. PM opens an `architect` handoff issue linked to the planning issue.
   - This is a stub: it signals the Architect to begin, not pre-filled architecture decisions.
3. PM links both new issues back to the parent epic.

### Stage 2 — Architecture (Architect Agent)
Triggered by: an open `architect` issue linked to an approved `planning` issue.

1. Architect reads the epic and planning issues.
2. Architect defines boundaries, data flow, API contract impact, and rollout strategy.
3. Architect documents trade-offs and decisions in the architect issue.
4. **API-First Gate:** Architect assesses whether the feature requires new or changed API contracts.
   - If yes: Architect updates `/docs/API.md` with the finalized contract **before** creating implementation tasks.
   - If no: Architect notes explicitly that no API changes are needed.
5. Architect creates and links implementation tasks (`backend`, `frontend`, `devops`, `qa`) with dependency order.
   - Backend and frontend tasks may be worked **in parallel** once the API contract in `/docs/API.md` is published.

### Stage 3 — Design (Designer Agent)
Triggered by: linked `frontend` tasks that require UX definition.

1. Designer provides UX deliverables for affected user flows.
2. Designer includes accessibility and state behavior (loading/empty/error).
3. Designer links deliverables to frontend tasks.

### Stage 4 — Implementation (Backend/Frontend/DevOps Agents)
Triggered by: open `backend`, `frontend`, or `devops` tasks that are architecture-ready.

1. Dev agents only pick tasks that are architecture-ready (architect issue approved, API contract published if required).
2. Each implementation issue must reference parent architecture and planning issues.
3. API or architecture changes require docs updates before merge.

### Stage 5 — Validation (QA Agent)
Triggered by: implementation tasks marked ready for review.

1. QA validates acceptance criteria and regressions.
2. QA blocks closure if high-severity defects remain.

### Stage 6 — Release Readiness (DevOps Agent)
1. CI quality gates must pass.
2. Deployment notes and rollback approach must be explicit for risky changes.

## Hard Gates (Must Pass)
- No implementation starts without linked `planning` + `architect` issues.
- No backend or frontend implementation starts until the API contract in `/docs/API.md` is updated (if changes are required).
- No frontend/backend merge without clear acceptance criteria.
- No issue closure without evidence of validation.
- No architecture change during implementation without updating parent architect issue.

## Labeling Standard
- `epic`
- `planning`
- `architect`
- `design`
- `backend`
- `frontend`
- `qa`
- `devops`

## Collaboration Rules
- Every implementation task must link to both planning and architect parent issues.
- Acceptance criteria and definition of done must be explicit before implementation starts.
- API and architecture docs must be updated for behavior or contract changes **before** implementation tasks are started.
- Backend and frontend agents may work in parallel once the API contract in `/docs/API.md` is finalized by the Architect.
- Task sequencing is owned by the Architect Agent, priority is owned by the PM Agent.
