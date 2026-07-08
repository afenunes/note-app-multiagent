"""Application configuration management.

This module centralizes environment variable loading so every backend
component can import a single settings object.
"""

from dataclasses import dataclass
from os import getenv

from dotenv import load_dotenv

# Load values from .env in local development.
load_dotenv()


@dataclass(frozen=True)
class Settings:
    """Typed runtime settings loaded from environment variables."""

    app_name: str = getenv("APP_NAME", "Note App Backend")
    app_env: str = getenv("APP_ENV", "development")
    database_url: str = getenv(
        "DATABASE_URL", "******localhost:5432/note_app"
    )


settings = Settings()
