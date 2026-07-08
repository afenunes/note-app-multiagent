# Multi-Agent Workflow Guide

## Purpose
This guide defines how work moves from idea to validated delivery in this repository.

## Bulletproof Workflow (Source of Truth)
This workflow is intentionally strict to reduce ambiguity, rework, and missed dependencies.

### Stage 0 — Intake (PM)
1. PM creates or updates an `epic` issue.
2. PM creates a `planning` breakdown issue with:
   - scope and non-scope
   - measurable success criteria
   - risks and constraints
3. PM opens an `architect` issue linked to the breakdown issue.

### Stage 1 — Architecture (Architect Agent)
1. Architect defines boundaries, data flow, API contract impact, and rollout strategy.
2. Architect documents trade-offs and decisions.
3. Architect creates and links implementation tasks (`backend`, `frontend`, `devops`, `qa`) with dependency order.

### Stage 2 — Design (Designer Agent)
1. Designer provides UX deliverables for affected user flows.
2. Designer includes accessibility and state behavior (loading/empty/error).
3. Designer links deliverables to frontend tasks.

### Stage 3 — Implementation (Backend/Frontend/DevOps)
1. Dev agents only pick tasks that are architecture-ready.
2. Each implementation issue must reference parent architecture/planning issues.
3. API or architecture changes require docs updates before merge.

### Stage 4 — Validation (QA)
1. QA validates acceptance criteria and regressions.
2. QA blocks closure if high-severity defects remain.

### Stage 5 — Release Readiness (DevOps)
1. CI quality gates must pass.
2. Deployment notes and rollback approach must be explicit for risky changes.

## Hard Gates (Must Pass)
- No implementation starts without linked `planning` + `architect` issues.
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
- API and architecture docs must be updated for behavior or contract changes.
- Task sequencing is owned by the Architect Agent, priority is owned by the PM Agent.
