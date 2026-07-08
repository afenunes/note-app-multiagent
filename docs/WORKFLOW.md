# Multi-Agent Workflow Guide

## Purpose
This guide defines how work moves from idea to validated delivery in this repository.

## End-to-End Flow
1. PM Agent opens/updates an epic issue.
2. PM Agent creates a breakdown issue that links design/backend/frontend/QA tasks.
3. Designer Agent publishes implementation-ready UX deliverables.
4. Backend and Frontend Agents implement in parallel where dependencies allow.
5. QA Agent validates acceptance criteria and regressions.
6. DevOps Agent ensures CI quality gates and release readiness.

## Labeling Standard
- `epic`
- `planning`
- `design`
- `backend`
- `frontend`
- `qa`
- `devops`

## Collaboration Rules
- Every implementation task must link to parent planning issues.
- Acceptance criteria must be explicit before implementation starts.
- API and architecture docs must be updated for behavior or contract changes.
