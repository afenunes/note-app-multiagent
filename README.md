# note-app-multiagent

A multi-agent, full-stack note-taking application.

## Tech Stack
- **Frontend:** Next.js (React + TypeScript + Tailwind CSS)
- **Backend:** FastAPI (Python)
- **Database:** PostgreSQL
- **Dependency Management:** `uv` (Python), `npm` (Node.js)

## Multi-Agent Workflow
This repository is organized so specialized agents can work in parallel:

1. **PM Agent** defines product requirements, scope, and priorities.
2. **Architect Agent** owns architecture decisions and creates implementation tasks.
3. **Designer Agent** defines UX/UI direction and handoff artifacts.
4. **Backend Agent** implements APIs, models, and data access.
5. **Frontend Agent** implements UI and API integration.
6. **QA Agent** validates acceptance criteria and regressions.
7. **DevOps Agent** maintains CI/CD and delivery automation.

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

## Vercel Preview Deployments (Pull Requests)
This repository includes a GitHub Actions workflow that deploys the `frontend/` app to Vercel on every PR update and posts the preview URL in the PR comments.

### Required GitHub Repository Secrets
Add the following in **Settings → Secrets and variables → Actions**:
- `VERCEL_TOKEN`
- `VERCEL_ORG_ID`
- `VERCEL_PROJECT_ID`

### One-Time Vercel Setup
1. Create/import this project in Vercel.
2. Set the project root to `frontend` (or keep your current root if already configured accordingly).
3. Copy your Vercel org and project IDs into the repository secrets above.

### Notes
- Preview deployment runs for PRs from branches in this repository.
- PRs from forks will not get preview deployments because secrets are not exposed to forked workflows.
