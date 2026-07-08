# System Architecture

## Overview
The system is a standard three-tier web architecture:

- **Next.js frontend** renders UI and calls backend APIs.
- **FastAPI backend** exposes REST endpoints for note operations.
- **PostgreSQL** persists notes and related metadata.

## High-Level Components
- `frontend/app`: Route-level UI.
- `frontend/components`: Reusable UI components.
- `backend/app/main.py`: API bootstrapping and route registration root.
- `backend/app/models`: SQLAlchemy model package.

## Data Flow
1. User interacts with frontend page/component.
2. Frontend calls backend endpoint.
3. Backend validates input and uses ORM for persistence.
4. Backend returns JSON response.
5. Frontend renders updated state.
