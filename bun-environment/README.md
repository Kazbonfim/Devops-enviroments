# Bun Environment

This directory contains a Dockerized environment for a Bun backend and a Vite frontend.

## Services

*   **backend**: A Bun application running on port 3000.
*   **frontend**: A Vite application served by Nginx on port 8080.

## Database

The backend uses a SQLite database. The database file is located at `data/sqlite.db`.

## Usage

*   `make up`: Start the environment in detached mode.
*   `make down`: Stop the environment.
*   `make logs`: View the logs of all services.
*   `make sh-backend`: Access the shell of the backend container.
*   `make sh-frontend`: Access the shell of the frontend container.
