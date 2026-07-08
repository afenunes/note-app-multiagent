# note-app-multiagent

A multi-agent, full-stack note-taking application.

## Tech Stack
- **Frontend:** Next.js (React + TypeScript + Tailwind CSS)
- **Backend:** FastAPI (Python)
- **Database:** PostgreSQL
- **Dependency Management:** `uv` (Python), `npm` (Node.js)

## Multi-Agent Workflow
This repository is organized so specialized agents can work in parallel:

1. **PM Agent** defines requirements and breaks work into tasks.
2. **Designer Agent** defines UX/UI direction and handoff artifacts.
3. **Backend Agent** implements APIs, models, and data access.
4. **Frontend Agent** implements UI and API integration.
5. **QA Agent** validates acceptance criteria and regressions.
6. **DevOps Agent** maintains CI/CD and delivery automation.

See `/docs/WORKFLOW.md` and `/.github/agent-instructions/*` for role-specific guidance.

## Repository Layout
```text
backend/    # FastAPI service
frontend/   # Next.js app
.github/    # Agent instructions, issue templates, workflows
docs/       # Workflow, architecture, and API documentation
```

## Quick Start
### Backend
```bash
cd backend
uv sync
uv run uvicorn app.main:app --reload
```

### Frontend
```bash
cd frontend
npm install
npm run dev
```

## Environment Setup
- Copy `backend/.env.example` to `backend/.env`
- Copy `frontend/.env.example` to `frontend/.env.local`
