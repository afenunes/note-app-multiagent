"""FastAPI application entrypoint.

This file exposes the main API app instance used by local development,
tests, and deployment runtimes.
"""

from fastapi import FastAPI

from app.config import settings

app = FastAPI(
    title=settings.app_name,
    version="0.1.0",
    description="Backend API for the multi-agent note-taking app.",
)


@app.get("/health", tags=["System"])
def health_check() -> dict[str, str]:
    """Simple service health endpoint for checks and CI smoke tests."""
    return {"status": "ok"}
