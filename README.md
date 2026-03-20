# Ote's Fastify Template

Reusable Ote's personal starter template for backend services using Fastify + Sequelize.

This template is intentionally minimal but structured for growth.

## Features

- Fastify server bootstrap with plugin registration
- Split route modules (`/api` and page routes)
- Optional PostgreSQL + Sequelize integration
- Config-driven logging (message/request/query)
- Cron manager utility (`node-cron`)
- WebSocket plugin scaffold
- Static file serving from `public/`
- Landing page example at `/`
- Health check example at `/api/health`

## Project Structure

```
app/
  plugins/
  routes/
  services/
  views/
database/
  models/
  seeds/
lib/
public/
server.js
config.example.json
config.json
```

## Quick Start

1. Install dependencies

```bash
npm install
```

2. Copy configuration

```bash
cp config.example.json config.json
```

On Windows PowerShell:

```powershell
Copy-Item config.example.json config.json
```

3. Start development server

```bash
npm run dev
```

4. Open in browser

- `http://localhost:3000/`
- `http://localhost:3000/api/health`

## Configuration

All runtime settings live in `config.json`.

### Database

By default, database is disabled:

```json
"database": {
  "enabled": false
}
```

To enable DB:

1. Set `database.enabled` to `true`
2. Fill database credentials in `database.connection`
3. Review `database.sync` behavior (`force` / `alter`) before production use

### Logging

Logging can be directed to:

- file
- console
- database (when DB is enabled and log models exist)

See `logging.message`, `logging.request`, and `logging.sequelize` in `config.json`.

## Notes For New Projects

- Rename `package.json` name/description for your new app.
- Add project-specific models in `database/models/`.
- Add API routes under `app/routes/api/`.
- Add business logic in `app/services/`.
- Update landing page in `app/views/landing.html`.

## Included Example Files

- `database/seeds/seed_dev_1.js` is a no-op template seed.
- `app/plugins/cron.js` includes commented cron examples.
- `app/plugins/websocket.js` provides connection map and `sendToUser` helper.

## License

ISC
